"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookingButton from "./BookingButton";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Who This Is For", href: "#who-this-is-for" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl tracking-tight text-text-primary">
          The Second Order
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <BookingButton
          label="Book a Session"
          variant="pill"
          className="hidden md:inline-flex"
        />

        <button
          aria-label="Toggle menu"
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-px bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg border-b border-border section-padding pb-6 flex flex-col gap-4"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <BookingButton
            label="Book a Session"
            variant="ghost"
            className="text-accent"
            onOpen={() => setOpen(false)}
          />
        </motion.div>
      )}
    </motion.header>
  );
}
