import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Start with a conversation.",
    description:
      "No forms, no framework quiz. Just a conversation about where you are and what you're actually trying to figure out.",
  },
  {
    number: "02",
    title: "Review your thinking.",
    description:
      "We look at your reasoning, not just your output — the PRD, the resume, the answer — and where it holds up or breaks down.",
  },
  {
    number: "03",
    title: "Decide what's next.",
    description:
      "You leave with a sharper question, not a to-do list. What you do with it is yours to decide.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-padding py-28 md:py-36 bg-card/40">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-4">
            How We Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="font-display font-medium text-3xl md:text-4xl max-w-xl mb-20 text-balance">
            Three conversations. Not three deliverables.
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-bg border border-border font-display text-accent mb-8 relative z-10">
                    {step.number}
                  </div>
                  <span className="md:hidden font-display text-sm text-accent block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl mb-4 text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
