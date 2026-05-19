import type { Metadata } from "next";
import Link from "next/link";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { GivebutterPrimaryCta } from "@/components/givebutter-cta";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Low cost, high impact — donate online via Givebutter or by mail to AWAKEN.",
};

export default function DonatePage() {
  return (
    <>
      <PageImageHero
        src={siteImages.donate.hero}
        alt="Donor support for AWAKEN programs in Afghanistan"
        title="Donate"
        subtitle="Low cost. High impact. Every dollar counts."
      />
      <PageShell>
        <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-brand-900">
            Donate online
          </h2>
          <p className="mt-2 text-muted-foreground">
            Secure checkout through Givebutter — use the same campaign as linked
            from our annual letter and events.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <GivebutterPrimaryCta
              label="Give now on Givebutter"
              className="bg-brand-700 hover:bg-brand-800 text-white"
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Widget ID (legacy embed): {siteConfig.givebutter.widgetId} — if you
            use Givebutter&apos;s embed snippet, drop it into a client component
            alongside this page.
          </p>
        </div>

        <ProseSection className="mt-12">
          <p>
            Each year AWAKEN changes the lives of tens of thousands of women and
            children in rural Afghanistan — but that work depends on donors like
            you. AWAKEN operates efficiently: historically, projected annual
            expenses have supported comprehensive healthcare, vocational training,
            education, and water &amp; sanitation across Behsood.
          </p>
          <p>
            <strong>98% of every dollar</strong> goes directly to work in
            Afghanistan. AWAKEN has <strong>no paid employees or board members</strong>{" "}
            in the U.S.
          </p>
          <h2>Donate by mail</h2>
          <p>
            Checks payable to <strong>AWAKEN</strong> may be mailed to:
          </p>
          <address className="not-italic">
            AWAKEN
            <br />
            {siteConfig.mailingAddress.line1}
            <br />
            {siteConfig.mailingAddress.city}, {siteConfig.mailingAddress.state}{" "}
            {siteConfig.mailingAddress.zip}
          </address>
          <h2>About your donation</h2>
          <p>
            AWAKEN is a <strong>501(c)(3)</strong> organization incorporated in
            Indiana. Federal Tax ID{" "}
            <strong>{siteConfig.taxId}</strong>. Donors receive an end-of-year
            letter for tax records. Questions:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <p>
            AWAKEN does not share or supply personal information of donors for
            solicitation.
          </p>
          <h2>In memory &amp; in honor</h2>
          <p>
            The original site listed memorial gifts for Chic Clark, Jay Zimmerman,
            Thomas J. Wagner, Kathryn Garofolo; and honor gifts for Gary &amp; Pat
            Garofolo. Thank you to everyone who remembers loved ones through
            support for Afghan families.
          </p>
          <p>
            <Link href="/contact" className="font-medium text-brand-700">
              Contact us
            </Link>{" "}
            to dedicate a gift.
          </p>
        </ProseSection>
      </PageShell>
    </>
  );
}
