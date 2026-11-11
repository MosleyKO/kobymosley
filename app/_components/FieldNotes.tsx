import { fieldNotes } from "../_lib/content";
import { Arrow } from "./Arrow";
import { Photo } from "./Photo";
import { SectionHead } from "./SectionHead";

export function FieldNotes() {
  return (
    <section id="field-notes" className="px-6 pt-8 md:px-10">
      <SectionHead title="Field notes" link="Read all articles" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {fieldNotes.map((n) => (
          <a
            key={n.title}
            href={n.href}
            className="group relative flex min-h-72 flex-col justify-end overflow-hidden border border-line p-5"
          >
            <Photo
              tone={n.tone}
              image={n.image}
              alt=""
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
            <div className="relative flex flex-col gap-2">
              <span className="eyebrow text-[0.52rem] text-muted">{n.date}</span>
              <h3 className="font-serif text-2xl leading-tight">{n.title}</h3>
              <p className="text-[0.76rem] leading-5 text-foreground/80">{n.blurb}</p>
              <span className="eyebrow mt-1 inline-flex items-center gap-2 text-[0.55rem]">
                {n.read} <Arrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
