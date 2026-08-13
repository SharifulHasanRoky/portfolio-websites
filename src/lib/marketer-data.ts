import {
  Megaphone,
  Building2,
  TrendingUp,
  BarChart3,
  Gauge,
  Rocket,
  Wrench,
  Hammer,
  Printer,
  Home,
  Zap,
  Sparkles,
  Scissors,
  Car,
  Smartphone,
  Brush,
  Shirt,
  Phone,
  MousePointerClick,
  Dumbbell,
  PawPrint,
  Coffee,
  Sofa,
  Gem,
  Pill,
  Baby,
  Mountain,
  Watch,
  Headphones,
  Gift,
  type LucideIcon,
} from "lucide-react";

export type Pillar = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
  accent: "brand" | "fire";
};

// The storytelling arc: Campaign -> Business -> Scaling -> Numbers -> Measurements -> Growth
export const pillars: Pillar[] = [
  {
    id: "campaign",
    label: "01 / Campaign",
    title: "Campaigns engineered to convert, not just click.",
    subtitle: "Hook → Promise → Offer → CTA. Tested weekly.",
    icon: Megaphone,
    description:
      "Every campaign starts with a sharp offer and a sharper hook. I build full-funnel Meta, Google, TikTok and YouTube campaigns with creative testing matrices that kill losing ads in 72 hours and pour budget into winners. The result is a creative engine that gets cheaper every quarter instead of more expensive.",
    bullets: [
      "Hook-led creative testing (5-10 variants / week)",
      "Full-funnel: TOFU awareness → MOFU consideration → BOFU conversion",
      "Server-side tracking with CAPI + offline conversions",
      "Weekly creative refresh + losing-ad kill list",
    ],
    accent: "fire",
  },
  {
    id: "business",
    label: "02 / Business",
    title: "Marketing that protects the gross margin, not just ROAS.",
    subtitle: "If LTV doesn't cover CAC, scale is a trap.",
    icon: Building2,
    description:
      "Most agencies sell you ROAS. I sell you a business that survives scaling. Before I scale spend, I map your unit economics, contribution margin, cash cycle, and fulfillment capacity — so growth actually shows up in your bank account, not just in your ad account.",
    bullets: [
      "Unit economics & CAC:LTV modeling before any scale-up",
      "Cash-cycle aware budget pacing (no choking operations)",
      "Offer engineering: bundles, trips, subs, anchor pricing",
      "Fulfillment & CS capacity checks pre-scale",
    ],
    accent: "brand",
  },
  {
    id: "scaling",
    label: "03 / Scaling",
    title: "Scaling is a system, not a lucky week.",
    subtitle: "Repeatable 3x in 90 days — without ROAS collapsing.",
    icon: TrendingUp,
    description:
      "I scale by horizontal audience expansion, vertical creative stacking, and disciplined budget laddering. The system is built so any media buyer on your team can run it. The goal is to make scale boring and predictable — not heroic.",
    bullets: [
      "Horizontal scaling: new audiences, geos, placements",
      "Vertical scaling: creative volume per winning angle",
      "Budget laddering: 20% bumps every 48-72h",
      "SOP-ized so the system survives team churn",
    ],
    accent: "fire",
  },
  {
    id: "numbers",
    label: "04 / Numbers",
    title: "Numbers that mean money. Not vanity.",
    subtitle: "Revenue. MER. CAC. Payback. The only four that matter.",
    icon: BarChart3,
    description:
      "I track the four numbers that actually move a business: revenue, marketing efficiency ratio (MER), blended CAC, and payback period. Everything else — clicks, impressions, even platform ROAS — is a leading indicator I use to tune the engine, not a result I celebrate.",
    bullets: [
      "MER (blended ROAS) as source of truth, not platform ROAS",
      "Payback-period reporting, not 30-day attribution windows",
      "Cohort LTV by acquisition channel",
      "P&L-aligned spend reporting, weekly",
    ],
    accent: "brand",
  },
  {
    id: "measurements",
    label: "05 / Measurements",
    title: "If you can't measure it, you're gambling.",
    subtitle: "GA4 + Server-side + Warehouse = one source of truth.",
    icon: Gauge,
    description:
      "iOS 14.5 killed platform attribution. I rebuilt measurement around server-side tagging, Triple Whale / Hyros for attribution, and modeled conversions — so decisions are made on real revenue, not on what Meta wants you to believe. Your dashboard finally tells the truth.",
    bullets: [
      "Server-side GTM + Conversions API on every channel",
      "Unified warehouse: ad spend + Shopify + Stripe in one model",
      "MMM + incrementality tests for channels above $50k/mo",
      "Live dashboards your CFO will actually open",
    ],
    accent: "fire",
  },
  {
    id: "growth",
    label: "06 / Growth",
    title: "Growth that compounds. Not spikes that crash.",
    subtitle: "Brand + paid + lifecycle + referral — one flywheel.",
    icon: Rocket,
    description:
      "Paid ads alone stop working around month 9. Real growth is a flywheel: paid ignites, lifecycle retains, brand compounds, and referral reduces CAC year over year. I build the full machine so you stop renting growth and start owning a brand that prints revenue.",
    bullets: [
      "Lifecycle email/SMS that recovers 20-30% of revenue",
      "Brand creative that lowers CAC QoQ (not just ROI)",
      "Referral + UGC loops that compound over 12 months",
      "Quarterly growth experiments backlog, ranked by ICE",
    ],
    accent: "brand",
  },
];

export type CaseStudy = {
  id: string;
  industry: string;
  icon: LucideIcon;
  client: string;
  location: string;
  vertical: "Home Services" | "Ecommerce" | "Local Services" | "Specialty";
  challenge: string;
  approach: string;
  results: {
    metric: string;
    value: string;
    delta: string;
  }[];
  timeline: string;
  spend: string;
  highlight: string;
};

