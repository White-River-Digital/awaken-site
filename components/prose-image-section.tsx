import Image from "next/image";
import { cn } from "@/lib/utils";

export function HighlightCallout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-orange-100 bg-orange-50/90 px-4 py-3 text-sm italic leading-relaxed text-foreground">
      {children}
    </p>
  );
}

export function StatFacts({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 rounded-lg border border-brand-100 bg-brand-50/80 px-4 py-4 text-sm leading-snug text-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type ProseImageSectionProps = {
  title?: string;
  image: { src: string; alt: string };
  /** Image on the right (default) or left column on md+ */
  imagePosition?: "left" | "right";
  /** Taller portrait crop for vertical photos */
  portrait?: boolean;
  /** Shown above the image in the image column (e.g. stats beside Saheli photo) */
  imageColumnHeader?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function ProseImageSection({
  title,
  image,
  imagePosition = "right",
  portrait = false,
  imageColumnHeader,
  children,
  className,
}: ProseImageSectionProps) {
  const imageCol = (
    <div className="flex flex-col gap-4">
      {imageColumnHeader}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-muted",
          portrait ? "aspect-[3/4] max-w-xs" : "aspect-[4/3]",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
    </div>
  );

  const textCol = (
    <div className="space-y-4 text-base leading-relaxed text-foreground [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-900 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6">
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );

  return (
    <section
      className={cn(
        "mt-12 grid gap-8 md:grid-cols-2 md:items-start md:gap-10",
        className,
      )}
    >
      {imagePosition === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </section>
  );
}
