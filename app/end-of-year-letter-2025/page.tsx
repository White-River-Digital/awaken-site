import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { GivebutterPrimaryCta } from "@/components/givebutter-cta";
import { StatFacts } from "@/components/prose-image-section";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "End of Year Letter 2025",
  description:
    "Annual update from Bibi Bahrami on AWAKEN impact, partnerships, and goals for 2026.",
};

const impactStats = [
  "103,650 patients served through our health clinics (84% women & children)",
  "260 healthy newborns delivered in our birthing centers",
  "11,710 women received maternal healthcare",
  "$33,000 in earthquake relief and emergency aid provided to 822 families",
  "46 university scholarships supported",
  "Expanded home-school programs for rural children",
  "Supported entrepreneurs to launch a dental clinic and clothing store, promoting self-sufficiency",
] as const;

const giftTiers = [
  "$50 provides food and essentials for a family for one month",
  "$50/month supports a young woman in midwifery training",
  "$100 covers prenatal care and a safe delivery for a mother and baby",
] as const;

function SectionDivider({ className }: { className?: string }) {
  return (
    <hr
      className={cn("border-0 border-t border-brand-200/70", className)}
      aria-hidden
    />
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center font-heading text-2xl font-semibold text-brand-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function HighlightBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-100 bg-brand-50/70 px-6 py-8 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function EndOfYearLetterPage() {
  const letter = siteImages.endOfYearLetter2025;

  return (
    <>
      <header className="w-full">
        <div className="relative h-[220px] w-full overflow-hidden bg-muted sm:h-[260px] md:h-[300px]">
          <Image
            src={letter.hero}
            alt="Afghan girls and women supported by AWAKEN programs"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="bg-brand-800 px-4 py-5 text-center sm:py-6">
          <h1 className="font-heading text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            AWAKEN End of Year Letter
          </h1>
        </div>
      </header>
      <PageShell className="max-w-4xl">
        <section className="space-y-6 text-base leading-relaxed text-foreground">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="min-w-0 flex-1 space-y-4">
              <p className="text-lg font-medium">Dear friends and supporters,</p>
              <p>
                As we enter this holiday season—a time when many gather with loved
                ones—my heart is with the children in Afghanistan searching for a
                piece of bread and the families separated from those they love. This
                year has brought immense hardship, yet I feel both sorrow for the
                suffering that continues and deep gratitude for your compassion and
                steadfast support.
              </p>
              <p>
                Over the past year, Afghanistan has faced compounding crises.
                Earthquakes have destroyed more than 8,000 homes, the return of
                500,000+ Afghan families has placed enormous strain on already
                fragile communities, and severe drought has left rural families
                without crops or clean water. Today, 22 million people depend on
                humanitarian aid, and an estimated 3.5 million children and 1.2
                million pregnant or breastfeeding women are at risk of acute
                malnutrition. These realities shape everything we do at AWAKEN.
              </p>
            </div>
            <aside className="flex shrink-0 flex-col items-center gap-5 md:w-56">
              {letter.familyPhoto ? (
                <div className="relative aspect-[4/3] w-full max-w-[220px] overflow-hidden rounded-lg bg-muted ring-1 ring-border/60">
                  <Image
                    src={letter.familyPhoto}
                    alt="Bibi Bahrami with children supported by AWAKEN"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        <SectionDivider className="my-12" />

        {letter.banner ? (
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-border/60">
            <Image
              src={letter.banner}
              alt="AWAKEN community programs and impact in Afghanistan"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        ) : null}

        <section className="space-y-6">
          <SectionHeading>Our Impact Together in 2025</SectionHeading>
          <p className="text-center text-base leading-relaxed">
            Because of you, AWAKEN has remained a lifeline for so many families in
            need amid crisis and we remain one of the only providers of critical
            health services and emergency relief in our region.
          </p>
          <StatFacts items={[...impactStats]} />
          <div className="flex justify-center pt-2">
            <GivebutterPrimaryCta label="Donate To Save Lives" />
          </div>
        </section>

        <SectionDivider className="my-12" />

        <section className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-brand-900 sm:text-3xl">
            Impact Story: Drokhani&apos;s Journey to Self-Reliance
          </h2>
          {letter.storyPhoto ? (
            <div className="flex justify-center">
              <Image
                src={letter.storyPhoto}
                alt="Drokhani and her children, supported through AWAKEN programs"
                width={800}
                height={600}
                className="h-auto w-full max-w-lg rounded-lg shadow-sm ring-1 ring-border/60"
                sizes="(max-width: 512px) 100vw, 512px"
              />
            </div>
          ) : null}
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Drokhani, a mother of four, lost her husband while serving in the
              National Army. With no relatives to support her—only an elderly
              mother-in-law—she became the sole provider for her children,
              cleaning homes to survive and begging on days without work.
            </p>
            <p>
              When AWAKEN learned of her situation, we began providing monthly
              food packages to relieve the immediate burden. She also enrolled
              in our tailoring program and quickly learned the skill. Today,
              Drokhani earns a small but steady income sewing clothes for her
              children and neighbors—helping her regain dignity and build a more
              secure future for her family.
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <GivebutterPrimaryCta label="Support Women Like Drokhani" />
          </div>
        </section>

        <SectionDivider className="my-12" />

        <section className="space-y-8">
          <SectionHeading>Growing Our Impact: New Partnerships</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2">
            <HighlightBox>
              <h3 className="font-heading text-lg font-semibold text-brand-900">
                Midwife Training Partnership
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                In partnership with Friends of Afghanistan and the United Service
                Foundation, AWAKEN is launching a Midwife Training Program in
                Jalalabad to equip women with life-saving maternal health skills to
                serve their communities.
              </p>
            </HighlightBox>
            <HighlightBox>
              <h3 className="font-heading text-lg font-semibold text-brand-900">
                Child Neurological Care Partnership
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Through a new partnership with NeuroKids, AWAKEN is expanding
                neurological care coordination for children in eastern Afghanistan
                who otherwise lack access to specialized support.
              </p>
            </HighlightBox>
          </div>
        </section>

        <SectionDivider className="my-12" />

        <HighlightBox className="space-y-4">
          <SectionHeading>Looking Forward to 2026</SectionHeading>
          <p className="text-base leading-relaxed">
            Even as costs rise and the U.S. dollar weakens against Afghan
            currency, AWAKEN continues to stand strong. Thanks to your generosity,
            our clinics remain open, midwives continue delivering babies safely,
            and programs reach the most vulnerable families every day. At a time
            when many organizations have scaled back, AWAKEN remains one of the
            few providers of free, women-led healthcare and emergency relief in
            eastern Afghanistan.
          </p>
          <p className="text-base leading-relaxed">
            In 2026, we will focus on three priorities: maternal and child health,
            education access for girls and boys, and emergency relief for families
            in crisis. Our goals include treating 110,000+ patients, delivering
            300+ healthy newborns, expanding education to 600+ children, and
            increasing access to clean water in rural communities.
          </p>
        </HighlightBox>

        <SectionDivider className="my-12" />

        <section className="space-y-6">
          <SectionHeading>How Your Gift Makes a Difference</SectionHeading>
          <ul className="space-y-3 rounded-2xl border border-orange-100 bg-orange-50/90 px-6 py-6 text-base leading-relaxed">
            {giftTiers.map((tier) => (
              <li key={tier} className="flex gap-3">
                <span
                  className="mt-2 size-2 shrink-0 rounded-full bg-orange-400"
                  aria-hidden
                />
                <span>{tier}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-base leading-relaxed">
            At AWAKEN, <strong>98% of every donation</strong> goes directly to
            programs that save lives, educate children, and empower women.
          </p>
          <div className="flex justify-center pt-2">
            <GivebutterPrimaryCta label="Make a Year-End Gift" />
          </div>
        </section>

        <SectionDivider className="my-12" />

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            Thank you for your compassion and generosity. Your support keeps
            clinics open, children learning, and families cared for—even in the
            most difficult times. We also hope you&apos;ll join us at our Annual
            Dinner on April 18, 2026—please save the date.
          </p>
          <p className="italic text-muted-foreground">
            May this holiday season bring you peace, knowing your kindness
            continues to bring light and hope to families in Afghanistan.
          </p>
        </section>

        <div className="mt-10 space-y-4 text-base leading-relaxed">
          <p>With deepest gratitude,</p>
          <div>
            <p className="font-heading text-lg font-semibold text-brand-900">
              Bibi Bahrami
            </p>
            <p className="text-muted-foreground">
              Founder &amp; President, AWAKEN
            </p>
          </div>
          {letter.founderPhoto ? (
            <Image
              src={letter.founderPhoto}
              alt="Bibi Bahrami, Founder and President of AWAKEN"
              width={282}
              height={268}
              className="h-auto w-full max-w-xs rounded-lg shadow-sm ring-1 ring-border/60"
              sizes="320px"
            />
          ) : null}
        </div>
      </PageShell>
    </>
  );
}
