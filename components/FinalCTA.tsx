import ScrollReveal from "./ScrollReveal";
import BookingButton from "./BookingButton";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-padding py-28 md:py-40">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Ready to think differently?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-text-secondary text-lg mb-10">
            The first conversation is complimentary.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <BookingButton
            label="Book a Session"
            variant="primary"
            className="px-8 py-4"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
