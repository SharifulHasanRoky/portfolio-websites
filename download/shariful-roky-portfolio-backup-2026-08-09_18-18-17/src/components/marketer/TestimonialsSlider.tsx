"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { useViewStore } from "@/lib/view-store";
import { cn } from "@/lib/utils";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const setView = useViewStore((s) => s.setView);

  const total = testimonials.length;

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => go(index + 1, 1), [index, go]);
  const prev = useCallback(() => go(index - 1, -1), [index, go]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1, 1), 7000);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor"
    >
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="Client testimonials · 10 real reviews"
          title="What founders say after the numbers hit the bank."
          description="First two are from ecommerce brands. The rest are home services, local services, and specialty clients. No paid placements, no edited quotes — just real founders talking about real results."
        />

        {/* Slide counter + controls */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="opacity-50">/</span>
            <span>{String(total).padStart(2, "0")}</span>
            <span className="ml-2 hidden sm:inline">
              · {t.vertical}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid place-items-center h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur hover:bg-card transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid place-items-center h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur hover:bg-card transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Slide card */}
        <div
          className="mt-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-10 lg:p-12 overflow-hidden min-h-[420px] sm:min-h-[360px]">
            {/* Decorative quote glyph */}
            <Quote
              className="absolute top-6 right-6 h-20 w-20 text-brand/10 pointer-events-none"
              aria-hidden
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid lg:grid-cols-12 gap-8 items-center relative"
              >
                {/* Quote */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-fire text-fire"
                      />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/95">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-7 flex items-center gap-4">
                    {/* Avatar (initials) */}
                    <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-to-br from-brand to-fire text-brand-foreground font-semibold text-sm shrink-0">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                      <div className="text-[11px] text-brand mt-0.5 font-mono">
                        {t.industry}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-border bg-background/40 p-5 sm:p-6 text-center">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      {t.metricLabel}
                    </div>
                    <div className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-gradient-brand">
                      {t.metric}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((tt, i) => (
            <button
              key={tt.id}
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index
                  ? "w-8 bg-brand"
                  : "w-2 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setView("cases")}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-5 py-2.5 text-sm font-semibold hover:bg-card transition-colors"
          >
            See the case studies behind these reviews
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
