import type { Metadata } from "next";
import { ImageHero } from "@/components/image-hero";
import {
  HighlightCallout,
  ProseImageSection,
  StatFacts,
} from "@/components/prose-image-section";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Vocational Training",
  description:
    "Cost-effective sewing, literacy, and hygiene programs for Afghan women through AWAKEN.",
};

export default function VocationalTrainingPage() {
  const { body } = siteImages.vocational;

  return (
    <>
      <ImageHero
        src={siteImages.vocational.hero}
        alt="Women in vocational and tailoring training"
        title="Vocational training"
        subtitle="Skills for self-sufficiency — sewing, literacy, hygiene, and partnership with Rotary."
      />
      <PageShell>
        <ProseSection>
          <p>
            For AWAKEN and its supporters, vocational training is remarkably
            cost-effective — focused expenses include sewing machines and
            tailoring supplies, teacher salaries, and space rental for six months
            — while the benefits are priceless. Promoting self-sufficiency
            improves lives, families, and communities.
          </p>
        </ProseSection>

        <ProseImageSection
          title="Promoting self-sufficiency"
          image={{
            src: body.sewingHandoff,
            alt: "Graduate receiving a sewing machine at vocational training",
          }}
          portrait
        >
          <HighlightCallout>
            Nearly <strong>80% of adult Afghan women are illiterate</strong>
          </HighlightCallout>
          <p>
            Conflict has left many women without traditional support networks.
            AWAKEN launched its vocational program in <strong>2005</strong>. Each
            year, <strong>more than 60 women</strong> complete a six-month program
            in sewing, literacy, and hygiene. Graduates receive a sewing machine,
            cloth, scissors, needles, and tailoring supplies.
          </p>
          <p>
            The first class graduated 32 women; since then AWAKEN has offered an
            average of two programs per year in different villages across Behsood
            District. For many women, these skills enable self-sufficiency and
            community support.
          </p>
        </ProseImageSection>

        <ProseImageSection
          title="Saheli Centers — partnership with Rotary"
          image={{
            src: body.trainingClass,
            alt: "Women in a vocational tailoring class at a Saheli Center",
          }}
          imagePosition="left"
          imageColumnHeader={
            <StatFacts
              items={[
                "60+ women from three different villages currently enrolled",
                "500+ women have graduated from the vocational training program",
              ]}
            />
          }
        >
          <p>
            In 2017, AWAKEN launched women&apos;s centers that include{" "}
            <strong>computer instruction</strong>, supported by Rotary International.
            Saheli Centers bring literacy, family planning education, and the
            choice of tailoring or computer skills. After the Rotary grant
            completed in February 2019, AWAKEN continued these services where
            demand remains strong.
          </p>
        </ProseImageSection>
      </PageShell>
    </>
  );
}
