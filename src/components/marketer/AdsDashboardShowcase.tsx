"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, ChevronDown } from "lucide-react";

/**
 * AdsDashboardShowcase — replaces the old Story Scroll.
 *
 * 3D storytelling flow on scroll:
 *   1. Heading drops down from the top as you enter the section.
 *   2. Google Ads dashboard rises from below + tilts into 3D view.
 *   3. Facebook Ads dashboard rises + tilts as you keep scrolling.
 *   4. Both dashboards drift away as the next section (Pillars) approaches.
 *
 * Dashboards are rendered as REAL platform clones:
 *   - Google Ads: white background, Material-style colored KPI cards (blue/red/yellow/green), multi-line chart
 *   - Facebook Ads: white background, dense data table with all the real columns
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

  // Side captions
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
      {/* Pinned stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="absolute top-[10vh] left-0 right-0 text-center z-20 pointer-events-none"
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
            <div className="rounded-2xl border border-brand/30 bg-card/90 backdrop-blur p-4 glow-brand">
              <div className="text-[10px] uppercase tracking-wider text-brand font-mono">
                Google Ads · PMax
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Performance Max — $352k spend, $1.36M conv. value, 3.87x ROAS
                over 6 months.
              </p>
            </div>
          </motion.div>

          {/* Side caption — Facebook */}
          <motion.div
            style={{ opacity: fbCaptionOpacity }}
            className="hidden lg:block absolute -right-4 bottom-1/4 translate-x-full w-48 pointer-events-none"
          >
            <div className="rounded-2xl border border-fire/30 bg-card/90 backdrop-blur p-4 glow-fire">
              <div className="text-[10px] uppercase tracking-wider text-fire font-mono">
                Facebook Ads · Adv+
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Advantage+ Shopping — 8 campaigns, $43.8k spend, 2.58M reach,
                $13.41 cost per result.
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
// Google Ads Dashboard — Material design, white background,
// colored KPI cards (blue/red/yellow/green), multi-line chart
// ============================================================

const GOOGLE_COLORS = {
  blue: "#1a73e8",
  red: "#d93025",
  yellow: "#f9ab00",
  green: "#1e8e3e",
};

