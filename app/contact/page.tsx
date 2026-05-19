import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AWAKEN by form, email, or mail.",
};

export default function ContactPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.contact.hero}
        alt="AWAKEN community contact"
        title="Contact us"
        subtitle={`We appreciate your interest in ${siteConfig.name}. Reach us using the form, email, or mailing address below.`}
      />
      <PageShell>
        <ContactForm />
        <div className="mx-auto mt-12 max-w-lg border-t border-border pt-8 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Mailing address</p>
          <address className="mt-2 not-italic">
            {siteConfig.mailingAddress.name}
            <br />
            {siteConfig.mailingAddress.line1}
            <br />
            {siteConfig.mailingAddress.city}, {siteConfig.mailingAddress.state}{" "}
            {siteConfig.mailingAddress.zip}
          </address>
          <p className="mt-4">
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-brand-700"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </PageShell>
    </>
  );
}
