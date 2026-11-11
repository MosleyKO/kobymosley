import { nav } from "../_lib/content";
import { Logo } from "./Logo";
import { Photo } from "./Photo";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden">
      <Photo
        tone="river"
        image="/images/hero.webp"
        position="60% 72%"
        alt="Fly fisherman casting in a mountain river"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <Logo />
        <nav className="hidden gap-9 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="eyebrow text-foreground/85 transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="relative z-10 px-6 pt-20 md:px-10 md:pl-[8vw] md:pt-28">
        <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">
          I&rsquo;m
          <br />
          chasing
          <br />
          moments.
        </h1>
        <div className="my-8 h-px w-14 bg-accent/70" />
        <p className="eyebrow max-w-xs leading-7 text-foreground/90">
          The best stories aren&rsquo;t created. They&rsquo;re lived.
        </p>
      </div>

      <a
        href="#pursuit"
        className="eyebrow absolute bottom-8 left-6 z-10 flex flex-col gap-2 text-[0.6rem] text-foreground/80 md:left-[8vw]"
      >
        Scroll to explore <span aria-hidden>↓</span>
      </a>
    </section>
  );
}
