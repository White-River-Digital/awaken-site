"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ourWorkNav } from "@/lib/our-work";
import { cn } from "@/lib/utils";

export function OurWorkNavMenu({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium",
          "outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
      >
        Our Work
        <span className="sr-only">menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="min-w-52 p-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wide text-brand-800">
            Current
          </DropdownMenuLabel>
          {ourWorkNav.current.map((item) => (
            <DropdownMenuItem
              key={item.href}
              className="cursor-pointer"
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wide text-brand-800">
            Past
          </DropdownMenuLabel>
          {ourWorkNav.past.map((item) => (
            <DropdownMenuItem
              key={item.href}
              className="cursor-pointer"
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function OurWorkMobileNav({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold uppercase text-muted-foreground">
        Our Work
      </div>
      <div className="space-y-4 border-l-2 border-brand-100 pl-3">
        <div>
          <p className="text-xs font-semibold uppercase text-muted-foreground">
            Current
          </p>
          <ul className="mt-1 space-y-1">
            {ourWorkNav.current.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-0.5 text-muted-foreground hover:text-foreground"
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-muted-foreground">
            Past
          </p>
          <ul className="mt-1 space-y-1">
            {ourWorkNav.past.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-0.5 text-muted-foreground hover:text-foreground"
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
