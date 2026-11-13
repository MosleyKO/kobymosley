import type { Metadata } from "next";
import Image from "next/image";
import { Arrow } from "../../_components/Arrow";
import { BrowserFrame } from "../_components/BrowserFrame";
import { CaseHeading, CaseSection, CaseShell } from "../_components/CaseShell";

export const metadata: Metadata = {
  title: "BlueBolt Electric — Brand Identity & Web Design | Koby Mosley",
  description:
    "A modern brand and website for an electrician growing into permanent lighting, built around a logo with a dog from the owner's own life.",
};

export default function BlueBoltPage() {
  return (
    <CaseShell>
      <section className="grid items-center gap-10 pb-14 pt-10 md:grid-cols-[5fr_6fr] md:gap-14 md:pb-16">
        <div>
          <p className="eyebrow mb-4 text-[0.62rem] text-accent">Brand identity / Web design</p>
          <CaseHeading as="h1" accent="Electric" className="text-6xl md:text-7xl">
            BlueBolt
          </CaseHeading>
          <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-foreground/85">
            When Spencer went out on his own, he wanted to grow into permanent lighting alongside his electrical work.
            He wanted BlueBolt to feel modern and polished, and he needed a website where customers could find him, see
            what he offered, and reach out about a job.
          </p>
          <a
            href="https://blueboltelectric.com"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-8 inline-flex items-center gap-4 border border-foreground/40 px-6 py-3 text-[0.62rem] transition-colors hover:border-accent hover:text-accent"
          >
            Visit BlueBolt Electric <Arrow />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <BrowserFrame
          src="/images/work/bluebolt-homepage.webp"
          width={2880}
          height={1800}
          alt="BlueBolt Electric homepage: a stone house lit at night under the headline Electrical Work and Permanent Lighting Done Right the first time"
          url="blueboltelectric.com"
        />
      </section>

      <CaseSection eyebrow="The identity" className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <CaseHeading accent="personal in it.">A brand with something</CaseHeading>
          <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-foreground/85">
            I designed the logo and color palette and built the website. One of my favorite parts of the project is the
            dog in the logo. It&rsquo;s based on Spencer&rsquo;s own dog, and it gave the new brand something personal
            from day one.
          </p>
        </div>
        <figure>
          <Image
            src="/images/work/bluebolt-visual-system.webp"
            width={2000}
            height={1415}
            alt="BlueBolt Electric visual system: the dog-mark logo and lightning-bolt icon on a navy background above the blue, yellow and white color palette"
            sizes="(min-width: 768px) 50vw, 92vw"
            className="h-auto w-full border border-line"
          />
          <figcaption className="eyebrow mt-4 text-[0.55rem] text-muted">Logo and color palette</figcaption>
        </figure>
      </CaseSection>

      <CaseSection eyebrow="What I'd ask today" className="grid gap-10 md:grid-cols-2 md:gap-14">
        <CaseHeading accent="then comes the CTA.">First comes the story,</CaseHeading>
        <p className="text-[0.95rem] leading-7 text-foreground/85">
          This was early in my marketing career. If I sat down with Spencer today, I&rsquo;d spend more time asking how he
          wants customers to connect with him and what they need to see before they feel ready to reach out. Those
          answers would shape both the story the site tells and the next step it asks people to take.
        </p>
      </CaseSection>
    </CaseShell>
  );
}
