"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin, Award, Download } from "lucide-react";
import { cvEntries, skills } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { useViewStore } from "@/lib/view-store";
import { cn } from "@/lib/utils";

export function CVSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const goHomeAndScroll = useViewStore((s) => s.goHomeAndScroll);
  const view = useViewStore((s) => s.view);

  function handleBookClick() {
    if (view !== "home") {
      goHomeAndScroll("#book");
    } else {
      const el = document.querySelector("#book");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  return (
    <section
      id="cv"
      className={cn(
        "relative px-4 sm:px-6 section-anchor",
        hideHeading ? "py-8 sm:py-12" : "py-24 sm:py-32"
      )}
    >
      <div className="mx-auto max-w-7xl relative">
        {!hideHeading && (
          <SectionHeading
            eyebrow="CV · 8 years, 4 chapters"
            title="From SMB SEO to running $4.2M in tracked spend — the path."
            description="A condensed CV. If you want the long-form version with references, hit the button below."
          />
        )}

        <div className={cn("flex flex-wrap gap-3", hideHeading ? "mt-0" : "mt-6")}>
          <button
            type="button"
            onClick={handleBookClick}
            className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors"
          >
            <Download className="h-4 w-4" />
            Book a strategy call
          </button>
          <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-2.5 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-brand" />
            Meta Business Partner · Google Premier Partner
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Timeline (left) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-5" />
              <div className="space-y-8">
                {cvEntries.map((entry, idx) => (
                  <motion.div
                    key={entry.company}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* dot */}
                    <div className="absolute left-0 top-1.5 grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-brand to-fire text-brand-foreground shadow-[0_4px_16px_-4px_var(--brand)] ring-4 ring-background">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 sm:p-6 hover:border-brand/30 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-brand">
                          {entry.period}
                        </div>
                        <div className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {entry.location}
                        </div>
                      </div>
                      <h3 className="font-display mt-2 text-lg sm:text-xl font-semibold">
                        {entry.role}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {entry.company}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {entry.summary}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {entry.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {entry.stack.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-md border border-border bg-background/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills + Education (right) */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              max={5}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 sm:p-7"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand" />
                <h3 className="font-display text-lg font-semibold">Education</h3>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="text-sm font-medium">
                    B.B.A. in Marketing
                  </div>
                  <div className="text-xs text-muted-foreground">
                    University of Dhaka · 2013 – 2017
                  </div>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Certifications
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    {[
                      "Meta Blueprint",
                      "Google Ads Search",
                      "Google Analytics 4",
                      "TikTok Ads Academy",
                      "HubSpot Inbound",
                      "Klaviyo Product",
                    ].map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-1.5"
                      >
                        <Award className="h-3 w-3 text-brand" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {skills.map((block, idx) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {block.category}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {block.items.length} tools
                  </span>
                </div>
                <div className="mt-5 space-y-3.5">
                  {block.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="font-mono text-muted-foreground">
                          {s.level}%
                        </span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full",
                            idx % 2 === 0
                              ? "bg-gradient-to-r from-brand to-fire"
                              : "bg-gradient-to-r from-fire to-brand"
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
