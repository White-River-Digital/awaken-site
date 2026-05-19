import manifest from "@/lib/images-manifest.json";
import { getEducationGalleryEntries } from "@/lib/page-image-curation";
import { siteImages } from "@/lib/site-images";
import { GalleryGrid } from "@/components/gallery-grid";

/** In-page photos: school & scholarship scenes only (no charts, logos, or UI). */
export function EducationPhotoGrid() {
  const hero = siteImages.education.hero;
  const imgs = getEducationGalleryEntries(manifest, hero).map((x, i) => ({
    src: x.path,
    alt: `Education and Qala-e-Malakh School — photo ${i + 1}`,
  }));

  if (imgs.length === 0) return null;

  return (
    <section className="mt-14" aria-labelledby="edu-photos">
      <h2
        id="edu-photos"
        className="font-heading text-2xl font-semibold text-brand-900"
      >
        Photo gallery
      </h2>
      <p className="mt-2 text-muted-foreground">
        Scenes from schools and scholarship programs (from the original site).
      </p>
      <GalleryGrid
        images={imgs}
        columnsClass="sm:grid-cols-2 lg:grid-cols-3"
        className="mt-6"
      />
    </section>
  );
}
