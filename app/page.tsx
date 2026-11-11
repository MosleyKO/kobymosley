import { CaseStudies } from "./_components/CaseStudies";
import { Cta } from "./_components/Cta";
import { FieldNotes } from "./_components/FieldNotes";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { Values } from "./_components/Values";
import { Why } from "./_components/Why";

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <Values />
      <CaseStudies />
      <FieldNotes />
      <Gallery />
      <Cta />
      <Footer />
    </main>
  );
}