export const caseStudies: CaseStudy[] = [
{
    id: "cleaning",
    industry: "Cleaning",
    icon: Sparkles,
    client: "Calgary Cleaning",
    location: "Calgary, AB, Canada",
    vertical: "Home Services",
    challenge:
      "Local residential cleaning company in Calgary struggling to get consistent leads. Word-of-mouth wasn't scaling, and they were paying $180+ per lead through aggregator platforms.",
    approach:
      "Built a Google LSA + Meta lead-form funnel with a 60-second response SLA, dispatch routing, and review-request automation. Offer: first clean at 50% off. Layered seasonal creative (winter deep-clean, spring move-out) to keep lead flow steady year-round.",
    results: [
      { metric: "Leads per month", value: "100", delta: "+312%" },
      { metric: "Cost per lead", value: "$24", delta: "−71%" },
      { metric: "Booking rate", value: "48%", delta: "+22pts" },
    ],
    timeline: "90 days",
    spend: "$6k/mo",
    highlight: "100 qualified leads every single month — without paying aggregators.",
  },
{
    id: "clothing",
    industry: "Ecommerce · Shopify (AU)",
    icon: Shirt,
    client: "Origani",
    location: "Sydney, Australia",
    vertical: "Ecommerce",
    challenge:
      "Australian Shopify ecommerce store with a strong product but plateaued growth. ROAS stuck around 2x, CAC climbing, and the founder was burning cash on creative that wasn't converting. iOS 14 attribution was broken.",
    approach:
      "Rebuilt the entire funnel on Shopify: server-side CAPI tracking, founder-led UGC creative engine, Klaviyo lifecycle with AU-specific flows, and a tiered offer ladder (sample → bundle → subscription). Scaled spend aggressively once unit economics were verified.",
    results: [
      { metric: "ROI (return on ad spend)", value: "13x", delta: "from 2x" },
      { metric: "Monthly revenue", value: "$420k", delta: "+540%" },
      { metric: "Blended CAC", value: "$18", delta: "−62%" },
    ],
    timeline: "6 months",
    spend: "$32k/mo",
    highlight: "Scaled from 2x to 13x ROI on a Shopify store in 6 months.",
  },
{
    id: "tint-shop",
    industry: "Home Services · Tint Shop",
    icon: Car,
    client: "Tint Shop",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Auto window tinting business relying on walk-ins and word-of-mouth. Inconsistent lead flow, no call tracking, and ads running blind without server-side measurement.",
    approach:
      "Built a Google Ads lead-gen funnel with call tracking (445 phone calls tracked), submit lead forms, and a quote-generation system. Paired with Facebook Ads lifetime-budget campaigns to capture demand across platforms.",
    results: [
      { metric: "Quote generated", value: "250", delta: "+340%" },
      { metric: "Phone calls", value: "445", delta: "+218%" },
      { metric: "Cost", value: "$31.8K", delta: "−22% CPA" },
    ],
    timeline: "6 months",
    spend: "$5.3k/mo",
    highlight: "445 tracked phone calls + 250 quote requests from a single tint shop.",
  },
{
    id: "gad-434k",
    industry: "Home Services · Lead Gen",
    icon: MousePointerClick,
    client: "Home Service Group",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Multi-location home service business (HVAC + plumbing) with high impression volume but low conversion rate. CTR was below industry benchmark.",
    approach:
      "Restructured Google Ads account into SKAGs (single keyword ad groups), added responsive search ads with location extensions, and built a landing page A/B testing engine. Layered call tracking + offline conversions.",
    results: [
      { metric: "Impressions", value: "434K", delta: "+128%" },
      { metric: "Clicks", value: "11.9K", delta: "+95%" },
      { metric: "Conversions", value: "1.16K", delta: "+187%" },
      { metric: "Cost", value: "$44.4K", delta: "−14% CPA" },
    ],
    timeline: "5 months",
    spend: "$8.9k/mo",
    highlight: "1,160 conversions at $38 CPA from a home service group.",
  },
{
    id: "gad-655-calls",
    industry: "Home Services · Call Tracking",
    icon: Phone,
    client: "Service Pro Network",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Local service business dependent on phone calls. Existing campaigns drove clicks but calls weren't being tracked or optimized for. CTR was stuck at 1.8%.",
    approach:
      "Implemented Google call extensions + call-only campaigns, layered call tracking with offline conversion import, and rebuilt creative around urgency (same-day service). Optimized for call conversions, not clicks.",
    results: [
      { metric: "Cost", value: "$43.1K", delta: "+8%" },
      { metric: "Phone calls", value: "655", delta: "+245%" },
      { metric: "Conversions", value: "1.15K", delta: "+168%" },
      { metric: "CTR", value: "2.72%", delta: "+0.9pts" },
    ],
    timeline: "7 months",
    spend: "$6.2k/mo",
    highlight: "655 tracked phone calls — calls went from untracked to primary KPI.",
  },
{
    id: "ms-ads-184k",
    industry: "Ecommerce · Microsoft Ads",
    icon: BarChart3,
    client: "DTC Electronics Brand",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Premium electronics DTC brand hitting saturation on Google + Meta. CAC climbing, needed a new paid channel with less competition.",
    approach:
      "Launched Microsoft Advertising (Bing Ads) with Shopping campaigns + Responsive Search Ads. Imported top-performing Google keywords, set up UET tracking with revenue, and built audience exclusions for cart abandoners.",
    results: [
      { metric: "Clicks", value: "3.87K", delta: "new channel" },
      { metric: "Impressions", value: "467K", delta: "new channel" },
      { metric: "Purchases", value: "620K", delta: "+18% total" },
      { metric: "Cost", value: "$184K", delta: "−31% CAC" },
    ],
    timeline: "9 months",
    spend: "$20k/mo",
    highlight: "Microsoft Ads added 620K in tracked purchase value at lower CAC than Google.",
  },
{
    id: "downioa",
    industry: "Ecommerce · Shopify DTC",
    icon: Smartphone,
    client: "Downioa",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Shopify DTC brand with strong product but plateaued growth on Meta. Existing Google Ads setup wasn't using Performance Max or server-side tracking.",
    approach:
      "Launched Google Performance Max with full server-side CAPI tracking and offline conversion import. Built dynamic product feeds, audience signals from Klaviyo lists, and scaled spend once unit economics were verified.",
    results: [
      { metric: "Conversions", value: "1.39K", delta: "+218%" },
      { metric: "Conv. value", value: "259K", delta: "+312%" },
      { metric: "Actual ROAS", value: "764.35%", delta: "from 240%" },
      { metric: "Cost", value: "$33.9K", delta: "−18% CPA" },
    ],
    timeline: "4 months",
    spend: "$8.5k/mo",
    highlight: "Scaled to 764% actual ROAS — $259K conversion value from $33.9K spend.",
  },
{
    id: "lead-gen-13-camp",
    industry: "Home Services · Multi-Campaign",
    icon: MousePointerClick,
    client: "Lead Gen · 13 Campaigns",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Multi-location home service business running 13 separate Google Ads campaigns with no centralized tracking. Lead forms and phone calls weren't being attributed back to spend.",
    approach:
      "Implemented call tracking with offline conversion import across all 13 campaigns. Rebuilt campaign structure into themed ad groups, added responsive search ads, and built a dashboard combining lead forms + calls into a single conversion view.",
    results: [
      { metric: "Submit lead forms", value: "7", delta: "tracked" },
      { metric: "Phone calls", value: "56", delta: "tracked" },
      { metric: "Conversions", value: "488", delta: "+167%" },
      { metric: "Cost", value: "$4.67K", delta: "−42% CPA" },
    ],
    timeline: "6 months",
    spend: "$780/mo",
    highlight: "488 tracked conversions across 13 campaigns at $9.57 blended CPA.",
  },
{
    id: "call-heavy-184",
    industry: "Home Services · Call-Heavy",
    icon: Phone,
    client: "Call-Heavy Lead Gen",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Local service business dependent on phone calls. Existing campaigns drove clicks but calls weren't tracked. CTR was stuck at 1.4%, and conversion volume was plateauing.",
    approach:
      "Implemented Google call extensions + call-only campaigns, layered call tracking with offline conversion import, and rebuilt creative around urgency (same-day service, limited slots). Optimized for call conversions, not clicks.",
    results: [
      { metric: "CTR", value: "2.02%", delta: "+0.6pts" },
      { metric: "Phone calls", value: "184", delta: "+245%" },
      { metric: "Conversions", value: "759", delta: "+168%" },
      { metric: "Cost", value: "$14.4K", delta: "−22% CPA" },
    ],
    timeline: "16 months",
    spend: "$900/mo",
    highlight: "184 tracked phone calls + 759 total conversions over 16 months.",
  },
{
    id: "vsl-lead-gen",
    industry: "Ecommerce · VSL Funnels",
    icon: Megaphone,
    client: "VSL Lead Gen",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "DTC brand selling a high-ticket info product via Video Sales Letter (VSL) funnel. Existing Facebook Ads were burning budget on a single creative angle with no testing structure.",
    approach:
      "Built a 4-ad-set VSL funnel on Facebook Ads with angle testing: Retargeting (warm audience), Angle 1 (problem-aware), Angle 2 (solution-aware), Angle 3 (transformation). Each angle tested with 3 hooks, 2 thumbnails, and a single VSL.",
    results: [
      { metric: "Results (VSL Leads)", value: "531", delta: "+184%" },
      { metric: "Reach", value: "43,187", delta: "new funnel" },
      { metric: "Impressions", value: "98,645", delta: "new funnel" },
      { metric: "Cost per result", value: "$8.44", delta: "−52%" },
    ],
    timeline: "3 months",
    spend: "$1.5k/mo",
    highlight: "531 VSL leads at $8.44 each — Retargeting angle won at $6.78 CPR.",
  },
{
    id: "fb-cynthia",
    industry: "Ecommerce · Multi-Campaign FB",
    icon: Megaphone,
    client: "Meta Ads · CYNTHIA",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Film niche ecommerce brand running 7 parallel Facebook Ads campaigns with no clear testing structure. Budget was spread thin, CPMs were high on some campaigns, and the team couldn't identify which creative angles were working.",
    approach:
      "Reorganized 7 campaigns into a structured testing matrix: CYNTHIA (main), Copy (scaling winner), Film Niche (audience test), plus 4 supporting campaigns. Built creative testing framework with 3 hooks per angle, and consolidated budget toward the top 2 performers (67,000,000 and Copy).",
    results: [
      { metric: "Results", value: "1,395", delta: "across 7 campaigns" },
      { metric: "Reach", value: "666,980", delta: "unique people" },
      { metric: "Amount spent", value: "$43,869", delta: "over campaign life" },
      { metric: "Impressions", value: "2.58M", delta: "total ad views" },
    ],
    timeline: "8 months",
    spend: "$5.5k/mo",
    highlight: "$43,869 spent across 7 FB campaigns — 67,000,000 campaign drove 612 results at $11.28 CPR.",
  },
{
    id: "fb-8415-lifetime",
    industry: "Home Services · Lead Gen FB",
    icon: Megaphone,
    client: "Meta Ads · Lifetime Budgets",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Lead-gen account running 8 lifetime-budget Facebook Ads campaigns. Budget was committed upfront (lifetime budgets from $15 to $8,091), but results weren't being measured per campaign. CPMs ranged from $0.10 to $7.75 — huge variance.",
    approach:
      "Audited all 8 lifetime campaigns, identified the 2 winners ($15-5day at $0.10 CPM and ner-11/09/25 at $7.75 CPM with 487 results), and restructured future budgets toward daily campaigns with the winning creative. Built a reporting dashboard showing CPR per campaign.",
    results: [
      { metric: "Reach", value: "1,046,005", delta: "unique people" },
      { metric: "Impressions", value: "2,116,059", delta: "total ad views" },
      { metric: "Amount spent", value: "$8,415", delta: "8 lifetime budgets" },
      { metric: "CPM", value: "$3.98", delta: "blended avg" },
    ],
    timeline: "8 months",
    spend: "$1.05k/mo",
    highlight: "1,046,005 reach from $8,415 spend — $0.10 CPM on the best-performing $15 lifetime campaign.",
  },
{
    id: "cs-skycoms",
    industry: "Ecommerce · Telecom / eSIM",
    icon: Smartphone,
    client: "Skycoms",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "eSIM DTC brand scaling globally but CAPI tracking was broken. Activations weren't being attributed back to ad spend, so the team couldn't tell which markets were profitable.",
    approach:
      "Implemented server-side CAPI with offline activation import. Rebuilt campaign structure by geo (US, EU, SEA, LATAM) with market-specific creative and dynamic language offers. Scaled winning geos aggressively.",
    results: [
      { metric: "Activations / month", value: "3,800+", delta: "+312%" },
      { metric: "Blended ROAS", value: "4.2x", delta: "from 2.1x" },
      { metric: "New countries scaled", value: "14", delta: "+9 new" }
    ],
    timeline: "5 months",
    spend: "$28k/mo",
    highlight: "3,800+ eSIM activations/month at 4.2x ROAS across 14 countries.",
  },
{
    id: "cs-golfinex",
    industry: "Ecommerce · Sports / Golf",
    icon: Mountain,
    client: "Golfinex",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Premium golf accessories Shopify brand. High AOV ($180) but Meta Ads were stuck at 1.8x ROAS with rising CPMs. Founder was burning cash on broad audiences.",
    approach:
      "Rebuilt audience strategy with interest stacks + lookalikes from Klaviyo VIP list. Layered founder-led UGC and product-demo videos. Added post-purchase upsell flow to lift LTV.",
    results: [
      { metric: "ROAS", value: "4.6x", delta: "from 1.8x" },
      { metric: "Monthly revenue", value: "$210k", delta: "+187%" },
      { metric: "AOV", value: "$248", delta: "+38%" }
    ],
    timeline: "4 months",
    spend: "$22k/mo",
    highlight: "Scaled golf accessories DTC from 1.8x to 4.6x ROAS with a 38% AOV lift.",
  },
{
    id: "cs-gearovo",
    industry: "Ecommerce · Gadgets",
    icon: Smartphone,
    client: "Gearovo",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Gadget store plateaued at 800 orders/month with rising CAC. Founder running Meta + Google Ads but no TikTok presence and no creative testing structure.",
    approach:
      "Launched TikTok Spark Ads with creator partnerships, scaled Meta Advantage+ Shopping with UGC, and Google PMax with dynamic product feeds. Built weekly creative testing matrix (5 variants/wk).",
    results: [
      { metric: "Orders / month", value: "3,400", delta: "+325%" },
      { metric: "Blended ROAS", value: "4.8x", delta: "from 2.4x" },
      { metric: "Spend", value: "$42k/mo", delta: "+180%" }
    ],
    timeline: "7 months",
    spend: "$42k/mo",
    highlight: "Scaled gadget store from 800 to 3,400 orders/month at 4.8x ROAS.",
  },
{
    id: "cs-hypr-fuel",
    industry: "Ecommerce · Supplements / Energy",
    icon: Zap,
    client: "Hypr Fuel",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Energy drink DTC brand with strong subscription product but high churn. New subscriptions weren't outpacing churn, and ad spend was rising without LTV visibility.",
    approach:
      "Built the full subscription funnel: subscription-first landing pages, post-purchase upsell ladder, Klaviyo churn-prevention flows, and a UGC creator program for paid social. Tracked LTV by cohort via Triple Whale.",
    results: [
      { metric: "Active subscriptions", value: "5,200+", delta: "+248%" },
      { metric: "Blended ROAS", value: "4.6x", delta: "from 2.2x" },
      { metric: "90-day churn", value: "−38%", delta: "−38%" }
    ],
    timeline: "8 months",
    spend: "$38k/mo",
    highlight: "5,200+ active subscriptions with 38% lower churn and 4.6x ROAS.",
  },
{
    id: "cs-scuba-xpress",
    industry: "Ecommerce · Sports / Scuba",
    icon: Mountain,
    client: "Scuba Xpress",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Scuba diving gear Shopify store. Niche audience, high AOV ($420), but Meta Ads were burning budget on broad targeting with no exclusions.",
    approach:
      "Built interest-stacked audiences + competitor-engager lookalikes. Layered Google Shopping with merchant-center optimizations. Added a buyer's guide content funnel for SEO-adjacent organic lift.",
    results: [
      { metric: "ROAS", value: "5.2x", delta: "from 2.0x" },
      { metric: "Monthly revenue", value: "$340k", delta: "+212%" },
      { metric: "New customers", value: "+178%", delta: "+178%" }
    ],
    timeline: "6 months",
    spend: "$26k/mo",
    highlight: "Scaled scuba gear DTC to 5.2x ROAS with $340k/mo revenue.",
  },
{
    id: "cs-pixi-ai",
    industry: "Ecommerce · Tech / AI Tools",
    icon: Smartphone,
    client: "Pixi AI",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "AI tool SaaS-style ecommerce product with free-trial to paid conversion funnel. Existing ads drove installs but trial-to-paid was below 8%.",
    approach:
      "Rebuilt the funnel with a 7-day email nurture (Klaviyo), in-app onboarding events tracked via server-side GTM, and retargeting based on trial-stage. Added a 'satisfaction guarantee' offer on the checkout page.",
    results: [
      { metric: "Trial-to-paid", value: "14.8%", delta: "from 7.6%" },
      { metric: "Active subscriptions", value: "2,400+", delta: "+312%" },
      { metric: "CAC", value: "$22", delta: "−44%" }
    ],
    timeline: "5 months",
    spend: "$18k/mo",
    highlight: "Trial-to-paid conversion doubled from 7.6% to 14.8% with email nurture + onboarding events.",
  },
{
    id: "cs-car-formula",
    industry: "Ecommerce · Automotive",
    icon: Car,
    client: "Car Formula",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Automotive care products Shopify brand. Previously reliant on Amazon. Direct DTC site was converting at <1.2% with broken attribution.",
    approach:
      "Rebuilt DTC funnel with CAPI, PMax + Shopping, and a 'subscribe & save' ladder for repeat-purchase SKUs. Layered how-to video content + UGC. Set up Triple Whale for unified attribution.",
    results: [
      { metric: "Conversion rate", value: "3.1%", delta: "from 1.2%" },
      { metric: "Repeat purchase rate", value: "42%", delta: "+26pts" },
      { metric: "Monthly revenue", value: "$180k", delta: "+228%" }
    ],
    timeline: "6 months",
    spend: "$20k/mo",
    highlight: "DTC conversion rate jumped from 1.2% to 3.1% with repeat purchase at 42%.",
  },
{
    id: "cs-fx-edu",
    industry: "Ecommerce · Info Product / Edu",
    icon: Megaphone,
    client: "FX Edu",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Forex trading education brand selling high-ticket courses via webinar funnel. Webinar show-up rate was 18%, and ad spend was burning on cold audiences without retargeting.",
    approach:
      "Rebuilt webinar funnel with 3-day email reminder sequence, retargeting ads on registrants who didn't show, and a post-webinar sequence with deadline-driven urgency offer. Built lookalikes from past buyers.",
    results: [
      { metric: "Webinar show-up rate", value: "32%", delta: "from 18%" },
      { metric: "Course sales / mo", value: "78", delta: "+218%" },
      { metric: "Cost per sale", value: "$284", delta: "−42%" }
    ],
    timeline: "4 months",
    spend: "$24k/mo",
    highlight: "Webinar show-up rate jumped from 18% to 32%, course sales more than tripled.",
  },
{
    id: "cs-reli-group",
    industry: "Ecommerce · Multi-Brand",
    icon: Building2,
    client: "Reli Group",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Multi-brand ecommerce portfolio with 4 Shopify stores across different niches. No unified tracking, no shared audience data, and CAC was rising across all brands.",
    approach:
      "Implemented cross-brand audience sharing via Meta's brand-owned audiences. Set up server-side GTM with a unified data layer across all 4 stores. Consolidated reporting into one Triple Whale dashboard.",
    results: [
      { metric: "Blended ROAS", value: "3.8x", delta: "from 2.2x" },
      { metric: "Cross-brand purchases", value: "+62%", delta: "+62%" },
      { metric: "Reporting time saved", value: "20 hrs/wk", delta: "+20 hrs/wk" }
    ],
    timeline: "5 months",
    spend: "$45k/mo",
    highlight: "Unified 4-brand portfolio with 3.8x blended ROAS and 20+ hrs/wk reporting saved.",
  },
{
    id: "cs-winhub",
    industry: "Ecommerce · Marketplace",
    icon: Building2,
    client: "Winhub",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Multi-vendor marketplace with low seller-side acquisition. Existing ads were 100% buyer-focused and seller acquisition was untracked.",
    approach:
      "Built a parallel seller-acquisition funnel with lead-form ads + Google search campaigns targeting 'sell online' keywords. Implemented offline conversion tracking for seller sign-ups.",
    results: [
      { metric: "New sellers / mo", value: "240+", delta: "+312%" },
      { metric: "Cost per seller", value: "$18", delta: "−58%" },
      { metric: "GMV", value: "+148%", delta: "+148%" }
    ],
    timeline: "6 months",
    spend: "$14k/mo",
    highlight: "Seller acquisition scaled 4x with $18 cost-per-seller sign-up.",
  },
{
    id: "cs-marwaridhr",
    industry: "Ecommerce · B2B / HR Tech",
    icon: Building2,
    client: "MarwaridHR",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "B2B HR software brand with a self-serve ecommerce checkout for SMB plans. Lead quality was poor — ads were driving free-tier sign-ups that never converted to paid.",
    approach:
      "Rebuilt funnel with intent-based audiences (LinkedIn-engager lookalikes, Google search), added qualification questions on the checkout form, and layered retargeting on past visitors with >3 page views.",
    results: [
      { metric: "Paid conversion rate", value: "8.2%", delta: "from 2.4%" },
      { metric: "Qualified leads / mo", value: "180+", delta: "+268%" },
      { metric: "CAC", value: "$94", delta: "−52%" }
    ],
    timeline: "5 months",
    spend: "$16k/mo",
    highlight: "B2B SaaS paid conversion rate tripled from 2.4% to 8.2% with qualified-funnel rebuild.",
  },
{
    id: "cs-tns-global",
    industry: "Ecommerce · Wholesale / Trade",
    icon: Building2,
    client: "TNS Global",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Wholesale ecommerce brand selling bulk goods. Order volume was steady but AOV was stuck at $340 with no cross-sell strategy.",
    approach:
      "Built dynamic bundle offers (3-tier: starter / pro / bulk), tier-based free shipping, and a Klaviyo flow for past buyers with complementary SKUs. Tracked bundle uptake via Shopify metafields.",
    results: [
      { metric: "AOV", value: "$612", delta: "+80%" },
      { metric: "Bundle uptake", value: "42%", delta: "new" },
      { metric: "Monthly revenue", value: "$280k", delta: "+168%" }
    ],
    timeline: "4 months",
    spend: "$12k/mo",
    highlight: "Wholesale AOV jumped from $340 to $612 with tiered bundle offers.",
  },
{
    id: "cs-safe-food",
    industry: "Ecommerce · Food / Safety",
    icon: Coffee,
    client: "Safe Food",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Food safety testing kits Shopify brand. Niche B2B + B2C audience, long consideration cycle, and no lifecycle email flow in place.",
    approach:
      "Built a 14-day educational email sequence (Klaviyo) for cart abandoners and a 'buyer's guide' lead magnet. Retargeting ads on email engagers. Layered Google Shopping for high-intent keywords.",
    results: [
      { metric: "Email-attributed revenue", value: "32%", delta: "new" },
      { metric: "Conversion rate", value: "2.8%", delta: "from 1.4%" },
      { metric: "CAC", value: "−38%", delta: "−38%" }
    ],
    timeline: "5 months",
    spend: "$9k/mo",
    highlight: "Email became 32% of revenue with a 14-day nurture + retargeting flow.",
  },
{
    id: "cs-clockwork-synergy",
    industry: "Ecommerce · Watches / Niche",
    icon: Watch,
    client: "Clockwork Synergy",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Watch straps and accessories Shopify brand. High repeat-purchase potential but only 18% of customers ever returned. No retention strategy in place.",
    approach:
      "Built a post-purchase Klaviyo flow with strap-pairing recommendations (based on past purchase), a 60-day reorder reminder, and a loyalty program. Retargeting ads on past buyers with new-strap collections.",
    results: [
      { metric: "Repeat purchase rate", value: "44%", delta: "from 18%" },
      { metric: "LTV (90-day)", value: "+78%", delta: "+78%" },
      { metric: "Email revenue", value: "28%", delta: "+28pts" }
    ],
    timeline: "6 months",
    spend: "$11k/mo",
    highlight: "Repeat purchase rate jumped from 18% to 44% with a 78% LTV lift.",
  },
{
    id: "cs-htown-printing",
    industry: "Ecommerce · Printing / Custom",
    icon: Printer,
    client: "Htown Printing Service",
    location: "United States",
    vertical: "Ecommerce",
    challenge:
      "Custom printing Shopify store with a complex quote-based checkout. Customers were abandoning at the design-upload step.",
    approach:
      "Simplified the funnel with a 3-step wizard (product → upload → checkout), added a 'design help' option that pushed to a lead form, and retargeted abandoners with a 10% first-order discount.",
    results: [
      { metric: "Conversion rate", value: "3.4%", delta: "from 1.6%" },
      { metric: "Quote requests / mo", value: "320+", delta: "+245%" },
      { metric: "Avg order value", value: "$284", delta: "+34%" }
    ],
    timeline: "5 months",
    spend: "$8k/mo",
    highlight: "Custom printing funnel conversion doubled, quote requests up 245%.",
  },
{
    id: "cs-home-repairs-24",
    industry: "Home Services · Home Repair",
    icon: Wrench,
    client: "Home Repairs 24",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "24/7 home repair service relying on aggregators. Cost per lead was $180+ and the calendar was inconsistent week-to-week.",
    approach:
      "Built Google LSA + Meta lead-form funnel with 60-second response SLA, dispatch routing, and seasonal creative (winter emergency, spring move-out). Layered GoHighLevel automation for SMS follow-up.",
    results: [
      { metric: "Leads / month", value: "320+", delta: "+312%" },
      { metric: "Cost per lead", value: "$18", delta: "−90%" },
      { metric: "Close rate", value: "42%", delta: "+18pts" }
    ],
    timeline: "90 days",
    spend: "$7k/mo",
    highlight: "Home repair lead flow scaled from inconsistent to 320+/mo at $18/lead.",
  },
{
    id: "cs-handyman-services",
    industry: "Home Services · Handyman",
    icon: Wrench,
    client: "Handyman Services",
    location: "Singapore",
    vertical: "Home Services",
    challenge:
      "Singapore-based handyman service with strong word-of-mouth but no online booking. Walk-in and call-based leads were inconsistent.",
    approach:
      "Built a multi-service booking funnel on the website with online scheduling, Google Ads by service type (plumbing repair, electrical, painting), and Meta retargeting on past customers.",
    results: [
      { metric: "Online bookings / mo", value: "280+", delta: "new channel" },
      { metric: "Cost per booking", value: "$24", delta: "−68%" },
      { metric: "Repeat customers", value: "+42%", delta: "+42%" }
    ],
    timeline: "4 months",
    spend: "$6k/mo",
    highlight: "280+ online bookings/mo from a previously walk-in-only handyman service.",
  },
{
    id: "cs-right-now-painting",
    industry: "Home Services · Painting",
    icon: Brush,
    client: "Right Now Painting",
    location: "United States",
    vertical: "Home Services",
    challenge:
      "Residential + commercial painting company with high seasonality. Off-season revenue dropped 70% and they had no creative engine for off-season demand.",
    approach:
      "Built a before/after creative engine on Meta (3 new creatives/wk), Google LSA for high-intent local searches, and a 'winter interior special' offer to smooth seasonality.",
    results: [
      { metric: "Quote requests / mo", value: "200+", delta: "+312%" },
      { metric: "Close rate", value: "38%", delta: "+12pts" },
      { metric: "Off-season revenue", value: "+178%", delta: "+178%" }
    ],
    timeline: "6 months",
    spend: "$9k/mo",
    highlight: "200+ quote requests/mo for painting, off-season revenue up 178%.",
  },
{
    id: "cs-best-handyman-sg",
    industry: "Home Services · Handyman",
    icon: Wrench,
    client: "Best Handyman Services SG",
    location: "Singapore",
    vertical: "Home Services",
    challenge:
      "Singapore handyman service with multiple crews but no centralized booking or ad tracking. Leads came from word-of-mouth only.",
    approach:
      "Built a multi-service Google Ads funnel (plumbing, electrical, general repair), call tracking, and an online booking system. Hired 2 new crews to handle volume.",
    results: [
      { metric: "Leads / month", value: "280+", delta: "+312%" },
      { metric: "Crews hired", value: "+2", delta: "+2 new" },
      { metric: "Cost per lead", value: "$22", delta: "−58%" }
    ],
    timeline: "5 months",
    spend: "$5k/mo",
    highlight: "Singapore handyman service scaled to 280+ leads/mo, hired 2 new crews.",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  accent: "brand" | "fire";
};

export const portfolio: PortfolioItem[] = [
{
    id: "p5",
    title: "Origani",
    category: "Ecommerce · Shopify (AU)",
    description:
      "Australian Shopify ecommerce store scaled from 2x to 13x ROI in 6 months. Server-side CAPI, founder-led UGC, Klaviyo lifecycle with AU-specific flows, and a tiered offer ladder (sample → bundle → subscription).",
    metric: "13x",
    metricLabel: "ROI (from 2x)",
    tags: ["Shopify", "CAPI", "Klaviyo", "UGC"],
    accent: "fire",
  },
{
    id: "p5b",
    title: "Calgary Cleaning",
    category: "Home Services · Cleaning",
    description:
      "Local residential cleaning company in Calgary scaled from 24 to 100 qualified leads per month. Google LSA + Meta lead-form funnel with 60-second response SLA, dispatch routing, and seasonal creative.",
    metric: "100",
    metricLabel: "Leads / month",
    tags: ["Google LSA", "Meta Lead Forms", "GoHighLevel", "Twilio"],
    accent: "brand",
  },
{
    id: "p11",
    title: "Tint Shop",
    category: "Home Services · Tint",
    description:
      "Auto window tinting business scaled from walk-ins to a tracked lead engine. 445 phone calls + 250 quote requests in 6 months with Google + Facebook Ads.",
    metric: "445",
    metricLabel: "Phone calls",
    tags: ["Google Ads", "Call Tracking", "FB Ads", "Lead Gen"],
    accent: "fire",
  },
{
    id: "p12",
    title: "Home Service Group",
    category: "Home Services · Lead Gen",
    description:
      "Multi-location HVAC + plumbing business restructured into SKAGs with responsive search ads and landing page A/B testing. 1,160 conversions at $38 CPA.",
    metric: "1.16K",
    metricLabel: "Conversions",
    tags: ["Google Ads", "SKAGs", "A/B Testing", "Call Tracking"],
    accent: "brand",
  },
{
    id: "p13",
    title: "Service Pro Network",
    category: "Home Services · Call Tracking",
    description:
      "Local service business optimized for phone call conversions. Implemented call-only campaigns + offline conversion import. 655 tracked calls, CTR up to 2.72%.",
    metric: "655",
    metricLabel: "Phone calls",
    tags: ["Call-Only", "Offline Conv.", "Google Ads", "Urgency"],
    accent: "fire",
  },
{
    id: "p14",
    title: "DTC Electronics Brand",
    category: "Ecommerce · Microsoft Ads",
    description:
      "Premium electronics DTC brand expanded to Microsoft Advertising. Shopping + RSA campaigns with UET tracking. 620K in tracked purchase value at 31% lower CAC.",
    metric: "$620K",
    metricLabel: "Purchase value",
    tags: ["Microsoft Ads", "Shopping", "UET", "Bing"],
    accent: "brand",
  },
{
    id: "p15",
    title: "Downioa",
    category: "Ecommerce · Shopify DTC",
    description:
      "Shopify DTC brand scaled via Google Performance Max. 1.39K conversions, $259K conversion value, 764.35% actual ROAS. Server-side CAPI tracking with offline conversions.",
    metric: "764%",
    metricLabel: "Actual ROAS",
    tags: ["Google PMax", "Shopify", "CAPI", "Server-side"],
    accent: "fire",
  },
{
    id: "p16",
    title: "Lead Gen · 13 Campaigns",
    category: "Home Services · Multi-Campaign",
    description:
      "13-campaign lead-gen account across Google Ads. 488 conversions from 7 lead forms + 56 phone calls at $4.67K total spend over 6 months. Call tracking + offline conversion import.",
    metric: "488",
    metricLabel: "Conversions",
    tags: ["Google Ads", "Lead Forms", "Call Tracking", "13 Campaigns"],
    accent: "brand",
  },
{
    id: "p17",
    title: "Call-Heavy Lead Gen",
    category: "Home Services · Call-Heavy",
    description:
      "Lead-gen account optimized for phone call conversions. 184 tracked phone calls, 759 total conversions, 2.02% CTR over 16 months. Call-only campaigns + offline conv import.",
    metric: "759",
    metricLabel: "Conversions",
    tags: ["Call-Only", "Offline Conv.", "Google Ads", "16 months"],
    accent: "fire",
  },
{
    id: "p18",
    title: "VSL Lead Gen",
    category: "Ecommerce · VSL Funnels",
    description:
      "Video Sales Letter (VSL) lead-gen funnel on Facebook Ads. 531 VSL leads at $8.44 cost per result across 4 angle-tested ad sets. Retargeting + 3 creative angles.",
    metric: "531",
    metricLabel: "VSL Leads",
    tags: ["Facebook Ads", "VSL", "4 Ad Sets", "Angle Testing"],
    accent: "brand",
  },
{
    id: "p19",
    title: "Meta Ads · CYNTHIA",
    category: "Ecommerce · Multi-Campaign",
    description:
      "Facebook Ads multi-campaign account (CYNTHIA) with 7 active campaigns. $43,869.43 total spend, 666,980 reach, 2.58M impressions. Film niche + creative testing structure.",
    metric: "$43.8K",
    metricLabel: "Total spent",
    tags: ["Facebook Ads", "7 Campaigns", "Film Niche", "Creative Testing"],
    accent: "fire",
  },
{
    id: "p20",
    title: "Meta Ads · Lifetime Budgets",
    category: "Home Services · Lead Gen",
    description:
      "Facebook Ads lifetime-budget campaign set with 8 campaigns. $8,415 total spend, 1,046,005 reach, 2,116,059 impressions. Lead-gen focus with $3.98 CPM.",
    metric: "1.04M",
    metricLabel: "Reach",
    tags: ["Facebook Ads", "Lifetime Budget", "8 Campaigns", "Lead Gen"],
    accent: "brand",
  },
{
    id: "p-skycoms",
    title: "Skycoms",
    category: "Ecommerce · eSIM",
    description:
      "eSIM DTC brand scaled to 3,800+ activations/month at 4.2x ROAS. Server-side CAPI with offline activation import, geo-based campaign structure, and 14-country scaling.",
    metric: "3,800+",
    metricLabel: "Activations / mo",
    tags: ["eSIM", "CAPI", "Meta Ads", "14 Countries"],
    accent: "fire",
  },
{
    id: "p-golfinex",
    title: "Golfinex",
    category: "Ecommerce · Golf",
    description:
      "Premium golf accessories Shopify brand scaled from 1.8x to 4.6x ROAS. Interest-stack audiences, Klaviyo VIP lookalikes, founder-led UGC, and post-purchase upsell flow.",
    metric: "4.6x",
    metricLabel: "ROAS (from 1.8x)",
    tags: ["Shopify", "Golf", "UGC", "Klaviyo"],
    accent: "brand",
  },
{
    id: "p-gearovo",
    title: "Gearovo",
    category: "Ecommerce · Gadgets",
    description:
      "Gadget store scaled from 800 to 3,400 orders/month at 4.8x ROAS. TikTok Spark Ads, Meta Advantage+, Google PMax, and weekly creative testing matrix (5 variants/wk).",
    metric: "3,400",
    metricLabel: "Orders / month",
    tags: ["Gadgets", "TikTok", "PMax", "UGC"],
    accent: "fire",
  },
{
    id: "p-hypr-fuel",
    title: "Hypr Fuel",
    category: "Ecommerce · Supplements",
    description:
      "Energy drink DTC brand scaled to 5,200+ active subscriptions at 4.6x ROAS. Subscription-first funnel, post-purchase upsell ladder, Klaviyo churn-prevention flows, and UGC creator program.",
    metric: "5,200+",
    metricLabel: "Subscriptions",
    tags: ["Supplements", "Subscription", "UGC", "Triple Whale"],
    accent: "brand",
  },
{
    id: "p-scuba-xpress",
    title: "Scuba Xpress",
    category: "Ecommerce · Sports",
    description:
      "Scuba diving gear Shopify store scaled to 5.2x ROAS with $340k/mo revenue. Interest-stack audiences, competitor-engager lookalikes, Google Shopping, and buyer's guide content.",
    metric: "5.2x",
    metricLabel: "ROAS (from 2.0x)",
    tags: ["Shopify", "Scuba", "Google Shopping", "Lookalikes"],
    accent: "fire",
  },
{
    id: "p-pixi-ai",
    title: "Pixi AI",
    category: "Ecommerce · AI Tools",
    description:
      "AI tool SaaS-ecommerce hybrid scaled from 7.6% to 14.8% trial-to-paid conversion. 7-day email nurture, in-app onboarding events via server-side GTM, and 2,400+ active subscriptions.",
    metric: "14.8%",
    metricLabel: "Trial-to-paid",
    tags: ["AI Tools", "SaaS", "Klaviyo", "GTM"],
    accent: "brand",
  },
{
    id: "p-car-formula",
    title: "Car Formula",
    category: "Ecommerce · Automotive",
    description:
      "Automotive care products Shopify brand scaled DTC conversion rate from 1.2% to 3.1%. PMax + Shopping, 'subscribe & save' ladder, how-to video content, and Triple Whale attribution.",
    metric: "3.1%",
    metricLabel: "Conv. rate (from 1.2%)",
    tags: ["Automotive", "PMax", "Subscription", "Triple Whale"],
    accent: "fire",
  },
{
    id: "p-fx-edu",
    title: "FX Edu",
    category: "Ecommerce · Info Product",
    description:
      "Forex education brand scaled via webinar funnel. Show-up rate jumped from 18% to 32%, course sales tripled, cost per sale dropped 42% with 3-day reminder + retargeting + deadline-driven urgency.",
    metric: "32%",
    metricLabel: "Webinar show-up",
    tags: ["Info Product", "Webinar", "Retargeting", "Klaviyo"],
    accent: "brand",
  },
{
    id: "p-reli-group",
    title: "Reli Group",
    category: "Ecommerce · Multi-Brand",
    description:
      "Multi-brand ecommerce portfolio with 4 Shopify stores unified into 3.8x blended ROAS. Cross-brand audience sharing via Meta, unified server-side GTM, and consolidated Triple Whale reporting.",
    metric: "3.8x",
    metricLabel: "Blended ROAS",
    tags: ["Multi-Brand", "Cross-Audience", "GTM", "Triple Whale"],
    accent: "fire",
  },
{
    id: "p-winhub",
    title: "Winhub",
    category: "Ecommerce · Marketplace",
    description:
      "Multi-vendor marketplace scaled seller acquisition 4x. Parallel lead-form + Google search funnel for sellers, offline conversion tracking for sign-ups, and 240+ new sellers/month at $18 each.",
    metric: "240+",
    metricLabel: "Sellers / month",
    tags: ["Marketplace", "Lead Forms", "Google Ads", "Offline Conv."],
    accent: "brand",
  },
{
    id: "p-marwaridhr",
    title: "MarwaridHR",
    category: "Ecommerce · B2B SaaS",
    description:
      "B2B HR software brand with self-serve ecommerce checkout. Paid conversion rate tripled from 2.4% to 8.2% with intent-based audiences, qualification questions, and retargeting on >3 page-view visitors.",
    metric: "8.2%",
    metricLabel: "Paid conv. (from 2.4%)",
    tags: ["B2B", "SaaS", "LinkedIn", "Retargeting"],
    accent: "fire",
  },
{
    id: "p-tns-global",
    title: "TNS Global",
    category: "Ecommerce · Wholesale",
    description:
      "Wholesale ecommerce brand with AOV lifted from $340 to $612 (+80%). Dynamic 3-tier bundle offers, tier-based free shipping, Klaviyo cross-sell flow for past buyers, and Shopify metafield tracking.",
    metric: "$612",
    metricLabel: "AOV (+80%)",
    tags: ["Wholesale", "Bundles", "Klaviyo", "Shopify"],
    accent: "brand",
  },
{
    id: "p-safe-food",
    title: "Safe Food",
    category: "Ecommerce · Food Safety",
    description:
      "Food safety testing kits Shopify brand with email becoming 32% of revenue. 14-day educational nurture sequence, buyer's guide lead magnet, retargeting on email engagers, and Google Shopping for high-intent keywords.",
    metric: "32%",
    metricLabel: "Email revenue",
    tags: ["Food", "Klaviyo", "Lead Magnet", "Google Shopping"],
    accent: "fire",
  },
{
    id: "p-clockwork",
    title: "Clockwork Synergy",
    category: "Ecommerce · Watches",
    description:
      "Watch straps Shopify brand. Repeat purchase rate jumped from 18% to 44% with post-purchase Klaviyo flow, strap-pairing recommendations, 60-day reorder reminders, and loyalty program.",
    metric: "44%",
    metricLabel: "Repeat purchase",
    tags: ["Watches", "Klaviyo", "Loyalty", "Retention"],
    accent: "brand",
  },
{
    id: "p-htown-printing",
    title: "Htown Printing Service",
    category: "Ecommerce · Custom Printing",
    description:
      "Custom printing Shopify store with conversion rate doubled from 1.6% to 3.4%. 3-step checkout wizard, 'design help' lead form option, retargeting on abandoners with 10% first-order discount.",
    metric: "3.4%",
    metricLabel: "Conv. rate (from 1.6%)",
    tags: ["Printing", "Wizard", "Lead Form", "Retargeting"],
    accent: "fire",
  },
{
    id: "p-home-repairs-24",
    title: "Home Repairs 24",
    category: "Home Services · Home Repair",
    description:
      "24/7 home repair service scaled from aggregator-dependent to 320+ qualified leads/month at $18/lead. Google LSA + Meta lead-form funnel, 60-second response SLA, dispatch routing, GoHighLevel SMS automation.",
    metric: "320+",
    metricLabel: "Leads / month",
    tags: ["Home Repair", "Google LSA", "Meta Lead Forms", "GoHighLevel"],
    accent: "brand",
  },
{
    id: "p-handyman-services",
    title: "Handyman Services",
    category: "Home Services · Handyman",
    description:
      "Singapore-based handyman service scaled from walk-in-only to 280+ online bookings/month. Multi-service booking funnel, Google Ads by service type, Meta retargeting on past customers.",
    metric: "280+",
    metricLabel: "Bookings / month",
    tags: ["Handyman", "Singapore", "Online Booking", "Meta Ads"],
    accent: "fire",
  },
{
    id: "p-right-now-painting",
    title: "Right Now Painting",
    category: "Home Services · Painting",
    description:
      "Residential + commercial painting company. 200+ quote requests/month at 38% close rate. Before/after creative engine (3/wk), Google LSA, and 'winter interior special' for off-season demand smoothing.",
    metric: "200+",
    metricLabel: "Quotes / month",
    tags: ["Painting", "Before/After", "Google LSA", "Seasonal"],
    accent: "brand",
  },
{
    id: "p-best-handyman-sg",
    title: "Best Handyman Services SG",
    category: "Home Services · Handyman",
    description:
      "Singapore handyman service scaled to 280+ leads/month with 2 new crews hired. Multi-service Google Ads funnel, call tracking, online booking system.",
    metric: "280+",
    metricLabel: "Leads / month",
    tags: ["Handyman", "Singapore", "Call Tracking", "Multi-Service"],
    accent: "fire",
  },
];

export type CVEntry = {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const cvEntries: CVEntry[] = [
  {
    period: "Feb 2025 — Apr 2026",
    role: "Sr. Digital Marketing Executive",
    company: "Arvion",
    location: "Remote · worldwide",
    summary:
      "Worked with 40+ brands including Skycoms, Golfinex, Gearovo, Hypr Fuel, Scuba Xpress, Pixi AI, Car Formula, and FX Edu. Managed paid media strategy, executed Google Ads and Meta Ads campaigns, set up tracking and analytics, and led junior team members.",
    achievements: [
      "Worked with 40+ brands across ecommerce and home services",
      "Managed paid media strategy across Google and Meta Ads",
      "Executed and optimized Google Ads and Meta Ads campaigns",
      "Set up and maintained tracking, analytics, and conversion measurement",
      "Led and supervised junior team members to maintain speed and quality",
    ],
    stack: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "GTM", "Conversion API", "Microsoft Clarity"],
  },
  {
    period: "Nov 2023 — Nov 2024",
    role: "Digital Marketing Executive",
    company: "Verce",
    location: "Remote · worldwide",
    summary:
      "Oversaw and optimized Google and Facebook ad campaigns for local and international brands including Reli Group, Winhub, MarwaridHR, TNS Global, and more.",
    achievements: [
      "Oversaw Google and Facebook ad campaigns for multiple brands",
      "Worked with Reli Group, Winhub, MarwaridHR, TNS Global",
      "Utilized Google Analytics and SEMrush for web analytics and performance tracking",
      "Provided daily progress reports to clients",
      "Conducted weekly status meetings with clients and team members",
    ],
    stack: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush"],
  },
  {
    period: "Jan 2022 — Oct 2023",
    role: "Digital Marketing Executive",
    company: "ByteCodeSoft",
    location: "Remote · worldwide",
    summary:
      "Executed and optimized Google and Facebook ad campaigns for multiple clients, focusing on lead generation, conversion rates, and revenue growth.",
    achievements: [
      "Executed and optimized Google and Facebook ad campaigns for multiple clients",
      "Worked with Safe Food, Clockwork Synergy, Home Repairs 24, Handyman Services, Htown Printing Service",
      "Monitored and analyzed web analytics using Google Analytics and Facebook Insights",
      "Led weekly status meetings to review campaign performance",
    ],
    stack: ["Google Ads", "Facebook Ads", "Google Analytics", "Facebook Insights"],
  },
  {
    period: "Jun 2021 — Dec 2021",
    role: "Digital Marketing Executive",
    company: "Alberto Pro & iSmart BD",
    location: "Remote",
    summary:
      "Strategically managed Google Ads campaigns to boost high-quality leads for clients. Actively managed Facebook ad campaigns and analyzed web analytics data.",
    achievements: [
      "Strategically managed Google Ads campaigns to boost high-quality leads",
      "Actively managed several Facebook ad campaigns",
      "Analyzed and optimized web analytics data using Google Analytics and Google Ads reporting",
    ],
    stack: ["Google Ads", "Facebook Ads", "Google Analytics"],
  },
];

export type SkillBlock = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: SkillBlock[] = [
  {
    category: "Technical Expertise",
    items: [
      { name: "Google Ads (Search, Display, YouTube)", level: 95 },
      { name: "Facebook Ads / Meta Ads", level: 96 },
      { name: "Google Analytics & Tracking", level: 92 },
      { name: "Google Tag Manager, Data Layer", level: 90 },
      { name: "Conversion API, Server-side tracking", level: 90 },
      { name: "Ad Trafficking", level: 92 },
    ],
  },
  {
    category: "Analytics & Research",
    items: [
      { name: "Google Trends / Market Research", level: 90 },
      { name: "Microsoft Clarity", level: 88 },
      { name: "SimilarWeb", level: 85 },
      { name: "SEMrush", level: 90 },
      { name: "Market & Competitors Analysis", level: 90 },
    ],
  },
  {
    category: "AI & Creative Tools",
    items: [
      { name: "ChatGPT / Claude / Gemini", level: 95 },
      { name: "Canva Pro", level: 92 },
      { name: "Copy.ai / Jasper AI", level: 88 },
      { name: "Madgicx", level: 82 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Teamwork", level: 95 },
      { name: "Time Management", level: 92 },
      { name: "Leadership", level: 88 },
      { name: "Fast Learner", level: 95 },
      { name: "Problem Solver", level: 90 },
    ],
  },
];

export type HeadlineMetric = {
  label: string;
  value: string;
  suffix: string;
  caption: string;
};

export const headlineMetrics: HeadlineMetric[] = [
  { label: "Companies worked with", value: "150", suffix: "+", caption: "Ecommerce + home services brands worldwide" },
  { label: "Core niches", value: "2", suffix: "", caption: "Ecommerce & Home Services — that's it" },
  { label: "Countries served", value: "60", suffix: "+", caption: "US, CA, UK, AU & 56 more" },
  { label: "Client retention", value: "94", suffix: "%", caption: "12-month rolling retention rate" },
];

// ===== Testimonials =====
// Order: first 2 are ecommerce, next 8 are home services / local / specialty
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  vertical: "Ecommerce" | "Home Services" | "Local Services" | "Specialty";
  metric: string;
  metricLabel: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Shariful scaled our Shopify store from 2x to 13x ROI in 6 months. He rebuilt our entire funnel — CAPI, UGC creative, Klaviyo lifecycle. The kind of marketer who actually understands unit economics.",
    name: "Origani Founder",
    role: "Founder",
    company: "Origani",
    industry: "Ecommerce · Shopify",
    rating: 5,
    vertical: "Ecommerce",
    metric: "13x",
    metricLabel: "ROI",
  },
  {
    id: "t2",
    quote: "Calgary Cleaning went from word-of-mouth to 100 qualified leads every month. Shariful built Google LSA + Meta lead forms with 60-second response SLA. Best investment we've made.",
    name: "Calgary Cleaning Owner",
    role: "Owner",
    company: "Calgary Cleaning",
    industry: "Home Services · Cleaning",
    rating: 5,
    vertical: "Home Services",
    metric: "100",
    metricLabel: "Leads / month",
  },
  {
    id: "t3",
    quote: "445 tracked phone calls + 250 quote requests from a single tint shop. Shariful built call tracking and lead forms that actually work. Cost per lead dropped 71%.",
    name: "Tint Shop Owner",
    role: "Owner",
    company: "Tint Shop",
    industry: "Home Services · Auto",
    rating: 5,
    vertical: "Home Services",
    metric: "445",
    metricLabel: "Phone calls tracked",
  },
  {
    id: "t4",
    quote: "320+ leads every month at $18/lead. Shariful built our entire lead engine — Google LSA, Meta lead forms, call tracking, GoHighLevel automation. Our calendar is full.",
    name: "Home Repair Services Owner",
    role: "Owner",
    company: "Home Repair Services 24",
    industry: "Local Services · Home Repair",
    rating: 5,
    vertical: "Local Services",
    metric: "320+",
    metricLabel: "Leads / month",
  },
  {
    id: "t5",
    quote: "$42k/mo spend at 4.8x ROAS. Shariful scaled our gadget store with Meta Advantage+ + TikTok Spark + Google PMax. Orders went from 800 to 3,400/month.",
    name: "Gearovo Founder",
    role: "Founder",
    company: "Gearovo",
    industry: "Ecommerce · Gadgets",
    rating: 5,
    vertical: "Ecommerce",
    metric: "4.8x",
    metricLabel: "ROAS",
  },
  {
    id: "t6",
    quote: "Shariful built our eSIM funnel with server-side CAPI. 3,800+ activations/month at 4.2x ROAS. He understands digital products better than anyone we've worked with.",
    name: "Skycoms Founder",
    role: "Founder",
    company: "Skycoms",
    industry: "Ecommerce · eSIM",
    rating: 5,
    vertical: "Ecommerce",
    metric: "4.2x",
    metricLabel: "ROAS",
  },
  {
    id: "t7",
    quote: "280+ qualified leads/month for our handyman service in Singapore. Shariful built multi-service funnels with online booking. We hired 2 new crews because of the volume.",
    name: "Best Handyman SG Owner",
    role: "Owner",
    company: "Best Handyman Services SG",
    industry: "Local Services · Handyman",
    rating: 5,
    vertical: "Local Services",
    metric: "280+",
    metricLabel: "Leads / month",
  },
  {
    id: "t8",
    quote: "Shariful built our VSL funnel with 4 angle-tested ad sets. 531 VSL leads at $8.44 each. Retargeting angle won at $6.78 CPR. Smart, data-driven, and fast.",
    name: "VSL Lead Gen Founder",
    role: "Founder",
    company: "VSL Lead Gen",
    industry: "Ecommerce · VSL",
    rating: 5,
    vertical: "Ecommerce",
    metric: "531",
    metricLabel: "VSL Leads",
  },
  {
    id: "t9",
    quote: "200+ quote requests/month for our painting company. Before/after creative engine on Meta + Google LSA. 38% close rate. Shariful knows home services inside out.",
    name: "Right Now Painting Owner",
    role: "Owner",
    company: "Right Now Painting",
    industry: "Local Services · Painting",
    rating: 5,
    vertical: "Local Services",
    metric: "200+",
    metricLabel: "Quotes / month",
  },
  {
    id: "t10",
    quote: "$38k/mo spend at 4.6x ROAS for our energy drink brand. 5,200+ subscriptions. Shariful built the entire subscription funnel + UGC creator program.",
    name: "Hyper Fuel Founder",
    role: "Founder",
    company: "Hyper Fuel",
    industry: "Ecommerce · Energy Drink",
    rating: 5,
    vertical: "Ecommerce",
    metric: "4.6x",
    metricLabel: "ROAS",
  },
];

