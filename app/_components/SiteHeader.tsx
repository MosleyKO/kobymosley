import { nav } from "../_lib/content";
import { Logo } from "./Logo";

// Shared by the homepage hero (overlaid on the photo) and the work pages (solid bar).
export function SiteHeader({ className = "" }: { className?: string }) {
  return (
    <header className={`relative z-10 flex items-center justify-between px-6 py-6 md:px-10 ${className}`}>
      <Logo />
      <nav aria-label="Main" className="hidden gap-9 lg:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="eyebrow text-foreground/85 transition-colors hover:text-accent">
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
