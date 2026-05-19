import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

export function GalleryGrid({
  images,
  columnsClass = "sm:grid-cols-2 lg:grid-cols-3",
  className,
}: {
  images: GalleryImage[];
  columnsClass?: string;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3 sm:gap-4",
        columnsClass,
        "list-none p-0 m-0",
        className
      )}
    >
      {images.map((img) => (
        <li
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform hover:scale-[1.02]"
            sizes="(max-width:640px) 100vw, 33vw"
          />
        </li>
      ))}
    </ul>
  );
}
