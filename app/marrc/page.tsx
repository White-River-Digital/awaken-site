import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Refugee Resettlement (MARRC)",
  description:
    "MARRC helped resettle Afghan refugees in East-Central Indiana (completed October 2022).",
};

export default function MarrcPage() {
  return (
    <>
      <PageImageHero
        eyebrow="Archive"
        src={siteImages.marrc.hero}
        alt="Community welcome and refugee support in Indiana"
        title="Refugee Resettlement (MARRC)"
        subtitle="Muncie Afghan Refugee Resettlement Committee — mission completed."
      />
      <PageShell>
        <ProseSection>
          <p>
            <strong>Muncie Afghan Refugee Resettlement Committee (MARRC)</strong>{" "}
            was a subcommittee of AWAKEN. From September 2021 to October 2022,
            MARRC helped <strong>resettle over 120 Afghan refugees</strong> in
            East-Central Indiana through the support of the local community.
          </p>
          <p>
            MARRC completed its mission of six months of urgent resettlement
            assistance. This page preserves the story of that work and the founder&apos;s
            letter of thanks.
          </p>
          <h2>Success of MARRC — letter from our founder</h2>
          <p>
            To our dear community: Muncie opened its arms to my husband and me over
            forty years ago when we arrived as refugees from Afghanistan. In 2002 we
            established AWAKEN to help women and children in Afghanistan — and when
            families arrived from Camp Atterbury, we brought neighbors together
            under one umbrella to maximize impact. MARRC coordinated housing,
            wellness, essentials, employment, education, welcome families, and more.
          </p>
          <p>
            Together we accepted <strong>33 families (115 people)</strong>. New
            Neighbors found jobs (sometimes more than one), earned driver&apos;s
            licenses and permits, enrolled children in schools, attended ESL classes,
            received sewing machines, and volunteered locally — while the community
            donated funds, time, and compassion at a remarkable scale.
          </p>
          <p>
            At the end of October 2022, AWAKEN closed the MARRC committee and
            returned primary focus to programs in Afghanistan — where need continues
            to grow.
          </p>
          <p className="font-medium">Sincerely,<br />Bibi Bahrami<br />Founder and President, AWAKEN</p>
        </ProseSection>
      </PageShell>
    </>
  );
}
