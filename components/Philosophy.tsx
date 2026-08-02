import ScrollReveal from "./ScrollReveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-padding py-28 md:py-36 bg-card/40">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-10">
            The Philosophy
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.25] text-balance">
            &ldquo;Better products don&apos;t begin with{" "}
            <span className="text-text-secondary">better ideas.</span>
            <br />
            They begin with{" "}
            <span className="text-accent">better questions.&rdquo;</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.22}>
          <p className="mt-12 text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            This isn&apos;t coaching. It isn&apos;t mentorship. It isn&apos;t
            consulting. It&apos;s guided thinking — the work of getting to a
            sharper question before you reach for an answer.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
