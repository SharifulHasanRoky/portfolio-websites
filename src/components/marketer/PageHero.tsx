"use client";

import { motion } from "framer-motion";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import { useViewStore } from "@/lib/view-store";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: "brand" | "fire";
  stats?: { label: string; value: string }[];
};

/** Compact hero used at the top of dedicated sub-page views (Portfolio / Cases / CV). */
export function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon,
  accent = "brand",
  stats,
}: PageHeroProps) {
  const setView = useViewStore((s) => s.setView);

  return (
    <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setView("home")}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/40 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </motion.button>

        <div className="flex items-start gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              "grid place-items-center h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl",
              accent === "brand"
                ? "bg-gradient-to-br from-brand to-brand/60 text-brand-foreground shadow-[0_8px_28px_-8px_var(--brand)]"
                : "bg-gradient-to-br from-fire to-fire/60 text-fire-foreground shadow-[0_8px_28px_-8px_var(--fire)]"
            )}
          >
            <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>

          <div className="min-w-0 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur",
                accent === "brand"
                  ? "border-brand/30 text-brand bg-brand/5"
                  : "border-fire/30 text-fire bg-fire/5"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              {eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display mt-4 text-[1.625rem] sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold leading-[1.1] tracking-tight text-gradient-brand"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>

            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
              >
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-gradient-brand">
                      {s.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
