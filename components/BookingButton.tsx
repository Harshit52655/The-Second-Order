"use client";

import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function BookingButton({
  label = "Book a Session",
  variant = "primary",
  className = "",
  onOpen,
}: {
  label?: string;
  variant?: "primary" | "ghost" | "pill";
  className?: string;
  onOpen?: () => void;
}) {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback in case the widget script hasn't loaded yet
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
    onOpen?.();
  };

  const base =
    "inline-flex items-center gap-2 text-sm transition-all duration-200";

  const styles: Record<string, string> = {
    primary:
      "bg-accent text-text-primary px-6 py-3.5 rounded-full hover:brightness-110",
    pill: "border border-border rounded-full px-5 py-2 text-text-primary hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  return (
    <a
      href={CALENDLY_URL}
      onClick={openCalendly}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
      {variant === "primary" && <ArrowRight size={16} />}
    </a>
  );
}
