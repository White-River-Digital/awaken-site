import type { GalleryImage } from "@/components/gallery-grid";
import manifest from "./images-manifest.json";

type PageEntry = { path: string; url: string };

/** Wix Pro Gallery sections on live /gallery — order preserved. */
const GALLERY_HEALTHCARE_ORDER = [
  "086de0_458656a829dc473397331ca062d0a8f7",
  "086de0_ada1aad3b8db4fbf80a28daac24b5c42",
  "086de0_0c4c84a34e6345d283207e34fbf1e442",
  "086de0_cbafc2d776f2405e9045fde2fca0bd28",
  "086de0_18c8c3c29866419b9cd5ce9ba592321a",
  "086de0_c8d8998ed4e847198381636b55d6f843",
  "086de0_6e959d98f084422baf2f841745ec8ae5",
  "4968e0_3e5804e57e934c35973008ef9279dc58",
  "4968e0_86034cd70f7d4212b7066537d082d02d",
  "4968e0_516e9b7b9d1144b68bf22bb50d282800",
  "4968e0_e4edf128f7594481a0648f7ae2a721de",
  "4968e0_f3ede22e3a88440cba35f6be82fd4464",
  "4968e0_821c0f65f7514d57bdc9ac6ca35cc586",
  "4968e0_dccaefcfd85b489b92737fae12ef1d72",
  "4968e0_dca35201a6114bc8a60ebd029c042bc6",
  "4968e0_29a738c394e2430a8fcc35be5e0b958c",
  "4968e0_d318447263b64b20af09c2187f3d72c5",
] as const;

const GALLERY_EDUCATION_ORDER = [
  "4968e0_899c2ca202314782956b008b12e34343",
  "4968e0_4d0b5ebabd77455daad068ee6d9d6197",
  "4968e0_2f74d41f48d04c398684ebdcd02b4f3b",
  "4968e0_6db04fca34fd4b68b7a69533f9860f46",
  "4968e0_e28d4b8daaed45858d6c149ecb19d04e",
  "4968e0_42029f30448244769694764120812899",
  "4968e0_3d015cadfbf845599e37df0b1fa44cf2",
  "4968e0_1dce99633b8f4f7d84b917151466e409",
  "4968e0_98f3066c17f047088956de96b5c4d7ea",
  "4968e0_ef20f10a16134679a0669cc71535a8cc",
] as const;

const GALLERY_VOCATIONAL_ORDER = [
  "086de0_8ce0c03b08ea4af5aa698166bdba2ca1",
  "086de0_5ae50484ef2648a6b4a29a34c3eee63a",
  "4968e0_ab5f60a56b1546eab7833fde3cffc9c0",
  "4968e0_5e817273a7324740a18a6b6d59835aff",
  "4968e0_9bed95c2dda7498280a96e6f22d070e2",
  "4968e0_0c862e7f8e604b9192ceddefd1e0e9ad",
  "4968e0_ab88551a3b414ad482adec698c8232b4",
  "4968e0_b70d9908aca84f2180ead9891145bfd2",
  "4968e0_8d3966f4f0e04614a97487c976cf4dbc",
  "4968e0_9dc11ec9d3634a9bbc726eddf3170f36",
] as const;

const EXCLUDED_GALLERY_MEDIA_IDS = new Set([
  "380e3477976849df8ccb02a406e110ee", // site logo
  "bf94747c33bf4e3d91682955c8943085", // header screenshot
  "63f140fc5a154a20af32ac5e5c5f734e", // social icon
  "8d6893330740455c96d218258a458aa4", // social icon
  "9c4b521dd2404cd5a05ed6115f3a0dc8", // social icon
  "e316f544f9094143b9eac01f1f19e697", // social icon
  "fc1f5ff2c9644f36a057acf75a552f70", // decorative banner strip
]);

function wixMediaId(url: string): string {
  const m = url.match(/media\/([^/~?%]+)/i);
  return m?.[1]?.toLowerCase() ?? "";
}

function approxPixelArea(url: string): number {
  const m = url.match(/\/fill\/w_(\d+),h_(\d+)/i);
  if (!m) return 0;
  return Number(m[1]) * Number(m[2]);
}

function isExcludedGalleryEntry(entry: PageEntry): boolean {
  const id = wixMediaId(entry.url);
  if (EXCLUDED_GALLERY_MEDIA_IDS.has(id)) return true;

  const u = decodeURIComponent(entry.url).toLowerCase();
  if (/w_39,h_39|w_78,h_78|w_32%2ch_32|w_32,h_32/.test(u)) return true;
  if (/icon|logo|venmo|screen%20shot|screen shot/.test(u)) return true;
  if (/\.png(\?|$)/.test(u) && approxPixelArea(entry.url) < 50_000) return true;

  return false;
}

/** Largest JPEG/WebP per Wix media id from manifest page pools. */
function buildGalleryLookup(): Map<string, PageEntry> {
  const pools = [
    ...(manifest.byPage.gallery ?? []),
    ...(manifest.byPage.education ?? []),
    ...(manifest.byPage.healthcare ?? []),
    ...(manifest.byPage["vocational-training"] ?? []),
  ];

  const byId = new Map<string, PageEntry>();
  for (const entry of pools) {
    if (isExcludedGalleryEntry(entry)) continue;
    const u = decodeURIComponent(entry.url).toLowerCase();
    if (!/\.(jpe?g|webp)(\?|$)/i.test(u)) continue;

    const id = wixMediaId(entry.url);
    if (!id) continue;

    const prev = byId.get(id);
    if (!prev || approxPixelArea(entry.url) > approxPixelArea(prev.url)) {
      byId.set(id, entry);
    }
  }
  return byId;
}

function resolveOrderedGallery(
  order: readonly string[],
  lookup: Map<string, PageEntry>,
  label: string,
): GalleryImage[] {
  return order
    .map((id, i) => {
      const entry = lookup.get(id);
      if (!entry) return null;
      return {
        src: entry.path,
        alt: `AWAKEN ${label} program photo ${i + 1}`,
      };
    })
    .filter((img): img is GalleryImage => img != null);
}

/** Gallery page assets — one photo per live Wix gallery item, by section. */
export function getGalleryImagesByCategoryFromManifest(): {
  healthcare: GalleryImage[];
  education: GalleryImage[];
  vocational: GalleryImage[];
  all: GalleryImage[];
} {
  const lookup = buildGalleryLookup();

  const healthcare = resolveOrderedGallery(
    GALLERY_HEALTHCARE_ORDER,
    lookup,
    "health care",
  );
  const education = resolveOrderedGallery(
    GALLERY_EDUCATION_ORDER,
    lookup,
    "education",
  );
  const vocational = resolveOrderedGallery(
    GALLERY_VOCATIONAL_ORDER,
    lookup,
    "vocational training",
  );

  const all = [...healthcare, ...education, ...vocational];

  return {
    all,
    healthcare,
    education,
    vocational,
  };
}
