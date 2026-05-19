import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { EmailSignup } from "@/components/email-signup";

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    icon: siteConfig.socialIcons.facebook,
  },
  {
    href: siteConfig.social.twitter,
    label: "X (Twitter)",
    icon: siteConfig.socialIcons.twitter,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: siteConfig.socialIcons.instagram,
  },
  {
    href: siteConfig.social.amazon,
    label: "Amazon Smile",
    icon: siteConfig.socialIcons.amazon,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-brand-900 text-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              Stay in touch
            </h2>
            <p className="mt-2 text-sm text-brand-100">
              Stay updated on all the good happenings by signing up for our
              email list.
            </p>
            <div className="mt-4 max-w-sm">
              <EmailSignup variant="light" source="footer" />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              Connect
            </h2>
            <ul className="mt-3 flex flex-wrap gap-3" aria-label="Social media">
              {socialLinks.map(({ href, label, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                    aria-label={label}
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[22px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-100">
              98% of your gifts go directly to our work in Afghanistan.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              Contact
            </h2>
            <address className="mt-3 not-italic text-sm text-brand-100">
              {siteConfig.mailingAddress.name}
              <br />
              {siteConfig.mailingAddress.line1}
              <br />
              {siteConfig.mailingAddress.city}, {siteConfig.mailingAddress.state}{" "}
              {siteConfig.mailingAddress.zip}
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-white underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </address>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Contact form
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-brand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            AWAKEN is a 501(c)(3) nonprofit • Federal Tax ID {siteConfig.taxId}
          </p>
        </div>
      </div>
    </footer>
  );
}
