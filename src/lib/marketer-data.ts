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
  Dumbbell,
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
      "iOS 14.5 killed platform attribution. I rebuilt measurement around server-side tagging, a unified data warehouse (BigQuery / Snowflake), and modeled conversions — so decisions are made on real revenue, not on what Meta wants you to believe. Your dashboard finally tells the truth.",
    bullets: [
      "Server-side GTM + Conversions API on every channel",
      "Unified warehouse: ad spend + Shopify + Stripe in one model",
      "MMM + incrementality tests for channels above $50k/mo",
      "Live Looker / Hex dashboard your CFO will actually open",
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
    id: "plumbing",
    industry: "Plumbing",
    icon: Wrench,
    client: "MetroFlow Plumbing",
    location: "Dallas–Fort Worth, TX",
    vertical: "Home Services",
    challenge:
      "Dependent on word-of-mouth, leads dried up during winter. Cost per booked job was north of $180 and they were losing to aggregators.",
    approach:
      "Built a Local Service Ads + Meta lead-form funnel with a 60-second response SLA, dispatch routing, and review-request automation. Offer: free camera inspection on first call.",
    results: [
      { metric: "Cost per booked job", value: "$62", delta: "−66%" },
      { metric: "Booked jobs / mo", value: "184", delta: "+312%" },
      { metric: "Avg ticket size", value: "$410", delta: "+27%" },
    ],
    timeline: "90 days",
    spend: "$14k/mo",
    highlight: "Scaled from 44 to 184 booked jobs/mo in one quarter.",
  },
  {
    id: "handyman",
    industry: "Handyman",
    icon: Hammer,
    client: "FixIt Joe Pro",
    location: "Atlanta, GA",
    vertical: "Home Services",
    challenge:
      "Owner-operator, maxed out at 5 jobs/day, no marketing. Wanted to hire a second crew without losing margin.",
    approach:
      "Launched Google PMax + YouTube shorts with a 'same-day estimate' landing page and live calendar booking. Re-targeted website visitors with seasonal maintenance bundles.",
    results: [
      { metric: "Lead cost", value: "$21", delta: "−48%" },
      { metric: "Jobs / week", value: "47", delta: "+220%" },
      { metric: "Crews", value: "3", delta: "+2" },
    ],
    timeline: "120 days",
    spend: "$6k/mo",
    highlight: "Booked 8 weeks out, hired 2 new crews in 4 months.",
  },
  {
    id: "printing",
    industry: "Printing",
    icon: Printer,
    client: "InkPress Print Co.",
    location: "Los Angeles, CA",
    vertical: "Local Services",
    challenge:
      "B2B print shop wither losing to online printers. Long sales cycle, no CRM, zero nurture.",
    approach:
      "Rebuilt the funnel around a 'free sample kit' offer + LinkedIn ABM to design agencies. Cold email → retargeting → quote-request flow with an automated 5-touch nurture.",
    results: [
      { metric: "Qualified quotes/mo", value: "92", delta: "+178%" },
      { metric: "Quote → close rate", value: "31%", delta: "+14pts" },
      { metric: "Avg order value", value: "$2,840", delta: "+44%" },
    ],
    timeline: "6 months",
    spend: "$9k/mo",
    highlight: "Hit $278k/mo revenue from $9k ad spend — 30.8x MER.",
  },
  {
    id: "roofing",
    industry: "Roofing",
    icon: Home,
    client: "Skyline Roofing Group",
    location: "Houston, TX",
    vertical: "Home Services",
    challenge:
      "Storm-chasing competition killed margins. Cost per roof replacement lead was $480, closing rate under 8%.",
    approach:
      "Pivoted to Google LSA + Facebook storm-mode campaigns triggered by weather API. Added a virtual roof-estimate tool to pre-qualify leads before dispatch.",
    results: [
      { metric: "Cost per signed contract", value: "$640", delta: "−42%" },
      { metric: "Close rate", value: "21%", delta: "+162%" },
      { metric: "Contracts / mo", value: "38", delta: "+245%" },
    ],
    timeline: "5 months",
    spend: "$22k/mo",
    highlight: "From 11 to 38 signed roof replacements per month.",
  },
  {
    id: "electrician",
    industry: "Electrician",
    icon: Zap,
    client: "VoltEdge Electric",
    location: "Phoenix, AZ",
    vertical: "Home Services",
    challenge:
      "Seasonal AC-related electrical calls spiked in summer but they had no off-season pipeline. CRM was a spreadsheet.",
    approach:
      "Built seasonal full-funnel: EV charger install + panel upgrade campaigns in winter, emergency repair in summer. Added automated review + referral engine after every job.",
    results: [
      { metric: "Off-season revenue", value: "$84k/mo", delta: "+210%" },
      { metric: "Google rating", value: "4.9★", delta: "+0.4" },
      { metric: "Repeat customer rate", value: "34%", delta: "+18pts" },
    ],
    timeline: "8 months",
    spend: "$11k/mo",
    highlight: "Built a year-round pipeline that doesn't depend on weather.",
  },
  {
    id: "cleaning",
    industry: "Cleaning",
    icon: Sparkles,
    client: "PristinePro Cleaning",
    location: "Miami, FL",
    vertical: "Home Services",
    challenge:
      "Subscription residential cleaning with high churn. CAC was climbing, LTV was shrinking.",
    approach:
      "Rebuilt offer around 'first clean free with 3-month commit'. Replaced single-purchase ads with subscription-focused creative. Built a 9-touch post-sale lifecycle to cut churn.",
    results: [
      { metric: "Subscription CAC", value: "$48", delta: "−57%" },
      { metric: "12-month retention", value: "62%", delta: "+24pts" },
      { metric: "MRR", value: "$96k", delta: "+187%" },
    ],
    timeline: "7 months",
    spend: "$8k/mo",
    highlight: "Cut churn in half, tripled monthly recurring revenue.",
  },
  {
    id: "yarn",
    industry: "Yarn & Crafts",
    icon: Scissors,
    client: "Heritage Yarn Co.",
    location: "Portland, OR",
    vertical: "Ecommerce",
    challenge:
      "DTC yarn brand with passionate community but plateaued at $90k/mo. High AOV but low purchase frequency.",
    approach:
      "Launched a subscription 'Yarn of the Month' club, paired with UGC knitting tutorials on TikTok and a pattern-library email nurture that reactivated 1,800 past buyers.",
    results: [
      { metric: "Monthly revenue", value: "$312k", delta: "+247%" },
      { metric: "Repeat purchase rate", value: "48%", delta: "+22pts" },
      { metric: "Email-attributed revenue", value: "31%", delta: "+18pts" },
    ],
    timeline: "9 months",
    spend: "$18k/mo",
    highlight: "Turned a hobbyist community into a $3.7M/yr DTC brand.",
  },
  {
    id: "car-repair",
    industry: "Car Repairing",
    icon: Car,
    client: "Apex Auto Repair",
    location: "Chicago, IL",
    vertical: "Local Services",
    challenge:
      "Independent shop competing with dealer service centers. Average wait time 3 weeks, no online booking.",
    approach:
      "Built a digital booking flow with diagnostic-tree pricing transparency, plus retargeting for high-margin services (brakes, transmission, diagnostics).",
    results: [
      { metric: "Online bookings", value: "62%", delta: "from 0%" },
      { metric: "Avg RO", value: "$612", delta: "+38%" },
      { metric: "Bays utilized", value: "94%", delta: "+31pts" },
    ],
    timeline: "6 months",
    spend: "$7k/mo",
    highlight: "Filled the calendar 5 weeks out without a single Groupon.",
  },
  {
    id: "gadgets",
    industry: "Ecommerce · Gadgets",
    icon: Smartphone,
    client: "NovaTech Audio",
    location: "Brooklyn, NY",
    vertical: "Ecommerce",
    challenge:
      "Premium Bluetooth audio brand hitting diminishing returns on Meta. TAC climbing, iOS attribution broken.",
    approach:
      "Rebuilt measurement with server-side CAPI + post-purchase survey. Scaled TikTok Spark Ads with creator partnerships. Layered Google PMax for branded + comparison search.",
    results: [
      { metric: "Blended ROAS", value: "4.8x", delta: "+71%" },
      { metric: "Monthly revenue", value: "$1.4M", delta: "+218%" },
      { metric: "Email + SMS revenue", value: "27%", delta: "+19pts" },
    ],
    timeline: "9 months",
    spend: "$210k/mo",
    highlight: "Scaled from $440k to $1.4M/mo without ROAS collapse.",
  },
  {
    id: "cosmetics",
    industry: "Ecommerce · Cosmetics",
    icon: Brush,
    client: "Luxe Beauty Lab",
    location: "Toronto, ON",
    vertical: "Ecommerce",
    challenge:
      "Indie cosmetics brand losing to Sephora exclusives. High repeat intent, no subscription model.",
    approach:
      "Launched refill subscription + 'try before you buy' sample kits. Scaled UGC unboxing on Reels + TikTok, plus influencer gifting with affiliate codes.",
    results: [
      { metric: "Subscriber count", value: "12,400", delta: "+9x" },
      { metric: "LTV / CAC ratio", value: "4.2", delta: "+118%" },
      { metric: "Monthly revenue", value: "$420k", delta: "+193%" },
    ],
    timeline: "10 months",
    spend: "$58k/mo",
    highlight: "Subscription now drives 41% of monthly revenue.",
  },
  {
    id: "clothing",
    industry: "Ecommerce · Clothing",
    icon: Shirt,
    client: "Atelier Nord",
    location: "Montreal, QC",
    vertical: "Ecommerce",
    challenge:
      "Premium menswear brand with high returns (38%) and weak size conversion on mobile.",
    approach:
      "Built AR size-finder + size-quiz funnel. Retargeted by fit-confidence score. Introduced 'second-fit-free' guarantee that doubled AOV.",
    results: [
      { metric: "Return rate", value: "14%", delta: "−63%" },
      { metric: "Mobile conversion rate", value: "3.4%", delta: "+143%" },
      { metric: "AOV", value: "$214", delta: "+72%" },
    ],
    timeline: "8 months",
    spend: "$44k/mo",
    highlight: "Cut returns by 24 points while doubling AOV.",
  },
  {
    id: "telecom",
    industry: "Ecommerce · Telecom",
    icon: Phone,
    client: "Signal Mobile",
    location: "Austin, TX",
    vertical: "Ecommerce",
    challenge:
      "MVNO with high churn after the 90-day cliff. CAC was unsustainable against 6-month LTV.",
    approach:
      "Rebuilt around annual plans + hardware bundles. Launched retention lifecycle with usage-based upsell, plus referral program with $25 dual-sided incentive.",
    results: [
      { metric: "90-day churn", value: "4.1%", delta: "−62%" },
      { metric: "Annual plan mix", value: "47%", delta: "+39pts" },
      { metric: "Net new subs / mo", value: "6,200", delta: "+154%" },
    ],
    timeline: "12 months",
    spend: "$140k/mo",
    highlight: "Lowered churn enough to scale paid profitably 2.5x.",
  },
  {
    id: "sports",
    industry: "Ecommerce · Sports",
    icon: Dumbbell,
    client: "Titan Strength Co.",
    location: "Denver, CO",
    vertical: "Ecommerce",
    challenge:
      "DTC gym equipment brand post-COVID plateau. Heavy items = high shipping cost, low reorder rate.",
    approach:
      "Launched accessories + consumables (chalk, belts, grips) as repeat-buy SKUs. YouTube long-form education + Meta retargeting bundle offers.",
    results: [
      { metric: "Repeat purchase rate", value: "38%", delta: "+26pts" },
      { metric: "Shipping cost / order", value: "−29%", delta: "−29%" },
      { metric: "Monthly revenue", value: "$680k", delta: "+164%" },
    ],
    timeline: "9 months",
    spend: "$72k/mo",
    highlight: "Built a consumables flywheel that lifts LTV 3.4x.",
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
    id: "p1",
    title: "MetroFlow Plumbing",
    category: "Home Services",
    description:
      "Built a dispatch-aware lead engine that books 184 plumbing jobs/mo at $62 CAC. Replaced their dependency on aggregators with a direct-to-consumer funnel.",
    metric: "184",
    metricLabel: "Jobs / month",
    tags: ["Google LSA", "Meta Lead Forms", "Twilio", "GoHighLevel"],
    accent: "fire",
  },
  {
    id: "p2",
    title: "NovaTech Audio",
    category: "Ecommerce · Gadgets",
    description:
      "Scaled a premium audio brand from $440k to $1.4M/mo with server-side measurement, TikTok creator partnerships, and a 9-touch email engine.",
    metric: "4.8x",
    metricLabel: "Blended ROAS",
    tags: ["TikTok Spark", "PMax", "CAPI", "Klaviyo"],
    accent: "brand",
  },
  {
    id: "p3",
    title: "Skyline Roofing",
    category: "Home Services",
    description:
      "Weather-API-triggered Meta campaigns + virtual estimate tool cut cost per signed roof contract by 42% in storm season.",
    metric: "−42%",
    metricLabel: "Cost per signed contract",
    tags: ["Meta Storm", "PMax", "Calendly", "Weather API"],
    accent: "fire",
  },
  {
    id: "p4",
    title: "Luxe Beauty Lab",
    category: "Ecommerce · Cosmetics",
    description:
      "Launched refill subscription + sample kits. Subscription now drives 41% of monthly revenue with a 4.2 LTV:CAC ratio.",
    metric: "12.4k",
    metricLabel: "Active subscribers",
    tags: ["Recharge", "UGC", "Reels", "Influencer"],
    accent: "brand",
  },
  {
    id: "p5",
    title: "Atelier Nord",
    category: "Ecommerce · Clothing",
    description:
      "AR size-finder + size-quiz funnel cut returns from 38% to 14% while doubling mobile AOV. Conversion rate up 143% on mobile.",
    metric: "−63%",
    metricLabel: "Return rate",
    tags: ["AR Try-On", "Quiz", "Rebuy", "Klaviyo"],
    accent: "fire",
  },
  {
    id: "p6",
    title: "Titan Strength Co.",
    category: "Ecommerce · Sports",
    description:
      "Built a consumables flywheel (chalk, belts, grips) on top of heavy equipment, lifting repeat purchase rate by 26 points and LTV 3.4x.",
    metric: "+164%",
    metricLabel: "Monthly revenue",
    tags: ["YouTube", "Bundle", "Recharge", "GA4"],
    accent: "brand",
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
    period: "2023 — Present",
    role: "Founder & Head of Growth",
    company: "Hasan Performance Studio",
    location: "Remote · serving US, CA, UK",
    summary:
      "Independent performance marketing studio serving home services and DTC ecommerce brands between $100k and $5M/mo. Direct ownership of paid spend, measurement, and lifecycle.",
    achievements: [
      "Managed $4.2M+ in tracked ad spend across 22 brands in 18 months",
      "Average client revenue lift of 168% within first 6 months of engagement",
      "Built proprietary measurement dashboard used by every client",
      "Maintained 94% client retention rate over 18 months",
    ],
    stack: ["Meta", "Google Ads", "TikTok", "GA4 + SS", "BigQuery", "Klaviyo", "Recharge", "GoHighLevel"],
  },
  {
    period: "2021 — 2023",
    role: "Head of Performance Marketing",
    company: "Northbridge DTC Holdings",
    location: "Toronto, ON",
    summary:
      "Led paid + lifecycle for a portfolio of 4 DTC brands ($18M aggregate ARR). Owned a 6-person team and a $1.1M/mo media budget.",
    achievements: [
      "Scaled portfolio revenue from $7M to $18M ARR in 22 months",
      "Reduced blended CAC by 34% across the portfolio",
      "Launched subscription programs on 3 brands; subscription now 31% of portfolio revenue",
      "Hired and trained a 6-person performance team (paid, lifecycle, creative)",
    ],
    stack: ["Meta", "Google", "TikTok", "Shopify", "Klaviyo", "Recharge", "Looker", "Snowflake"],
  },
  {
    period: "2019 — 2021",
    role: "Senior Paid Media Manager",
    company: "Lumen Growth Agency",
    location: "Austin, TX",
    summary:
      "Owned paid social + paid search for home services and local lead-gen clients. Built the agency's first server-side tracking implementation.",
    achievements: [
      "Managed $2.8M/yr in paid spend across 14 home-service clients",
      "Cut average cost per lead by 41% in first 90 days of engagement",
      "Built reusable creative testing framework adopted agency-wide",
      "Launched agency's Google LSA + Local Service Ads practice",
    ],
    stack: ["Meta", "Google Ads", "LSA", "CallRail", "GoHighLevel", "GA4"],
  },
  {
    period: "2017 — 2019",
    role: "Digital Marketing Specialist",
    company: "Brightway Consulting",
    location: "Dhaka, BD → Remote",
    summary:
      "Cut my teeth on SMB marketing: SEO, paid social, email, and funnel builds for local service businesses and early-stage ecommerce.",
    achievements: [
      "Generated 2,400+ qualified leads for local service clients in year one",
      "Built first Shopify funnel that did $1M in 12 months for a cosmetics client",
      "Learned the unit-economics-first approach that still drives my work today",
    ],
    stack: ["Facebook Ads", "Google Ads", "Shopify", "Mailchimp", "WordPress"],
  },
];

