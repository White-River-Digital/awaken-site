"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/site-images";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { OurWorkMobileNav, OurWorkNavMenu } from "@/components/our-work-nav-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 font-semibold text-brand-900 tracking-tight"
        >
          {siteImages.logo ? (
            <Image
              src={siteImages.logo}
              alt={`${siteConfig.name} logo`}
              width={1200}
              height={915}
              className="h-14 w-auto object-contain object-left"
              sizes="80px"
              priority
            />
          ) : (
            <span className="text-xl font-bold text-brand-800">{siteConfig.name}</span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center gap-1"
          aria-label="Main"
        >
          {mainNav.map((item, index) => {
            const node =
              "href" in item ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ) : (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium",
                      "outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                    )}
                  >
                    {item.label}
                    <span className="sr-only">menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-52">
                    {item.items.map((sub) => (
                      <DropdownMenuItem
                        key={sub.href}
                        onClick={() => router.push(sub.href)}
                      >
                        {sub.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );

            if (index === 0) {
              return (
                <span key={`${item.label}-group`} className="contents">
                  {node}
                  <OurWorkNavMenu />
                </span>
              );
            }

            return node;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex bg-brand-700 hover:bg-brand-800 text-white"
            )}
          >
            Donate
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "lg:hidden"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw,22rem)] data-[side=right]:w-[min(100vw,22rem)] gap-0 bg-white p-0"
            >
              <SheetHeader className="border-b border-border/70 px-5 py-4">
                <SheetTitle className="text-left font-heading text-lg font-semibold text-brand-900">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav
                className="min-h-0 flex-1 overflow-y-auto px-5 py-5"
                aria-label="Mobile"
              >
                <div className="flex flex-col gap-6">
                  {mainNav.map((item, index) => {
                    const node =
                      "href" in item ? (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-md py-2 text-base font-medium text-foreground hover:text-brand-800"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div key={item.label} className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">
                            {item.label}
                          </p>
                          <ul className="space-y-0.5">
                            {item.items.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  className="block rounded-md py-2 text-base text-foreground hover:text-brand-800"
                                  onClick={() => setOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );

                    if (index === 0) {
                      return (
                        <div key={`${item.label}-group`} className="space-y-6">
                          {node}
                          <OurWorkMobileNav
                            onNavigate={() => setOpen(false)}
                          />
                        </div>
                      );
                    }

                    return node;
                  })}
                </div>
              </nav>
              <SheetFooter className="border-t border-border/70 px-5 py-4">
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "w-full bg-brand-700 text-white hover:bg-brand-800 hover:text-white"
                  )}
                >
                  Donate
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
