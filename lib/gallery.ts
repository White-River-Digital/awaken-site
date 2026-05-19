import type { GalleryImage } from "@/components/gallery-grid";
import manifest from "./images-manifest.json";

type Bucket = "healthcare" | "education" | "vocational";

/** Rough bucket from Wix media URL (filename / media id). Unmatched → split evenly. */
function galleryBucketForUrl(url: string): Bucket | "other" {
  const u = decodeURIComponent(url).toLowerCase();

  if (
    /sewing|81ada9ea|308f22f2fccc|qluo|tailor|vocational/.test(u)
  ) {
    return "vocational";
  }

  if (
    /520f1ef2|806934a04|awaken.healthcare|awaken_%20healthcare|awaken%20healthcare|img_6972|img_8776|dsc00404|3e5804e57e934|821c0f65f7514d57|516e9b7b9d1144|29a738c394e2430a|43b73ec58cbb|water3|clinic|health/.test(
      u,
    )
  ) {
    return "healthcare";
  }

  if (
    /afg_grads|img_8801|d3bbf342|8748cb5a|530743a33b89|18c8c3c29866419b9cd5ce9ba592321a|e2c9c18fdee8439f|grad|school/.test(
      u,
    )
  ) {
    return "education";
  }

  return "other";
}

/** Gallery page assets only (from live site crawl) */
export function getGalleryImagesByCategoryFromManifest(): {
  healthcare: GalleryImage[];
  education: GalleryImage[];
  vocational: GalleryImage[];
  all: GalleryImage[];
} {
  const galleryItems = manifest.byPage.gallery ?? [];
  const healthcare: GalleryImage[] = [];
  const education: GalleryImage[] = [];
  const vocational: GalleryImage[] = [];
  const other: GalleryImage[] = [];

  galleryItems.forEach((entry, i) => {
    const img: GalleryImage = {
      src: entry.path,
      alt: `AWAKEN program photo ${i + 1}`,
    };
    const bucket = galleryBucketForUrl(entry.url);
    if (bucket === "other") other.push(img);
    else if (bucket === "healthcare") healthcare.push(img);
    else if (bucket === "education") education.push(img);
    else vocational.push(img);
  });

  const rotation: Bucket[] = ["healthcare", "education", "vocational"];
  let r = 0;
  for (const img of other) {
    const bucket = rotation[r % 3]!;
    if (bucket === "healthcare") healthcare.push(img);
    else if (bucket === "education") education.push(img);
    else vocational.push(img);
    r += 1;
  }

  const all: GalleryImage[] = galleryItems.map((entry, i) => ({
    src: entry.path,
    alt: `AWAKEN program photo ${i + 1}`,
  }));

  return {
    all,
    healthcare,
    education,
    vocational,
  };
}
