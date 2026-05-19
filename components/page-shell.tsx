import { cn } from "@/lib/utils";

export function PageHero({
  title,
  subtitle,
  eyebrow,
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "border-b border-border/70 bg-gradient-to-br from-brand-50/90 to-background",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function ProseSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "space-y-4 text-base leading-relaxed text-foreground [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-900 [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_p_a]:font-medium [&_p_a]:text-brand-700 [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-medium [&_li_a]:text-brand-700 [&_li_a]:underline-offset-4 hover:[&_li_a]:underline",
        className
      )}
    >
      {children}
    </section>
  );
}

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6", className)}>
      {children}
    </div>
  );
}
