import { ImageHero } from "@/components/image-hero";
import { PageHero } from "@/components/page-shell";

/** Uses a photo hero when `src` exists; otherwise text-only hero. */
export function PageImageHero({
  src,
  alt,
  title,
  subtitle,
  eyebrow,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  if (!src) {
    return <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />;
  }
  return (
    <ImageHero
      src={src}
      alt={alt}
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
    />
  );
}
