"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, TrendingUp } from "lucide-react";
import {
  caseStudies,
  featuredCaseStudyIds,
} from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { useViewStore } from "@/lib/view-store";
import { cn } from "@/lib/utils";

export function FeaturedCaseStudies() {
  const setView = useViewStore((s) => s.setView);
  const featured = featuredCaseStudyIds
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section
      id="featured"
      className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor"
    >
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="Featured wins · 2 of 30+ case studies"
          title="Two featured engagements — an Australian Shopify store at 13x ROI, and a Calgary cleaning company booking 100 leads a month."
          description="Two real client stories across very different business models: an Australian Shopify ecommerce brand scaled from 2x to 13x ROI, and a Calgary cleaning company hitting 100 qualified leads per month. Same system, very different numbers. Click through to the full case studies page for all 30+."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {featured.map((c, i) => {
            const accent = i % 2 === 0 ? "brand" : "fire";
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              >
                <TiltCard
                  max={7}
                  className={cn(
                    "group h-full rounded-3xl border p-6 sm:p-8 backdrop-blur cursor-pointer transition-colors",
                    accent === "brand"
                      ? "border-brand/25 bg-card/60 hover:border-brand/50"
                      : "border-fire/25 bg-card/60 hover:border-fire/50"
                  )}
                >
                  {/* Header */}
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "grid place-items-center h-12 w-12 shrink-0 rounded-2xl",
                          accent === "brand"
                            ? "bg-brand/15 text-brand"
                            : "bg-fire/15 text-fire"
                        )}
                      >
                        <c.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div
                          className={cn(
                            "text-[10px] uppercase tracking-wider font-mono",
                            accent === "brand" ? "text-brand" : "text-fire"
                          )}
                        >
                          {c.industry}
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight mt-0.5">
                          {c.client}
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        accent === "brand" ? "text-brand/60" : "text-fire/60"
                      )}
                    />
                  </div>

                  {/* Meta row */}
                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {c.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {c.timeline}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <TrendingUp className="h-3 w-3" />
                      {c.spend} spend
                    </span>
                  </div>

                  {/* Headline result */}
                  <div
                    style={{ transform: "translateZ(40px)" }}
                    className={cn(
                      "mt-6 rounded-2xl border p-5",
                      accent === "brand"
                        ? "border-brand/20 bg-brand/5"
                        : "border-fire/20 bg-fire/5"
                    )}
                  >
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      Headline result
                    </div>
                    <div className="mt-1.5 text-sm sm:text-base font-medium text-foreground leading-relaxed">
                      {c.highlight}
                    </div>
                  </div>

                  {/* Top 3 results inline */}
                  <div
                    style={{ transform: "translateZ(18px)" }}
                    className="mt-4 grid grid-cols-3 gap-3"
                  >
                    {c.results.map((r) => (
                      <div
                        key={r.metric}
                        className="rounded-xl border border-border bg-background/40 p-3 text-center"
                      >
                        <div
                          className={cn(
                            "font-display text-base sm:text-lg font-semibold leading-none",
                            accent === "brand"
                              ? "text-gradient-brand"
                              : "text-gradient-fire"
                          )}
                        >
                          {r.value}
                        </div>
                        <div className="mt-1 text-[10px] text-muted-foreground leading-tight">
                          {r.metric}
                        </div>
                        <div
                          className={cn(
                            "mt-1 text-[10px] font-mono",
                            accent === "brand" ? "text-brand" : "text-fire"
                          )}
                        >
                          {r.delta}
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to all case studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => setView("cases")}
            className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors group"
          >
            See all 30+ case studies
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