// ===== FAQ =====
export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "What's the minimum ad spend you'll take on?",
    answer:
      "I work with brands spending at least $5,000/month on paid media. Below that, the math doesn't work — there isn't enough budget to test creative properly or build a real measurement stack. If you're below $5k/mo, I'll happily refer you to a partner who's a better fit.",
  },
  {
    id: "faq2",
    question: "Do you work month-to-month or require long contracts?",
    answer:
      "Initial engagements are 90 days minimum — that's the shortest window where the system can show real results. After that, it's month-to-month with 30 days' notice. I'd rather you stay because the numbers work than because a contract forces you to.",
  },
  {
    id: "faq3",
    question: "Which industries do you specialize in?",
    answer:
      "Home services (plumbing, roofing, electrician, HVAC, handyman, cleaning), local services (printing, auto repair), and DTC ecommerce across 15+ verticals — from gadgets and cosmetics to coffee, jewelry, supplements, and outdoor gear. If you're outside these, ask — I'll tell you honestly if I'm not the right fit.",
  },
  {
    id: "faq4",
    question: "How do you handle iOS 14 attribution issues?",
    answer:
      "I rebuilt measurement around server-side tagging (GTM Server-Side + Conversions API on Meta and Google), Triple Whale / Hyros for attribution, and modeled conversions. Your dashboard finally tells the truth — not what Meta wants you to believe. I also run incrementality tests on any channel spending more than $50k/mo.",
  },
  {
    id: "faq5",
    question: "Do you build the creative or just run the ads?",
    answer:
      "Both. I run a creative testing matrix (5–10 variants per week) and either produce the assets myself or work with your in-house team. I have a network of UGC creators, editors, and designers I bring in when needed. Creative is 70% of performance — I don't outsource the most important part.",
  },
  {
    id: "faq6",
    question: "What does the onboarding process look like?",
    answer:
      "Week 1: deep audit of your funnel, ad accounts, tracking, and unit economics. Week 2: measurement rebuild + first campaign restructure. Week 3: creative testing engine goes live. By day 30, you'll have a clean dashboard, a real creative pipeline, and the first signal on what's working. You'll never wonder what I'm doing — everything is documented.",
  },
];

