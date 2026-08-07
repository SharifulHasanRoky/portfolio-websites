"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function StoryScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Horizontal translation of the chapter rail as you scroll vertically
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["8%", "-72%"]);

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor"
    >
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="The 6-chapter arc"
          title="One scroll. The full story of how performance marketing actually compounds."
          description="Scroll horizontally — the chapters move with you. This is the system I run for every client, in this order. Skip a chapter and scale breaks."
        />

        <div ref={ref} className="relative mt-14 overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          <motion.div
            style={{ x }}
            className="flex gap-5 sm:gap-6 w-max"
          >
            {pillars.map((p, i) => (
              <div
                key={p.id}
                className="relative w-[78vw] sm:w-[440px] shrink-0"
              >
                <div
                  className={cn(
                    "relative h-[420px] sm:h-[460px] rounded-3xl border p-6 sm:p-8 overflow-hidden flex flex-col justify-between",
                    p.accent === "brand"
                      ? "border-brand/30 bg-card/60 glow-brand"
                      : "border-fire/30 bg-card/60 glow-fire"
                  )}
                >
                  {/* chapter number ghost */}
                  <div
                    className="pointer-events-none absolute -right-4 -top-8 font-display text-[12rem] sm:text-[14rem] font-bold leading-none opacity-[0.06]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider",
                          p.accent === "brand"
                            ? "bg-brand/15 text-brand"
                            : "bg-fire/15 text-fire"
                        )}
                      >
                        {p.label}
                      </span>
                      <div
                        className={cn(
                          "grid place-items-center h-10 w-10 rounded-xl",
                          p.accent === "brand"
                            ? "bg-brand/15 text-brand"
                            : "bg-fire/15 text-fire"
                        )}
                      >
                        <p.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="font-display mt-6 text-2xl sm:text-3xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-5">
                      {p.description}
                    </p>
                  </div>

                  <div className="relative flex items-center justify-between pt-4 mt-4 border-t border-border/60">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      ch. {String(i + 1).padStart(2, "0")} of 06
                    </span>
                    {i < pillars.length - 1 ? (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 text-xs",
                          p.accent === "brand" ? "text-brand" : "text-fire"
                        )}
                      >
                        next: {pillars[i + 1].label.split(" / ")[1]}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    ) : (
                      <span className="text-xs text-brand inline-flex items-center gap-1">
                        compounding growth <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="hidden sm:inline">scroll vertically</span>
          <span className="hidden sm:inline">·</span>
          <span>chapters move horizontally</span>
        </div>
      </div>
    </section>
  );
}
