import {
  MessageSquareText,
  FileText,
  ClipboardList,
  Compass,
  Sparkles,
  Brain,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  {
    icon: MessageSquareText,
    title: "Interview Preparation",
    description:
      "Not answer scripts. Practice reasoning out loud, under the same ambiguity real interviews create.",
  },
  {
    icon: FileText,
    title: "Resume Reviews",
    description:
      "A resume read the way a hiring panel reads it — for judgment and impact, not keyword density.",
  },
  {
    icon: ClipboardList,
    title: "PRD Reviews",
    description:
      "Strong structure is easy. We look at the reasoning underneath it — what the doc assumes, and why.",
  },
  {
    icon: Compass,
    title: "Career Transition",
    description:
      "For engineers, designers, and analysts moving into product — a clear-eyed look at where you actually stand.",
  },
  {
    icon: Sparkles,
    title: "AI for PM",
    description:
      "How to use AI as a thinking partner in product work, without letting it think for you.",
  },
  {
    icon: Brain,
    title: "Product Thinking",
    description:
      "The underlying skill beneath every framework — seeing a problem clearly before naming a solution.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="section-padding py-28 md:py-36">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary mb-4">
            Who This Is For
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="font-display font-medium text-3xl md:text-4xl max-w-2xl mb-16 text-balance">
            For people with the zeal to improve — not the ones looking for a
            shortcut.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="bg-bg h-full p-8 hover:bg-card transition-colors duration-300 group">
                <item.icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent mb-5"
                />
                <h3 className="font-display text-xl mb-3 text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
