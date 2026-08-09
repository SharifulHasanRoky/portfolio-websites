"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Wallet,
  TrendingUp,
  Target,
  ListChecks,
  ArrowUpRight,
} from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const verticals = ["All", "Home Services", "Ecommerce", "Local Services", "Specialty"] as const;

export function CaseStudies({ hideHeading = false }: { hideHeading?: boolean }) {
  const [activeVertical, setActiveVertical] =
    useState<(typeof verticals)[number]>("All");
  const [selected, setSelected] = useState<CaseStudy>(caseStudies[0]);

  const filtered =
    activeVertical === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.vertical === activeVertical);

  function onSelect(c: CaseStudy) {
    setSelected(c);
  }

  return (
    <section
      id="cases"
      className={cn(
        "relative px-4 sm:px-6 section-anchor",
        hideHeading ? "py-8 sm:py-12" : "py-24 sm:py-32"
      )}
    >
      <div className="mx-auto max-w-7xl relative">
        {!hideHeading && (
          <SectionHeading
            eyebrow="Case studies · real numbers, real clients"
            title="2 niches. 12 case studies. One repeatable system."
            description="Pick a vertical, see the actual challenge, the exact system I built, and the real numbers we hit. No 'up to 5x ROAS' hedging — these are signed contracts and revenue that hit the bank."
          />
        )}

        {/* Vertical filter */}
        <div className={cn("flex flex-wrap items-center gap-2", hideHeading ? "mt-0" : "mt-10")}>
          {verticals.map((v) => (
            <button
              key={v}
              onClick={() => setActiveVertical(v)}
              className={cn(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-medium border transition-all",
                activeVertical === v
                  ? "bg-foreground text-background border-foreground"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground hover:bg-card/70"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
          {/* Industry list (left) — scrollable container, doesn't grow the page height */}
          <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24">
            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1 space-y-2 lg:max-h-[calc(100vh-8rem)]">
              {filtered.map((c) => {
                const active = selected.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelect(c)}
                    className={cn(
                      "w-full text-left rounded-2xl border p-3 sm:p-4 transition-all group",
                      active
                          ? "border-brand/50 bg-card/80 glow-brand"
                          : "border-border bg-card/40 hover:bg-card/70"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "grid place-items-center h-10 w-10 shrink-0 rounded-xl",
                            active
                              ? "bg-brand text-brand-foreground"
                              : "bg-background/60 text-muted-foreground group-hover:text-foreground"
                          )}
                        >
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-display text-sm font-semibold truncate">
                              {c.industry}
                            </span>
                            <ArrowUpRight
                              className={cn(
                                "h-3.5 w-3.5 shrink-0 transition-all",
                                active
                                  ? "text-brand"
                                  : "text-muted-foreground opacity-0 group-hover:opacity-100"
                              )}
                            />
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            {c.client}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
          </div>

          {/* Case detail (right) — sticky so it stays visible while list flows */}
          <div className="lg:col-span-8 xl:col-span-9 lg:sticky lg:top-24 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-8 lg:p-10"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-brand to-fire text-brand-foreground shadow-[0_8px_24px_-8px_var(--brand)]">
                      <selected.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-brand font-mono">
                        {selected.vertical} · {selected.industry}
                      </div>
                      <h3 className="font-display mt-1 text-2xl sm:text-3xl font-semibold leading-tight">
                        {selected.client}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {selected.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {selected.timeline}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Wallet className="h-3.5 w-3.5" />
                          {selected.spend} ad spend
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlight banner */}
                <div className="mt-6 rounded-2xl border border-fire/30 bg-fire/5 p-4 sm:p-5 flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-fire shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-fire font-mono">
                      Headline result
                    </div>
                    <div className="mt-1 text-sm sm:text-base font-medium text-foreground">
                      {selected.highlight}
                    </div>
                  </div>
                </div>

                {/* Challenge + Approach */}
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-background/40 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Target className="h-4 w-4 text-fire" />
                      The challenge
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {selected.challenge}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/40 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <ListChecks className="h-4 w-4 text-brand" />
                      The approach
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {selected.approach}
                    </p>
                  </div>
                </div>

                {/* Results grid */}
                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-3">
                    Results · {selected.timeline}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selected.results.map((r, i) => (
                      <motion.div
                        key={r.metric}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        className="rounded-2xl border border-border bg-background/40 p-5 relative overflow-hidden"
                      >
                        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          {r.metric}
                        </div>
                        <div className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-gradient-brand">
                          {r.value}
                        </div>
                        <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand">
                          <TrendingUp className="h-3.5 w-3.5" />
                          {r.delta} vs. baseline
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
