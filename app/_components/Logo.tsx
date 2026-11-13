import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="border-b border-foreground/60 font-serif text-2xl leading-none tracking-tight">KM</span>
      <span className="leading-tight">
        <span className="eyebrow block text-foreground">Koby Mosley</span>
        <span className="block text-[0.55rem] uppercase tracking-[0.12em] text-muted">Storyteller. Marketer. Outdoorsman.</span>
      </span>
    </Link>
  );
}
