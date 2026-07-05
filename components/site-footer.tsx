import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/constants";
import { EmailSignup } from "@/components/email-signup";

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: siteConfig.social.twitter,
    label: "X (Twitter)",
    Icon: XIcon,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: siteConfig.social.amazon,
    label: "Amazon Smile",
    image: siteConfig.socialIcons.amazon,
  },
] as const;

export function SiteFooter() {
  return (
    <footer>
      <div className="border-y border-brand-200 bg-brand-100 px-4 py-8 text-center sm:px-6">
        <p className="mx-auto max-w-2xl font-heading text-lg font-semibold leading-snug text-brand-900 sm:text-xl">
          <span className="text-2xl font-bold text-brand-800 sm:text-3xl">98%</span>{" "}
          of your gifts go directly to our work in Afghanistan.
        </p>
      </div>
      <div className="border-t border-border/80 bg-brand-900 text-brand-50">
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
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-white text-brand-900 transition-colors hover:bg-white/90"
                    aria-label={link.label}
                  >
                    {"Icon" in link ? (
                      <link.Icon className="size-5" aria-hidden />
                    ) : (
                      <Image
                        src={link.image}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 object-contain brightness-0"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
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
      </div>
    </footer>
  );
}
