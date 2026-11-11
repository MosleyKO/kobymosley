import { Arrow } from "./Arrow";

export function SectionHead({ title, link }: { title: string; link?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="eyebrow text-[0.62rem]">{title}</h2>
      {link && (
        <a href="#" className="eyebrow inline-flex items-center gap-3 text-[0.58rem] text-muted hover:text-accent">
          {link} <Arrow />
        </a>
      )}
    </div>
  );
}
