import Image from "next/image";
import type { Metadata } from "next";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell } from "@/components/page-shell";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Founder's Story",
  description:
    "Bibi Bahrami, founder of AWAKEN, on service, displacement, and building hope in Afghanistan.",
};

const YOUTUBE_EMBED = "https://www.youtube-nocookie.com/embed/YbiFUOrGlNg";
const YOUTUBE_LINK = "https://youtu.be/YbiFUOrGlNg";

function FoundersStoryMedia({ photoSrc }: { photoSrc: string }) {
  return (
    <aside className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading text-lg font-semibold leading-snug text-brand-900 sm:text-xl">
          Watch a video about a day in the life of Bibi Bahrami, AWAKEN&apos;s
          founder and president.
        </h2>
        <div className="mt-3 aspect-video overflow-hidden rounded-lg border border-border/80 bg-muted shadow-sm">
          <iframe
            src={YOUTUBE_EMBED}
            title="A day in the life of Bibi Bahrami — AWAKEN founder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          <a
            href={YOUTUBE_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            Watch on YouTube
          </a>{" "}
          if the player does not load.
        </p>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={photoSrc}
          alt="Bibi Bahrami with students at Qala-e-Malakh School"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 340px"
        />
      </div>
    </aside>
  );
}

export default function FoundersStoryPage() {
  const { hero, body } = siteImages.foundersStory;

  return (
    <>
      <PageImageHero
        src={hero}
        alt="Founder Bibi Bahrami and AWAKEN"
        title="Story of AWAKEN&apos;s Founder"
      />
      <PageShell>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-12">
          <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-start-1 lg:row-start-1">
            <p>
              Founded in Muncie, Indiana, AWAKEN is a highly visible part of
              Bibi&apos;s lifetime of service to others. Bibi was born in the
              village of Qala-e-Malakh located in the Behsood district of eastern
              Afghanistan and was strongly influenced by her parents&apos;
              continued assistance to disadvantaged people in their village when
              she was a child. At a young age, she learned and practiced values of
              service and community by working alongside them, always volunteering
              to help in any way she could.
            </p>
            <p>
              Life as she knew it completely changed when Bibi was just thirteen
              years old – it was 1979 and the Soviet Union had invaded
              Afghanistan. The resulting war devastated the country and led to the
              deaths of millions of Afghans; Bibi herself lost many family members
              including one of her brothers, three cousins and her grandfather.
            </p>
            <p>
              She and her family were forced to flee from their home. They walked
              for two days through the mountains to get to Peshawar, Pakistan and
              where she lived in a refugee camp for six years. There was no safe
              way for girls to get an education there so Bibi spent her time
              helping others: cooking, cleaning, giving vaccinations and IVs for
              anyone in need of care at the make-shift clinics in the camp.
            </p>
            <p>
              As fate would have it, her future husband was a refugee in the same
              camp and came from the same village of Qala-e-Malakh! Saber was a
              bright medical student whose education was disrupted by the war. He
              was also serving in a camp clinic at the time helping those in need.
              His parents loved the idea of Bibi as future wife for Saber and her
              parents likewise loved the idea of Saber as Bibi&apos;s husband. She
              and Saber were engaged before his leaving for the U.S. to further
              his medical career.
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-8">
            <FoundersStoryMedia photoSrc={body.bibiWithKids} />
          </div>

          <div className="space-y-4 text-base leading-relaxed text-foreground lg:col-start-1 lg:row-start-2">
            <p>
              In 1986, at the age of 19, Bibi came to Muncie, Indiana as and
              married Saber, who was finishing his residency. After learning
              English and earning her GED, she continued her education at Ball
              State University—all while raising six children. She beat the odds
              not only as a refugee but also as a mother and caretaker. She
              credits the educational system of the United States and the luxury of
              safe day care while she was in school for making it possible for her
              to achieve this dream. Still, there was not a day that went by since
              she moved to the US that she did not think about the women and
              children that she left behind, the ones that were not as fortunate as
              her.
            </p>
            <p>
              Over the years she and Saber made several trips back to the refugee
              camps in Pakistan and to the rural villages of Afghanistan. Since the
              war, over 7 million Afghans had been displaced from their homes and
              the need was greater than ever. Each time they visited, Bibi and
              Saber took medical and humanitarian supplies and treated as many
              people as possible. After the September 11 terrorist attack, there
              was a window of hope and opportunity for change in Afghanistan due
              to increased US support. Realizing that this was her chance to finally
              give back to the communities they left behind, she founded the
              non-profit AWAKEN in 2002 with the goal of providing educational
              opportunities, vocational training and healthcare to women and
              children of Afghanistan.
            </p>
          </div>
        </div>
      </PageShell>
    </>
  );
}
