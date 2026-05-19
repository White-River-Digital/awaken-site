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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 font-semibold text-brand-900 tracking-tight"
        >
          {siteImages.logo ? (
            <Image
              src={siteImages.logo}
              alt={`${siteConfig.name} logo`}
              width={200}
              height={80}
              className="h-12 w-auto object-contain object-left"
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
          {mainNav.map((item) => {
            if ("href" in item) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className={cn(
                    "inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium",
                    "outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
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
            <SheetContent side="right" className="w-[min(100vw,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                {mainNav.map((item) => {
                  if ("href" in item) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-medium py-1"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <div key={item.label} className="space-y-2">
                      <div className="text-xs font-semibold uppercase text-muted-foreground">
                        {item.label}
                      </div>
                      <ul className="space-y-1 border-l-2 border-brand-100 pl-3">
                        {item.items.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block py-1"
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "mt-2 bg-brand-700 hover:bg-brand-800 text-primary-foreground"
                  )}
                >
                  Donate
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
