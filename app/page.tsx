import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import HowWeWork from "@/components/HowWeWork";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Philosophy />
      <WhoThisIsFor />
      <HowWeWork />
      <CaseStudy />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
