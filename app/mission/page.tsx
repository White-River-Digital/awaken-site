import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "High impact, volunteer-driven — AWAKEN improves education, healthcare, vocational training, and emergency relief in Behsood, Afghanistan.",
};

const milestones = [
  {
    year: "2004",
    text: "AWAKEN completed its first initiative: creating the co-ed Qala-e-Malakh school, which now has over 1,500 students in grades 1–12.",
    image: siteImages.education.body.graduates,
    alt: "Students at Qala-e-Malakh School",
    side: "left" as const,
  },
  {
    year: "2005",
    text: "Established our first vocational training program, which lasts six months and teaches over 20 women how to sew, read, and practice hygiene.",
    image: siteImages.vocational.body.trainingClass,
    alt: "Women in AWAKEN vocational training",
    side: "right" as const,
  },
  {
    year: "2011",
    text: "Opened the Behsood Health Clinic, the first clinic in this district. The clinic now cares for 3,000 patients each month.",
    image: siteImages.healthcare.body.clinic,
    alt: "Behsood Health Clinic",
    side: "left" as const,
  },
  {
    year: "2016",
    text: "Opened the Maternal and Child Health Unit, an addition to the Behsood Health Clinic. Provides prenatal, delivery, and postnatal care to 200 women each month.",
    image: siteImages.healthcare.body.maternal,
    alt: "Maternal and child health care at AWAKEN",
    side: "right" as const,
  },
  {
    year: "2017",
    text: "Constructed four latrines, two hand-washing stations, and two drinking water stations for the clinic, as well as four latrines for the Qala-e-Malakh school.",
    image: siteImages.water.body.waterProject,
    alt: "Clean water and sanitation project",
    side: "left" as const,
  },
  {
    year: "2019",
    text: "Established a mobile health clinic to reach more villages beyond Behsood. Travels five days a week to provide basic health care and life-saving vaccines.",
    image: siteImages.healthcare.body.mobile,
    alt: "AWAKEN mobile health clinic",
    side: "right" as const,
  },
];

function MilestoneItem({
  year,
  text,
  image,
  alt,
  side,
}: (typeof milestones)[number]) {
  const imageCol = (
    <div className="relative aspect-[4/3] w-full max-w-[220px] overflow-hidden rounded-lg bg-muted shadow-sm ring-1 ring-border/60 sm:max-w-[250px]">
      <Image src={image} alt={alt} fill className="object-cover" sizes="250px" />
    </div>
  );

  const textCol = (
    <div className="max-w-md space-y-1 text-base leading-relaxed">
      <p className="font-heading text-xl font-semibold text-brand-800">{year}</p>
      <p>{text}</p>
    </div>
  );

  return (
    <li className="relative grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      {side === "left" ? (
        <>
          <div className="sm:justify-self-end">{textCol}</div>
          <div
            className="hidden size-4 rounded-full border-4 border-brand-200 bg-brand-600 sm:block"
            aria-hidden
          />
          <div className="sm:justify-self-start">{imageCol}</div>
        </>
      ) : (
        <>
          <div className="sm:justify-self-end">{imageCol}</div>
          <div
            className="hidden size-4 rounded-full border-4 border-brand-200 bg-brand-600 sm:block"
            aria-hidden
          />
          <div className="sm:justify-self-start">{textCol}</div>
        </>
      )}
    </li>
  );
}

export default function MissionPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.mission.hero}
        alt="Mountain landscape near Behsood, Afghanistan"
        title="Overview"
      />
      <PageShell>
        <ProseSection>
          <h2 className="!mt-0 text-center font-heading text-2xl font-semibold text-brand-900 sm:text-3xl">
            High Impact. Volunteer Driven.
          </h2>
          <p>
            In 2000, in the Behsood District near the city of Jalalabad and in
            other areas around the country there was intense poverty, lack of food
            and some of the highest infant mortality rates in the world. There
            were no safe places for children to attend school and women did not
            know how to read and lacked knowledge of basic health practices.
            After the Soviet Union invasion, the literacy rate in Afghanistan was
            45% for men but only 15% for women. Eighty percent of schools had
            been damaged or destroyed. Only 39% of boys and 3% of girls were
            enrolled in school. Healthcare was no better. The United Nations
            called Afghanistan &ldquo;the worst place in the world for a woman to
            become pregnant.&rdquo;
          </p>
          <p>
            For the past 19 years, AWAKEN has made a significant difference in
            100,000+ lives by providing key educational programs, vocational
            opportunities, health care services, and timely emergency assistance.
            AWAKEN targets its assistance toward women and children, who are
            typically among Afghanistan&apos;s most vulnerable and needy.
          </p>
          <p>
            AWAKEN was founded by Bibi Bahrami, originally from Jalalabad,
            Afghanistan, who currently serves as the President of the
            organization.{" "}
            <Link href="/founders-story" className="font-medium text-brand-700">
              Read her story here
            </Link>
            . AWAKEN is run by a volunteer Executive Board and is extremely
            cost-effective — over 98% of all funds raised go directly toward our
            programs in Afghanistan.
          </p>
        </ProseSection>

        <section className="mt-16" aria-labelledby="milestones-heading">
          <h2
            id="milestones-heading"
            className="text-center font-heading text-2xl font-semibold text-brand-900 sm:text-3xl"
          >
            Key Milestones of Our Work
          </h2>
          <ol className="relative mt-10 space-y-12 sm:space-y-16">
            <div
              className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-brand-200 sm:block"
              aria-hidden
            />
            {milestones.map((milestone) => (
              <MilestoneItem key={milestone.year} {...milestone} />
            ))}
          </ol>
        </section>

        <ProseSection className="mt-16">
          <h2>Where We Work</h2>
          <p>
            The work of AWAKEN is overseen by a group of dedicated board members
            in Indiana who come from diverse backgrounds, religions, and
            occupations. But they are united by their commitment to improving the
            lives of women and children in the Behsood District of
            Afghanistan&apos;s Nangarhar Province.
          </p>
          <p>
            AWAKEN&apos;s work is made possible through the generous support of
            hundreds of donors.{" "}
            <Link href="/donate" className="font-medium text-brand-700">
              Learn how you can help
            </Link>
            .
          </p>
        </ProseSection>
      </PageShell>
    </>
  );
}
