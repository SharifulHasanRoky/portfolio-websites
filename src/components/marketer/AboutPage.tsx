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
} from "lucide-react";
import { PageHero } from "./PageHero";
import {
  aboutBio,
  aboutStats,
} from "@/lib/marketer-data";

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

      {/* ===== CTA removed per user request ===== */}
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
