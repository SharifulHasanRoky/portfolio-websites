"use client";

import { industriesMarquee } from "@/lib/marketer-data";

export function IndustriesMarquee() {
  const items = [...industriesMarquee, ...industriesMarquee];
  return (
    <section className="relative py-10 border-y border-border bg-card/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-4">
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Industries I&apos;ve scaled paid + lifecycle in
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-3 pr-3">
          {items.map((it, i) => (
            <span
              key={`${it}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-foreground/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {it}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee gap-3 pr-3"
        >
          {items.map((it, i) => (
            <span
              key={`${it}-dup-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-foreground/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-fire" />
              {it}
            </span>
          ))}
        </div>
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
