"use client";

import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Clock,
  Mail,
  Languages,
  Coffee,
  BookOpen,
  Briefcase,
  Bot,
  Palette,
  LineChart,
  Search,
  Workflow,
} from "lucide-react";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import {
  aboutBio,
  aboutStats,
  dailyTools,
  aiTools,
} from "@/lib/marketer-data";
import { cn } from "@/lib/utils";

const toolCategoryColor: Record<string, string> = {
  Paid: "text-fire",
  Measurement: "text-brand",
  Lifecycle: "text-fire",
  Creative: "text-brand",
  Ops: "text-fire",
};

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pb-12"
    >
      <PageHero
        eyebrow="About me · the marketer behind the numbers"
        title="Performance marketer & Revenue growth strategist."
        description={aboutBio.shortBio}
        icon={User}
        accent="brand"
        stats={aboutStats.map((s) => ({
          label: s.label,
          value: s.value,
        }))}
      />

      {/* ===== Bio ===== */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="text-[11px] uppercase tracking-wider text-brand font-mono">
              the longer version
            </div>
            {aboutBio.longBio.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Personal details strip */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <DetailItem icon={MapPin} label="Location" value={aboutBio.location} />
              <DetailItem icon={Clock} label="Timezone" value={aboutBio.timezone} />
              <DetailItem icon={Languages} label="Languages" value={aboutBio.languages.join(" · ")} />
              <DetailItem icon={Mail} label="Email" value={aboutBio.email} />
            </div>

            {/* Availability badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {aboutBio.availability}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Daily Tools ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tools I use daily · the actual stack"
            title="6 tools. No filler. These are the ones I open every day."
            description="Grouped by what they actually do — not by what looks good on a slide. If you're shopping for a marketer, this is the stack you should expect."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {dailyTools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="rounded-xl border border-border bg-card/40 backdrop-blur p-4 hover:bg-card/70 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-sm font-semibold truncate">
                      {t.name}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {t.purpose}
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-wider font-mono shrink-0",
                      toolCategoryColor[t.category]
                    )}
                  >
                    {t.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI Tools ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="AI tools · my unfair advantage"
            title="30+ AI tools I use to move faster than agencies 3x my size."
            description="I don't just run ads — I leverage AI across strategy, creative, measurement, and competitor research. This is the full stack, grouped by what each tool actually does."
          />

          {(["AI Assistants", "Creative & Content", "Analytics & Tracking", "Competitor Research", "Automation"] as const).map((category, catIdx) => {
            const categoryTools = aiTools.filter((t) => t.category === category);
            const catIcon = category === "AI Assistants" ? Bot : category === "Creative & Content" ? Palette : category === "Analytics & Tracking" ? LineChart : category === "Competitor Research" ? Search : Workflow;
            const catColor = catIdx % 2 === 0 ? "text-brand" : "text-fire";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="mt-10"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={cn("grid place-items-center h-9 w-9 rounded-xl bg-card/60", catColor)}>
                    {(() => { const Icon = catIcon; return <Icon className="h-4 w-4" />; })()}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold">
                    {category}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({categoryTools.length})
                    </span>
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryTools.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                      className="rounded-xl border border-border bg-card/40 backdrop-blur p-4 hover:bg-card/70 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="font-display text-sm font-semibold truncate group-hover:text-brand transition-colors">
                            {t.name}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {t.purpose}
                          </div>
                        </div>
                        <span className={cn("text-[10px] uppercase tracking-wider font-mono shrink-0", catColor)}>
                          {t.category.split(" ")[0]}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== Outside of Marketing ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-10 lg:p-12">
            <div className="text-[11px] uppercase tracking-wider text-brand font-mono">
              outside of marketing
            </div>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              What I do when I&apos;m not in an ad account.
            </h2>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-background/40 p-5">
                <Coffee className="h-6 w-6 text-brand" />
                <div className="mt-3 font-display font-semibold">Coffee & earnings calls</div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  I read earnings calls like novels. Meta, Alphabet, Shopify — every quarter. The signal is in the CFO&apos;s footnotes.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-5">
                <BookOpen className="h-6 w-6 text-fire" />
                <div className="mt-3 font-display font-semibold">Founder Slack community</div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Run a private Slack of 60+ founders trading growth experiments. No agencies, no vendors. Just operators.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-5">
                <Briefcase className="h-6 w-6 text-brand" />
                <div className="mt-3 font-display font-semibold">Spreadsheets for fun</div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Probably the only person in Feni who genuinely enjoys building financial models. I model everything — including my own coffee habit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4 flex items-center gap-3">
      <div className="grid place-items-center h-9 w-9 rounded-lg bg-brand/15 text-brand shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
          {label}
        </div>
        <div className="text-sm font-medium text-foreground truncate">{value}</div>
      </div>
    </div>
  );
}
