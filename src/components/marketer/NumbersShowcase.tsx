"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, DollarSign, Users2, Repeat } from "lucide-react";
import { headlineMetrics } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { AnimatedNumber } from "./AnimatedNumber";

type Stat = {
  label: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  caption: string;
  icon: typeof BarChart3;
  accent: "brand" | "fire";
  detail: string;
};

const stats: Stat[] = [
  {
    label: "Ad spend managed",
    value: 6.5,
    decimals: 1,
    prefix: "$",
    suffix: "M+",
    caption: "18 months · 22 brands",
    icon: DollarSign,
    accent: "brand",
    detail: "Tracked server-side, reconciled against your P&L every Monday.",
  },
  {
    label: "Avg client revenue lift",
    value: 168,
    suffix: "%",
    caption: "First 6 months",
    icon: BarChart3,
    accent: "fire",
    detail: "Compounded across paid + lifecycle + measurement, not just one channel.",
  },
  {
    label: "Blended CAC reduction",
    value: 41,
    suffix: "%",
    caption: "Avg across portfolio",
    icon: Users2,
    accent: "brand",
    detail: "By rebuilding offers, creative, and lifecycle — not by slashing spend.",
  },
  {
    label: "12-month retention",
    value: 94,
    suffix: "%",
    caption: "Rolling client retention",
    icon: Repeat,
    accent: "fire",
    detail: "When the system works, clients stay. I'd rather keep you than chase you.",
  },
];

export function NumbersShowcase() {
  return (
    <section
      id="numbers"
      className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor"
    >
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="04 / Numbers that mean money"
          title="The only four numbers that actually move a business."
          description="I track revenue, marketing efficiency ratio (MER), blended CAC, and payback period. Clicks and platform ROAS are leading indicators — these four are results. Everything below is from real client work over the last 18 months."
        />

        {/* Headline metrics strip — quick-scan row of the headline numbers */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {headlineMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative rounded-2xl border border-border bg-card/40 backdrop-blur p-4 sm:p-5 overflow-hidden"
            >
              <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-70" />
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold">
                <AnimatedNumber
                  value={parseFloat(m.value)}
                  suffix={m.suffix}
                  decimals={m.value.includes(".") ? 1 : 0}
                />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{m.caption}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <TiltCard
                max={9}
                className={`h-full rounded-2xl border p-6 ${
                  s.accent === "brand"
                    ? "border-brand/25 bg-card/60 glow-brand"
                    : "border-fire/25 bg-card/60 glow-fire"
                }`}
              >
                <div
                  style={{ transform: "translateZ(36px)" }}
                  className="flex items-center justify-between"
                >
                  <div
                    className={`grid place-items-center h-10 w-10 rounded-lg ${
                      s.accent === "brand"
                        ? "bg-brand/15 text-brand"
                        : "bg-fire/15 text-fire"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 ${
                      s.accent === "brand" ? "text-brand/60" : "text-fire/60"
                    }`}
                  />
                </div>

                <div
                  style={{ transform: "translateZ(28px)" }}
                  className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight"
                >
                  <AnimatedNumber
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="mt-1 text-sm font-medium text-foreground"
                >
                  {s.label}
                </div>
                <div
                  style={{ transform: "translateZ(14px)" }}
                  className="mt-1 text-xs text-muted-foreground"
                >
                  {s.caption}
                </div>

                <div
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground leading-relaxed"
                >
                  {s.detail}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Efficiency-vs-spend mini chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-brand font-mono">
                measurement sample · aggregated
              </div>
              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-semibold">
                Spend scaled 4.2x without ROAS collapse
              </h3>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              MER (blended ROAS) over 9 months · portfolio avg
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-3 items-end h-48">
            {[3.2, 3.6, 3.4, 3.9, 4.1, 4.0, 4.4, 4.6, 4.8].map((v, i) => {
              const h = (v / 5) * 100;
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: `${h}%`, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: "easeOut" }}
                  className="relative rounded-t-md bg-gradient-to-t from-brand/40 via-brand/70 to-fire"
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground">
                    {v}x
                  </span>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-3 text-[10px] font-mono text-muted-foreground">
            {["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"].map((m) => (
              <span key={m} className="text-center">{m}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