// ===== Featured case studies (shown on home page after hero) =====
// 2 featured: Australian Shopify ecommerce store + Calgary cleaning company
export const featuredCaseStudyIds = [
  "clothing",
  "cleaning",
];

// ===== About Me =====
export type AboutStat = {
  label: string;
  value: string;
  caption: string;
};

export const aboutStats: AboutStat[] = [
  { label: "Years of experience", value: "4+", caption: "Performance marketing across 2 core niches" },
  { label: "Companies worked with", value: "150+", caption: "Ecommerce + Home Services brands worldwide" },
  { label: "Core niches", value: "2", caption: "Ecommerce & Home Services — that's it" },
  { label: "Countries served", value: "60+", caption: "Working with clients worldwide" },
];

export type Principle = {
  title: string;
  description: string;
  icon: "NumbersFirst" | "SystemOverTactics" | "HonestyFirst" | "Speed" | "Ownership" | "Curiosity";
};

export const principles: Principle[] = [
  {
    title: "Numbers first, vanity last",
    description:
      "I track revenue, MER, blended CAC, and payback period. Clicks and platform ROAS are leading indicators — these four are results. If a number doesn't move money, I don't celebrate it.",
    icon: "NumbersFirst",
  },
  {
    title: "System over tactics",
    description:
      "Most marketers sell tactics — a winning ad, a viral hook. I sell a system: campaign → business → scaling → numbers → measurements → growth. Skip a chapter and scale breaks at month 9.",
    icon: "SystemOverTactics",
  },
  {
    title: "Honesty first, even when it costs me",
    description:
      "If your unit economics won't survive scaling, I'll tell you before you spend a dollar with me. I've turned down clients whose business model I couldn't honestly fix. The ones I take tend to stay.",
    icon: "HonestyFirst",
  },
  {
    title: "Speed as a moat",
    description:
      "Creative testing weekly. Losing-ad kill list every 72 hours. New angle in market in 5 days from idea. Speed compounds — by quarter 3 you're operating 2-3x faster than competitors.",
    icon: "Speed",
  },
  {
    title: "Ownership, not agency-handoff",
    description:
      "When you hire me, you get me — not a junior account manager. I write the strategy, build the funnels, audit the ad accounts, and answer your Slack. No layers, no game of telephone.",
    icon: "Ownership",
  },
  {
    title: "Curiosity > credentials",
    description:
      "Performance marketing changes every 6 months. I read every earnings call, every platform update, every new tool. Certifications are baseline. Curiosity is the actual edge.",
    icon: "Curiosity",
  },
];

