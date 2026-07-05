import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden
    >
      <path d="M13.5 8.5V6.75c0-.69.56-1.25 1.25-1.25H16V3h-2.08C12.03 3 10.5 4.53 10.5 6.42V8.5H8v2.75h2.5V21h3V11.25H16l.5-2.75h-3z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden
    >
      <path d="M16.3 4h3.1l-6.8 7.8L20.5 20h-6.1l-4.8-5.6L4.2 20H1.1l7.3-8.4L3.5 4h6.2l4.3 5.1L16.3 4zm-1.1 14.3h1.7L8 5.6H6.2l9 12.7z" />
    </svg>
  );
}
