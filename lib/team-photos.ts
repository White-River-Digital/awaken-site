import type manifestJson from "./images-manifest.json";

type Manifest = typeof manifestJson;
type PageEntry = { path: string; url: string };

/** Matches Wix `quality_auto/<filename>` on https://www.awakeninc.org/our-team (verified May 2026). */
export const BOARD_MEMBER_PHOTO_PATTERNS: Record<string, string[]> = {
  "Bibi Bahrami": ["mom.png", "181e4a0bd80d4bf18314339784c92088"],
  "Zaki Bahrami": ["prof2.jpg", "a8d83995dbf440329aa650c56992ae75"],
  "Gary Garofolo": ["gary garofolo", "5ea196611df84de9a943eacb30608a31"],
  "Cara Bow": ["linked in 1", "31a21eaa19a34aaf86fb8c5599c9c77c"],
  "Ann Clevenger": [
    "screen shot 2020-04-23 at 3_56",
    "b847a905fe0c44259df8c7915757f7eb",
  ],
  "Susan Magrath": [
    "screen shot 2020-04-21 at 3_26",
    "885d3e8fbbd44c1e91c057d892b1a408",
  ],
  "Cindy Buchanon": [
    "cindy_headshot_edited",
    "fa4a3efb232849669ea6ddc4eb607ebd",
  ],
  "Kristin Williams": ["image0.png", "ef58422edb164f3eb64bfbb3732bacb5"],
  "Cecil Bohanon": ["img_0325", "b5d4ca64824e4665a5a9b37dcdc51247"],
  "Anwar Abdalah": ["anwar.jpg", "1267b97347ef45aab9bd0e4dd11b1cd4"],
  "Scott Shockley": [
    "shockley, scott 2019",
    "9408ebcf31ca46079220886112ac81eb",
  ],
  "Amy Beckett": ["img_3308_heic", "f70b309afa6d464eb9dba41383deb962"],
};

export const AFGHANISTAN_TEAM_PHOTO_PATTERNS: Record<string, string[]> = {
  "Abdullah Noori": ["abdullah.jpg", "4d22cbc949cc433db23e0f76381ad156"],
};

function approxPixelArea(url: string): number {
  const m = url.match(/\/fill\/w_(\d+),h_(\d+)/i);
  if (!m) return 0;
  return Number(m[1]) * Number(m[2]);
}

function poolForTeam(m: Manifest): PageEntry[] {
  return m.byPage["our-team"] ?? [];
}

function matchesPatterns(url: string, patterns: string[]): boolean {
  const u = decodeURIComponent(url).toLowerCase();
  return patterns.some((p) => u.includes(p.toLowerCase()));
}

/**
 * Largest portrait derivative for a board member (filename-driven, not DOM order).
 */
export function getTeamMemberPhotoPath(
  m: Manifest,
  memberName: string,
  patternsByName: Record<string, string[]>,
): string {
  const patterns = patternsByName[memberName];
  if (!patterns?.length) return "";

  const fromPage = poolForTeam(m).filter((e) => matchesPatterns(e.url, patterns));
  const fromMap: PageEntry[] = [];
  for (const [url, path] of Object.entries(m.urlToPath)) {
    if (matchesPatterns(url, patterns)) {
      fromMap.push({ path, url });
    }
  }

  const combined = [...fromPage, ...fromMap];
  const byPath = new Map<string, PageEntry>();
  for (const e of combined) byPath.set(e.path, e);

  const sorted = Array.from(byPath.values()).sort(
    (a, b) => approxPixelArea(b.url) - approxPixelArea(a.url),
  );
  return sorted[0]?.path ?? "";
}
