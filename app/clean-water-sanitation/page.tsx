import type { Metadata } from "next";
import { ImageHero } from "@/components/image-hero";
import { ProseImageSection } from "@/components/prose-image-section";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Clean Water & Sanitation",
  description:
    "Clean water, latrines, and hand-washing stations at AWAKEN facilities in Behsood.",
};

export default function CleanWaterPage() {
  const { body } = siteImages.water;

  return (
    <>
      <ImageHero
        src={siteImages.water.hero}
        alt="Clean water and sanitation projects"
        title="Clean water & sanitation"
        subtitle="Water is a human right — and a foundation for health and education."
      />
      <PageShell>
        <ProseSection>
          <p>
            Providing clean water and sanitation strengthens health, education,
            and livelihoods. AWAKEN is committed to water and sanitation at the
            communities and facilities we serve.
          </p>
        </ProseSection>

        <ProseImageSection
          title="Water is a human right"
          image={{
            src: body.waterProject,
            alt: "Clean water infrastructure at AWAKEN facilities",
          }}
        >
          <p>
            Roughly <strong>35% of Afghans</strong> lack clean drinking water and
            adequate restrooms. Rural Afghanistan faces acute scarcity; our goal
            is to increase access at our programs.
          </p>
          <p>
            In March 2017, AWAKEN partnered with the Rotary Foundation on projects
            for the Behsood Health Clinic and Qala-e-Malakh school: renovating and
            building latrines, hand-washing stations, and drinking water stations.
            Some latrines are designated for female-only use to improve comfort
            for women and girls traveling long distances to programs.
          </p>
        </ProseImageSection>

        <ProseImageSection
          title="Community impact"
          image={{
            src: body.fieldWork,
            alt: "AWAKEN water and sanitation work in rural Afghanistan",
          }}
          imagePosition="left"
        >
          <p>
            Safe water and sanitation reduce disease, keep children in school, and
            free families from long walks to fetch water. AWAKEN integrates these
            projects with our health clinic and education programs so communities
            benefit holistically.
          </p>
        </ProseImageSection>
      </PageShell>
    </>
  );
}
