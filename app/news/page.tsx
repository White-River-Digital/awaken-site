import type { Metadata } from "next";
import Link from "next/link";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Archives and updates from AWAKEN — COVID response, mobile clinic, Rotary partnership, and more.",
};

export default function NewsPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.news.hero}
        alt="AWAKEN news and updates"
        title="News & updates"
        subtitle="Stories from the field and milestones from past years."
      />
      <PageShell>
        <ProseSection>
          <p>
            For the latest annual letter and impact figures, read{" "}
            <Link href="/end-of-year-letter-2025" className="font-medium">
              End of Year Letter 2025
            </Link>
            .
          </p>
          <h2>2020 — COVID-19 response</h2>
          <p>
            AWAKEN&apos;s mobile health clinic supported Behsood through the pandemic
            — masks, hygiene supplies, and supportive care for COVID patients. A
            special fundraiser delivered relief packages (flour, rice, oil, sugar,
            beans, tea, hygiene products) to more than 150 families.
          </p>
          <h2>Mobile clinic</h2>
          <p>
            Launched in April, the mobile clinic serves remote villages five days a
            week — an average of 120 patients daily across seven villages — with
            vaccinations and outpatient care where distances once made care
            unreachable.
          </p>
          <h2>Rotary grant</h2>
          <p>
            A Rotary International grant expanded healthcare, vocational training,
            hygiene through latrines and wells, the maternal &amp; child health unit,
            tailoring and computer training — helping women build self-reliance.
          </p>
          <p>
            <Link href="/gallery" className="font-medium text-brand-700">
              View the gallery
            </Link>{" "}
            for more scenes from our programs.
          </p>
        </ProseSection>
      </PageShell>
    </>
  );
}
