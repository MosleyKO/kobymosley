"use client";

import { useState } from "react";

const usd = (n: number) =>
  `${n < 0 ? "−" : ""}$${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

// Fictional figures only. Mirrors the idea of the real offer form: price + concessions in, one contract price out,
// then a generate-PDF-and-route-for-review step (simulated entirely on the page).
const fields = [
  { key: "base", label: "Base price" },
  { key: "lot", label: "Lot premium" },
  { key: "options", label: "Options" },
  { key: "incentive", label: "Price incentive", negative: true },
] as const;

type Key = (typeof fields)[number]["key"];

export function OfferWalkthrough() {
  const [v, setV] = useState<Record<Key, number>>({ base: 500000, lot: 25000, options: 20000, incentive: 10000 });
  const [step, setStep] = useState<"idle" | "generating" | "sent">("idle");

  const total = v.base + v.lot + v.options - v.incentive;

  function change(key: Key, raw: string) {
    const n = Math.max(0, Math.round(Number(raw) || 0));
    setV((prev) => ({ ...prev, [key]: n }));
    setStep("idle"); // a changed offer needs a fresh PDF
  }

  function generate() {
    setStep("generating");
    window.setTimeout(() => setStep("sent"), 900);
  }

  return (
    <div className="border border-line bg-surface p-6 md:p-8">
      <p className="eyebrow mb-6 text-[0.58rem] text-accent">Offer walkthrough / sample data</p>

      <div className="flex flex-col gap-4">
        {fields.map((f) => (
          <label key={f.key} className="flex items-center justify-between gap-4 text-sm text-foreground/90">
            <span>{f.label}</span>
            <span className="flex items-center gap-1">
              <span aria-hidden className="text-muted">
                {"negative" in f ? "−$" : "$"}
              </span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                step={1000}
                value={v[f.key]}
                onChange={(e) => change(f.key, e.target.value)}
                className="w-28 border-b border-line bg-transparent py-1 text-right tabular-nums text-foreground focus:border-accent focus:outline-none"
              />
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
        <span className="text-sm">Final contract price</span>
        <span aria-live="polite" className="font-serif text-3xl tabular-nums text-accent">
          {usd(total)}
        </span>
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <button
          type="button"
          onClick={generate}
          disabled={step === "generating"}
          className="eyebrow border border-foreground/40 px-5 py-3 text-[0.6rem] transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
        >
          {step === "generating" ? "Generating PDF…" : "Generate PDF and route for review"}
        </button>
        <p aria-live="polite" className="mt-4 min-h-12 text-[0.8rem] leading-6 text-muted">
          {step === "sent" && (
            <>
              <span className="text-accent">✓</span> Offer PDF generated at {usd(total)} and routed to reviewers. Sales
              and reviewers now work from the same numbers and can refer back to what was submitted.
            </>
          )}
          {step === "idle" && "Change any figure and the total updates. Nothing here is sent anywhere."}
        </p>
      </div>
    </div>
  );
}
