"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    question: "Is this coaching or mentorship?",
    answer:
      "Neither. Coaching and mentorship usually revolve around giving advice or tracking progress toward a goal you've already set. This is guided thinking — the work happens in how you reason through a problem, not in advice handed to you.",
  },
  {
    question: "Who is this for?",
    answer:
      "Aspiring Product Managers, APM candidates, MBA students, engineers transitioning into product, and early PMs — anyone with the zeal and willingness to improve. It's not built for people looking for a shortcut.",
  },
  {
    question: "What happens in the first conversation?",
    answer:
      "We talk through where you are and what you're actually trying to figure out — an interview, a PRD, a career decision. No forms, no framework quiz.",
  },
  {
    question: "Do you review resumes and PRDs directly?",
    answer:
      "Yes. Resume reviews and PRD reviews are both part of how we work together — always with an eye on the reasoning behind the document, not just its structure.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a session below. The first conversation is complimentary.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding py-28 md:py-36 bg-card/40">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-4 text-center">
            FAQ
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="font-display font-medium text-3xl md:text-4xl mb-16 text-center text-balance">
            Common questions.
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-border border-t border-b border-border">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-text-primary pr-6">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-accent shrink-0"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary leading-relaxed pb-6 max-w-prose">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
