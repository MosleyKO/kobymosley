import type { Metadata } from "next";
import Image from "next/image";
import { CaseHeading, CaseSection, CaseShell } from "../_components/CaseShell";
import { ImageDialog } from "../_components/ImageDialog";
import { OfferWalkthrough } from "../_components/OfferWalkthrough";

export const metadata: Metadata = {
  title: "Cole West — Marketing Manager | Koby Mosley",
  description:
    "Campaigns for new communities and move-in-ready homes, plus the tools that put sales and leadership on the same information.",
};

const shared = [
  { title: "Sales release", body: "I gave the division one reference for available homes, options, and pricing." },
  {
    title: "Construction starts",
    body: "I built a planning tool the construction team used in weekly reviews to decide which buildings to start across communities.",
  },
  {
    title: "Executive reporting",
    body: "I built a Looker Studio dashboard leadership used to review marketing performance each week.",
  },
];

export default function ColeWestPage() {
  return (
    <CaseShell>
      <section className="grid gap-10 pb-14 pt-10 md:grid-cols-[5fr_6fr] md:gap-14 md:pb-16">
        <div>
          <p className="eyebrow mb-4 text-[0.62rem] text-accent">Marketing Manager</p>
          <CaseHeading as="h1" className="text-6xl md:text-7xl">
            Cole West
          </CaseHeading>
          <p className="mt-6 font-serif text-3xl italic leading-tight text-accent">Connecting marketing and sales</p>
          <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-foreground/85">
            I ran campaigns for new communities and move-in-ready homes, then built tools that helped sales and
            leadership work from the same information.
          </p>
        </div>
        <figure>
          {/* Billboard kept in its original wide proportions. */}
          <Image
            src="/images/work/cole-west-billboard.webp"
            width={880}
            height={253}
            alt="Cole West billboard: a model home at dusk with the words Welcome to Cole West Territory and colewest.com"
            priority
            sizes="(min-width: 768px) 55vw, 92vw"
            className="h-auto w-full border border-line"
          />
          <figcaption className="eyebrow mt-4 text-[0.55rem] text-muted">Cole West Territory / Billboard creative</figcaption>
        </figure>
      </section>

      <CaseSection eyebrow="Sales operations" className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <CaseHeading accent="a written approval process.">From verbal offers to</CaseHeading>
          <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-foreground/85">
            I built a form that calculated offer prices and concessions and turned the submission into a PDF for review.
            The sales team and reviewers could work from the same numbers and refer back to what was submitted.
          </p>
        </div>
        <OfferWalkthrough />
      </CaseSection>

      <CaseSection eyebrow="Across the division">
        <CaseHeading>Shared information, clearer decisions.</CaseHeading>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {shared.map((s) => (
            <li key={s.title} className="border border-line bg-surface p-6">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-6 text-foreground/80">{s.body}</p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection eyebrow="Campaign creative" className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <CaseHeading>Homes of the Week</CaseHeading>
          <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-foreground/85">
            I used email, digital ads, and billboards to help buyers discover communities and find homes ready to move
            into.
          </p>
        </div>
        <div className="max-w-sm md:justify-self-center">
          <ImageDialog
            src="/images/work/cole-west-homes-of-the-week.webp"
            width={2000}
            height={1889}
            alt="Homes of the Week email: a move-in-ready townhome with price, bedrooms, bathrooms and square footage, under the line Where you'd rather be"
            label="View the Homes of the Week email full size"
          />
        </div>
      </CaseSection>

      <CaseSection eyebrow="Lessons learned" className="grid gap-10 md:grid-cols-2 md:gap-14">
        <CaseHeading accent="data">What Cole West taught me about</CaseHeading>
        <div className="flex flex-col gap-5 text-[0.95rem] leading-7 text-foreground/85">
          <p>
            Building these tools changed how I approach marketing. Before I use a report to make a decision, I want to
            understand where the numbers came from, what might be missing, and whether the people using them understand
            them the same way. Inaccurate data can make a bad decision feel well supported.
          </p>
          <p>
            At Cole West, that meant making it easier for agents to submit accurate offers, giving the sales team one
            place to check pricing, and building reports leadership could use in a weekly meeting. I still bring that
            mindset to marketing today. I start by asking what decision we&rsquo;re trying to make, what information we
            need to make it, and how we&rsquo;ll know we can trust that information.
          </p>
        </div>
      </CaseSection>
    </CaseShell>
  );
}