function GoogleAdsDashboard() {
  // 30-day data points for 4 metrics (normalized 0-100 for chart)
  const days = 30;
  const cost = [40, 45, 38, 52, 48, 55, 60, 58, 65, 62, 68, 72, 70, 75, 78, 80, 76, 82, 85, 88, 84, 90, 86, 92, 88, 94, 90, 95, 92, 96];
  const convValue = [25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 72, 80, 85, 82, 88, 90, 86, 92, 95, 90, 96, 92, 98, 95];
  const clicks = [30, 35, 32, 40, 38, 42, 48, 45, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 76, 80, 82, 85, 82, 88, 86, 90, 88, 92];
  const conversions = [20, 25, 22, 28, 30, 28, 35, 38, 36, 42, 45, 43, 48, 52, 50, 55, 53, 58, 62, 60, 65, 68, 66, 70, 72, 70, 75, 73, 78, 76];

  function toPoints(data: number[]) {
    return data
      .map((v, i) => `${(i / (days - 1)) * 100},${100 - v}`)
      .join(" ");
  }

  return (
    <div
      className="rounded-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden border"
      style={{ background: "#fff", borderColor: "#dadce0" }}
    >
      {/* Top bar — Google Ads header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "#fff", borderColor: "#dadce0" }}
      >
        <div className="flex items-center gap-3">
          {/* Google logo */}
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 272 92" className="h-4 w-auto" aria-hidden>
              <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.54 12.51-13.44z" />
              <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.54 12.51-13.44z" />
              <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" />
              <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
              <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l15.74-6.53c-.84-2.18-3.44-3.69-6.55-3.69-4.08 0-9.74 3.61-9.19 10.22z" />
              <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65H35.29z" />
            </svg>
            <span className="text-[13px] text-[#5f6368] font-medium">Ads</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#5f6368]">
          <span className="hidden sm:inline">Last 30 days</span>
          <div
            className="px-2 py-1 rounded border text-[11px]"
            style={{ borderColor: "#dadce0" }}
          >
            Oct 1 – Oct 30, 2026
          </div>
        </div>
      </div>

      {/* Campaign breadcrumb + filter */}
      <div
        className="flex items-center gap-2 px-4 py-2 text-[12px] border-b"
        style={{ borderColor: "#f0f0f0", color: "#5f6368", background: "#f8f9fa" }}
      >
        <span>Campaigns</span>
        <span>›</span>
        <span style={{ color: "#202124" }} className="font-medium">
          Performance Max · Q3 Scale
        </span>
        <span className="ml-auto flex items-center gap-2">
          <span
            className="px-2 py-0.5 rounded-full text-[10px]"
            style={{ background: "#e6f4ea", color: "#1e8e3e" }}
          >
            ● Active
          </span>
        </span>
      </div>

      {/* KPI cards row — Material style solid colors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi
          color={GOOGLE_COLORS.blue}
          label="Cost"
          value="$352K"
          sub="Total spend"
        />
        <GoogleKpi
          color={GOOGLE_COLORS.red}
          label="Conv. value"
          value="1.36M"
          sub="Revenue tracked"
        />
        <GoogleKpi
          color={GOOGLE_COLORS.yellow}
          label="Conversions"
          value="5.39K"
          sub="Total purchases"
          darkText
        />
        <GoogleKpi
          color={GOOGLE_COLORS.green}
          label="Conv. value / cost"
          value="3.87"
          sub="ROAS (return on ad spend)"
        />
      </div>

      {/* Multi-line chart */}
      <div className="p-4" style={{ background: "#fff" }}>
        <div className="flex items-center justify-between mb-3">
          <div className="text-[13px] font-medium" style={{ color: "#202124" }}>
            Performance trends
          </div>
          <div className="flex items-center gap-3 text-[11px]" style={{ color: "#5f6368" }}>
            <LegendDot color={GOOGLE_COLORS.blue} label="Cost" />
            <LegendDot color={GOOGLE_COLORS.red} label="Conv. value" />
            <LegendDot color={GOOGLE_COLORS.yellow} label="Conversions" />
            <LegendDot color={GOOGLE_COLORS.green} label="Clicks" />
          </div>
        </div>
        <div className="relative h-44 w-full" style={{ background: "#fff" }}>
          {/* Y-axis gridlines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full"
                style={{ borderTop: "1px solid #f0f0f0" }}
              />
            ))}
          </div>
          {/* Y-axis labels */}
          <div className="absolute -left-1 top-0 h-full flex flex-col justify-between text-[9px] pointer-events-none" style={{ color: "#9aa0a6" }}>
            <span>$19K</span>
            <span>$14K</span>
            <span>$9.5K</span>
            <span>$4.75K</span>
            <span>$0</span>
          </div>
          {/* SVG lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full pl-8"
          >
            <polyline
              points={toPoints(cost)}
              fill="none"
              stroke={GOOGLE_COLORS.blue}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <polyline
              points={toPoints(convValue)}
              fill="none"
              stroke={GOOGLE_COLORS.red}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <polyline
              points={toPoints(conversions)}
              fill="none"
              stroke={GOOGLE_COLORS.yellow}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <polyline
              points={toPoints(clicks)}
              fill="none"
              stroke={GOOGLE_COLORS.green}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        {/* X-axis labels */}
        <div className="flex justify-between text-[9px] mt-1 pl-8" style={{ color: "#9aa0a6" }}>
          <span>Oct 1</span>
          <span>Oct 8</span>
          <span>Oct 15</span>
          <span>Oct 22</span>
          <span>Oct 30</span>
        </div>
      </div>

      {/* Campaign breakdown table */}
      <div className="px-4 pb-4">
        <div
          className="rounded-lg border overflow-hidden"
          style={{ borderColor: "#dadce0" }}
        >
          <div
            className="grid grid-cols-12 px-3 py-2 text-[10px] font-medium uppercase tracking-wide"
            style={{ background: "#f8f9fa", color: "#5f6368" }}
          >
            <div className="col-span-4">Campaign group</div>
            <div className="col-span-2 text-right">Spend</div>
            <div className="col-span-2 text-right">Conv.</div>
            <div className="col-span-2 text-right">CPA</div>
            <div className="col-span-2 text-right">ROAS</div>
          </div>
          {[
            { name: "Shopping — Products", spend: "$168K", conv: "2.4K", cpa: "$70", roas: "4.2x" },
            { name: "Search — Brand + Category", spend: "$112K", conv: "1.8K", cpa: "$62", roas: "3.6x" },
            { name: "Video — YouTube Awareness", spend: "$72K", conv: "1.2K", cpa: "$60", roas: "3.9x" },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-3 py-2 text-[12px] border-t"
              style={{
                borderColor: "#f0f0f0",
                background: i % 2 === 0 ? "#fff" : "#fafbfc",
                color: "#202124",
              }}
            >
              <div className="col-span-4 truncate">{row.name}</div>
              <div className="col-span-2 text-right font-mono">{row.spend}</div>
              <div className="col-span-2 text-right font-mono">{row.conv}</div>
              <div className="col-span-2 text-right font-mono">{row.cpa}</div>
              <div className="col-span-2 text-right font-mono" style={{ color: GOOGLE_COLORS.green }}>
                {row.roas}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleKpi({
  color,
  label,
  value,
  sub,
  darkText,
}: {
  color: string;
  label: string;
  value: string;
  sub: string;
  darkText?: boolean;
}) {
  return (
    <div
      className="px-4 py-3 border-r last:border-r-0"
      style={{ background: color, borderColor: "rgba(0,0,0,0.08)" }}
    >
      <div
        className="flex items-center gap-1 text-[11px] font-medium"
        style={{ color: darkText ? "#202124" : "#fff", opacity: 0.95 }}
      >
        {label}
        <ChevronDown className="h-3 w-3" />
      </div>
      <div
        className="mt-1 font-display text-xl sm:text-2xl font-semibold leading-none"
        style={{ color: darkText ? "#202124" : "#fff" }}
      >
        {value}
      </div>
      <div
        className="mt-1 text-[10px]"
        style={{ color: darkText ? "#5f6368" : "#fff", opacity: 0.85 }}
      >
        {sub}
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

// ============================================================
// Facebook Ads Dashboard — white background, dense data table
// (matches the real Meta Ads Manager table view)
// ============================================================

function FacebookAdsDashboard() {
  const campaigns = [
    {
      name: "Advantage+ Shopping — Q3",
      status: "Active",
      results: "2,847",
      reach: "1.24M",
      freq: "2.8",
      cpr: "$13.41",
      budget: "$890 / day",
      spent: "$26,420",
      impressions: "3.48M",
      cpm: "$7.59",
    },
    {
      name: "Retargeting — Cart Abandoners",
      status: "Active",
      results: "1,205",
      reach: "684K",
      freq: "4.2",
      cpr: "$8.92",
      budget: "$320 / day",
      spent: "$10,580",
      impressions: "2.87M",
      cpm: "$3.69",
    },
    {
      name: "Lookalike — Purchasers 2%",
      status: "Active",
      results: "642",
      reach: "412K",
      freq: "1.9",
      cpr: "$11.27",
      budget: "$180 / day",
      spent: "$5,260",
      impressions: "782K",
      cpm: "$6.73",
    },
    {
      name: "UGC Creator Campaign",
      status: "Active",
      results: "489",
      reach: "248K",
      freq: "1.4",
      cpr: "$9.84",
      budget: "$120 / day",
      spent: "$1,609",
      impressions: "347K",
      cpm: "$4.64",
    },
  ];

  const totals = {
    results: "5,183",
    reach: "2.58M",
    freq: "Avg 2.6",
    cpr: "$11.05",
    spent: "$43,869",
    impressions: "7.48M",
    cpm: "$5.86",
  };

  return (
    <div
      className="rounded-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden border"
      style={{ background: "#fff", borderColor: "#dadce0" }}
    >
      {/* Top bar — Meta header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "#fff", borderColor: "#dadce0" }}
      >
        <div className="flex items-center gap-2.5">
          {/* Meta/Facebook logo */}
          <div className="grid place-items-center h-7 w-7 rounded-md" style={{ background: "#1877f2" }}>
            <svg viewBox="0 0 24 24" fill="#fff" className="h-4 w-4">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-semibold" style={{ color: "#1c1e21" }}>
              Ads Manager
            </div>
            <div className="text-[10px]" style={{ color: "#65676b" }}>
              Advantage+ Shopping · Q3 Scale
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px]" style={{ color: "#65676b" }}>
          <span className="hidden sm:inline">Last 30 days</span>
          <div
            className="px-2 py-1 rounded border text-[11px]"
            style={{ borderColor: "#dadce0" }}
          >
            Oct 1 – Oct 30, 2026
          </div>
        </div>
      </div>

      {/* Filter chips row */}
      <div
        className="flex items-center gap-2 px-4 py-2 text-[11px] border-b overflow-x-auto"
        style={{ borderColor: "#f0f0f0", background: "#f8f9fa", color: "#65676b" }}
      >
        <span
          className="px-2 py-0.5 rounded-full"
          style={{ background: "#e7f3ff", color: "#1877f2" }}
        >
          Campaign: Active
        </span>
        <span
          className="px-2 py-0.5 rounded-full"
          style={{ background: "#e7f3ff", color: "#1877f2" }}
        >
          Delivery: All
        </span>
        <span className="ml-auto hidden sm:inline">
          Columns: Performance · 9 metrics
        </span>
      </div>

      {/* Data table */}
      <div className="overflow-x-auto" style={{ background: "#fff" }}>
        <table className="w-full text-[11px]" style={{ color: "#1c1e21" }}>
          <thead>
            <tr style={{ background: "#f8f9fa", color: "#65676b" }}>
              <Th align="left">Campaign</Th>
              <Th align="right">Results</Th>
              <Th align="right">Reach</Th>
              <Th align="right">Freq.</Th>
              <Th align="right">Cost / result</Th>
              <Th align="right">Amount spent</Th>
              <Th align="right">Impressions</Th>
              <Th align="right">CPM</Th>
              <Th align="right">Budget</Th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr
                key={i}
                className="border-t"
                style={{
                  borderColor: "#f0f0f0",
                  background: i % 2 === 0 ? "#fff" : "#fafbfc",
                }}
              >
                <Td align="left">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "#31a24c" }}
                    />
                    <span className="truncate max-w-[180px]">{c.name}</span>
                  </div>
                </Td>
                <Td align="right" mono>{c.results}</Td>
                <Td align="right" mono>{c.reach}</Td>
                <Td align="right" mono>{c.freq}</Td>
                <Td align="right" mono>{c.cpr}</Td>
                <Td align="right" mono bold>{c.spent}</Td>
                <Td align="right" mono>{c.impressions}</Td>
                <Td align="right" mono>{c.cpm}</Td>
                <Td align="right" mono>{c.budget}</Td>
              </tr>
            ))}
            {/* Totals row */}
            <tr
              className="border-t-2"
              style={{
                borderColor: "#dadce0",
                background: "#f0f4ff",
              }}
            >
              <Td align="left" bold>
                <span style={{ color: "#1877f2" }}>Totals · 4 campaigns</span>
              </Td>
              <Td align="right" mono bold>{totals.results}</Td>
              <Td align="right" mono bold>{totals.reach}</Td>
              <Td align="right" mono bold>{totals.freq}</Td>
              <Td align="right" mono bold>{totals.cpr}</Td>
              <Td align="right" mono bold style={{ color: "#1877f2" }}>
                {totals.spent}
              </Td>
              <Td align="right" mono bold>{totals.impressions}</Td>
              <Td align="right" mono bold>{totals.cpm}</Td>
              <Td align="right" mono bold>—</Td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom KPI summary strip */}
      <div
        className="grid grid-cols-3 border-t"
        style={{ borderColor: "#dadce0", background: "#f8f9fa" }}
      >
        <FbSummary label="Total spent" value="$43,869.43" />
        <FbSummary label="Total results" value="5,183" />
        <FbSummary label="Avg. cost per result" value="$11.05" />
      </div>
    </div>
  );
}

function Th({ children, align }: { children: React.ReactNode; align: "left" | "right" }) {
  return (
    <th
      className={`px-3 py-2 text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${
        align === "right" ? "text-right" : "text-left"
      }`}
      style={{ color: "#65676b" }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align,
  mono,
  bold,
  style,
}: {
  children: React.ReactNode;
  align: "left" | "right";
  mono?: boolean;
  bold?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <td
      className={`px-3 py-2 whitespace-nowrap ${
        align === "right" ? "text-right" : "text-left"
      } ${mono ? "font-mono" : ""} ${bold ? "font-semibold" : ""}`}
      style={style}
    >
      {children}
    </td>
  );
}

function FbSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3 border-r last:border-r-0" style={{ borderColor: "#dadce0" }}>
      <div className="text-[10px] uppercase tracking-wide" style={{ color: "#65676b" }}>
        {label}
      </div>
      <div className="mt-1 font-display text-lg font-semibold" style={{ color: "#1c1e21" }}>
        {value}
      </div>
    </div>
  );
}
