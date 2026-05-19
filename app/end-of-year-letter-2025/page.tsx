import type { Metadata } from "next";
import Image from "next/image";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { GivebutterPrimaryCta } from "@/components/givebutter-cta";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "End of Year Letter 2025",
  description:
    "Annual update from Bibi Bahrami on AWAKEN impact, partnerships, and goals for 2026.",
};

export default function EndOfYearLetterPage() {
  return (
    <>
      <PageImageHero
        eyebrow="Annual letter"
        src={siteImages.endOfYearLetter2025.hero}
        alt="AWAKEN annual letter and impact"
        title="End of year letter 2025"
        subtitle="From Founder & President Bibi Bahrami"
      />
      <PageShell>
        <ProseSection>
          {siteImages.annualLetterIllustration ? (
            <div className="not-prose mb-8 flex justify-center sm:float-right sm:mb-4 sm:ml-8 sm:max-w-[240px]">
              <Image
                src={siteImages.annualLetterIllustration}
                alt="AWAKEN — Afghan Women's and Kids' Education and Necessities"
                width={480}
                height={295}
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </div>
          ) : null}
          <p>Dear friends and supporters,</p>
          <p>
            As we enter this holiday season — a time when many gather with loved
            ones — my heart is with the children in Afghanistan searching for a
            piece of bread and the families separated from those they love. This
            year has brought immense hardship, yet I feel both sorrow for the
            suffering that continues and deep gratitude for your compassion and
            steadfast support.
          </p>
          <p>
            Over the past year, Afghanistan has faced compounding crises.
            Earthquakes have destroyed more than 8,000 homes, the return of
            500,000+ Afghan families has placed enormous strain on already fragile
            communities, and severe drought has left rural families without crops
            or clean water. Today, 22 million people depend on humanitarian aid,
            and millions of children and mothers are at risk of acute malnutrition.
          </p>
          <h2>Our impact together in 2025</h2>
          <p>
            Because of you, AWAKEN has remained a lifeline for families amid crisis —
            one of the few providers of critical health services and emergency
            relief in our region.
          </p>
          <ul>
            <li>103,650 patients served through our health clinics (84% women &amp; children)</li>
            <li>260 healthy newborns delivered in our birthing centers</li>
            <li>11,710 women received maternal healthcare</li>
            <li>$33,000 in earthquake relief and emergency aid for 822 families</li>
            <li>46 university scholarships supported</li>
            <li>Expanded home-school programs for rural children</li>
            <li>Supported entrepreneurs launching a dental clinic and clothing store</li>
          </ul>
          <div className="not-prose flex flex-wrap gap-4 py-4">
            <GivebutterPrimaryCta label="Donate to save lives" />
          </div>
          <h2>Impact story: Drokhani&apos;s journey</h2>
          <p>
            Drokhani, a mother of four, lost her husband while serving in the
            National Army. AWAKEN provided monthly food packages and she enrolled
            in tailoring — today she earns a small but steady income sewing for her
            children and neighbors, rebuilding dignity and security.
          </p>
          <div className="not-prose py-2">
            <GivebutterPrimaryCta
              label="Support women like Drokhani"
              className=""
            />
          </div>
          <h2>New partnerships</h2>
          <h3>Midwife training</h3>
          <p>
            With Friends of Afghanistan and the United Service Foundation, AWAKEN is
            launching midwife training in Jalalabad to equip women with lifesaving
            maternal health skills.
          </p>
          <h3>Child neurological care</h3>
          <p>
            Through NeuroKids, AWAKEN is expanding neurological care coordination for
            children in eastern Afghanistan who lack access to specialized support.
          </p>
          <h2>Looking forward to 2026</h2>
          <p>
            Even as costs rise, AWAKEN continues to stand strong. In 2026 we will
            focus on maternal and child health, education access for girls and boys,
            and emergency relief — including goals to treat 110,000+ patients,
            deliver 300+ healthy newborns, expand education to 600+ children, and
            increase clean water access.
          </p>
          <h2>How your gift makes a difference</h2>
          <ul>
            <li>$50 provides food and essentials for a family for one month</li>
            <li>$50/month supports a young woman in midwifery training</li>
            <li>$100 covers prenatal care and a safe delivery</li>
          </ul>
          <p>
            At AWAKEN, <strong>98% of every donation</strong> goes directly to
            programs that save lives, educate children, and empower women.
          </p>
          <div className="not-prose py-4">
            <GivebutterPrimaryCta label="Make a year-end gift" />
          </div>
          <p>
            Thank you for your compassion. Please save the date for our{" "}
            <strong>Annual Dinner on April 18, 2026</strong>.
          </p>
          <p>
            With deepest gratitude,
            <br />
            Bibi Bahrami
            <br />
            Founder &amp; President, AWAKEN
          </p>
        </ProseSection>
      </PageShell>
    </>
  );
}
