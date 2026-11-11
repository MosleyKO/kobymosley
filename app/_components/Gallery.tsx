import { gallery } from "../_lib/content";
import { Photo } from "./Photo";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  return (
    <section id="photography" className="pt-8">
      <div className="px-6 md:px-10">
        <SectionHead title="Moments worth remembering" link="View full gallery" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {gallery.map((g) => (
          <Photo key={g.alt} tone={g.tone} image={g.image} position={g.position} alt={g.alt} className="h-36 md:h-44" />
        ))}
      </div>
    </section>
  );
}
