import { Arrow } from "./Arrow";
import { Photo } from "./Photo";

export function Cta() {
  return (
    <section id="connect" className="relative overflow-hidden">
      <Photo tone="dusk" alt="Hunter silhouetted against a mountain sunset" className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="relative grid items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-10 md:pl-[8vw]">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Let&rsquo;s build something
          <br />
          worth <em className="text-accent">remembering.</em>
        </h2>
        <div className="flex max-w-sm flex-col gap-5">
          <p className="text-sm leading-6 text-foreground/85">
            Whether it&rsquo;s a campaign, a website, or a story, the goal is always the same — create something
            people never forget.
          </p>
          <a
            href="mailto:hello@example.com"
            className="eyebrow inline-flex w-fit items-center gap-6 border border-foreground/40 px-6 py-3 text-[0.62rem] transition-colors hover:border-accent hover:text-accent"
          >
            Let&rsquo;s connect <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