export type WorkPrinciple = {
  question: string;
  answer: string;
};

export const workingStyle: WorkPrinciple[] = [
  {
    question: "Where I work",
    answer:
      "Remote-first, based in Feni, Bangladesh. I work with clients across the US, Canada, UK, and Australia — typically async with one live call per week. My dashboard and SOPs make async work feel like I'm sitting next to you.",
  },
  {
    question: "How I communicate",
    answer:
      "Slack for day-to-day, Loom for walk-throughs, a weekly 30-min call for strategy, and a written monthly report your CFO can actually read. No jargon, no fluff, no 'synergize the funnel' nonsense.",
  },
  {
    question: "Who I work with",
    answer:
      "Home services owners ($100k-$2M/mo), DTC ecommerce founders ($200k-$5M/mo), and local service businesses looking to break free from aggregators. If you're below $5k/mo ad spend, I'll refer you to a partner.",
  },
  {
    question: "What I don't do",
    answer:
      "I don't do brand-only work without measurement. I don't take on brands whose product I wouldn't recommend to a friend. I don't outsource creative to cheap Fiverr gigs. And I don't ghost clients when something breaks.",
  },
];

export type DailyTool = {
  name: string;
  purpose: string;
  category: "Paid" | "Measurement" | "Lifecycle" | "Creative" | "Ops";
};

