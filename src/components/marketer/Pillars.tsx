"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { pillars } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { cn } from "@/lib/utils";

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical progress line for the storytelling timeline
  const lineScale = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <section
      id="pillars"
      className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor"
    >
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="The story · 6 chapters"
          title="From campaign to compounding growth — one system, six moves."
          description="Most marketers sell tactics. I sell a system: campaign → business → scaling → numbers → measurements → growth. Each chapter feeds the next. Skip one and the whole thing collapses at scale."
        />

        <div ref={ref} className="relative mt-16 sm:mt-20">
          {/* Vertical progress line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden lg:block">
            <div className="relative h-full w-px bg-border">
              <motion.div
                style={{ scaleY: lineScale, transformOrigin: "top" }}
                className="absolute inset-0 bg-gradient-to-b from-brand via-fire to-brand"
              />
            </div>
          </div>

          <div className="space-y-12 lg:space-y-24">
            {pillars.map((p, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={p.id}
                  className={cn(
                    "relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center",
                    isLeft ? "" : "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* timeline dot (desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 16 }}
                      className={cn(
                        "grid place-items-center h-12 w-12 rounded-full border-2 bg-background",
                        p.accent === "brand"
                          ? "border-brand text-brand"
                          : "border-fire text-fire"
                      )}
                    >
                      <p.icon className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* Text side */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "lg:pr-12",
                      !isLeft && "lg:pr-0 lg:pl-12 lg:text-right"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em]",
                        p.accent === "brand" ? "text-brand" : "text-fire"
                      )}
                    >
                      {p.label}
                    </div>
                    <h3 className="font-display mt-3 text-xl sm:text-2xl md:text-[1.625rem] font-semibold leading-tight tracking-tight text-gradient-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {p.subtitle}
                    </p>
                    <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                    <ul
                      className={cn(
                        "mt-6 space-y-2.5",
                        !isLeft && "lg:flex lg:flex-col lg:items-end"
                      )}
                    >
                      {p.bullets.map((b, i) => (
                        <li
                          key={i}
                          className={cn(
                            "flex items-start gap-2.5 text-sm text-foreground/90",
                            !isLeft && "lg:flex-row-reverse lg:text-right"
                          )}
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                              p.accent === "brand" ? "bg-brand" : "bg-fire"
                            )}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Visual side: tilt card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="perspective-1000"
                  >
                    <TiltCard
                      max={8}
                      className={cn(
                        "rounded-3xl border p-6 sm:p-8 backdrop-blur",
                        p.accent === "brand"
                          ? "border-brand/30 bg-card/60"
                          : "border-fire/30 bg-card/60",
                        p.accent === "brand" ? "glow-brand" : "glow-fire"
                      )}
                    >
                      <div
                        style={{ transform: "translateZ(40px)" }}
                        className="flex items-center justify-between"
                      >
                        <div
                          className={cn(
                            "grid place-items-center h-12 w-12 rounded-xl",
                            p.accent === "brand"
                              ? "bg-brand/15 text-brand"
                              : "bg-fire/15 text-fire"
                          )}
                        >
                          <p.icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          ch. {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div
                        style={{ transform: "translateZ(28px)" }}
                        className="mt-6 font-display text-xl sm:text-2xl font-semibold leading-tight text-gradient-brand"
                      >
                        {p.label.split(" / ")[1]}
                      </div>
                      <p
                        style={{ transform: "translateZ(18px)" }}
                        className="mt-2 text-sm text-muted-foreground"
                      >
                        {p.subtitle}
                      </p>

                      {/* mini chart mock */}
                      <div
                        style={{ transform: "translateZ(24px)" }}
                        className="mt-6 grid grid-cols-5 gap-1.5 h-16 items-end"
                      >
                        {[35, 48, 42, 65, 80].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.15 + i * 0.08,
                              ease: "easeOut",
                            }}
                            className={cn(
                              "rounded-t-sm",
                              p.accent === "brand"
                                ? "bg-brand/70"
                                : "bg-fire/70"
                            )}
                          />
                        ))}
                      </div>
                      <div
                        style={{ transform: "translateZ(14px)" }}
                        className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground font-mono"
                      >
                        <span>week 1</span>
                        <span className={p.accent === "brand" ? "text-brand" : "text-fire"}>
                          +114% efficiency
                        </span>
                        <span>week 5</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