export type SkillBlock = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: SkillBlock[] = [
  {
    category: "Paid Channels",
    items: [
      { name: "Meta Ads (FB + IG)", level: 96 },
      { name: "Google Ads (Search, PMax, LSA)", level: 94 },
      { name: "TikTok / Reels Spark Ads", level: 88 },
      { name: "YouTube TrueView", level: 84 },
      { name: "LinkedIn Ads (B2B)", level: 78 },
    ],
  },
  {
    category: "Measurement",
    items: [
      { name: "GA4 + Server-side GTM", level: 92 },
      { name: "Conversions API (Meta/Google)", level: 90 },
      { name: "BigQuery / Snowflake modeling", level: 80 },
      { name: "MMM + Incrementality", level: 76 },
      { name: "Looker / Hex dashboards", level: 85 },
    ],
  },
  {
    category: "Lifecycle & Stack",
    items: [
      { name: "Klaviyo email/SMS", level: 93 },
      { name: "Recharge subscriptions", level: 86 },
      { name: "GoHighLevel (local)", level: 90 },
      { name: "Shopify / Shopify Plus", level: 91 },
      { name: "HubSpot / Salesforce", level: 75 },
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
  { label: "Ad spend managed", value: "8.4", suffix: "M+", caption: "Across 22 brands in 18 months" },
  { label: "Avg client revenue lift", value: "168", suffix: "%", caption: "Within first 6 months of engagement" },
  { label: "Client retention", value: "94", suffix: "%", caption: "12-month rolling retention rate" },
  { label: "Industries served", value: "14", suffix: "+", caption: "Home services, DTC, local & specialty" },
];

export type NavLink = {
  label: string;
  /** Either scroll to a section on the home page, or switch to a dedicated view. */
  kind: "scroll" | "view";
  /** For `scroll`: the section id (#story). For `view`: the view name. */
  target: string;
};

export const navLinks: NavLink[] = [
  { label: "Story", kind: "scroll", target: "#story" },
  { label: "Pillars", kind: "scroll", target: "#pillars" },
  { label: "Numbers", kind: "scroll", target: "#numbers" },
  { label: "Portfolio", kind: "view", target: "portfolio" },
  { label: "Case Studies", kind: "view", target: "cases" },
  { label: "CV", kind: "view", target: "cv" },
  { label: "Book a Call", kind: "scroll", target: "#book" },
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
  "HVAC",
  "Pest Control",
  "Landscaping",
  "Pet Care",
  "Fitness",
];
