"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  User,
  BarChart3,
  Settings2,
  Heart,
  Zap,
  ShieldCheck,
  Lightbulb,
  MapPin,
  Clock,
  Mail,
  Languages,
  CalendarCheck,
  ArrowRight,
  Coffee,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { useViewStore } from "@/lib/view-store";
import {
  aboutBio,
  aboutStats,
  principles,
  workingStyle,
  dailyTools,
  personalTimeline,
  type Principle,
} from "@/lib/marketer-data";
import { cn } from "@/lib/utils";

const principleIcons: Record<Principle["icon"], typeof BarChart3> = {
  NumbersFirst: BarChart3,
  SystemOverTactics: Settings2,
  HonestyFirst: Heart,
  Speed: Zap,
  Ownership: ShieldCheck,
  Curiosity: Lightbulb,
};

const toolCategoryColor: Record<string, string> = {
  Paid: "text-fire",
  Measurement: "text-brand",
  Lifecycle: "text-fire",
  Creative: "text-brand",
  Ops: "text-fire",
};

export function AboutPage() {
  const setView = useViewStore((s) => s.setView);

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
        title="Performance marketer. System builder. Honest operator."
        description={aboutBio.shortBio}
        icon={User}
        accent="brand"
        stats={aboutStats.map((s) => ({
          label: s.label,
          value: s.value,
        }))}
      />

      {/* ===== Bio + Portrait ===== */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center lg:justify-start"
            >
              <div className="relative" style={{ perspective: 1000 }}>
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-brand/30 via-transparent to-fire/30 blur-2xl opacity-60" />
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-3xl overflow-hidden ring-2 ring-brand/40 shadow-[0_0_60px_-10px_var(--brand),0_0_120px_-30px_var(--fire)]">
                  <Image
                    src="/marketer-portrait.webp"
                    alt="Rakib Hasan — performance marketer, founder of Hasan Performance Studio"
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-fire/10 pointer-events-none" />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-brand/30 bg-card/90 backdrop-blur-md px-3 py-1.5 shadow-lg whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="text-[11px] font-medium text-foreground">
                    {aboutBio.availability}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 space-y-5"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Principles ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Operating principles · 6 things I actually believe"
            title="The rules I run every engagement by."
            description="Not marketing copy. These are the actual principles that decide which clients I take, how I run campaigns, and what I'll tell you even when it costs me the engagement."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {principles.map((p, i) => {
              const Icon = principleIcons[p.icon];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <TiltCard
                    max={6}
                    className="h-full rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-brand/30 transition-colors"
                  >
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="grid place-items-center h-11 w-11 rounded-xl bg-brand/15 text-brand"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3
                      style={{ transform: "translateZ(20px)" }}
                      className="font-display mt-5 text-lg font-semibold leading-tight"
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{ transform: "translateZ(12px)" }}
                      className="mt-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      {p.description}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Working Style ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Working style · what it's actually like to work with me"
            title="No agency theatre. Just the work, the numbers, and honest answers."
            align="center"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {workingStyle.map((w, i) => (
              <motion.div
                key={w.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6"
              >
                <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {w.question}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {w.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Personal Timeline ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Personal timeline · 13 years, 6 chapters"
            title="How I got from $5/hr SEO to running $6.5M+ in tracked spend."
            description="Not a resume. The actual story — including the parts I'd do differently."
          />

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {personalTimeline.map((c, idx) => (
                <motion.div
                  key={c.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-12 sm:pl-16"
                >
                  <div className="absolute left-0 top-1 grid place-items-center h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-brand to-fire text-brand-foreground font-display font-semibold text-xs sm:text-sm shadow-[0_4px_16px_-4px_var(--brand)] ring-4 ring-background">
                    {c.year}
                  </div>
                  <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 sm:p-6 hover:border-brand/30 transition-colors">
                    <h3 className="font-display text-lg sm:text-xl font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Daily Tools ===== */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tools I use daily · the actual stack"
            title="14 tools. No filler. These are the ones I open every day."
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
                  Probably the only person in Dhaka who genuinely enjoys building financial models. I model everything — including my own coffee habit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-brand/30 bg-card/40 backdrop-blur p-8 sm:p-10 glow-brand"
          >
            <CalendarCheck className="h-8 w-8 text-brand mx-auto" />
            <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold">
              Still reading? Let&apos;s talk.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              The strategy call is 30 minutes, free, and you walk away with a real plan — whether or not we end up working together.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setView("book")}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors group"
              >
                Book a free strategy call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setView("cases")}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-card transition-colors"
              >
                See the case studies first
              </button>
            </div>
          </motion.div>
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
