import Image from "next/image";
import Link from "next/link";
import { StatsSection } from "@/components/stats-section";
import { ProgramCard } from "@/components/program-card";
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 text-center sm:px-6">
          <div className="pointer-events-auto max-w-4xl">
            <h1 className="font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
              {siteConfig.organizationName}
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className={cn(
                  buttonVariants({ size: "lg", variant: "ghost" }),
                  "h-14 rounded-lg px-8 text-base bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:text-white"
                )}
              >
                Donate
              </Link>
              <Link
                href="/our-team"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "h-14 rounded-lg px-8 text-base bg-white/95 text-brand-900 hover:bg-white"
                )}
              >
                Our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-16 text-center" aria-labelledby="mission-heading">
          <h2
            id="mission-heading"
            className="font-heading text-2xl font-bold text-brand-900 sm:text-3xl"
          >
            Our mission
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
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

        <section className="rounded-2xl bg-brand-800 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            {siteImages.annualLetterPhoto ? (
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[220px] shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20 sm:mx-0">
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
              <h2 className="font-heading text-xl font-semibold text-white">
                End of year letter
              </h2>
              <p className="mt-2 text-white/90">
                Read the annual update from Founder &amp; President Bibi Bahrami.
              </p>
              <Link
                href="/end-of-year-letter-2025"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "mt-6 inline-flex rounded-lg bg-white/95 text-brand-900 hover:bg-white"
                )}
              >
                Read the 2025 letter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
