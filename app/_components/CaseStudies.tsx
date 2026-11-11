import { caseStudies } from "../_lib/content";
import { Arrow } from "./Arrow";
import { Photo } from "./Photo";
import { SectionHead } from "./SectionHead";

export function CaseStudies() {
  return (
    <section id="stories" className="px-6 pt-8 md:px-10">
      <SectionHead title="Stories I've helped tell" link="View all case studies" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {caseStudies.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className="group relative flex min-h-64 flex-col justify-end overflow-hidden border border-line p-5"
          >
            <Photo
              tone={c.tone}
              image={c.image}
              alt=""
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
            <div className="relative flex flex-col gap-3">
              <div className="font-serif text-2xl leading-none tracking-wide">
                {c.name}
                {c.sub && <span className="eyebrow mt-1 block text-[0.5rem] text-muted">{c.sub}</span>}
              </div>
              <p className="text-[0.78rem] leading-5 text-foreground/85">{c.blurb}</p>
              <span className="eyebrow inline-flex items-center gap-2 text-[0.55rem]">
                View case study <Arrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
