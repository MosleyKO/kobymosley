import { values } from "../_lib/content";
import { Arrow } from "./Arrow";

const icons = {
  peaks: <path d="M3 24 14 8l6 9 4-5 9 12M10 16l4 3 4-3" />,
  people: (
    <>
      <circle cx="18" cy="11" r="3" />
      <circle cx="9" cy="14" r="2.5" />
      <circle cx="27" cy="14" r="2.5" />
      <path d="M11 25c0-4 3-7 7-7s7 3 7 7M3 25c0-3 2-5 6-5M33 25c0-3-2-5-6-5" />
    </>
  ),
  compass: (
    <>
      <circle cx="18" cy="18" r="11" />
      <path d="m22.5 13.5-3 6-6 3 3-6z" />
    </>
  ),
};

export function Values() {
  return (
    <section className="grid border-y border-line md:grid-cols-3">
      {values.map((v, i) => (
        <div
          key={v.title}
          className={`flex flex-col items-center gap-4 px-8 py-10 text-center ${i < 2 ? "border-line md:border-r" : ""}`}
        >
          <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="var(--accent)" strokeWidth="1" aria-hidden>
            {icons[v.icon]}
          </svg>
          <h3 className="eyebrow text-sm tracking-[0.2em]">{v.title}</h3>
          <p className="max-w-[17rem] text-[0.8rem] leading-6 text-muted">{v.body}</p>
          <a href="#" className="eyebrow inline-flex items-center gap-2 text-[0.58rem] text-accent">
            Explore <Arrow />
          </a>
        </div>
      ))}
    </section>
  );
}
