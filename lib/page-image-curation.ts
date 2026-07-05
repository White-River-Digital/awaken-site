import type manifestJson from "./images-manifest.json";

type Manifest = typeof manifestJson;
type PageEntry = { path: string; url: string };

/** Wix “fill/w_,h_” pixel area — used to prefer large hero crops over icons. */
function approxPixelArea(url: string): number {
  const m = url.match(/\/fill\/w_(\d+),h_(\d+)/i);
  if (!m) return 0;
  return Number(m[1]) * Number(m[2]);
}

function isLikelyUiOrIcon(entry: PageEntry): boolean {
  const u = decodeURIComponent(entry.url).toLowerCase();
  if (/\.png(\?|$)/.test(u) && approxPixelArea(entry.url) < 50_000) return true;
  if (/icon|logo|venmo|screen%20shot|%7Emv2\.png|~mv2\.png/.test(u))
    return true;
  if (/blur_2|w_32%2c|w_39,h_39|w_78,h_78/.test(u)) return true;
  return false;
}

/** Prefer the largest matching derivative for banner-style heroes. */
export function bestPathByKeywordPriority(
  entries: PageEntry[],
  keywords: string[],
  { allowScreenshots = false }: { allowScreenshots?: boolean } = {},
): string {
  const candidates = entries.filter((e) => {
    if (isLikelyUiOrIcon(e)) return false;
    if (!allowScreenshots && /screen%20shot|screen shot/i.test(e.url)) return false;
    return true;
  });
  for (const kw of keywords) {
    const matches = candidates.filter((e) =>
      decodeURIComponent(e.url).toLowerCase().includes(kw.toLowerCase()),
    );
    if (matches.length === 0) continue;
    matches.sort((a, b) => approxPixelArea(b.url) - approxPixelArea(a.url));
    return matches[0]!.path;
  }
  return "";
}

function fallbackLargestPhoto(
  entries: PageEntry[],
  heroes: Manifest["heroes"],
  slug: keyof Manifest["heroes"],
): string {
  const photos = entries.filter(
    (e) =>
      !isLikelyUiOrIcon(e) && /\.(jpe?g|webp)(\?|$)/i.test(decodeURIComponent(e.url)),
  );
  photos.sort((a, b) => approxPixelArea(b.url) - approxPixelArea(a.url));
  if (photos[0]) return photos[0].path;
  return heroes[slug] ?? "";
}

function combinedPools(m: Manifest, slug: keyof Manifest["byPage"]): PageEntry[] {
  const primary = m.byPage[slug] ?? [];
  if (slug === "education") {
    const home = m.byPage.home ?? [];
    return [...primary, ...home];
  }
  return primary;
}

/** Known cases where manifest auto-hero picks a shared asset from another page. */
const HERO_OVERRIDES: Partial<Record<keyof Manifest["heroes"], string>> = {
  education: "/images/assets/50450542981c180c6d3e.jpg", // IMG_8801 banner (manifest picks healthcare pano)
};

function mediaIdFromPath(m: Manifest, path: string): string {
  for (const [url, p] of Object.entries(m.urlToPath)) {
    if (p !== path) continue;
    const id = url.match(/media\/([^/~?]+)/i)?.[1];
    if (id) return id.toLowerCase();
  }
  return "";
}

function outputFilename(url: string): string {
  const decoded = decodeURIComponent(url).toLowerCase();
  const parts = decoded.split("/");
  return parts[parts.length - 1]?.split("?")[0] ?? "";
}

function cropKey(url: string): string {
  const m = url.match(/crop\/x_(\d+),y_(\d+),w_(\d+),h_(\d+)/i);
  return m ? m.slice(1).join(",") : "";
}

/** Prefer the highest-resolution Wix derivative of the same cropped hero asset. */
function upgradeHeroResolution(m: Manifest, heroPath: string): string {
  const mediaId = mediaIdFromPath(m, heroPath);
  if (!mediaId) return heroPath;

  let baseFilename = "";
  let baseCrop = "";
  for (const [url, p] of Object.entries(m.urlToPath)) {
    if (p === heroPath) {
      baseFilename = outputFilename(url);
      baseCrop = cropKey(url);
      break;
    }
  }

  const candidates: PageEntry[] = [];
  for (const [url, path] of Object.entries(m.urlToPath)) {
    if (!url.toLowerCase().includes(mediaId)) continue;
    if (baseFilename && outputFilename(url) !== baseFilename) continue;
    if (baseCrop && cropKey(url) !== baseCrop) continue;
    candidates.push({ path, url });
  }

  const filtered = candidates.filter((e) => !isLikelyUiOrIcon(e));
  if (!filtered.length) return heroPath;

  filtered.sort((a, b) => approxPixelArea(b.url) - approxPixelArea(a.url));
  return filtered[0]!.path;
}

/**
 * Resolve a hero `src` for a manifest page slug (e.g. `vocational-training`).
 * Uses the crawl's scored hero for each page (matches live Wix banners), upgraded
 * to the sharpest same-crop derivative. Explicit overrides only where the crawl
 * mis-identifies a shared asset.
 */
export function curatedHeroForManifestSlug(
  m: Manifest,
  slug: keyof Manifest["heroes"],
): string {
  const override = HERO_OVERRIDES[slug];
  const base = override ?? m.heroes[slug] ?? "";
  if (!base) {
    const entries = m.byPage[slug as keyof Manifest["byPage"]] ?? [];
    return fallbackLargestPhoto(entries, m.heroes, slug);
  }
  return upgradeHeroResolution(m, base);
}

/** AWAKEN wordmark + figures (header, favicon) — canonical site logo asset. */
export const SITE_LOGO_PATH = "/images/assets/awaken-logo.png";

