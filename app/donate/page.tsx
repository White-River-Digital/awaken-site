import type { Metadata } from "next";
import { DonationOptionCard } from "@/components/donation-option-card";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { HighlightCallout } from "@/components/prose-image-section";
import { donationOptions, siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Low cost, high impact — donate online via Givebutter, PayPal Giving Fund, Venmo, LaunchGood, or by mail to AWAKEN.",
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
        <section aria-labelledby="donate-online-heading">
          <h2
            id="donate-online-heading"
            className="font-heading text-2xl font-semibold text-brand-900"
          >
            Donate online
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Choose the giving option that works best for you. Every method
            supports AWAKEN&apos;s work in Afghanistan.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {donationOptions.map((option) => (
              <DonationOptionCard key={option.title} option={option} />
            ))}
          </div>
        </section>

        <ProseSection className="mt-12">
          <p>
            Each year AWAKEN changes the lives of tens of thousands of women and
            children in rural Afghanistan — but that work depends on donors like
            you. AWAKEN operates efficiently: historically, projected annual
            expenses have supported comprehensive healthcare, vocational training,
            education, and water &amp; sanitation across Behsood.
          </p>
          <HighlightCallout>
            <strong>98% of every dollar</strong> goes directly to work in
            Afghanistan. AWAKEN has{" "}
            <strong>no paid employees or board members</strong> in the U.S.
          </HighlightCallout>
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
          <h2>Donations made in memory of our dear friends of AWAKEN:</h2>
          <ul>
            <li>Chic Clark</li>
            <li>Jay Zimmerman</li>
            <li>Thomas J. Wagner</li>
            <li>Kathryn Garofolo</li>
          </ul>
          <h2>Donations made in honor of our dear friends of AWAKEN:</h2>
          <ul>
            <li>Gary &amp; Pat Garofolo</li>
          </ul>
        </ProseSection>
      </PageShell>
    </>
  );
}