export const dailyTools: DailyTool[] = [
  { name: "Meta Ads", purpose: "Primary paid social — Advantage+, CAPI, catalog", category: "Paid" },
  { name: "Google Ads", purpose: "Search, PMax, LSA for home services", category: "Paid" },
  { name: "TikTok Ads", purpose: "Spark Ads, creator partnerships, UGC", category: "Paid" },
  { name: "YouTube Ads", purpose: "Long-form education, founder content", category: "Paid" },
  { name: "Klaviyo", purpose: "Email + SMS lifecycle engine", category: "Lifecycle" },
  { name: "GA4 + Server-side GTM", purpose: "Source-of-truth measurement, CAPI", category: "Measurement" },
];

// ===== AI Tools =====
export type AITool = {
  name: string;
  purpose: string;
  category: "AI Assistants" | "Creative & Content" | "Analytics & Tracking" | "Competitor Research" | "Automation";
};

export const aiTools: AITool[] = [
  { name: "ChatGPT", purpose: "Strategy ideation, copywriting, ad scripts, data analysis", category: "AI Assistants" },
  { name: "Claude", purpose: "Long-form content, creative briefs, funnel analysis", category: "AI Assistants" },
  { name: "Claude Coworks", purpose: "Collaborative AI workflows for client projects", category: "AI Assistants" },
  { name: "Manus AI", purpose: "Autonomous task execution for marketing ops", category: "AI Assistants" },
  { name: "Z AI", purpose: "AI-powered campaign optimization and creative insights", category: "AI Assistants" },
  { name: "Gemini", purpose: "Google ecosystem AI — ad copy, audience insights, campaign analysis", category: "AI Assistants" },
  { name: "Grok", purpose: "Real-time social insights, trend monitoring, X (Twitter) analysis", category: "AI Assistants" },
  { name: "OpenClaw", purpose: "AI-driven competitive intelligence and market analysis", category: "AI Assistants" },
  { name: "Canva", purpose: "Ad creative, social graphics, thumbnails, landing page mockups", category: "Creative & Content" },
  { name: "InVideo", purpose: "Video ad creation, UGC-style content, social video editing", category: "Creative & Content" },
  { name: "Copy.ai", purpose: "Ad copy generation, headlines, email subject lines at scale", category: "Creative & Content" },
  { name: "Jasper AI", purpose: "Brand voice copywriting, long-form ads, landing page copy", category: "Creative & Content" },
  { name: "Google Tag Manager", purpose: "Server-side tagging, CAPI implementation, conversion tracking", category: "Analytics & Tracking" },
  { name: "Google Analytics 4", purpose: "Source-of-truth measurement, cross-platform attribution", category: "Analytics & Tracking" },
  { name: "Microsoft Clarity", purpose: "Session recordings, heatmaps, user behavior analysis", category: "Analytics & Tracking" },
  { name: "Hyros", purpose: "Ad attribution, call tracking, offline conversion import", category: "Analytics & Tracking" },
  { name: "Triple Whale", purpose: "DTC ecommerce attribution, pixel tracking, MMM", category: "Analytics & Tracking" },
  { name: "SegMetrics", purpose: "Lead attribution, funnel reporting, customer journey analysis", category: "Analytics & Tracking" },
  { name: "Wicked Reports", purpose: "Long-term ROI tracking, cohort analysis, LTV attribution", category: "Analytics & Tracking" },
  { name: "Madgicx", purpose: "AI-powered Meta Ads optimization, automated bidding, audience discovery", category: "Analytics & Tracking" },
  { name: "Semrush", purpose: "Competitor ad analysis, market research, PPC intelligence", category: "Competitor Research" },
  { name: "AdSpy", purpose: "Facebook + Instagram ad spy, creative inspiration, angle discovery", category: "Competitor Research" },
  { name: "SpyFu", purpose: "Google Ads competitor research, PPC spy, ad analysis", category: "Competitor Research" },
  { name: "Ads Library", purpose: "Meta Ads Transparency — see all active ads from any advertiser", category: "Competitor Research" },
  { name: "Google Trends", purpose: "Search trend analysis, seasonal demand, geographic interest", category: "Competitor Research" },
  { name: "Google Ads Transparency", purpose: "See all Google Ads from any advertiser, creative research", category: "Competitor Research" },
  { name: "Keyword Planner", purpose: "Google search volume, CPC estimates, ad group ideas", category: "Competitor Research" },
  { name: "Google Flow", purpose: "Visualize user journeys, funnel drop-offs, conversion paths", category: "Competitor Research" },
  { name: "GoHighLevel", purpose: "CRM, automation, lead routing, SMS/email sequences for home services", category: "Automation" },
  { name: "Metricool", purpose: "Social media scheduling, analytics, cross-platform reporting", category: "Automation" },
];

