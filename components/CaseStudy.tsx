import ScrollReveal from "./ScrollReveal";

export default function CaseStudy() {
  return (
    <section className="section-padding py-28 md:py-36">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-4">
            Case Study
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="border border-border rounded-2xl p-10 md:p-16 bg-card/40">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12">
              <span className="font-display text-2xl text-text-primary">
                Case 001
              </span>
              <span className="text-sm text-text-secondary">
                Aspiring Product Manager
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-4">
                  Problem
                </p>
                <p className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
                  Strong frameworks.
                  <br />
                  Weak reasoning.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-4">
                  Outcome
                </p>
                <p className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
                  Improved PRD.
                  <br />
                  Better structured thinking.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
