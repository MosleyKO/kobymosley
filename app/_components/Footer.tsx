import { Logo } from "./Logo";

const social = ["Instagram", "YouTube", "LinkedIn", "Email"];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-10">
      <Logo />
      <ul className="flex gap-6">
        {social.map((s) => (
          <li key={s}>
            <a href="#" aria-label={s} className="eyebrow text-[0.55rem] text-muted hover:text-accent">
              {s}
            </a>
          </li>
        ))}
      </ul>
      <p className="eyebrow text-[0.52rem] text-muted">© 2024 Koby Mosley. All rights reserved.</p>
    </footer>
  );
}
