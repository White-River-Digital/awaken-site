import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Founder's Story",
  description:
    "Bibi Bahrami, founder of AWAKEN, on service, displacement, and building hope in Afghanistan.",
};

export default function FoundersStoryPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.foundersStory.hero}
        alt="Founder Bibi Bahrami and AWAKEN"
        title="Story of AWAKEN&apos;s founder"
        subtitle="Founded in Muncie, Indiana, AWAKEN reflects a lifetime of service."
      />
      <PageShell>
        <ProseSection>
          <p>
            Bibi was born in the village of Qala-e-Malakh in Behsood District,
            eastern Afghanistan, and learned service from parents who helped
            disadvantaged neighbors. At thirteen, war forced her family from
            their home; they walked two days through mountains to Peshawar,
            Pakistan, where she lived in a refugee camp for six years. With no
            safe schooling for girls, she poured her energy into serving others —
            cooking, cleaning, and supporting care at make-shift clinics.
          </p>
          <p>
            Her future husband, Saber — a medical student whose education was
            interrupted by war — was in the same camp and from the same village.
            They were engaged before Saber left for the United States to continue
            his medical career.
          </p>
          <p>
            In 1986, at nineteen, Bibi joined Saber in Muncie, Indiana. After
            learning English and earning her GED, she studied at Ball State
            University while raising six children. She often speaks of safe child
            care and U.S. schools as gifts that made her education possible — and
            of the women and children she left behind.
          </p>
          <p>
            Over decades she and Saber returned to camps in Pakistan and villages
            in Afghanistan with medical supplies and humanitarian aid. After
            September 11, she saw an opening to strengthen communities back home,
            and founded the nonprofit <strong>AWAKEN in 2002</strong> — focusing on
            education, vocational training, and healthcare for Afghan women and
            children.
          </p>
          <h2>A day in the life of Bibi Bahrami</h2>
          <div className="not-prose my-6 aspect-video w-full overflow-hidden rounded-xl border border-border/80 bg-muted shadow-sm">
            <iframe
              src="https://www.youtube-nocookie.com/embed/YbiFUOrGlNg"
              title="A day in the life of Bibi Bahrami — AWAKEN founder"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p>
            <a
              href="https://youtu.be/YbiFUOrGlNg"
              target="_blank"
              rel="noreferrer"
              className="text-brand-700 underline-offset-4 hover:underline"
            >
              Watch on YouTube
            </a>{" "}
            if the player does not load.
          </p>
        </ProseSection>
      </PageShell>
    </>
  );
}
