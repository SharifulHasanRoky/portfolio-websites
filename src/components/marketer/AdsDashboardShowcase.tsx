"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  MousePointerClick,
  Eye,
  Target,
  ShoppingCart,
  Users,
  Search,
  BarChart3,
} from "lucide-react";

/**
 * AdsDashboardShowcase — replaces the old Story Scroll.
 *
 * 3D storytelling flow on scroll:
 *   1. Heading drops down from the top as you enter the section.
 *   2. Google Ads dashboard rises from below + tilts into 3D view.
 *   3. Facebook Ads dashboard rises + tilts as you keep scrolling.
 *   4. Both dashboards drift away as the next section (Pillars) approaches.
 *
 * The whole sequence is driven by a single scroll progress on a tall
 * pinned container, so it feels like one continuous cinematic shot.
 */
export function AdsDashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Heading — drops in from top, holds, then drifts up
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.08, 0.85, 1],
    [-120, 0, 0, -180]
  );
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.82, 0.95],
    [0, 1, 1, 0]
  );

  // Google Ads dashboard — rises from below + 3D tilt
  const googleY = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.85],
    [400, 0, 0, -400]
  );
  const googleRotateX = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.85],
    [45, 0, 0, -25]
  );
  const googleOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.18, 0.78, 0.85],
    [0, 1, 1, 0]
  );
  const googleScale = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.85],
    [0.85, 1, 1, 0.9]
  );

  // Facebook Ads dashboard — rises after Google, opposite tilt
  const fbY = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.85, 1],
    [400, 0, 0, -400]
  );
  const fbRotateX = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.85, 1],
    [45, 0, 0, -25]
  );
  const fbOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.43, 0.95, 1],
    [0, 1, 1, 0]
  );
  const fbScale = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.85, 1],
    [0.85, 1, 1, 0.9]
  );

  // Which dashboard is "active" — used for the side caption
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.45, 0.55],
    [0, 1, 1, 0]
  );
  const fbCaptionOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.9, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <section
      id="dashboards"
      ref={ref}
      className="relative section-anchor"
      style={{ height: "260vh" }}
    >
      {/* Pinned stage — everything inside is position: sticky */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="absolute top-[12vh] left-0 right-0 text-center z-20 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-brand mb-5">
            <BarChart3 className="h-3.5 w-3.5" />
            Live ad accounts · real numbers
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight max-w-4xl mx-auto">
            This is what a{" "}
            <span className="text-gradient-brand">profitable ad account</span>{" "}
            actually looks like.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-muted-foreground">
            Two real dashboards. One Google Ads, one Facebook Ads. Scroll to
            walk through them — they drift in, hold, and drift out.
          </p>
        </motion.div>

        {/* Stage perspective wrapper */}
        <div
          className="relative w-full max-w-5xl"
          style={{ perspective: 1400 }}
        >
          {/* Google Ads dashboard */}
          <motion.div
            style={{
              y: googleY,
              rotateX: googleRotateX,
              opacity: googleOpacity,
              scale: googleScale,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            <GoogleAdsDashboard />
          </motion.div>

          {/* Facebook Ads dashboard */}
          <motion.div
            style={{
              y: fbY,
              rotateX: fbRotateX,
              opacity: fbOpacity,
              scale: fbScale,
              transformStyle: "preserve-3d",
            }}
            className="relative mt-6"
          >
            <FacebookAdsDashboard />
          </motion.div>

          {/* Side caption — Google */}
          <motion.div
            style={{ opacity: captionOpacity }}
            className="hidden lg:block absolute -left-4 top-1/3 -translate-x-full w-48 pointer-events-none"
          >
            <div className="rounded-2xl border border-brand/30 bg-card/80 backdrop-blur p-4 glow-brand">
              <div className="text-[10px] uppercase tracking-wider text-brand font-mono">
                Google Ads · PMax
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Performance Max campaign — $42k spend, 1,247 conversions at $34
                CPA. ROAS 4.2x blended.
              </p>
            </div>
          </motion.div>

          {/* Side caption — Facebook */}
          <motion.div
            style={{ opacity: fbCaptionOpacity }}
            className="hidden lg:block absolute -right-4 bottom-1/4 translate-x-full w-48 pointer-events-none"
          >
            <div className="rounded-2xl border border-fire/30 bg-card/80 backdrop-blur p-4 glow-fire">
              <div className="text-[10px] uppercase tracking-wider text-fire font-mono">
                Facebook Ads · Advantage+
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Advantage+ Shopping — $38k spend, 980 purchases at $39 CAC. MER
                5.1x with server-side CAPI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex items-center gap-2"
        >
          <span>keep scrolling</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Google Ads Dashboard (Performance Max campaign)
// ============================================================

function GoogleAdsDashboard() {
  // 14-day bar chart data (spend / conversions)
  const days = [
    { d: "M", spend: 60, conv: 45 },
    { d: "T", spend: 55, conv: 50 },
    { d: "W", spend: 70, conv: 62 },
    { d: "T", spend: 65, conv: 58 },
    { d: "F", spend: 80, conv: 72 },
    { d: "S", spend: 90, conv: 85 },
    { d: "S", spend: 85, conv: 78 },
    { d: "M", spend: 72, conv: 65 },
    { d: "T", spend: 78, conv: 70 },
    { d: "W", spend: 88, conv: 80 },
    { d: "T", spend: 95, conv: 88 },
    { d: "F", spend: 100, conv: 92 },
    { d: "S", spend: 92, conv: 85 },
    { d: "S", spend: 88, conv: 82 },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/60">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 max-w-md">
          <div className="rounded-md bg-background/80 border border-border px-3 py-1 text-[11px] text-muted-foreground font-mono truncate">
            ads.google.com / campaigns / performance-max
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          live
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 text-white">
              <Search className="h-4 w-4" />
            </div>
            <div>
              <div className="font-display text-sm font-semibold">
                Performance Max · Q3 Scale
              </div>
              <div className="text-[11px] text-muted-foreground">
                Last 14 days · All conversions
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/30 px-2.5 py-1 text-[11px] font-medium text-green-400">
            <TrendingUp className="h-3 w-3" />
            +24% WoW
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          <KpiCard
            icon={DollarSign}
            label="Spend"
            value="$42,180"
            delta="+18%"
            positive
          />
          <KpiCard
            icon={ShoppingCart}
            label="Conversions"
            value="1,247"
            delta="+22%"
            positive
          />
          <KpiCard
            icon={Target}
            label="CPA"
            value="$33.83"
            delta="−12%"
            positive
          />
          <KpiCard
            icon={TrendingUp}
            label="ROAS"
            value="4.2x"
            delta="+0.8x"
            positive
          />
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
              Conversions · 14 days
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-brand" />
                Spend
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-fire" />
                Conv.
              </span>
            </div>
          </div>
          <div className="flex items-end justify-between gap-1 h-28">
            {days.map((day, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-1 group"
              >
                <div className="w-full flex-1 flex flex-col justify-end gap-0.5">
                  <div
                    className="w-full rounded-t-sm bg-fire/70 group-hover:bg-fire transition-colors"
                    style={{ height: `${day.conv}%` }}
                  />
                  <div
                    className="w-full rounded-b-sm bg-brand/50 group-hover:bg-brand/70 transition-colors"
                    style={{ height: `${(day.spend - day.conv) * 0.4}%` }}
                  />
                </div>
                <span className="text-[9px] text-muted-foreground font-mono">
                  {day.d}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign breakdown */}
        <div className="mt-4 grid sm:grid-cols-3 gap-2.5">
          <BreakdownRow label="Shopping" pct={48} value="$20.2k" accent="brand" />
          <BreakdownRow label="Search" pct={32} value="$13.5k" accent="fire" />
          <BreakdownRow label="Video" pct={20} value="$8.4k" accent="brand" />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Facebook Ads Dashboard (Advantage+ Shopping)
// ============================================================

function FacebookAdsDashboard() {
  // 14-day line/area chart data (purchases)
  const days = [
    42, 48, 55, 52, 68, 75, 72, 65, 70, 82, 88, 92, 85, 96,
  ];
  const max = Math.max(...days);
  const points = days
    .map((v, i) => `${(i / (days.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ");
  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/60">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 max-w-md">
          <div className="rounded-md bg-background/80 border border-border px-3 py-1 text-[11px] text-muted-foreground font-mono truncate">
            business.facebook.com / adsmanager / advantage-plus-shopping
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          live
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
              </svg>
            </div>
            <div>
              <div className="font-display text-sm font-semibold">
                Advantage+ Shopping · Q3 Scale
              </div>
              <div className="text-[11px] text-muted-foreground">
                Last 14 days · Purchases (CAPI)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/30 px-2.5 py-1 text-[11px] font-medium text-green-400">
            <TrendingUp className="h-3 w-3" />
            +31% WoW
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          <KpiCard
            icon={DollarSign}
            label="Spend"
            value="$38,640"
            delta="+27%"
            positive
          />
          <KpiCard
            icon={ShoppingCart}
            label="Purchases"
            value="980"
            delta="+34%"
            positive
          />
          <KpiCard
            icon={Users}
            label="CAC"
            value="$39.43"
            delta="−18%"
            positive
          />
          <KpiCard
            icon={TrendingUp}
            label="MER"
            value="5.1x"
            delta="+1.4x"
            positive
          />
        </div>

        {/* Area chart */}
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
              Purchases · 14 days
            </div>
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-fire" />
                Daily purchases
              </span>
            </div>
          </div>
          <div className="relative h-28 w-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="fbGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--fire)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--fire)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={areaPoints} fill="url(#fbGrad)" />
              <polyline
                points={points}
                fill="none"
                stroke="var(--fire)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-muted-foreground font-mono">
            {["Jul 1", "", "Jul 5", "", "Jul 9", "", "Jul 14"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>

        {/* Ad creative breakdown */}
        <div className="mt-4 grid sm:grid-cols-3 gap-2.5">
          <CreativeRow
            label="UGC unboxing"
            impressions="1.2M"
            ctr="3.4%"
            active
          />
          <CreativeRow
            label="Founder testimonial"
            impressions="880k"
            ctr="2.8%"
          />
          <CreativeRow
            label="Product demo"
            impressions="640k"
            ctr="2.1%"
          />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Helper components
// ============================================================

function KpiCard({
  icon: Icon,
  label,
  value,
  delta,
  positive,
}: {
  icon: typeof DollarSign;
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="flex items-center justify-between">
        <div className="grid place-items-center h-7 w-7 rounded-md bg-brand/15 text-brand">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <span
          className={`text-[10px] font-mono font-medium ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {delta}
        </span>
      </div>
      <div className="mt-2 font-display text-base sm:text-lg font-semibold leading-none">
        {value}
      </div>
      <div className="mt-1 text-[10px] text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function BreakdownRow({
  label,
  pct,
  value,
  accent,
}: {
  label: string;
  pct: number;
  value: string;
  accent: "brand" | "fire";
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/90">{label}</span>
        <span className="font-mono text-muted-foreground">{value}</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${
            accent === "brand" ? "bg-brand" : "bg-fire"
          }`}
        />
      </div>
    </div>
  );
}

function CreativeRow({
  label,
  impressions,
  ctr,
  active,
}: {
  label: string;
  impressions: string;
  ctr: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        active
          ? "border-fire/40 bg-fire/5"
          : "border-border bg-background/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground/90">{label}</span>
        {active && (
          <span className="text-[9px] font-mono uppercase text-fire">
            winning
          </span>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {impressions}
        </span>
        <span className="flex items-center gap-1">
          <MousePointerClick className="h-3 w-3" />
          {ctr} CTR
        </span>
      </div>
    </div>
  );
}
