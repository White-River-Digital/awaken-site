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

export default function OurTeamPage() {
  return (
    <>
      <PageImageHero
        src={siteImages.ourTeam.hero}
        alt="AWAKEN leadership and board"
        title="Our team"
        subtitle="Volunteer leadership in the U.S. and dedicated staff in Afghanistan."
      />
      <PageShell>
        <section aria-labelledby="board-heading">
          <h2
            id="board-heading"
            className="font-heading text-2xl font-semibold text-brand-900"
          >
            Executive board
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((m) => {
              const src = getTeamMemberPhotoPath(
                manifest,
                m.name,
                BOARD_MEMBER_PHOTO_PATTERNS,
              );
              return (
                <Card key={m.name} className="border-border/80 overflow-hidden">
                  {src ? (
                    <div className="relative aspect-[4/3] w-full bg-muted">
                      <Image
                        src={src}
                        alt={`${m.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width:1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-lg">{m.name}</CardTitle>
                    <CardDescription>{m.role}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
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
            {afghanistanTeam.map((m) => {
              const src = getTeamMemberPhotoPath(
                manifest,
                m.name,
                AFGHANISTAN_TEAM_PHOTO_PATTERNS,
              );
              return (
              <Card key={m.name} className="overflow-hidden">
                {src ? (
                  <div className="relative aspect-[4/3] w-full bg-muted">
                    <Image
                      src={src}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width:640px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
                <CardHeader>
                  <CardTitle className="text-lg">{m.name}</CardTitle>
                  <CardDescription>
                    {m.role} — {m.org}
                  </CardDescription>
                </CardHeader>
              </Card>
              );
            })}
          </div>
        </section>
      </PageShell>
    </>
  );
}
