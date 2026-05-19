import type { Metadata } from "next";
import Link from "next/link";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Fundraising Dinner",
  description:
    "AWAKEN's annual fundraising dinner — Afghan cuisine, marketplace, and silent auction.",
};

export default function DinnerPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.dinner.hero}
        alt="AWAKEN annual fundraising dinner"
        title="AWAKEN's 24th Annual Fundraising Dinner"
        subtitle="Saturday, April 18th • 5:00 pm — RSVP by April 10th"
      />
      <PageShell>
        <ProseSection>
          <p>
            <strong>Unitarian Universalist Church</strong> (4800 W Bradford Dr)
          </p>
          <p>
            Join us for authentic Afghan cuisine, an Afghan goods marketplace,
            and a silent auction as we share updates about our work in Afghanistan.
          </p>
          <ul>
            <li>
              <strong>$75</strong> adults
            </li>
            <li>
              <strong>$30</strong> students (with student ID)
            </li>
            <li>
              <strong>$20</strong> children 12 and under
            </li>
            <li>
              <strong>$375</strong> table for six guests
            </li>
          </ul>
          <p>
            To register, return the RSVP form and payment by April 10th (download
            RSVP form from the legacy site if needed, or{" "}
            <Link href="/contact" className="font-medium text-brand-700">
              contact us
            </Link>
            ).
          </p>
          <p>
            Your support is making a difference: 103,650 patients treated — 85%
            women &amp; children; 260 healthy newborns; 11,710 women received
            maternal health services; home schools and scholarships supported;
            emergency aid for families in crisis.
          </p>
          <p>
            Afghanistan faces one of the world&apos;s most severe humanitarian
            crises; with your help AWAKEN remains one of the few providers of free
            healthcare, maternal services, education, and emergency relief in our
            region. <strong>98%</strong> of donations go directly to programs,
            including ticket proceeds.
          </p>
          <p>Sincerely,<br />Bibi Bahrami<br />Founder &amp; President</p>
          <div className="not-prose pt-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "bg-brand-700 hover:bg-brand-800 text-primary-foreground"
              )}
            >
              RSVP via contact form
            </Link>
          </div>
        </ProseSection>
      </PageShell>
    </>
  );
}
