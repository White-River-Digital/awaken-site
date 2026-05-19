import type { Metadata } from "next";
import { ImageHero } from "@/components/image-hero";
import { ProseImageSection, StatFacts } from "@/components/prose-image-section";
import { EducationPhotoGrid } from "@/components/education-photo-grid";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Qala-e-Malakh School and university scholarships for Afghan students through AWAKEN.",
};

export default function EducationPage() {
  const { body } = siteImages.education;

  return (
    <>
      <ImageHero
        src={siteImages.education.hero}
        alt="Students and education programs in Behsood"
        title="Education"
        subtitle="Education is the foundation to improving life in Afghanistan."
      />
      <PageShell>
        <ProseSection>
          <p>
            Over 60% of Afghans are under the age of 25 — a tremendous opportunity
            for the country&apos;s future. AWAKEN founded the{" "}
            <strong>Qala-e-Malakh School</strong> to provide primary education
            for thousands of children and provides{" "}
            <strong>university scholarships</strong> to support higher education.
          </p>
        </ProseSection>

        <ProseImageSection
          title="Qala-e-Malakh School"
          image={{
            src: body.graduates,
            alt: "Graduates of Qala-e-Malakh School",
          }}
        >
          <p>
            Women in Afghanistan receive about{" "}
            <strong>two years of schooling on average</strong>. The
            Qala-e-Malakh School has roughly <strong>1,860 students</strong> in
            grades 1–12. About <strong>20% of students are girls</strong> — a
            remarkable statistic in a context where girls were long denied
            access to formal education.
          </p>
          <p>
            Before 2004, the village of Qala-e-Malakh in Behsood District had no
            physical school building. AWAKEN built the school in 2004; it has grown
            to serve thousands of young Afghans. Once established, management
            transitioned to the Afghan government; AWAKEN remains involved in
            staffing, facilities, and encouraging female enrollment.
          </p>
          <StatFacts
            items={[
              "1,900+ boys and girls enrolled grades 1–12",
              "3,000+ graduated students",
              "Powered by renewable solar energy",
            ]}
          />
        </ProseImageSection>

        <ProseImageSection
          title="University scholarship program"
          image={{
            src: body.scholarships,
            alt: "Students supported through AWAKEN university scholarships",
          }}
          imagePosition="left"
        >
          <p>
            Gross enrollment for Afghans attending university is below 10%; for
            women it is less than 5%. Each year AWAKEN provides scholarships to
            deserving graduates of the school — both men and women — covering
            tuition, room, and board, along with mentorship for success.
          </p>
          <StatFacts
            items={[
              "100+ students graduated with our program",
              "$18,000+ in scholarships per year to support students in need",
              "22+ students currently enrolled (figures vary by year)",
            ]}
          />
        </ProseImageSection>

        <EducationPhotoGrid />
      </PageShell>
    </>
  );
}
