import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageImageHero } from "@/components/page-image-hero";
import { PageShell } from "@/components/page-shell";
import { afghanistanTeam, boardMembers } from "@/lib/constants";
import manifest from "@/lib/images-manifest.json";
import { siteImages } from "@/lib/site-images";
import {
  AFGHANISTAN_TEAM_PHOTO_PATTERNS,
  BOARD_MEMBER_PHOTO_PATTERNS,
  getTeamMemberPhotoPath,
} from "@/lib/team-photos";

export const metadata: Metadata = {
  title: "Our Team",
  description: "AWAKEN executive board and Afghanistan program leadership.",
};

function TeamMemberCard({
  name,
  role,
  subtitle,
  photoSrc,
  imageSizes,
}: {
  name: string;
  role: string;
  subtitle?: string;
  photoSrc: string | null;
  imageSizes: string;
}) {
  return (
    <Card className="border-border/80">
      <CardHeader className="justify-items-center text-center">
        {photoSrc ? (
          <div className="relative mb-1 size-32 shrink-0 overflow-hidden rounded-full bg-muted ring-2 ring-border/60 sm:size-36">
            <Image
              src={photoSrc}
              alt={name}
              fill
              className="object-cover object-top"
              sizes={imageSizes}
            />
          </div>
        ) : null}
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>
          {subtitle ? (
            <>
              {role} — {subtitle}
            </>
          ) : (
            role
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function OurTeamPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.ourTeam.hero}
        alt="AWAKEN leadership and board"
        title="Our team"
      />
      <PageShell>
        <section aria-labelledby="board-heading">
          <h2
            id="board-heading"
            className="font-heading text-2xl font-semibold text-brand-900"
          >
            Executive board
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((m) => (
              <TeamMemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                photoSrc={getTeamMemberPhotoPath(
                  manifest,
                  m.name,
                  BOARD_MEMBER_PHOTO_PATTERNS,
                )}
                imageSizes="144px"
              />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="afg-heading">
          <h2
            id="afg-heading"
            className="font-heading text-2xl font-semibold text-brand-900"
          >
            AWAKEN Afghanistan
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Our sister organization in Behsood runs and coordinates programs
            in-country.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {afghanistanTeam.map((m) => (
              <TeamMemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                subtitle={m.org}
                photoSrc={getTeamMemberPhotoPath(
                  manifest,
                  m.name,
                  AFGHANISTAN_TEAM_PHOTO_PATTERNS,
                )}
                imageSizes="144px"
              />
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
}
