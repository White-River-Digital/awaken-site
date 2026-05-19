import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageHero({
  src,
  alt,
  title,
  subtitle,
  eyebrow,
  align = "bottom",
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "bottom" | "center";
}) {
  return (
    <div className="relative min-h-[240px] w-full overflow-hidden sm:min-h-[320px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent",
          align === "center" && "from-black/60 via-black/40"
        )}
      />
      <div
        className={cn(
          "relative z-10 flex min-h-[240px] flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[320px] sm:px-6",
          align === "center" && "justify-center pb-0 text-center"
        )}
      >
        <div className="mx-auto max-w-6xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-heading text-3xl font-bold text-white sm:text-4xl",
              eyebrow && "mt-2"
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-lg text-white/90">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
