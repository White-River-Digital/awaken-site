import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GivebutterPrimaryCta({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={siteConfig.givebutter.campaignUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size: "lg" }),
        "bg-brand-700 text-white no-underline hover:bg-brand-800 hover:text-white",
        className,
      )}
    >
      {label}
    </Link>
  );
}
