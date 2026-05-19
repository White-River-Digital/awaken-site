"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatsSection({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="grid gap-8 py-14 sm:grid-cols-3" aria-label="Impact statistics">
      {stats.map((s) => (
        <StatBlock key={s.label} stat={s} />
      ))}
    </section>
  );
}

function StatBlock({ stat }: { stat: Stat }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = stat.value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // ease-out cubic
          const e = 1 - Math.pow(1 - t, 3);
          setN(Math.floor(target * e + 0.0001));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p
        className={cn(
          "font-heading text-4xl font-bold tabular-nums text-brand-800 sm:text-5xl"
        )}
      >
        {n.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium leading-snug text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}
