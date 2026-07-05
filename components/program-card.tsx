import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function ProgramCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: ProgramCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full border-border/80 py-0 transition-shadow hover:shadow-md">
        <div className="flex h-full gap-4 p-4">
          <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-lg sm:w-32">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
            <h3 className="font-heading text-xl text-brand-900 group-hover:text-brand-700">
              {title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
