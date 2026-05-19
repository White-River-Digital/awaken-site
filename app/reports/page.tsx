import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { reportLinks, siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Reports",
  description: "Financial summaries and transparency reports from AWAKEN.",
};

export default function ReportsPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.reports.hero}
        alt="AWAKEN financial transparency"
        title="Reports"
        subtitle="Financial history — our commitment to transparency."
      />
      <PageShell>
        <ProseSection>
          <p>
            In our commitment to full transparency, financial summaries for recent
            fiscal years are linked below (same document URLs as the legacy site).
            Questions:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          {Object.entries(reportLinks).map(([year, links]) => (
              <section key={year} className="mt-10">
                <h2>{year} fiscal year</h2>
                <ul>
                  {links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </ProseSection>
      </PageShell>
    </>
  );
}
