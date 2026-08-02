"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import BookingButton from "./BookingButton";

const PAIRS = [
  {
    first: "What features should we build?",
    second: "What problem are we actually solving?",
  },
  {
    first: "How do we hit this quarter's number?",
    second: "What number, if it moved, would matter in three years?",
  },
  {
    first: "What do other teams like ours do?",
    second: "Why do we think that fits our users?",
  },
  {
    first: "How do we ship this faster?",
    second: "What happens after we ship it?",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const next = () => {
    setRevealed(false);
    setIndex((i) => (i + 1) % PAIRS.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32 pb-20 overflow-hidden">
      <div className="container-wide w-full grid md:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-6"
          >
            Guided Product Thinking
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance mb-8"
          >
            Think better
            <br />
            before you decide.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
          >
            Better Product Managers don&apos;t always have better answers.
            <br />
            They ask better questions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <BookingButton label="Book a Session" variant="primary" />
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary px-6 py-3.5 transition-colors duration-200"
            >
              Learn More
            </a>
          </motion.div>

          {/* Signature interactive element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="border border-border rounded-2xl bg-card/60 p-6 md:p-8 max-w-xl"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs tracking-[0.15em] uppercase text-text-secondary">
                First order
              </span>
              {revealed && (
                <span className="text-xs tracking-[0.15em] uppercase text-accent">
                  Second order
                </span>
              )}
            </div>

            <div className="min-h-[3.5rem] flex items-center">
              <AnimatePresence mode="wait">
                {!revealed ? (
                  <motion.p
                    key={`first-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-display text-xl md:text-2xl text-text-secondary"
                  >
                    &ldquo;{PAIRS[index].first}&rdquo;
                  </motion.p>
                ) : (
                  <motion.p
                    key={`second-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-display text-xl md:text-2xl text-text-primary"
                  >
                    &ldquo;{PAIRS[index].second}&rdquo;
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {!revealed ? (
                <button
                  onClick={() => setRevealed(true)}
                  className="text-sm text-accent hover:brightness-110 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  Ask the second order question
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={next}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Try another
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-border">
            <Image
              src="/images/profile.jpg"
              alt="Harshit Agarwal"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary hover:text-text-primary transition-colors duration-200"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
