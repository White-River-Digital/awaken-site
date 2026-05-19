"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Slide = { src: string; alt: string };

type HeroSlideshowProps = {
  slides: readonly Slide[];
  intervalMs?: number;
  className?: string;
};

export function HeroSlideshow({
  slides,
  intervalMs = 7000,
  className,
}: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;

  return (
    <div className={cn("relative h-[min(72vh,520px)] w-full overflow-hidden", className)}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
