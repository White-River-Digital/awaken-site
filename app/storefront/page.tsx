import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero, PageShell } from "@/components/page-shell";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, storefrontProducts } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Storefront",
  description:
    "Shop AWAKEN merchandise — cookbooks, cookies, and special experiences that support our work in Afghanistan.",
};

export default function StorefrontPage() {
  return (
    <>
      <PageHero
        title="Storefront"
        subtitle="Every purchase supports AWAKEN programs in Afghanistan — from Bibi's cookbook and cookies to special fundraising experiences."
      />
      <PageShell>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-muted-foreground">
            Browse our fundraiser items below. Checkout is handled on our secure
            online store.
          </p>
          <Link
            href={siteConfig.storefront.shopAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex shrink-0 items-center gap-2",
            )}
          >
            Shop all products
            <ExternalLink className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {storefrontProducts.map((product) => (
            <Card key={product.href} className="flex h-full flex-col border-border/80">
              <CardHeader className="flex-1">
                <CardTitle className="font-heading text-xl text-brand-900">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t-0 bg-transparent pt-0">
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants(),
                    "inline-flex w-auto items-center gap-2 bg-brand-700 text-white hover:bg-brand-800 hover:text-white",
                  )}
                >
                  View product
                  <ExternalLink className="size-4" aria-hidden />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageShell>
    </>
  );
}
