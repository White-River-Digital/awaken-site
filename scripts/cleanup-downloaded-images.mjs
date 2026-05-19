#!/usr/bin/env node
/**
 * Deduplicate public/images/downloaded/ (legacy crawl).
 * Groups by Wix media ID, keeps the largest file per group.
 * Updates public/images/image-map.json to match kept files.
 *
 * Usage: node scripts/cleanup-downloaded-images.mjs [--dry-run]
 */
import { readFile, writeFile, unlink, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DOWNLOADED_DIR = join(ROOT, "public", "images", "downloaded");
const IMAGE_MAP_PATH = join(ROOT, "public", "images", "image-map.json");

const dryRun = process.argv.includes("--dry-run");

function mediaIdFromWixUrl(url) {
  const m = url.match(/\/media\/([^/]+)\//);
  return m?.[1]?.toLowerCase() ?? null;
}

function mediaIdFromFilename(name) {
  // e.g. 6_086de0_6947bfb18ad24c419d4629914cb8c3c3_000_0167.jpg.jpg
  const m = name.match(/^\d+_([a-f0-9]{6,8}_[a-f0-9]{32})/i);
  if (m) return m[1].toLowerCase();
  const m2 = name.match(/^\d+_([a-f0-9]{32})/i);
  if (m2) return m2[1].toLowerCase();
  return null;
}

function fillAreaFromUrl(url) {
  const m = url.match(/\/fill\/w_(\d+),h_(\d+)/i);
  if (m) return Number(m[1]) * Number(m[2]);
  return 0;
}

async function main() {
  let imageMap = {};
  try {
    imageMap = JSON.parse(await readFile(IMAGE_MAP_PATH, "utf8"));
  } catch {
    console.error("No image-map.json found; will dedupe files only.");
  }

  /** @type {Map<string, { url: string, path: string, area: number, bytes: number }[]>} */
  const byMedia = new Map();

  for (const [url, relPath] of Object.entries(imageMap)) {
    const id = mediaIdFromWixUrl(url);
    if (!id) continue;
    const abs = join(ROOT, "public", relPath.replace(/^\//, ""));
    let bytes = 0;
    try {
      const s = await stat(abs);
      bytes = s.size;
    } catch {
      continue;
    }
    const entry = {
      url,
      path: relPath,
      area: fillAreaFromUrl(url),
      bytes,
    };
    const list = byMedia.get(id) ?? [];
    list.push(entry);
    byMedia.set(id, list);
  }

  const keepPaths = new Set();
  const newImageMap = {};
  let removedMapEntries = 0;

  for (const [, entries] of byMedia) {
    entries.sort((a, b) => b.bytes - a.bytes || b.area - a.area);
    const best = entries[0];
    keepPaths.add(best.path);
    newImageMap[best.url] = best.path;
    removedMapEntries += entries.length - 1;
  }

  // Files on disk not in image-map: group by filename media id
  const { readdir } = await import("fs/promises");
  const files = await readdir(DOWNLOADED_DIR);
  /** @type {Map<string, { name: string, bytes: number }[]>} */
  const filesByMedia = new Map();

  for (const name of files) {
    if (name.startsWith(".")) continue;
    const id = mediaIdFromFilename(name);
    if (!id) continue;
    const abs = join(DOWNLOADED_DIR, name);
    const s = await stat(abs);
    const list = filesByMedia.get(id) ?? [];
    list.push({ name, bytes: s.size });
    filesByMedia.set(id, list);
  }

  const deleteFiles = [];
  for (const [, list] of filesByMedia) {
    list.sort((a, b) => b.bytes - a.bytes);
    const keeper = list[0].name;
    const keeperPath = `/images/downloaded/${keeper}`;
    keepPaths.add(keeperPath);
    for (let i = 1; i < list.length; i++) {
      deleteFiles.push(join(DOWNLOADED_DIR, list[i].name));
    }
  }

  // Orphan files: not keeper for their group
  for (const name of files) {
    const rel = `/images/downloaded/${name}`;
    if (!keepPaths.has(rel)) {
      const abs = join(DOWNLOADED_DIR, name);
      if (!deleteFiles.includes(abs)) deleteFiles.push(abs);
    }
  }

  const uniqueDeletes = [...new Set(deleteFiles)];

  console.log(
    dryRun ? "[dry-run] " : "",
    `Unique Wix images: ${byMedia.size}`,
    `Map entries: ${Object.keys(imageMap).length} → ${Object.keys(newImageMap).length}`,
    `Files to delete: ${uniqueDeletes.length}`,
    `Kept files: ${keepPaths.size}`,
  );

  if (!dryRun) {
    for (const abs of uniqueDeletes) {
      await unlink(abs);
    }
    await writeFile(IMAGE_MAP_PATH, JSON.stringify(newImageMap, null, 2) + "\n");
  }

  const keptBytes = [...keepPaths].length;
  process.stderr.write(
    `Done. ${dryRun ? "Re-run without --dry-run to apply." : `Removed ${uniqueDeletes.length} duplicate files; ${keptBytes} kept.`}\n`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
