import Image from "next/image";
import Link from "next/link";
import { StatsSection } from "@/components/stats-section";
import { ProgramCard } from "@/components/program-card";
import { EmailSignup } from "@/components/email-signup";
import {
  impactStats,
  programCards,
  siteConfig,
} from "@/lib/constants";
import { siteImages } from "@/lib/site-images";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative" aria-label="Introduction">
        <div className="relative h-[min(72vh,520px)] w-full overflow-hidden">
          {siteImages.homeHero ? (
            <Image
              src={siteImages.homeHero}
              alt="Afghan women and children in a community education program"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 text-center sm:px-6">
          <div className="pointer-events-auto max-w-3xl rounded-2xl bg-black/45 px-6 py-10 backdrop-blur-sm sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
              Afghan Women&apos;s And Kids&apos; Education &amp; Necessities
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Hope, health, and education for Afghan families
            </h1>
            <p className="mt-4 text-lg text-white/90">
              We improve access to education, healthcare, vocational opportunity,
              and clean water so women and children can thrive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand-600 hover:bg-brand-700 text-white"
                )}
              >
                Donate
              </Link>
              <Link
                href="/our-team"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "bg-white/95 text-brand-900 hover:bg-white"
                )}
              >
                Our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-16" aria-labelledby="mission-heading">
          <h2
            id="mission-heading"
            className="font-heading text-2xl font-bold text-brand-900 sm:text-3xl"
          >
            Our mission
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Our mission is to improve access to education, provide healthcare
            services, create vocational opportunities, and clean water &amp;
            sanitation to enable Afghan women and families to become literate,
            healthy, and self-sufficient.
          </p>
        </section>

        <StatsSection stats={impactStats} />

        <section className="pb-20" aria-labelledby="programs-heading">
          <h2
            id="programs-heading"
            className="font-heading text-2xl font-bold text-brand-900 sm:text-3xl"
          >
            Our programs
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {programCards.map((p) => (
              <ProgramCard key={p.href} {...p} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-brand-100 bg-brand-50/60 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            {siteImages.annualLetterPhoto ? (
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[220px] shrink-0 overflow-hidden rounded-lg sm:mx-0">
                <Image
                  src={siteImages.annualLetterPhoto}
                  alt="Bibi Bahrami with children supported by AWAKEN"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            ) : null}
            <div>
              <h2 className="font-heading text-xl font-semibold text-brand-900">
                End of year letter
              </h2>
              <p className="mt-2 text-muted-foreground">
                Read the annual update from Founder &amp; President Bibi Bahrami.
              </p>
              <Link
                href="/end-of-year-letter-2025"
                className={cn(
                  buttonVariants(),
                  "mt-6 inline-flex bg-brand-700 hover:bg-brand-800 text-primary-foreground"
                )}
              >
                Read the 2025 letter
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="newsletter-heading">
          <h2
            id="newsletter-heading"
            className="text-center font-heading text-2xl font-bold text-brand-900"
          >
            Stay updated on all the good happenings
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Sign up for our email list — we&apos;ll never spam you. Unsubscribe
            anytime. Questions?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-brand-700 underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <EmailSignup source="home" />
          </div>
        </section>
      </div>
    </>
  );
}
