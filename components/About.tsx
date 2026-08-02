import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { KRISHNA_CORNER_URL } from "@/lib/config";

export default function About() {
  return (
    <section id="about" className="section-padding py-28 md:py-36">
      <div className="container-wide grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-20 items-start">
        <ScrollReveal>
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/profile.jpg"
              alt="Harshit Agarwal, Product Manager"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-6">
              About
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="font-display font-medium text-3xl md:text-4xl leading-tight mb-8 text-balance">
              I&apos;m Harshit Agarwal. I work as a Product Manager.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-prose">
              <p>
                Most of my work has lived in{" "}
                <span className="text-text-primary">Digital Lending</span> —
                Customer Experience, Product Design, Product Operations.
                Ambiguous problems, mostly. The kind with no clean brief and
                three reasonable answers that contradict each other.
              </p>
              <p>
                Over time I&apos;ve come to believe Product Management is not,
                at its core, about frameworks. It&apos;s about{" "}
                <span className="text-text-primary">product thinking</span> —
                the discipline of slowing down at the exact moment everyone
                else is rushing to a solution, and asking what&apos;s really
                being decided here.
              </p>
              <p>
                Outside work, I spend time on{" "}
                <span className="text-text-primary">The Krishna Corner</span>,
                a small personal project built around craftsmanship, decor,
                and unhurried attention to detail. It has quietly shaped how I
                think about product work — good things are crafted, not
                rushed. That patience shows up in how I approach{" "}
                <span className="text-text-primary">decision making</span>,
                whether it&apos;s a PRD, a roadmap, or a career choice.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
                I don&apos;t promise answers.
                <br />I promise better questions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.26}>
            <a
              href={KRISHNA_CORNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center gap-4 w-fit"
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-border shrink-0">
                <Image
                  src="/images/krishna-corner.jpg"
                  alt="A detail from The Krishna Corner"
                  fill
                  sizes="56px"
                  className="object-cover duotone-red"
                />
              </div>
              <p className="text-sm text-text-secondary">
                A corner of my desk, from{" "}
                <span className="text-text-primary group-hover:text-accent transition-colors duration-200 underline decoration-border underline-offset-4 group-hover:decoration-accent">
                  The Krishna Corner
                </span>{" "}
                — a reminder to work slowly, on purpose.
              </p>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
