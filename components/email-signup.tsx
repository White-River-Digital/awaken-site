"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type EmailSignupProps = {
  variant?: "default" | "light";
  source?: string;
  className?: string;
};

export function EmailSignup({
  variant = "default",
  source = "inline",
  className,
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("ok");
      setMessage("You’re on the list. Thank you!");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Could not subscribe. Please try again or email us.");
    }
  }

  const isLight = variant === "light";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-3", className)}>
      <div className="space-y-1.5">
        <Label
          htmlFor={`email-${source}`}
          className={cn(isLight && "text-brand-100")}
        >
          Email address
        </Label>
        <Input
          id={`email-${source}`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={cn(
            isLight &&
              "border-white/30 bg-white/10 text-white placeholder:text-brand-200"
          )}
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full sm:w-auto",
          isLight
            ? "bg-white text-brand-900 hover:bg-brand-50"
            : "bg-brand-700 hover:bg-brand-800 text-white"
        )}
      >
        {status === "loading" ? "Submitting…" : "Subscribe"}
      </Button>
      {message ? (
        <p
          className={cn(
            "text-sm",
            status === "ok" ? "text-green-600" : "text-red-600",
            isLight && status === "ok" && "text-brand-100",
            isLight && status === "err" && "text-amber-200"
          )}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
