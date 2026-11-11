import { Arrow } from "./Arrow";
import { Photo } from "./Photo";

export function Why() {
  return (
    <section id="pursuit" className="grid md:grid-cols-[2fr_3fr]">
      <div className="flex flex-col justify-center gap-5 bg-surface px-6 py-14 md:px-10 md:pl-[8vw]">
        <p className="eyebrow text-[0.6rem] text-muted">Why I create</p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Stories have the
          <br />
          power to <em className="text-accent">move people.</em>
        </h2>
        <p className="max-w-sm text-sm leading-7 text-muted">
          I believe the right story can inspire someone to take action, believe in something, or see the world
          differently. Whether I&rsquo;m building a website, writing a campaign, or behind a camera, my goal is always
          the same: create stories that connect.
        </p>
        <a href="#" className="eyebrow inline-flex items-center gap-3 text-[0.62rem] text-accent">
          Read more about my why <Arrow />
        </a>
      </div>
      <Photo
        tone="camp"
        image="/images/about.webp"
        position="55% 35%"
        alt="Friends laughing together while rigging a fly rod on the river"
        className="min-h-72"
      />
    </section>
  );
}
