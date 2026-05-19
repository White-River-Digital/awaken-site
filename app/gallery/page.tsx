import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell } from "@/components/page-shell";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryImagesByCategoryFromManifest } from "@/lib/gallery";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from AWAKEN health, education, and vocational programs.",
};

export default function GalleryPage() {
  const { healthcare, education, vocational, all } =
    getGalleryImagesByCategoryFromManifest();

  return (
    <>
      <PageImageHero
        src={siteImages.gallery.hero}
        alt="AWAKEN photo gallery"
        title="Gallery"
        subtitle="Moments from our clinics, schools, and vocational programs."
      />
      <PageShell>
        <section className="mb-16">
          <h2 className="font-heading text-xl font-semibold text-brand-900">
            Health care
          </h2>
          <GalleryGrid images={healthcare} className="mt-4" />
        </section>
        <section className="mb-16">
          <h2 className="font-heading text-xl font-semibold text-brand-900">
            Education
          </h2>
          <GalleryGrid images={education} className="mt-4" />
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-brand-900">
            Vocational training
          </h2>
          <GalleryGrid images={vocational} className="mt-4" />
        </section>
        {all.length === 0 ? (
          <p className="text-muted-foreground">
            Run{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-sm">
              npm run download-images
            </code>{" "}
            to fetch images from the legacy site into{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-sm">
              public/images/assets
            </code>{" "}
            and refresh{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-sm">
              lib/images-manifest.json
            </code>
            .
          </p>
        ) : null}
      </PageShell>
    </>
  );
}
