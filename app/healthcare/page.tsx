import type { Metadata } from "next";
import { ImageHero } from "@/components/image-hero";
import {
  HighlightCallout,
  ProseImageSection,
  StatFacts,
} from "@/components/prose-image-section";
import { PageShell, ProseSection } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Behsood Health Clinic, maternal & child health, and mobile clinic services in eastern Afghanistan.",
};

export default function HealthcarePage() {
  const { body } = siteImages.healthcare;

  return (
    <>
      <ImageHero
        src={siteImages.healthcare.hero}
        alt="Healthcare clinic and community care in Behsood"
        title="Health care"
        subtitle="Essential health services for rural and hard-to-reach communities near Behsood."
      />
      <PageShell>
        <ProseSection>
          <p>
            Health care is at the core of our work. We provide essential health
            services to rural and hard-to-reach communities near Behsood,
            Afghanistan. Our services have positively impacted over{" "}
            <strong>100,000 lives</strong>. AWAKEN maintains the Behsood Health
            Clinic, a maternal &amp; child health unit, and a mobile health
            clinic.
          </p>
        </ProseSection>

        <ProseImageSection
          title="Behsood Health Clinic"
          image={{
            src: body.clinic,
            alt: "Patients and staff at the Behsood Health Clinic",
          }}
        >
          <HighlightCallout>
            Over <strong>9 million people</strong> in Afghanistan lack access to
            basic health services
          </HighlightCallout>
          <p>
            AWAKEN&apos;s Behsood Health Clinic opened in 2011 and serves about{" "}
            <strong>40,000 people</strong>. The clinic sees around{" "}
            <strong>100 patients each day</strong> (about 3,000 per month). Most
            are women and children, many walking several kilometers to reach
            care. The clinic is staffed by a physician, clinic administrator,
            midwives, vaccinators, pharmacist, lab technician, and support staff.
          </p>
          <StatFacts
            items={[
              "3,000+ patients seen per month",
              "1,400+ vaccinations per month",
              "Powered by renewable solar energy",
            ]}
          />
        </ProseImageSection>

        <ProseImageSection
          title="Maternal & Child Health Unit"
          image={{
            src: body.maternal,
            alt: "Maternal and child health care at AWAKEN's birthing center",
          }}
          imagePosition="left"
        >
          <HighlightCallout>
            In 2015, more than <strong>one in 18 children</strong> died before
            their first birthday in Afghanistan
          </HighlightCallout>
          <p>
            With support from the Rotary Foundation, AWAKEN established the
            Maternal &amp; Child Health Unit in 2016 at our existing clinic —
            improving birthing outcomes in a region with extremely high maternal
            and infant mortality. Services include prenatal and postnatal care,
            delivery, and family planning for approximately{" "}
            <strong>200 women each month</strong>; in a typical year over{" "}
            <strong>120 women</strong> give birth with midwife support.
          </p>
          <StatFacts
            items={[
              "200+ women receive prenatal, delivery, and family planning care monthly",
              "120+ newborn deliveries supported each year",
            ]}
          />
        </ProseImageSection>

        <ProseImageSection
          title="Mobile clinic"
          image={{
            src: body.mobile,
            alt: "AWAKEN mobile health clinic serving remote villages",
          }}
        >
          <HighlightCallout>
            Nearly <strong>75% of Afghans</strong> live in rural areas with poor
            infrastructure
          </HighlightCallout>
          <p>
            Launched in April 2019, the mobile clinic reaches remote villages
            with a five-person staff, traveling five days a week. Services include
            screenings and life-saving vaccines (polio, tuberculosis, measles,
            tetanus, diphtheria, pertussis, hepatitis B, Hib, and more) for{" "}
            <strong>2,000+ people per month</strong> across 10+ villages.
          </p>
          <StatFacts
            items={[
              "2,000+ people treated per month",
              "Reaching 10+ villages in remote areas",
            ]}
          />
        </ProseImageSection>
      </PageShell>
    </>
  );
}
