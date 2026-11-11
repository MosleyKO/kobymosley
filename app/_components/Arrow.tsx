export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 8" width="18" height="8" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden>
      <path d="M0 4h18M14.5 1l3.5 3-3.5 3" />
    </svg>
  );
}
