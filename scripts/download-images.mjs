#!/usr/bin/env node
/**
 * Crawls awakeninc.org pages, downloads Wix CDN images into
 * public/images/assets/<hash>.<ext> (deduplicated).
 * Writes lib/images-manifest.json (url map, per-page lists, hero picks, slideshow).
 */
import { mkdir, writeFile } from "fs/promises";
import { existsSync, createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS_DIR = join(ROOT, "public", "images", "assets");
const MANIFEST_OUT = join(ROOT, "lib", "images-manifest.json");

/** Fetch path(s) merged into one slug */
const PAGE_GROUPS = [
  { slug: "home", fetchPaths: ["/", "/home"] },
  { slug: "education", fetchPaths: ["/education"] },
  { slug: "healthcare", fetchPaths: ["/healthcare"] },
  { slug: "vocational-training", fetchPaths: ["/vocational-training"] },
  { slug: "clean-water-sanitation", fetchPaths: ["/clean-water-sanitation"] },
  { slug: "marrc", fetchPaths: ["/marrc"] },
  { slug: "donate", fetchPaths: ["/donate"] },
  { slug: "contact", fetchPaths: ["/contact"] },
  { slug: "founders-story", fetchPaths: ["/founders-story"] },
  { slug: "our-team", fetchPaths: ["/our-team"] },
  { slug: "gallery", fetchPaths: ["/gallery"] },
  { slug: "reports", fetchPaths: ["/reports"] },
  { slug: "end-of-year-letter-2025", fetchPaths: ["/end-of-year-letter-2025"] },
  { slug: "dinner", fetchPaths: ["/dinner"] },
  { slug: "news", fetchPaths: ["/news"] },
];

const BASE = "https://www.awakeninc.org";

const LOGO_MEDIA_FRAGMENTS = ["380e3477976849df8ccb02a406e110ee"];

function extractUrls(html) {
  const set = new Set();
  const patterns = [
    /https:\/\/static\.wixstatic\.com\/[^\s"'<>]+/g,
    /https:\\\/\\\/static\.wixstatic\.com\/[^\s"'<>\\]+/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html)) !== null) {
      let u = m[0]
        .replace(/\\\//g, "/")
        .replace(/\\u0026/g, "&")
        .replace(/\\u002F/g, "/");
      u = u.replace(/[),.;:]+$/, "");
      u = u.split(" ")[0].split(/\s/)[0];
      if (!u.includes("static.wixstatic.com/media")) continue;
      if (u.length < 40) continue;
      set.add(u);
    }
  }
  return set;
}

function extFromUrl(url) {
  try {
    const p = new URL(url).pathname;
    const m = p.match(/\.(jpe?g|png|webp|gif|avif)(?:\/|$)/i);
    if (m) return m[1].toLowerCase() === "jpeg" ? "jpg" : m[1].toLowerCase();
  } catch {
    /* ignore */
  }
  return "jpg";
}

function assetFilename(url) {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 20);
  return `${hash}.${extFromUrl(url)}`;
}

function isProbablyLogoUrl(url) {
  return LOGO_MEDIA_FRAGMENTS.some((id) => url.includes(id));
}

/** Prefer large photos over icons, screenshots, payment badges */
function scoreHeroCandidate(url) {
  let s = 0;
  if (/\.jpe?g/i.test(url)) s += 25;
  else if (/\.png/i.test(url)) s += 5;
  if (/blur_2/i.test(url)) s -= 80;
  if (/w_(3[0-9]|4[0-9]|5[0-9]|6[0-4]),h_/i.test(url)) s -= 40; // tiny thumbs
  if (/venmo|icon\.png|amazon|givebutter.*logo/i.test(url)) s -= 100;
  if (/Screen%20Shot|Screen Shot/i.test(url)) s -= 35;
  if (/fill\/w_(\d+)/i.test(url)) {
    const w = parseInt(url.match(/fill\/w_(\d+)/i)?.[1] ?? "0", 10);
    s += Math.min(w / 80, 18);
  }
  if (/DSC|IMG_|edited\.jpg|mv2_d_\d{3,}_/i.test(url)) s += 12;
  return s;
}

async function download(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; awaken-site-mirror/1.1; +https://www.awakeninc.org)",
      Referer: "https://www.awakeninc.org/",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!res.ok || !res.body) throw new Error(`${res.status} ${url}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(destPath));
}

async function main() {
  await mkdir(ASSETS_DIR, { recursive: true });

  /** slug -> Set<url> */
  const urlsByPage = {};

  for (const group of PAGE_GROUPS) {
    const merged = new Set();
    for (const p of group.fetchPaths) {
      const pageUrl = `${BASE}${p === "/" ? "" : p}`;
      process.stderr.write(`Fetching ${pageUrl}\n`);
      const res = await fetch(pageUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; awaken-site-mirror/1.1; +https://www.awakeninc.org)",
        },
      });
      const html = await res.text();
      extractUrls(html).forEach((u) => merged.add(u));
    }
    urlsByPage[group.slug] = merged;
  }

  /** @type {Record<string, string>} */
  const urlToPath = {};
  /** @type {Record<string, { path: string; url: string }[]>} */
  const byPage = {};

  for (const [slug, set] of Object.entries(urlsByPage)) {
    byPage[slug] = [];
    for (const url of [...set].sort()) {
      let publicPath = urlToPath[url];
      if (!publicPath) {
        const fn = assetFilename(url);
        const diskPath = join(ASSETS_DIR, fn);
        publicPath = `/images/assets/${fn}`;
        if (!existsSync(diskPath)) {
          try {
            await download(url, diskPath);
            process.stderr.write(`  OK ${publicPath}\n`);
          } catch (e) {
            process.stderr.write(`  SKIP ${url} ${e.message}\n`);
            continue;
          }
        }
        urlToPath[url] = publicPath;
      }
      byPage[slug].push({ path: publicPath, url });
    }
  }

  function heroFor(slug) {
    const list = byPage[slug] || [];
    if (!list.length) return null;
    const decorated = list
      .filter((x) => !isProbablyLogoUrl(x.url))
      .map((x) => ({ ...x, score: scoreHeroCandidate(x.url) }))
      .sort((a, b) => b.score - a.score);
    return decorated[0]?.path ?? list[0].path;
  }

  /** Heroes keyed by slug (same as route segments) */
  const heroes = {};
  for (const g of PAGE_GROUPS) {
    heroes[g.slug] = heroFor(g.slug);
  }

  const logoEntry =
    Object.keys(urlToPath).find((u) => u.includes(LOGO_MEDIA_FRAGMENTS[0])) ??
    Object.keys(urlToPath).find((u) => LOGO_MEDIA_FRAGMENTS[1] && u.includes(LOGO_MEDIA_FRAGMENTS[1]));
  const logo = logoEntry ? urlToPath[logoEntry] : null;

  const homeRanked = [...(byPage.home || [])]
    .filter((x) => !isProbablyLogoUrl(x.url))
    .map((x) => ({ url: x.url, score: scoreHeroCandidate(x.url) }))
    .sort((a, b) => b.score - a.score);
  const slideUrls = [];
  const slideSeen = new Set();
  for (const { url: u } of homeRanked) {
    if (slideSeen.has(u)) continue;
    slideSeen.add(u);
    slideUrls.push(u);
    if (slideUrls.length >= 8) break;
  }

  const heroSlides = slideUrls
    .map((url) => urlToPath[url])
    .filter(Boolean)
    .map((path, i) => ({
      src: path,
      alt: `AWAKEN — photo ${i + 1}`,
    }));

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: BASE,
    urlToPath,
    byPage,
    heroes,
    logo,
    heroSlides,
  };

  await writeFile(MANIFEST_OUT, JSON.stringify(manifest, null, 2), "utf8");
  process.stderr.write(`Wrote ${MANIFEST_OUT}\n`);
  process.stderr.write(
    `${Object.keys(urlToPath).length} unique image URLs → ${ASSETS_DIR}\n`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