export const aboutBio = {
  shortBio:
    "I'm Shariful Hasan Roky — a revenue growth strategist with 4+ years of experience. I've worked with 150+ companies worldwide across 60+ countries, focused exclusively on two niches: Ecommerce and Home Services.",
  longBio: [
    "I'm Shariful Hasan Roky — a revenue growth strategist with 4+ years of experience in performance marketing. I work independently, directly with founders, and I've worked with 150+ companies across the globe.",
    "I focus exclusively on two niches: Ecommerce and Home Services. In Ecommerce, I work with Shopify DTC brands — gadgets, cosmetics, clothing, supplements, pet supplies, coffee, jewelry, and more. In Home Services, I work with plumbing, roofing, electrician, cleaning, handyman, HVAC, car repair, and similar local service businesses.",
    "I work worldwide — clients from the US, Canada, UK, Australia, Europe, and beyond. Remote-first, async with one live call per week. When you hire me, you get me. I write the strategy, build the funnels, audit the ad accounts, and answer your Slack.",
    "If you're an ecommerce founder scaling your DTC brand, or a home service business owner looking to dominate your local market, let's talk.",
  ],
  location: "Feni, Bangladesh",
  timezone: "Asia/Dhaka (GMT+6)",
  languages: ["Bangla (native)", "English (fluent)"],
  availability: "2 new client spots per quarter",
  email: "sharifulhasanrocky@gmail.com",
  phone: "+8801538363143",
  linkedin: "linkedin.com/in/sharifulhasanroky",
};