export function curatedSiteLogoPath(): string {
  return SITE_LOGO_PATH;
}

/** Photo for the homepage “End of year letter” promo (Bibi with children). */
export function curatedAnnualLetterPhotoPath(m: Manifest): string {
  const pool = [
    ...(m.byPage.home ?? []),
    ...(m.byPage["end-of-year-letter-2025"] ?? []),
  ];
  const path = bestPathByKeywordPriority(pool, [
    "ada0ddac1391400e83242e351e96f972",
  ]);
  return path || "/images/assets/884645729b0514958dee.png";
}

type PageSlug = keyof Manifest["byPage"];

function bodyImagePool(m: Manifest, slug: PageSlug): PageEntry[] {
  if (slug === "education") return combinedPools(m, "education");
  return m.byPage[slug] ?? [];
}

/** Largest photo from a page crawl matching keywords (for in-body layouts). */
export function curatedBodyImagePath(
  m: Manifest,
  slug: PageSlug,
  keywords: string[],
  fallback = "",
): string {
  const path = bestPathByKeywordPriority(bodyImagePool(m, slug), keywords);
  return path || fallback;
}

/** Illustration beside the annual letter body (not a full-page hero). */
export function curatedAnnualLetterIllustrationPath(m: Manifest): string {
  const pool = m.byPage["end-of-year-letter-2025"] ?? [];
  const path = bestPathByKeywordPriority(pool, [
    "a425761ce47c4a68a4cd1043604f11c1",
    "unnamed%20copy",
  ]);
  return path || "/images/assets/9989435668887f46fe61.png";
}

/** Drokhani impact-story photo on the annual letter page. */
export function curatedAnnualLetterStoryPhotoPath(m: Manifest): string {
  const pool = m.byPage["end-of-year-letter-2025"] ?? [];
  const path = bestPathByKeywordPriority(pool, [
    "6605101de9574341a168663e8ee6eb39",
    "3_32_36",
  ]);
  return path || "/images/assets/6946a1230fe4cf7b2051.png";
}

/** Wide in-letter banner (community collage) below the page hero. */
export function curatedAnnualLetterBannerPhotoPath(m: Manifest): string {
  const pool = [
    ...(m.byPage["end-of-year-letter-2025"] ?? []),
    ...(m.byPage.home ?? []),
  ];
  const path = bestPathByKeywordPriority(
    pool,
    ["9af25c8838824cb5a65baaacb0ed5050", "3_29_32"],
    { allowScreenshots: true },
  );
  return path || "/images/assets/3b5910bf2d169a398344.png";
}

function wixMediaId(url: string): string {
  const m = url.match(/media\/([^/~?%]+)/i);
  return m?.[1]?.toLowerCase() ?? "";
}

/**
 * Wix Pro Gallery on live /education (University Scholarship Program carousel).
 * Order matches awakeninc.org/education — do not pull from /gallery.
 */
const EDUCATION_GALLERY_ORDER = [
  "4968e0_1dce99633b8f4f7d84b917151466e409",
  "4968e0_2f74d41f48d04c398684ebdcd02b4f3b",
  "4968e0_3d015cadfbf845599e37df0b1fa44cf2",
  "4968e0_42029f30448244769694764120812899",
  "4968e0_4d0b5ebabd77455daad068ee6d9d6197",
  "4968e0_6db04fca34fd4b68b7a69533f9860f46",
  "4968e0_899c2ca202314782956b008b12e34343",
  "4968e0_98f3066c17f047088956de96b5c4d7ea",
  "4968e0_e28d4b8daaed45858d6c149ecb19d04e",
] as const;

const MIN_GALLERY_PIXEL_AREA = 120_000;

/**
 * True if this URL should not appear in the education page photo grid (mis-tagged
 * healthcare pano from shared Wix assets, or tiny blurred derivatives).
 */
export function isExcludedFromEducationGrid(url: string): boolean {
  const u = decodeURIComponent(url).toLowerCase();
  if (u.includes("806934a041104771")) return true; // healthcare pano on edu page
  if (u.includes("blur_2")) return true;
  if (/w_91,h_69|w_64,h_48|w_125,h_203|w_147,h_/.test(u)) return true;
  if (/screen%20shot|screen shot/.test(u)) return true;
  if (/05988773040b4ee2|380e3477976849|bf94747c33bf4e3d91682955c8943085/.test(u))
    return true;
  if (/\.png(\?|$)/.test(u)) return true;
  return false;
}

/** Largest JPEG/WebP per Wix media id. */
function dedupeLargestByMediaId(entries: PageEntry[]): Map<string, PageEntry> {
  const byId = new Map<string, PageEntry>();
  for (const e of entries) {
    const id = wixMediaId(e.url);
    if (!id) continue;
    const prev = byId.get(id);
    if (!prev || approxPixelArea(e.url) > approxPixelArea(prev.url)) {
      byId.set(id, e);
    }
  }
  return byId;
}

/**
 * Photos for the education page “Photo gallery” — school/scholarship carousel only.
 * Uses full-size assets from the education page crawl (blur thumbs replaced via manifest).
 */
export function getEducationGalleryEntries(
  m: Manifest,
  heroPath: string,
): PageEntry[] {
  const pool = (m.byPage.education ?? []).filter((e) => e.path !== heroPath);
  const byId = dedupeLargestByMediaId(pool);

  return EDUCATION_GALLERY_ORDER.map((id) => byId.get(id))
    .filter((e): e is PageEntry => e != null)
    .filter((e) => approxPixelArea(e.url) >= MIN_GALLERY_PIXEL_AREA);
}
