import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ProgramCard({ title, description, href }: ProgramCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full border-border/80 transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="font-heading text-xl text-brand-900 group-hover:text-brand-700">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
            Learn more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardHeader>
      </Card>
    </Link>
  );
}
