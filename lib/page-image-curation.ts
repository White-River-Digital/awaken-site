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

/**
 * Resolve a hero `src` for a manifest page slug (e.g. `vocational-training`).
 */
export function curatedHeroForManifestSlug(
  m: Manifest,
  slug: keyof Manifest["heroes"],
): string {
  const heroes = m.heroes;
  const entries = m.byPage[slug as keyof Manifest["byPage"]] ?? [];

  if (slug === "education") {
    const fromPool = bestPathByKeywordPriority(combinedPools(m, "education"), [
      "d3bbf342",
      "img_8801",
      "afg_grads",
      "530743a33b89",
    ]);
    if (fromPool) return fromPool;
    // IMG_8801 appears on the home crawl but is the correct education banner.
    return "/images/assets/50450542981c180c6d3e.jpg";
  }

  if (slug === "healthcare") {
    const path = bestPathByKeywordPriority(entries, [
      "520f1ef2", // AWAKEN Healthcare banner
      "86034cd70f7d",
      "3e5804e57e934", // DSC00404 clinic set
      "458656a829dc", // IMG_8776
      "0c4c84a34e6345", // IMG_6972
    ]);
    if (path) return path;
    return fallbackLargestPhoto(entries, heroes, slug);
  }

  if (slug === "vocational-training") {
    const path = bestPathByKeywordPriority(entries, [
      "308f22f2fccc", // QLUO tailoring / workshop
      "81ada9ea", // Sewing Machine
      "a0bc076eb38f",
    ]);
    if (path) return path;
    return fallbackLargestPhoto(entries, heroes, slug);
  }

  if (slug === "clean-water-sanitation") {
    const path = bestPathByKeywordPriority(entries, [
      "43b73ec58cbb", // water3 strip
      "b57af8ddb4a9", // DSC02106 field scenes
    ]);
    if (path) return path;
    return fallbackLargestPhoto(entries, heroes, slug);
  }

  if (slug === "home") {
    const pool = [...(m.byPage.home ?? []), ...(m.byPage["end-of-year-letter-2025"] ?? [])];
    const path = bestPathByKeywordPriority(
      pool,
      [
        "9af25c8838824cb5a65baaacb0ed5050", // letter / home feature (2026)
        "6947bfb18ad24c419d4629914cb8c3c3", // 000_0167
        "96e51ea93af843eaa66be587ef02659e", // IMG_6983
        "d3bbf342957e4da1b2018a57f3454e16", // IMG_8801
      ],
      { allowScreenshots: true },
    );
    if (path) return path;
    return "/images/assets/ab96705d5fda7c3cf8ce.png";
  }

  if (slug === "our-team") {
    const path = bestPathByKeywordPriority(entries, [
      "hands%20together",
      "1be28cac67bf415a8618898efbd13a37",
    ]);
    if (path) return path;
    return "/images/assets/4ee56d23b016dda42e08.jpg";
  }

  if (slug === "end-of-year-letter-2025") {
    const path = bestPathByKeywordPriority(
      entries,
      ["9af25c8838824cb5a65baaacb0ed5050", "6605101de9574341a168663e8ee6eb39"],
      { allowScreenshots: true },
    );
    if (path) return path;
    return "/images/assets/ab96705d5fda7c3cf8ce.png";
  }

  return fallbackLargestPhoto(entries, heroes, slug);
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

function wixMediaId(url: string): string {
  const m = url.match(/media\/([^/~?%]+)/i);
  return m?.[1]?.toLowerCase() ?? "";
}

/** Wix Pro Gallery on the education page (plus shared school photos from /gallery). */
const EDUCATION_GALLERY_MEDIA_IDS = new Set([
  "086de0_530743a33b8943dbb8c7dd7e09dc7b10", // afg_grads
  "4968e0_8748cb5a867b429aaf2439b623f7f2e9",
  "4968e0_1dce99633b8f4f7d84b917151466e409",
  "4968e0_2f74d41f48d04c398684ebdcd02b4f3b",
  "4968e0_3d015cadfbf845599e37df0b1fa44cf2",
  "4968e0_42029f30448244769694764120812899",
  "4968e0_4d0b5ebabd77455daad068ee6d9d6197",
  "4968e0_6db04fca34fd4b68b7a69533f9860f46",
  "4968e0_899c2ca202314782956b008b12e34343",
  "4968e0_98f3066c17f047088956de96b5c4d7ea",
  "4968e0_e28d4b8daaed45858d6c149ecb19d04e",
  "086de0_18c8c3c29866419b9cd5ce9ba592321a",
  "086de0_6e959d98f084422baf2f841745ec8ae5",
  "086de0_c8d8998ed4e847198381636b55d6f843",
  "086de0_cbafc2d776f2405e9045fde2fca0bd28",
  "086de0_458656a829dc473397331ca062d0a8f7", // IMG_8776 — school/community
]);

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

function isEducationGalleryCandidate(entry: PageEntry): boolean {
  const u = decodeURIComponent(entry.url).toLowerCase();
  if (isExcludedFromEducationGrid(entry.url)) return false;
  if (isLikelyUiOrIcon(entry)) return false;
  if (!/\.(jpe?g|webp)(\?|$)/i.test(u)) return false;

  const id = wixMediaId(entry.url);
  if (EDUCATION_GALLERY_MEDIA_IDS.has(id)) return true;
  if (/afg_grads|8748cb5a/.test(u)) return true;

  return false;
}

/** Largest JPEG/WebP per Wix media id. */
function dedupeLargest(entries: PageEntry[]): PageEntry[] {
  const byId = new Map<string, PageEntry>();
  for (const e of entries) {
    const id = wixMediaId(e.url) || e.path;
    const prev = byId.get(id);
    if (!prev || approxPixelArea(e.url) > approxPixelArea(prev.url)) {
      byId.set(id, e);
    }
  }
  return Array.from(byId.values());
}

/**
 * Photos for the education page “Photo gallery” — real school/scholarship images only.
 * Pulls full-size assets from the site gallery when the education crawl only has blur thumbs.
 */
export function getEducationGalleryEntries(
  m: Manifest,
  heroPath: string,
): PageEntry[] {
  const pool = [...(m.byPage.education ?? []), ...(m.byPage.gallery ?? [])];

  const candidates = pool.filter(
    (e) => e.path !== heroPath && isEducationGalleryCandidate(e),
  );

  return dedupeLargest(candidates)
    .filter((e) => approxPixelArea(e.url) >= MIN_GALLERY_PIXEL_AREA)
    .sort((a, b) => approxPixelArea(b.url) - approxPixelArea(a.url));
}
