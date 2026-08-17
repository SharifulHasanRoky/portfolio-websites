"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { useViewStore } from "@/lib/view-store";
import { cn } from "@/lib/utils";

export function Portfolio({ hideHeading = false }: { hideHeading?: boolean }) {
  const setView = useViewStore((s) => s.setView);
  return (
    <section
      id="portfolio"
      className={cn(
        "relative px-4 sm:px-6 section-anchor",
        hideHeading ? "py-8 sm:py-12" : "py-24 sm:py-32"
      )}
    >
      <div className="mx-auto max-w-7xl relative">
        {!hideHeading && (
          <SectionHeading
            eyebrow="Portfolio · selected work"
            title="A snapshot of brands I've scaled — ecommerce & home services."
            description="Each card below is a real engagement. Click through to the case studies section for the full story: challenge, approach, numbers, and timeline."
          />
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <TiltCard
                max={10}
                className={cn(
                  "group h-full rounded-3xl border p-6 sm:p-7 backdrop-blur transition-colors",
                  p.accent === "brand"
                    ? "border-brand/25 bg-card/60 hover:border-brand/50"
                    : "border-fire/25 bg-card/60 hover:border-fire/50"
                )}
              >
                {/* Category pill */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="flex items-center justify-between"
                >
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider",
                      p.accent === "brand"
                        ? "bg-brand/15 text-brand"
                        : "bg-fire/15 text-fire"
                    )}
                  >
                    {p.category}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      p.accent === "brand" ? "text-brand/60" : "text-fire/60"
                    )}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{ transform: "translateZ(40px)" }}
                  className="font-display mt-5 text-2xl font-semibold leading-tight text-gradient-brand"
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  style={{ transform: "translateZ(22px)" }}
                  className="mt-3 text-sm text-muted-foreground leading-relaxed"
                >
                  {p.description}
                </p>

                {/* Big metric */}
                <div
                  style={{ transform: "translateZ(50px)" }}
                  className={cn(
                    "mt-6 flex items-end justify-between rounded-2xl border p-4",
                    p.accent === "brand"
                      ? "border-brand/20 bg-brand/5"
                      : "border-fire/20 bg-fire/5"
                  )}
                >
                  <div>
                    <div
                      className={cn(
                        "font-display text-3xl sm:text-4xl font-semibold",
                        p.accent === "brand"
                          ? "text-gradient-brand"
                          : "text-gradient-fire"
                      )}
                    >
                      {p.metric}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.metricLabel}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "h-5 w-5",
                      p.accent === "brand" ? "text-brand" : "text-fire"
                    )}
                  />
                </div>

                {/* Tags */}
                <div
                  style={{ transform: "translateZ(16px)" }}
                  className="mt-5 flex flex-wrap gap-1.5"
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-border bg-background/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setView("cases")}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-card transition-colors"
          >
            See full case studies with numbers
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