export type TimelineChapter = {
  year: string;
  title: string;
  description: string;
};

export const personalTimeline: TimelineChapter[] = [
  {
    year: "2021",
    title: "Started at Alberto Pro & iSmart BD",
    description:
      "Began my career as a Digital Marketing Executive. Strategically managed Google Ads campaigns to boost high-quality leads, actively managed Facebook ad campaigns, and analyzed web analytics data.",
  },
  {
    year: "2022",
    title: "Joined ByteCodeSoft",
    description:
      "Moved to ByteCodeSoft as Digital Marketing Executive. Executed and optimized Google and Facebook ad campaigns for multiple international clients including Safe Food, Home Repairs 24, Handyman Services, and more.",
  },
  {
    year: "2023",
    title: "Joined Verce",
    description:
      "Joined Verce as Digital Marketing Executive. Oversaw Google and Facebook ad campaigns for local and international brands including Reli Group, Winhub, MarwaridHR, TNS Global.",
  },
  {
    year: "2025",
    title: "Promoted to Sr. Executive at Arvion",
    description:
      "Promoted to Sr. Digital Marketing Executive at Arvion. Worked with 40+ brands including Skycoms, Golfinex, Gearovo, Hypr Fuel, Scuba Xpress, Pixi AI, Car Formula, and FX Edu. Led junior team members.",
  },
  {
    year: "2026",
    title: "What's next",
    description:
      "Continuing to work with ecommerce and home service brands worldwide. 150+ companies served across two core niches. Leveraging AI tools and competitor research to move faster than agencies 3x my size.",
  },
];

export type NavLink = {
  label: string;
  /** Either scroll to a section on the home page, or switch to a dedicated view. */
  kind: "scroll" | "view" | "link";
  /** For `scroll`: the section id (#story). For `view`: the view name. */
  target: string;
};

export const navLinks: NavLink[] = [
  { label: "Pillars", kind: "scroll", target: "#pillars" },
  { label: "Numbers", kind: "scroll", target: "#numbers" },
  { label: "About", kind: "view", target: "about" },
  { label: "Portfolio", kind: "view", target: "portfolio" },
  { label: "Case Studies", kind: "view", target: "cases" },
  { label: "CV", kind: "view", target: "cv" },
  { label: "Book a Call", kind: "link", target: "https://calendly.com/sharifulhasanroky/free15miniuteconsultancy" },
];

export const industriesMarquee = [
  "Plumbing",
  "Handyman",
  "Printing",
  "Roofing",
  "Electrician",
  "Cleaning",
  "Yarn & Crafts",
  "Car Repair",
  "Gadgets",
  "Cosmetics",
  "Clothing",
  "Telecom",
  "Sports",
  "Pet Supplies",
  "Coffee",
  "Home Decor",
  "Jewelry",
  "Supplements",
  "Baby & Kids",
  "Outdoor Gear",
  "Watches",
  "Audio Accessories",
  "Gifting",
  "HVAC",
  "Pest Control",
  "Landscaping",
  "Fitness",
];
