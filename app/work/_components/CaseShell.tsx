import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "../../_components/Footer";
import { SiteHeader } from "../../_components/SiteHeader";

// Page frame for every /work/* case study: solid header, back link, content column, footer.
export function CaseShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader className="border-b border-line bg-background" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <Link
          href="/#stories"
          className="eyebrow mt-10 inline-flex items-center gap-3 text-[0.62rem] text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden>←</span> Back to work
        </Link>
        {children}
      </main>
      <Footer />
    </>
  );
}

// One band of a case study: hairline above, eyebrow label, then a two-column body that stacks on mobile.
export function CaseSection({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="border-t border-line py-14 md:py-16">
      {eyebrow && <p className="eyebrow mb-5 text-[0.62rem] text-accent">{eyebrow}</p>}
      {/* className lays out the body (e.g. a two-column grid) so the eyebrow stays on its own line above it. */}
      <div className={className}>{children}</div>
    </section>
  );
}

// Serif heading with an italic copper accent: <CaseHeading accent="a written approval process.">From verbal offers to</CaseHeading>
export function CaseHeading({
  children,
  accent,
  as: Tag = "h2",
  className = "",
}: {
  children?: ReactNode;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`font-serif text-4xl leading-[1.1] md:text-5xl ${className}`}>
      {children}
      {children && accent ? " " : null}
      {accent && <em className="text-accent">{accent}</em>}
    </Tag>
  );
}
