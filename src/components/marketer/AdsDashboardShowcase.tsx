"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, ChevronDown } from "lucide-react";
import { useViewStore } from "@/lib/view-store";

/**
 * AdsDashboardShowcase — horizontal scrolling dashboard carousel.
 *
 * 5 dashboards side by side. As you scroll vertically, the row moves
 * horizontally (left → right). Each dashboard is a real-looking clone
 * of an actual ad platform screenshot:
 *   1. Google Ads · Tint Shop
 *   2. Facebook Ads · Meta Ads Manager
 *   3. Google Ads · Home Service Group (434K impressions)
 *   4. Google Ads · Service Pro Network (655 phone calls)
 *   5. Microsoft Ads · DTC Electronics ($184K spend)
 */
const GOOGLE_COLORS = {
  blue: "#1a73e8",
  red: "#d93025",
  yellow: "#f9ab00",
  green: "#1e8e3e",
};

const MS_COLORS = {
  blue: "#0078d4",
  teal: "#00a6a6",
  orange: "#d83b01",
  green: "#107c10",
};

export function AdsDashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const dashboards = [
    // New FB dashboards first
    { id: "fb-cynthia", node: <FacebookAdsCynthia /> },
    { id: "fb-8415-table", node: <FacebookAds8415Table /> },
    // Then alternating Google / FB
    { id: "fb-vsl-leads", node: <FacebookVSLLeads /> },
    { id: "tint-shop", node: <GoogleTintShop /> },
    { id: "fb-ads", node: <FacebookAdsManager /> },
    { id: "gad-434k", node: <GoogleAds434K /> },
    { id: "gad-655", node: <GoogleAds655Calls /> },
    { id: "ms-ads", node: <MicrosoftAds /> },
    { id: "downioa", node: <GoogleAdsDownioa /> },
    { id: "lead-forms-488", node: <GoogleAdsLeadForms488 /> },
    { id: "phone-184-chart", node: <GoogleAdsPhone184Chart /> },
    { id: "phone-184-table", node: <GoogleAdsPhone184Table /> },
  ];

  const total = dashboards.length;

  // Heading fades out as dashboards zoom in — when dashboard is big, heading goes behind/fades
  const headingY = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, -40]);
  // Heading starts visible, fades as you scroll (goes behind the zooming dashboard)
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.92, 1],
    [1, 0.15, 0.15, 0]
  );

  // We use a percentage-based x transform that's relative to the track's own width.
  const translatePercent = ((total - 1) / total) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${translatePercent}%`]);

  return (
    <section
      id="dashboards"
      ref={ref}
      className="relative section-anchor"
      style={{ height: `${total * 80}vh` }}
    >
      {/* Pinned stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden px-4 sm:px-6">
        {/* Heading — BEHIND dashboards (z-5). Fades to 15% opacity as soon as
            you start scrolling, so zoomed dashboards appear on top of it. */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="absolute top-16 left-0 right-0 text-center z-[5] px-4 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-brand mb-1.5">
            <BarChart3 className="h-3 w-3" />
            Real ad accounts · live data
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight max-w-3xl mx-auto">
            Real dashboards from{" "}
            <span className="text-gradient-brand">real ad accounts</span>
          </h2>
          <p className="mt-1 max-w-lg mx-auto text-xs sm:text-sm text-muted-foreground">
            {total} dashboards · Google Ads, Facebook Ads &amp; Microsoft Ads.
            Scroll to explore.
          </p>
        </motion.div>

        {/* Horizontal track — ABOVE heading (z-10). When dashboards zoom,
            they appear on top of the faded heading text. */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vw] sm:w-[680px] lg:w-[740px] z-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-10 w-max items-center"
          >
            {dashboards.map((d, i) => (
              <DashboardSlot
                key={d.id}
                index={i}
                total={total}
                scrollYProgress={scrollYProgress}
              >
                {d.node}
              </DashboardSlot>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA button — connects to Portfolio */}
        <BottomCTA scrollYProgress={scrollYProgress} />

        {/* Progress indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div className="w-40 h-1 rounded-full bg-border overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-brand to-fire origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BottomCTA — "View all in Portfolio" button at the bottom
// ============================================================

function BottomCTA({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const setView = useViewStore((s) => s.setView);
  // Button always visible, but slides up slightly at the very end
  const y = useTransform(scrollYProgress, [0.9, 1], [0, -8]);

  return (
    <motion.div
      style={{ y }}
      className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
    >
      <button
        type="button"
        onClick={() => setView("portfolio")}
        className="group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors shadow-lg"
      >
        View all in Portfolio
        <svg
          className="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}

// ============================================================
// 1. Google Ads · Tint Shop
// ============================================================

function GoogleTintShop() {
  return (
    <DashboardCard
      platform="google"
      title="Tint Shop · Lead Gen"
      account="Account: 958-735-6999 · Tint Shop"
      dateRange="Sep 1 – Sep 30, 2024"
    >
      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="Quote generated" value="250" sub="Total quotes" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Submit lead forms" value="7" sub="Form submissions" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Phone calls" value="445" sub="Call conversions" darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$31.8K" sub="Total spend" />
      </div>
      {/* Chart */}
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["Quote generated", "Lead forms", "Phone calls", "Cost"]}
        yLabels={["$0", "$400", "$800", "$1.2K", "$1.6K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 2. Facebook Ads · Meta Ads Manager
// ============================================================

function FacebookAdsManager() {
  const campaigns = [
    { name: "$15 - 5day", objective: "Landing Page Views", results: "716", reach: "92,556", freq: "1.58", cpr: "$0.02", spent: "$14.66", ends: "Sep 24", impressions: "146,331", cpm: "$0.10", clicks: "1,377" },
    { name: "60 - 15/09/25", objective: "Reach", results: "550", reach: "126,566", freq: "1.42", cpr: "$0.04", spent: "$21.37", ends: "Sep 21, '25", impressions: "179,683", cpm: "$0.17", clicks: "1,160" },
    { name: "Tint Shop — Quote", objective: "Messaging conv.", results: "226,130", reach: "487,294", freq: "2.14", cpr: "$15.62", spent: "$8,091.62", ends: "Ongoing", impressions: "1,043,892", cpm: "$7.75", clicks: "12,448" },
    { name: "Window Tint — Lead", objective: "Website Leads", results: "1,247", reach: "339,589", freq: "1.89", cpr: "$0.21", spent: "$263.35", ends: "Ongoing", impressions: "642,381", cpm: "$0.41", clicks: "4,892" },
  ];
  const totals = { results: "228,643", reach: "1,046,005", freq: "1.78", cpr: "$0.04", spent: "$8,391.00", impressions: "2,012,287", cpm: "$0.12", clicks: "19,877" };

  return (
    <DashboardCard
      platform="facebook"
      title="Ads Manager · Meta Account"
      account="Meta Account · Tint Shop"
      dateRange="Last 30 days"
    >
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
              <Th align="right">Ends</Th>
              <Th align="right">Impr.</Th>
              <Th align="right">CPM</Th>
              <Th align="right">Clicks</Th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "#f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                <Td align="left">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#31a24c" }} />
                      <span className="truncate max-w-[130px] font-medium" style={{ color: "#1877f2" }}>{c.name}</span>
                    </div>
                    <span className="text-[9px] mt-0.5 ml-3.5" style={{ color: "#9aa0a6" }}>{c.objective}</span>
                  </div>
                </Td>
                <Td align="right" mono>{c.results}</Td>
                <Td align="right" mono>{c.reach}</Td>
                <Td align="right" mono>{c.freq}</Td>
                <Td align="right" mono>{c.cpr}</Td>
                <Td align="right" mono bold>{c.spent}</Td>
                <Td align="right" mono>{c.ends}</Td>
                <Td align="right" mono>{c.impressions}</Td>
                <Td align="right" mono>{c.cpm}</Td>
                <Td align="right" mono>{c.clicks}</Td>
              </tr>
            ))}
            <tr className="border-t-2" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
              <Td align="left" bold><span style={{ color: "#1877f2" }}>Totals · 4</span></Td>
              <Td align="right" mono bold>{totals.results}</Td>
              <Td align="right" mono bold>{totals.reach}</Td>
              <Td align="right" mono bold>{totals.freq}</Td>
              <Td align="right" mono bold>{totals.cpr}</Td>
              <Td align="right" mono bold style={{ color: "#1877f2" }}>{totals.spent}</Td>
              <Td align="right" mono bold>—</Td>
              <Td align="right" mono bold>{totals.impressions}</Td>
              <Td align="right" mono bold>{totals.cpm}</Td>
              <Td align="right" mono bold>{totals.clicks}</Td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-3 border-t" style={{ borderColor: "#dadce0", background: "#f8f9fa" }}>
        <FbSummary label="Total spent" value="$8,391.00" />
        <FbSummary label="Total reach" value="1,046,005" />
        <FbSummary label="Total impressions" value="2,012,287" />
      </div>
    </DashboardCard>
  );
}

// ============================================================
// 3. Google Ads · Home Service Group (434K impressions)
// ============================================================

function GoogleAds434K() {
  return (
    <DashboardCard
      platform="google"
      title="Home Service Group · HVAC + Plumbing"
      account="Account: 847-291-4456 · Home Service Group"
      dateRange="Last 30 days"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="Impressions" value="434K" sub="Total impressions" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Clicks" value="11.9K" sub="Total clicks" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Conversions" value="1.16K" sub="Tracked conv." darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$44.4K" sub="Total spend" />
      </div>
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["Impressions", "Clicks", "Conversions", "Cost"]}
        yLabels={["0", "$5K", "$10K", "$15K", "$20K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 4. Google Ads · Service Pro Network (655 phone calls)
// ============================================================

function GoogleAds655Calls() {
  return (
    <DashboardCard
      platform="google"
      title="Service Pro Network · Call Tracking"
      account="Account: 612-884-9921 · Service Pro Network"
      dateRange="Last 30 days"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="Cost" value="$43.1K" sub="Total spend" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Phone calls" value="655" sub="Tracked calls" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Conversions" value="1.15K" sub="Total conv." darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="CTR" value="2.72%" sub="Click-through rate" />
      </div>
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["Cost", "Phone calls", "Conversions", "CTR"]}
        yLabels={["$0", "$500", "$1K", "$1.5K", "$2K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 5. Microsoft Ads · DTC Electronics ($184K spend)
// ============================================================

function MicrosoftAds() {
  return (
    <DashboardCard
      platform="microsoft"
      title="DTC Electronics · Microsoft Advertising"
      account="Account: 334-119-7782 · DTC Electronics"
      dateRange="Last 30 days"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <MsKpi color={MS_COLORS.blue} label="Clicks" value="3.87K" sub="Total clicks" />
        <MsKpi color={MS_COLORS.teal} label="Impressions" value="467K" sub="Total impr." />
        <MsKpi color={MS_COLORS.orange} label="Purchases" value="620K" sub="Tracked value" />
        <MsKpi color={MS_COLORS.green} label="Cost" value="$184K" sub="Total spend" />
      </div>
      <MultiLineChart
        colors={[MS_COLORS.blue, MS_COLORS.teal, MS_COLORS.orange, MS_COLORS.green]}
        labels={["Clicks", "Impressions", "Purchases", "Cost"]}
        yLabels={["$0", "$6K", "$12K", "$18K", "$24K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 6. Google Ads · Downioa (Conversions 1.39K, ROAS 764%)
// ============================================================

function GoogleAdsDownioa() {
  return (
    <DashboardCard
      platform="google"
      title="Downioa · Performance Max"
      account="Account: sharifulhasanrocky@gmail.com"
      dateRange="Last 30 days"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="Conversions" value="1.39K" sub="Total conv." />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Conv. value" value="259K" sub="Revenue tracked" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Actual ROAS" value="764.35%" sub="Return on ad spend" darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$33.9K" sub="Total spend" />
      </div>
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["Conversions", "Conv. value", "ROAS", "Cost"]}
        yLabels={["$0", "$2K", "$4K", "$6K", "$8K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 7. Google Ads · Lead Forms 488 (Oct 2023 – Mar 2024)
// ============================================================

function GoogleAdsLeadForms488() {
  return (
    <DashboardCard
      platform="google"
      title="Lead Gen · 13 Campaigns"
      account="Account: sharifulhasanrocky@gmail.com"
      dateRange="Oct 1, 2023 – Mar 31, 2024"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="Submit lead forms" value="7" sub="Form submissions" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Phone calls" value="56" sub="Call conversions" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Conversions" value="488" sub="Total conv." darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$4.67K" sub="Total spend" />
      </div>
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["Lead forms", "Phone calls", "Conversions", "Cost"]}
        yLabels={["$0", "$150", "$300", "$450", "$600"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 8. Google Ads · Phone Calls 184 (chart view, Aug 2023 – Nov 2024)
// ============================================================

function GoogleAdsPhone184Chart() {
  return (
    <DashboardCard
      platform="google"
      title="Lead Gen · Call-Heavy Account"
      account="Account: sharifulhasanrocky@gmail.com"
      dateRange="Aug 1, 2023 – Nov 30, 2024"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="CTR" value="2.02%" sub="Click-through rate" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Phone calls" value="184" sub="Call conversions" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Conversions" value="759" sub="Total conv." darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$14.4K" sub="Total spend" />
      </div>
      <MultiLineChart
        colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
        labels={["CTR", "Phone calls", "Conversions", "Cost"]}
        yLabels={["$0", "$300", "$600", "$900", "$1.2K"]}
      />
    </DashboardCard>
  );
}

// ============================================================
// 9. Google Ads · Phone Calls 184 (table view with campaign breakdown)
// ============================================================

function GoogleAdsPhone184Table() {
  return (
    <DashboardCard
      platform="google"
      title="Lead Gen · Campaign Breakdown"
      account="Account: sharifulhasanrocky@gmail.com"
      dateRange="Aug 1, 2023 – Nov 30, 2024"
    >
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0" }}>
        <GoogleKpi color={GOOGLE_COLORS.blue} label="CTR" value="2.02%" sub="Click-through rate" />
        <GoogleKpi color={GOOGLE_COLORS.red} label="Phone calls" value="184" sub="Call conversions" />
        <GoogleKpi color={GOOGLE_COLORS.yellow} label="Conversions" value="759" sub="Total conv." darkText />
        <GoogleKpi color={GOOGLE_COLORS.green} label="Cost" value="$14.4K" sub="Total spend" />
      </div>
      {/* Campaign breakdown table */}
      <div className="px-4 pb-4 pt-3" style={{ background: "#fff" }}>
        <div className="text-[12px] font-medium mb-2" style={{ color: "#202124" }}>
          All campaigns · 6 active
        </div>
        <div className="rounded-lg border overflow-hidden" style={{ borderColor: "#dadce0" }}>
          <div
            className="grid grid-cols-12 px-3 py-2 text-[10px] font-medium uppercase tracking-wide"
            style={{ background: "#f8f9fa", color: "#5f6368" }}
          >
            <div className="col-span-5">Campaign</div>
            <div className="col-span-2 text-right">Cost</div>
            <div className="col-span-2 text-right">Calls</div>
            <div className="col-span-2 text-right">Conv.</div>
            <div className="col-span-1 text-right">CTR</div>
          </div>
          {[
            { name: "Search — Call-Only", cost: "$4.8K", calls: "78", conv: "312", ctr: "3.4%" },
            { name: "Search — Brand", cost: "$3.2K", calls: "42", conv: "186", ctr: "4.1%" },
            { name: "LSA — Local Service", cost: "$2.9K", calls: "38", conv: "142", ctr: "—" },
            { name: "Display — Retargeting", cost: "$2.1K", calls: "14", conv: "78", ctr: "1.2%" },
            { name: "PMax — All Campaigns", cost: "$1.4K", calls: "12", conv: "41", ctr: "1.8%" },
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
              <div className="col-span-5 truncate">{row.name}</div>
              <div className="col-span-2 text-right font-mono">{row.cost}</div>
              <div className="col-span-2 text-right font-mono">{row.calls}</div>
              <div className="col-span-2 text-right font-mono">{row.conv}</div>
              <div className="col-span-1 text-right font-mono" style={{ color: GOOGLE_COLORS.green }}>
                {row.ctr}
              </div>
            </div>
          ))}
          {/* Totals row */}
          <div
            className="grid grid-cols-12 px-3 py-2 text-[12px] border-t-2 font-semibold"
            style={{ borderColor: "#dadce0", background: "#f0f4ff", color: "#1877f2" }}
          >
            <div className="col-span-5">Totals · 5 campaigns</div>
            <div className="col-span-2 text-right font-mono">$14.4K</div>
            <div className="col-span-2 text-right font-mono">184</div>
            <div className="col-span-2 text-right font-mono">759</div>
            <div className="col-span-1 text-right font-mono">2.02%</div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

// ============================================================
// 10. Facebook Ads · VSL Lead Gen (531 results, $8.44 CPR)
// ============================================================

function FacebookVSLLeads() {
  const campaigns = [
    { name: "Lead Gen - Retargeting", results: "184", reach: "12,847", spent: "$1,247", cpr: "$6.78", impr: "28,394", clicks: "892" },
    { name: "Lead Gen - Angle 3", results: "142", reach: "11,204", spent: "$1,184", cpr: "$8.34", impr: "24,872", clicks: "648" },
    { name: "Lead Gen - Angle 2", results: "118", reach: "10,128", spent: "$1,002", cpr: "$8.49", impr: "22,941", clicks: "584" },
    { name: "Lead Gen - Angle 1", results: "87", reach: "9,008", spent: "$1,048", cpr: "$12.05", impr: "22,438", clicks: "412" },
  ];
  const totals = { results: "531", reach: "43,187", spent: "$4,481", cpr: "$8.44", impr: "98,645", clicks: "2,536" };

  return (
    <DashboardCard
      platform="facebook"
      title="VSL Lead Gen · 4 Ad Sets"
      account="Meta Account · sharifulhasanrocky"
      dateRange="Last 30 days"
    >
      {/* Top summary KPI strip */}
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
        <FbKpi color="#1877f2" label="Results" value="531" sub="VSL Leads" />
        <FbKpi color="#00a4ef" label="Reach" value="43,187" sub="People" />
        <FbKpi color="#7fba00" label="Impressions" value="98,645" sub="Total" />
        <FbKpi color="#ff9900" label="Cost / result" value="$8.44" sub="Per VSL Lead" />
      </div>

      {/* Data table */}
      <div className="overflow-x-auto" style={{ background: "#fff" }}>
        <table className="w-full text-[11px]" style={{ color: "#1c1e21" }}>
          <thead>
            <tr style={{ background: "#f8f9fa", color: "#65676b" }}>
              <Th align="left">Campaign</Th>
              <Th align="right">Results</Th>
              <Th align="right">Reach</Th>
              <Th align="right">Amount spent</Th>
              <Th align="right">Cost / result</Th>
              <Th align="right">Impressions</Th>
              <Th align="right">Link clicks</Th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "#f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                <Td align="left">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#31a24c" }} />
                    <span className="truncate max-w-[160px] font-medium" style={{ color: "#1877f2" }}>{c.name}</span>
                  </div>
                </Td>
                <Td align="right" mono>{c.results}</Td>
                <Td align="right" mono>{c.reach}</Td>
                <Td align="right" mono bold>{c.spent}</Td>
                <Td align="right" mono>{c.cpr}</Td>
                <Td align="right" mono>{c.impr}</Td>
                <Td align="right" mono>{c.clicks}</Td>
              </tr>
            ))}
            {/* Totals row */}
            <tr className="border-t-2" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
              <Td align="left" bold><span style={{ color: "#1877f2" }}>Totals · 4 ad sets</span></Td>
              <Td align="right" mono bold>{totals.results}</Td>
              <Td align="right" mono bold>{totals.reach}</Td>
              <Td align="right" mono bold style={{ color: "#1877f2" }}>{totals.spent}</Td>
              <Td align="right" mono bold>{totals.cpr}</Td>
              <Td align="right" mono bold>{totals.impr}</Td>
              <Td align="right" mono bold>{totals.clicks}</Td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

function FbKpi({ color, label, value, sub }: { color: string; label: string; value: string; sub: string }) {
  return (
    <div className="px-3 py-3 border-r last:border-r-0" style={{ borderColor: "#dadce0" }}>
      <div className="text-[10px] font-medium uppercase tracking-wide" style={{ color }}>
        {label}
      </div>
      <div className="mt-1 font-display text-lg sm:text-xl font-semibold leading-none" style={{ color: "#1c1e21" }}>
        {value}
      </div>
      <div className="mt-1 text-[9px]" style={{ color: "#65676b" }}>
        {sub}
      </div>
    </div>
  );
}

// ============================================================
// 11. Facebook Ads · CYNTHIA ($43,869.43 spent, 666,980 reach)
// ============================================================

function FacebookAdsCynthia() {
  const campaigns = [
    { name: "67,000,000- CYNTHIA", results: "28", reach: "17,426", freq: "1.15", cpr: "$12.62", spent: "$353.44", ends: "Ongoing", impressions: "20,065", cpm: "$17.61" },
    { name: "... add cynthia", results: "124", reach: "89,247", freq: "2.34", cpr: "$4.18", spent: "$518.32", ends: "Ongoing", impressions: "208,842", cpm: "$2.48" },
    { name: "67,000,000 - Copy", results: "487", reach: "184,592", freq: "3.12", cpr: "$8.94", spent: "$4,352.18", ends: "Ongoing", impressions: "576,128", cpm: "$7.56" },
    { name: "... v Film Niche)", results: "94", reach: "42,184", freq: "2.78", cpr: "$15.47", spent: "$1,453.62", ends: "Ongoing", impressions: "117,294", cpm: "$12.40" },
    { name: "137700,000", results: "38", reach: "28,947", freq: "1.89", cpr: "$22.14", spent: "$841.23", ends: "Ongoing", impressions: "54,782", cpm: "$15.36" },
    { name: "67,000,000", results: "612", reach: "201,847", freq: "4.52", cpr: "$11.28", spent: "$6,904.51", ends: "Ongoing", impressions: "912,384", cpm: "$7.57" },
    { name: "Test", results: "12", reach: "8,142", freq: "1.42", cpr: "$18.94", spent: "$227.13", ends: "Ongoing", impressions: "11,567", cpm: "$19.64" },
  ];
  const totals = { results: "1,395", reach: "572,385", freq: "2.87", cpr: "$31.45", spent: "$14,650.43", impressions: "1,901,062", cpm: "$7.72" };

  return (
    <DashboardCard
      platform="facebook"
      title="Meta Ads Manager · CYNTHIA"
      account="Meta Account · sharifulhasanrocky"
      dateRange="Last 30 days"
    >
      {/* Top KPI strip */}
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
        <FbKpi color="#1877f2" label="Results" value="666,980" sub="Total" />
        <FbKpi color="#00a4ef" label="Reach" value="666,980" sub="People" />
        <FbKpi color="#7fba00" label="Amount spent" value="$43,869" sub="Total spent" />
        <FbKpi color="#ff9900" label="Impressions" value="2.58M" sub="Total impr." />
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
              <Th align="right">Ends</Th>
              <Th align="right">Impr.</Th>
              <Th align="right">CPM</Th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "#f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                <Td align="left">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#31a24c" }} />
                    <span className="truncate max-w-[140px] font-medium" style={{ color: "#1877f2" }}>{c.name}</span>
                  </div>
                </Td>
                <Td align="right" mono>{c.results}</Td>
                <Td align="right" mono>{c.reach}</Td>
                <Td align="right" mono>{c.freq}</Td>
                <Td align="right" mono>{c.cpr}</Td>
                <Td align="right" mono bold>{c.spent}</Td>
                <Td align="right" mono>{c.ends}</Td>
                <Td align="right" mono>{c.impressions}</Td>
                <Td align="right" mono>{c.cpm}</Td>
              </tr>
            ))}
            <tr className="border-t-2" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
              <Td align="left" bold><span style={{ color: "#1877f2" }}>Totals · 7 campaigns</span></Td>
              <Td align="right" mono bold>{totals.results}</Td>
              <Td align="right" mono bold>{totals.reach}</Td>
              <Td align="right" mono bold>{totals.freq}</Td>
              <Td align="right" mono bold>{totals.cpr}</Td>
              <Td align="right" mono bold style={{ color: "#1877f2" }}>{totals.spent}</Td>
              <Td align="right" mono bold>—</Td>
              <Td align="right" mono bold>{totals.impressions}</Td>
              <Td align="right" mono bold>{totals.cpm}</Td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

// ============================================================
// 12. Facebook Ads · $8,415 Table (1,046,005 reach, 2,116,059 impr)
// ============================================================

function FacebookAds8415Table() {
  const campaigns = [
    { name: "$15 - 5day", results: "716", reach: "92,556", freq: "1.58", cpr: "$0.02", spent: "$14.66", ends: "Sep 24, 2025", impressions: "146,331", cpm: "$0.10" },
    { name: "60 - 15/09/25", results: "550", reach: "126,566", freq: "1.42", cpr: "$0.04", spent: "$21.37", ends: "Sep 21, 2025", impressions: "179,683", cpm: "$0.17" },
    { name: "ner - 11/09/25 - $30- 6day", results: "487", reach: "84,228", freq: "2.14", cpr: "$15.62", spent: "$8,091.62", ends: "Sep 17, 2025", impressions: "180,228", cpm: "$7.75" },
    { name: "sg - 10/09/25", results: "118", reach: "47,892", freq: "1.89", cpr: "$0.21", spent: "$24.78", ends: "Sep 15, 2025", impressions: "90,542", cpm: "$0.41" },
    { name: "pz - 13/03/26", results: "82", reach: "38,447", freq: "2.45", cpr: "$0.18", spent: "$14.76", ends: "Mar 20, 2026", impressions: "94,228", cpm: "$0.16" },
    { name: "- 13/04/26", results: "64", reach: "29,184", freq: "1.78", cpr: "$0.31", spent: "$19.84", ends: "Apr 23, 2026", impressions: "51,997", cpm: "$0.38" },
    { name: "/26", results: "38", reach: "18,947", freq: "2.12", cpr: "$0.42", spent: "$15.96", ends: "Apr 15, 2026", impressions: "40,184", cpm: "$0.40" },
    { name: "9/04/26", results: "24", reach: "12,684", freq: "1.94", cpr: "$0.56", spent: "$13.44", ends: "Apr 19, 2026", impressions: "24,617", cpm: "$0.55" },
  ];
  const totals = { results: "2,079", reach: "1,046,005", freq: "2.02", cpr: "$4.05", spent: "$8,415.00", impressions: "2,116,059", cpm: "$3.98" };

  return (
    <DashboardCard
      platform="facebook"
      title="Meta Ads Manager · Lifetime Budgets"
      account="Meta Account · sharifulhasanrocky"
      dateRange="Sep 2025 – Apr 2026"
    >
      {/* Top KPI strip */}
      <div className="grid grid-cols-4 gap-0 border-b" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
        <FbKpi color="#1877f2" label="Reach" value="1,046,005" sub="People" />
        <FbKpi color="#00a4ef" label="Impressions" value="2.11M" sub="Total" />
        <FbKpi color="#7fba00" label="Amount spent" value="$8,415" sub="Total spent" />
        <FbKpi color="#ff9900" label="CPM" value="$3.98" sub="Per 1,000 impr." />
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
              <Th align="right">Ends</Th>
              <Th align="right">Impr.</Th>
              <Th align="right">CPM</Th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "#f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                <Td align="left">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#31a24c" }} />
                    <span className="truncate max-w-[140px] font-medium" style={{ color: "#1877f2" }}>{c.name}</span>
                  </div>
                </Td>
                <Td align="right" mono>{c.results}</Td>
                <Td align="right" mono>{c.reach}</Td>
                <Td align="right" mono>{c.freq}</Td>
                <Td align="right" mono>{c.cpr}</Td>
                <Td align="right" mono bold>{c.spent}</Td>
                <Td align="right" mono>{c.ends}</Td>
                <Td align="right" mono>{c.impressions}</Td>
                <Td align="right" mono>{c.cpm}</Td>
              </tr>
            ))}
            <tr className="border-t-2" style={{ borderColor: "#dadce0", background: "#f0f4ff" }}>
              <Td align="left" bold><span style={{ color: "#1877f2" }}>Totals · 8 campaigns</span></Td>
              <Td align="right" mono bold>{totals.results}</Td>
              <Td align="right" mono bold>{totals.reach}</Td>
              <Td align="right" mono bold>{totals.freq}</Td>
              <Td align="right" mono bold>{totals.cpr}</Td>
              <Td align="right" mono bold style={{ color: "#1877f2" }}>{totals.spent}</Td>
              <Td align="right" mono bold>—</Td>
              <Td align="right" mono bold>{totals.impressions}</Td>
              <Td align="right" mono bold>{totals.cpm}</Td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

// ============================================================
// DashboardSlot — wrapper that applies zoom effect when centered
// ============================================================

function DashboardSlot({
  index,
  total,
  scrollYProgress,
  children,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  children: React.ReactNode;
}) {
  // First dashboard centered at scroll=0, last at scroll=1, others evenly spaced.
  // segmentSize = distance between consecutive dashboard centers.
  const segmentSize = total > 1 ? 1 / (total - 1) : 1;
  const center = index * segmentSize;
  // Buffer defines how far from center the zoom starts
  const buffer = segmentSize * 0.4;

  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, center - buffer),
      center,
      Math.min(1, center + buffer),
    ],
    [0.55, 1.2, 0.55]
  );
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, center - buffer),
      center - buffer * 0.4,
      center + buffer * 0.4,
      Math.min(1, center + buffer),
    ],
    [0.2, 1, 1, 0.2]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [Math.max(0, center - buffer), center, Math.min(1, center + buffer)],
    [index % 2 === 0 ? -12 : 12, 0, index % 2 === 0 ? 12 : -12]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="w-[88vw] sm:w-[680px] lg:w-[740px] shrink-0"
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// Shared building blocks
// ============================================================

function DashboardCard({
  platform,
  title,
  account,
  dateRange,
  children,
}: {
  platform: "google" | "facebook" | "microsoft";
  title: string;
  account: string;
  dateRange: string;
  children: React.ReactNode;
}) {
  const setView = useViewStore((s) => s.setView);
  return (
    <div
      className="rounded-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden border"
      style={{ background: "#fff", borderColor: "#dadce0" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "#fff", borderColor: "#dadce0" }}
      >
        <div className="flex items-center gap-2.5">
          {platform === "google" && <GoogleLogo />}
          {platform === "facebook" && <FacebookLogo />}
          {platform === "microsoft" && <MicrosoftLogo />}
          <div>
            <div className="text-[13px] font-semibold" style={{ color: "#1c1e21" }}>
              {title}
            </div>
            <div className="text-[10px]" style={{ color: "#65676b" }}>
              {account}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px]" style={{ color: "#65676b" }}>
          <span className="hidden sm:inline">{dateRange}</span>
          <span className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: "#e6f4ea", color: "#1e8e3e" }}>
            ● Active
          </span>
        </div>
      </div>
      {children}
      {/* Portfolio link footer */}
      <button
        type="button"
        onClick={() => setView("portfolio")}
        className="w-full px-4 py-2.5 text-center text-[12px] font-medium border-t transition-colors hover:bg-gray-50"
        style={{ borderColor: "#f0f0f0", color: "#1877f2", background: "#f8f9fa" }}
      >
        View this in Portfolio →
      </button>
    </div>
  );
}

function GoogleLogo() {
  return (
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
  );
}

function FacebookLogo() {
  return (
    <div className="grid place-items-center h-7 w-7 rounded-md" style={{ background: "#1877f2" }}>
      <svg viewBox="0 0 24 24" fill="#fff" className="h-4 w-4">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    </div>
  );
}

function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid grid-cols-2 gap-0.5 h-4 w-4">
        <div style={{ background: "#f25022" }} />
        <div style={{ background: "#7fba00" }} />
        <div style={{ background: "#00a4ef" }} />
        <div style={{ background: "#ffb900" }} />
      </div>
      <span className="text-[12px] font-semibold" style={{ color: "#1c1e21" }}>
        Microsoft <span className="font-normal" style={{ color: "#65676b" }}>Advertising</span>
      </span>
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
    <div className="px-3 py-3 border-r last:border-r-0" style={{ background: color, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="flex items-center gap-1 text-[11px] font-medium" style={{ color: darkText ? "#202124" : "#fff", opacity: 0.95 }}>
        {label}
        <ChevronDown className="h-3 w-3" />
      </div>
      <div className="mt-1 font-display text-lg sm:text-xl font-semibold leading-none" style={{ color: darkText ? "#202124" : "#fff" }}>
        {value}
      </div>
      <div className="mt-1 text-[9px]" style={{ color: darkText ? "#5f6368" : "#fff", opacity: 0.85 }}>
        {sub}
      </div>
    </div>
  );
}

function MsKpi({
  color,
  label,
  value,
  sub,
}: {
  color: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="px-3 py-3 border-r last:border-r-0" style={{ background: color, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="text-[11px] font-medium text-white opacity-95">{label}</div>
      <div className="mt-1 font-display text-lg sm:text-xl font-semibold leading-none text-white">{value}</div>
      <div className="mt-1 text-[9px] text-white opacity-85">{sub}</div>
    </div>
  );
}

function MultiLineChart({
  colors,
  labels,
  yLabels,
}: {
  colors: string[];
  labels: string[];
  yLabels: string[];
}) {
  const days = 30;
  // Generate slightly different trend data per dashboard
  const dataSets = [
    Array.from({ length: days }, (_, i) => 30 + Math.sin(i * 0.4) * 15 + i * 1.8),
    Array.from({ length: days }, (_, i) => 20 + Math.cos(i * 0.3) * 18 + i * 1.5),
    Array.from({ length: days }, (_, i) => 25 + Math.sin(i * 0.5) * 20 + i * 2.0),
    Array.from({ length: days }, (_, i) => 15 + Math.cos(i * 0.4) * 12 + i * 2.2),
  ];
  function toPoints(data: number[]) {
    const max = 100;
    return data.map((v, i) => `${(i / (days - 1)) * 100},${100 - Math.min(100, v)}`).join(" ");
  }
  return (
    <div className="p-4" style={{ background: "#fff" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-[13px] font-medium" style={{ color: "#202124" }}>
          Performance trends
        </div>
        <div className="flex items-center gap-2 text-[11px]" style={{ color: "#5f6368" }}>
          {colors.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: c }} />
              {labels[i]}
            </span>
          ))}
        </div>
      </div>
      <div className="relative h-40 w-full" style={{ background: "#fff" }}>
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full" style={{ borderTop: "1px solid #f0f0f0" }} />
          ))}
        </div>
        <div className="absolute -left-1 top-0 h-full flex flex-col justify-between text-[9px] pointer-events-none" style={{ color: "#9aa0a6" }}>
          {yLabels.map((y, i) => (
            <span key={i}>{y}</span>
          ))}
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full pl-8">
          {colors.map((c, i) => (
            <polyline
              key={i}
              points={toPoints(dataSets[i])}
              fill="none"
              stroke={c}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      <div className="flex justify-between text-[9px] mt-1 pl-8" style={{ color: "#9aa0a6" }}>
        <span>Day 1</span>
        <span>Day 7</span>
        <span>Day 14</span>
        <span>Day 21</span>
        <span>Day 30</span>
      </div>
    </div>
  );
}

function Th({ children, align }: { children: React.ReactNode; align: "left" | "right" }) {
  return (
    <th
      className={`px-2 py-2 text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${
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
      className={`px-2 py-1.5 whitespace-nowrap ${
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
      <div className="mt-1 font-display text-base font-semibold" style={{ color: "#1c1e21" }}>
        {value}
      </div>
    </div>
  );
}
