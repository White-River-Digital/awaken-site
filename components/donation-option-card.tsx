import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import type { DonationOption } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DonationOptionCard({ option }: { option: DonationOption }) {
  return (
    <Card className="flex h-full flex-col border-border/80">
      <CardHeader className="flex-1">
        <CardTitle className="font-heading text-xl text-brand-900">
          {option.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {option.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t-0 bg-transparent pt-0">
        <Link
          href={option.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "inline-flex w-auto bg-brand-700 text-white hover:bg-brand-800 hover:text-white",
          )}
        >
          {option.buttonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}
