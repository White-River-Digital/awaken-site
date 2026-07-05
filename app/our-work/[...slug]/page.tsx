import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import {
  allOurWorkSlugs,
  getOurWorkPage,
  type OurWorkPage,
} from "@/lib/our-work";
import { siteImages } from "@/lib/site-images";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

function heroForPage(page: OurWorkPage) {
  switch (page.imageKey) {
    case "healthcare":
      return siteImages.healthcare.hero;
    case "education":
      return siteImages.education.hero;
    case "water":
      return siteImages.water.hero;
    case "vocational":
      return siteImages.vocational.hero;
    case "marrc":
      return siteImages.marrc.hero;
    default:
      return siteImages.homeHero;
  }
}

export function generateStaticParams() {
  return allOurWorkSlugs().map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getOurWorkPage(slug.join("/"));
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function OurWorkProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getOurWorkPage(slug.join("/"));
  if (!page) notFound();

  const hero = heroForPage(page);

  return (
    <>
      <PageImageHero
        eyebrow={page.eyebrow}
        src={hero}
        alt={page.title}
        title={page.title}
        subtitle={page.subtitle}
      />
      <PageShell>
        <ProseSection>
          {page.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ProseSection>
      </PageShell>
    </>
  );
}
