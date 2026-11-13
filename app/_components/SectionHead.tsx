import { Arrow } from "./Arrow";

export function SectionHead({ title, link }: { title: string; link?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 className="eyebrow text-[0.62rem]">{title}</h2>
      {link && (
        <a href="#" className="eyebrow inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-[0.58rem] text-muted hover:text-accent">
          {link} <Arrow />
        </a>
      )}
    </div>
  );
}
