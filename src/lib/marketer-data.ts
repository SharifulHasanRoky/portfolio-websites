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
  {
    id: "pet-supplies",
    industry: "Ecommerce · Pet Supplies",
    icon: PawPrint,
    client: "Pawsome Co.",
    location: "Austin, TX",
    vertical: "Ecommerce",
    challenge:
      "Premium pet food + supplement brand losing to Chewy on price. Subscription churn spiking at month 3.",
    approach:
      "Rebuilt offer around a 'first month free + flex schedule' subscription. Launched breed-specific quiz funnel and UGC testimonial engine on Meta + TikTok.",
    results: [
      { metric: "Active subscribers", value: "9,800", delta: "+248%" },
      { metric: "3-month churn", value: "8.2%", delta: "−58%" },
      { metric: "LTV / CAC ratio", value: "3.6", delta: "+112%" },
    ],
    timeline: "8 months",
    spend: "$54k/mo",
    highlight: "Cut subscription churn by more than half in one quarter.",
  },
  {
    id: "coffee",
    industry: "Ecommerce · Coffee",
    icon: Coffee,
    client: "Roast & Rebel Coffee",
    location: "Portland, OR",
    vertical: "Ecommerce",
    challenge:
      "Specialty coffee roaster stuck at $90k/mo. High AOV ($48) but only 1.4 orders/customer/year.",
    approach:
      "Launched 'roaster's choice' subscription + gift bundles for corporate gifting. Built a tasting-flight quiz that recommends origin by flavor profile.",
    results: [
      { metric: "Subscription revenue", value: "42%", delta: "+38pts" },
      { metric: "Avg orders / customer / yr", value: "4.1", delta: "+193%" },
      { metric: "Monthly revenue", value: "$310k", delta: "+244%" },
    ],
    timeline: "10 months",
    spend: "$32k/mo",
    highlight: "Turned occasional buyers into 4x/year subscribers.",
  },
  {
    id: "home-decor",
    industry: "Ecommerce · Home Decor",
    icon: Sofa,
    client: "Nordhaus Living",
    location: "Brooklyn, NY",
    vertical: "Ecommerce",
    challenge:
      "DTC home decor + lighting brand with long consideration cycle (avg 21 days). High cart abandonment, low brand recall.",
    approach:
      "Built a 14-day Pinterest + Meta retargeting sequence with room-styling reels. Launched AR room-visualizer on PDP. Added 'designer-pick' bundles with anchor pricing.",
    results: [
      { metric: "Cart-to-purchase rate", value: "31%", delta: "+78%" },
      { metric: "Avg session duration", value: "4m 12s", delta: "+162%" },
      { metric: "Monthly revenue", value: "$540k", delta: "+128%" },
    ],
    timeline: "7 months",
    spend: "$48k/mo",
    highlight: "AR visualizer lifted conversion 38% on featured SKUs.",
  },
  {
    id: "jewelry",
    industry: "Ecommerce · Jewelry",
    icon: Gem,
    client: "Meira Fine Jewelry",
    location: "Los Angeles, CA",
    vertical: "Ecommerce",
    challenge:
      "Demi-fine jewelry brand ($150-$800 AOV). High price point = high trust barrier, low first-purchase conversion.",
    approach:
      "Launched 'try-at-home' program for $1 (credited to purchase). Built founder-story creative on Instagram + TikTok. Layered review-request automation + UGC gallery on PDP.",
    results: [
      { metric: "First-purchase conversion", value: "3.8%", delta: "+171%" },
      { metric: "Try-at-home → purchase", value: "29%", delta: "+29pts" },
      { metric: "Monthly revenue", value: "$420k", delta: "+196%" },
    ],
    timeline: "9 months",
    spend: "$38k/mo",
    highlight: "Try-at-home program drove 29% purchase rate from trials.",
  },
  {
    id: "supplements",
    industry: "Ecommerce · Supplements",
    icon: Pill,
    client: "VitalRoot Wellness",
    location: "Miami, FL",
    vertical: "Ecommerce",
    challenge:
      "Health supplement brand facing rising CAC and tightening Meta ad costs. Subscription plateau at 4,200 active subs.",
    approach:
      "Pivoted to problem-aware funnel: sleep, energy, gut health quiz → personalized bundle. Layered TikTok creator partnerships + affiliate program. Implemented post-purchase upsell flow.",
    results: [
      { metric: "Blended CAC", value: "$34", delta: "−47%" },
      { metric: "Active subscribers", value: "14,800", delta: "+252%" },
      { metric: "AOV (with upsells)", value: "$78", delta: "+62%" },
    ],
    timeline: "10 months",
    spend: "$96k/mo",
    highlight: "Quiz funnel cut CAC nearly in half while doubling subs.",
  },
  {
    id: "baby-kids",
    industry: "Ecommerce · Baby & Kids",
    icon: Baby,
    client: "Little Atlas Co.",
    location: "Seattle, WA",
    vertical: "Ecommerce",
    challenge:
      "Premium baby gear brand (carriers, sleep sacks, feeding). High trust required, strong seasonality, plateauing growth.",
    approach:
      "Launched safety-certified content marketing on YouTube + Pinterest. Built a milestone-based lifecycle email that maps to baby's age. Partnered with 40+ parent influencers for UGC.",
    results: [
      { metric: "Email revenue share", value: "34%", delta: "+22pts" },
      { metric: "New customer rate", value: "62%", delta: "+18pts" },
      { metric: "Monthly revenue", value: "$380k", delta: "+148%" },
    ],
    timeline: "9 months",
    spend: "$42k/mo",
    highlight: "Milestone lifecycle now drives 34% of total revenue.",
  },
  {
    id: "outdoor-gear",
    industry: "Ecommerce · Outdoor Gear",
    icon: Mountain,
    client: "Ridgeline Outdoors",
    location: "Salt Lake City, UT",
    vertical: "Ecommerce",
    challenge:
      "DTC outdoor + camping gear brand competing with REI + Backcountry. Long consideration cycle, high return rate on apparel.",
    approach:
      "Launched 'trail-tested' UGC series with real hikers + creators. Built fit-guide quiz for apparel. Layered seasonal bundles (camp kitchen, sleep system) with member pricing.",
    results: [
      { metric: "Return rate", value: "11%", delta: "−52%" },
      { metric: "Bundle attach rate", value: "27%", delta: "+27pts" },
      { metric: "Monthly revenue", value: "$620k", delta: "+118%" },
    ],
    timeline: "11 months",
    spend: "$64k/mo",
    highlight: "Cut apparel returns in half with fit-guide quiz.",
  },
  {
    id: "watches",
    industry: "Ecommerce · Watches",
    icon: Watch,
    client: "Meridian Watch Co.",
    location: "Toronto, ON",
    vertical: "Ecommerce",
    challenge:
      "Direct-to-consumer watch brand ($300-$1,200 AOV). High trust barrier, luxury positioning, difficult to justify ad spend at scale.",
    approach:
      "Launched founder-led YouTube long-form (watchmaking process). Built comparison pages vs. legacy brands. Layered Meta catalog ads with movement-specific creative.",
    results: [
      { metric: "Blended ROAS", value: "3.9x", delta: "+86%" },
      { metric: "Avg order value", value: "$485", delta: "+34%" },
      { metric: "Monthly revenue", value: "$290k", delta: "+172%" },
    ],
    timeline: "8 months",
    spend: "$58k/mo",
    highlight: "Founder content drove 41% of new-customer revenue.",
  },
  {
    id: "audio-accessories",
    industry: "Ecommerce · Audio Accessories",
    icon: Headphones,
    client: "Bassdrop Audio",
    location: "Shenzhen, CN → Global",
    vertical: "Ecommerce",
    challenge:
      "Audio accessories brand (cables, cases, stands) on Amazon + DTC. Low AOV ($28), high competition, weak brand identity.",
    approach:
      "Rebuilt DTC site with bundle pricing + 'audiophile starter kit'. Launched YouTube reviewer partnerships + Reddit-targeted Meta ads. Added post-purchase cross-sell flow.",
    results: [
      { metric: "AOV (DTC)", value: "$72", delta: "+157%" },
      { metric: "DTC revenue share", value: "38%", delta: "+27pts" },
      { metric: "Monthly DTC revenue", value: "$180k", delta: "+218%" },
    ],
    timeline: "7 months",
    spend: "$24k/mo",
    highlight: "Shifted 38% of revenue off Amazon onto owned DTC channel.",
  },
  {
    id: "gifting",
    industry: "Ecommerce · Gifting",
    icon: Gift,
    client: "Curated Joy Co.",
    location: "Chicago, IL",
    vertical: "Ecommerce",
    challenge:
      "Curated gift box brand with extreme seasonality (Q4 = 70% of revenue). Off-season cash crunch, weak repeat purchase.",
    approach:
      "Built 'celebration calendar' lifecycle (birthdays, anniversaries, holidays). Launched corporate gifting B2B funnel. Added subscription 'surprise box' quarterly.",
    results: [
      { metric: "Off-season revenue", value: "$72k/mo", delta: "+186%" },
      { metric: "Corporate accounts", value: "84", delta: "+84" },
      { metric: "Q4 revenue", value: "$1.8M", delta: "+92%" },
    ],
    timeline: "12 months",
    spend: "$36k/mo",
    highlight: "Smoothed seasonality — off-season is now 30% of revenue.",
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
  {
    id: "p7",
    title: "Pawsome Co.",
    category: "Ecommerce · Pet Supplies",
    description:
      "Rebuilt offer around 'first month free' subscription + breed-specific quiz funnel. Cut 3-month churn by 58% while nearly tripling active subscribers.",
    metric: "9.8k",
    metricLabel: "Active subscribers",
    tags: ["Subscription", "Quiz", "UGC", "TikTok"],
    accent: "fire",
  },
  {
    id: "p8",
    title: "Roast & Rebel Coffee",
    category: "Ecommerce · Coffee",
    description:
      "Launched 'roaster's choice' subscription + corporate gifting bundles. Tasting-flight quiz turned 1.4 orders/yr customers into 4.1 orders/yr subscribers.",
    metric: "+244%",
    metricLabel: "Monthly revenue",
    tags: ["Subscription", "Quiz", "Recharge", "Klaviyo"],
    accent: "brand",
  },
  {
    id: "p9",
    title: "VitalRoot Wellness",
    category: "Ecommerce · Supplements",
    description:
      "Problem-aware quiz funnel (sleep, energy, gut) cut blended CAC 47% while post-purchase upsells lifted AOV 62%. Sub base grew from 4.2k to 14.8k.",
    metric: "−47%",
    metricLabel: "Blended CAC",
    tags: ["Quiz", "TikTok", "Upsell", "Recharge"],
    accent: "fire",
  },
  {
    id: "p10",
    title: "Meira Fine Jewelry",
    category: "Ecommerce · Jewelry",
    description:
      "$1 try-at-home program (credited to purchase) broke the luxury trust barrier. Founder-story creative on IG + TikTok lifted first-purchase conversion 171%.",
    metric: "29%",
    metricLabel: "Trial → purchase rate",
    tags: ["Try-at-Home", "UGC", "Founder", "IG"],
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
    company: "Independent Studio",
    location: "Remote · serving 60+ countries",
    summary:
      "Independent performance marketing studio serving home services and DTC ecommerce brands between $100k and $5M/mo. Direct ownership of paid spend, measurement, and lifecycle.",
    achievements: [
      "Managed $6.5M+ in tracked ad spend across 22 brands in 18 months",
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
  { label: "Ad spend managed", value: "6.5", suffix: "M+", caption: "Across 22 brands in 18 months" },
  { label: "Niches worked", value: "50", suffix: "+", caption: "From plumbing to luxury watches" },
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
    quote:
      "Rakib scaled us from $440k to $1.4M a month without ROAS collapsing. He's the only marketer I've worked with who actually understands unit economics — not just ROAS, but contribution margin and cash cycle. We finally stopped renting growth and started owning a brand.",
    name: "David Chen",
    role: "Founder & CEO",
    company: "NovaTech Audio",
    industry: "Ecommerce · Gadgets",
    rating: 5,
    vertical: "Ecommerce",
    metric: "3.2x",
    metricLabel: "Revenue in 9 months",
  },
  {
    id: "t2",
    quote:
      "Subscription churn was killing us. Rakib rebuilt the offer, built a quiz funnel, and within two quarters we went from 4,200 subs to 14,800. CAC dropped by half. I've never had a marketer deliver this level of clarity on what's actually moving the business.",
    name: "Dr. Sarah Patel",
    role: "Co-Founder",
    company: "VitalRoot Wellness",
    industry: "Ecommerce · Supplements",
    rating: 5,
    vertical: "Ecommerce",
    metric: "−47%",
    metricLabel: "Blended CAC",
  },
  {
    id: "t3",
    quote:
      "We were paying $180 per booked plumbing job and getting eaten by HomeAdvisor. Rakib came in, rebuilt the funnel, and within 90 days we were at $62 per job — and booked 184 jobs in a single month. He saved my business.",
    name: "Marcus Reyes",
    role: "Owner",
    company: "MetroFlow Plumbing",
    industry: "Home Services · Plumbing",
    rating: 5,
    vertical: "Home Services",
    metric: "184",
    metricLabel: "Booked jobs / month",
  },
  {
    id: "t4",
    quote:
      "I'd been burned by two agencies before Rakib. He's different — he actually picked up the phone, walked through my P&L, and told me flat-out what wasn't working. Cost per signed roof contract dropped 42% in one storm season. He's earned a long-term partner.",
    name: "Hank Calloway",
    role: "Founder",
    company: "Skyline Roofing Group",
    industry: "Home Services · Roofing",
    rating: 5,
    vertical: "Home Services",
    metric: "−42%",
    metricLabel: "Cost per signed contract",
  },
  {
    id: "t5",
    quote:
      "Rakib built us a year-round pipeline that doesn't depend on Arizona summer. Off-season revenue tripled, our Google rating jumped to 4.9 stars, and customers now refer us without us even asking. The system runs itself now.",
    name: "Teresa Alvarez",
    role: "Owner",
    company: "VoltEdge Electric",
    industry: "Home Services · Electrician",
    rating: 5,
    vertical: "Home Services",
    metric: "+210%",
    metricLabel: "Off-season revenue",
  },
  {
    id: "t6",
    quote:
      "Our cleaning subscription had 28% churn and rising CAC. Rakib rebuilt the offer around a 3-month commit, added a 9-touch lifecycle, and cut churn in half. MRR tripled. We finally have a business that scales without breaking.",
    name: "Olivia Bennett",
    role: "Co-Founder",
    company: "PristinePro Cleaning",
    industry: "Home Services · Cleaning",
    rating: 5,
    vertical: "Home Services",
    metric: "62%",
    metricLabel: "12-month retention",
  },
  {
    id: "t7",
    quote:
      "I was a one-man show maxed out at 5 jobs a day. Rakib's funnel filled my calendar 8 weeks out, and I hired two new crews in four months. The ROI was obvious from week one — I just wish I'd found him three years earlier.",
    name: "Joe Marchetti",
    role: "Owner",
    company: "FixIt Joe Pro",
    industry: "Home Services · Handyman",
    rating: 5,
    vertical: "Home Services",
    metric: "47",
    metricLabel: "Jobs / week",
  },
  {
    id: "t8",
    quote:
      "We were getting crushed by online printers. Rakib built us a sample-kit offer, an ABM flow on LinkedIn, and a 5-touch nurture. Quote volume nearly tripled and average order value jumped 44%. Best money we've spent in five years.",
    name: "Karen Whitfield",
    role: "VP Sales",
    company: "InkPress Print Co.",
    industry: "Local Services · Printing",
    rating: 5,
    vertical: "Local Services",
    metric: "+178%",
    metricLabel: "Qualified quotes / month",
  },
  {
    id: "t9",
    quote:
      "Independent auto shop competing with dealers is brutal. Rakib built a transparent online booking flow and retargeted high-margin services. Online bookings are now 62% of intake and average repair order is up 38%. Bays are 94% utilized.",
    name: "Frank Delgado",
    role: "Owner",
    company: "Apex Auto Repair",
    industry: "Local Services · Car Repair",
    rating: 5,
    vertical: "Local Services",
    metric: "62%",
    metricLabel: "Online bookings",
  },
  {
    id: "t10",
    quote:
      "Rakib turned my hobbyist yarn community into a $3.7M-a-year DTC brand. Subscription Yarn-of-the-Month, UGC knitting tutorials, and a pattern library that reactivates past buyers. He genuinely understands community-led commerce.",
    name: "Margaret Holloway",
    role: "Founder",
    company: "Heritage Yarn Co.",
    industry: "Specialty · Yarn & Crafts",
    rating: 5,
    vertical: "Specialty",
    metric: "$312k",
    metricLabel: "Monthly revenue",
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
      "I rebuilt measurement around server-side tagging (GTM Server-Side + Conversions API on Meta and Google), a unified data warehouse (BigQuery or Snowflake), and modeled conversions. Your dashboard finally tells the truth — not what Meta wants you to believe. I also run incrementality tests on any channel spending more than $50k/mo.",
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
  { label: "Years in performance marketing", value: "8+", caption: "From SMB SEO to $6.5M+ tracked spend" },
  { label: "Niches worked", value: "50+", caption: "From plumbing to luxury watches" },
  { label: "Countries served", value: "60+", caption: "US, CA, UK, AU, and 56 more" },
  { label: "Client retention (12mo)", value: "94%", caption: "I'd rather keep you than chase you" },
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
      "Remote-first, based in Dhaka, Bangladesh. I work with clients across the US, Canada, UK, and Australia — typically async with one live call per week. My dashboard and SOPs make async work feel like I'm sitting next to you.",
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
  { name: "GA4 + Server-side GTM", purpose: "Source-of-truth measurement, CAPI", category: "Measurement" },
  { name: "BigQuery", purpose: "Unified warehouse: spend + Shopify + Stripe", category: "Measurement" },
  { name: "Looker / Hex", purpose: "Live dashboards clients actually open", category: "Measurement" },
  { name: "Klaviyo", purpose: "Email + SMS lifecycle engine", category: "Lifecycle" },
  { name: "Recharge", purpose: "Subscription management + retention", category: "Lifecycle" },
  { name: "GoHighLevel", purpose: "Local services CRM + automation", category: "Lifecycle" },
  { name: "Figma", purpose: "Creative briefs + landing page design", category: "Creative" },
  { name: "CapCut + Premiere", purpose: "UGC editing, ad creative", category: "Creative" },
  { name: "Notion", purpose: "SOPs, creative backlogs, client documentation", category: "Ops" },
  { name: "Linear", purpose: "Experiment backlog, ICE-ranked growth tests", category: "Ops" },
];

export const aboutBio = {
  shortBio:
    "I'm Shariful Hasan Roky — a revenue growth strategist who's worked across 50+ niches and 60+ countries, managing $6.5M+ in tracked ad spend. I build full-funnel paid + lifecycle systems for ecommerce and home service brands. Growth that compounds in your bank account, not just in your ad dashboard.",
  longBio: [
    "I'm Shariful Hasan Roky — a revenue growth strategist. I started in 2017 doing SEO for SMBs in Dhaka, back when 'performance marketing' meant ranking a WordPress site for 'best plumber in [city]'. Eight years and four roles later, I've worked across 50+ niches and 60+ countries, managing over $6.5M in tracked ad spend. From Australian Shopify brands scaling 13x ROI to Calgary cleaning companies booking 100 leads a month.",
    "These days I focus on two worlds I know best: ecommerce (Shopify DTC, subscriptions, gadgets, cosmetics, and 15+ other verticals) and home services (plumbing, roofing, electrician, cleaning, handyman, and more). The system is the same across both — six chapters that compound: campaign, business, scaling, numbers, measurements, growth. Skip one and scale breaks at month 9. Run all six and growth stops being heroic and becomes boring, predictable, repeatable.",
    "I work remote from Dhaka, serving clients across the US, Canada, UK, Australia, and 56 other countries. Async-first, one live call per week, and a dashboard your CFO will actually open. No agency handoffs, no junior account managers — when you hire me, you get me. I write the strategy, build the funnels, audit the ad accounts, and answer your Slack.",
    "Outside of marketing: I read earnings calls like novels, run a small private Slack community of 60+ founders trading growth experiments, and I'm probably the only person in Dhaka who genuinely enjoys spreadsheets. If you're a founder who's been burned by agencies before — let's talk. The strategy call is free, and I'll tell you honestly whether I can help.",
  ],
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka (GMT+6)",
  languages: ["English (fluent)", "Bengali (native)", "Hindi (conversational)"],
  availability: "2 new client spots per quarter",
  email: "rakib@hasan.studio",
};

export type TimelineChapter = {
  year: string;
  title: string;
  description: string;
};

export const personalTimeline: TimelineChapter[] = [
  {
    year: "2013",
    title: "Started marketing at 19",
    description:
      "Enrolled in B.B.A. Marketing at University of Dhaka. Started freelancing on oDesk (now Upwork) doing SEO for small US businesses — $5/hr, learned more in 6 months than 4 years of class.",
  },
  {
    year: "2017",
    title: "First agency job",
    description:
      "Graduated, joined Brightway Consulting in Dhaka. Cut my teeth on local service SEO, then Facebook Ads when iOS was still easy. First Shopify funnel I built did $1M in 12 months for a cosmetics client.",
  },
  {
    year: "2019",
    title: "Moved to the US market",
    description:
      "Joined Lumen Growth Agency in Austin, TX as Senior Paid Media Manager. Owned $2.8M/yr in paid spend across 14 home-service clients. Built the agency's first server-side tracking implementation post-iOS 14.",
  },
  {
    year: "2021",
    title: "Head of Performance Marketing",
    description:
      "Promoted to lead a 6-person team at Northbridge DTC Holdings in Toronto. Scaled a 4-brand portfolio from $7M to $18M ARR in 22 months. Cut blended CAC by 34% portfolio-wide.",
  },
  {
    year: "2023",
    title: "Founded my own studio",
    description:
      "Went independent. Took the system I'd built at Northbridge and started offering it directly to home services + DTC brands. 22 clients, $6.5M+ spend, 94% retention in the first 18 months.",
  },
  {
    year: "2026",
    title: "What's next",
    description:
      "Building a measurement product (SaaS) for home services owners who can't afford a $5k/mo agency. Still taking 2 new clients per quarter — but getting pickier about who.",
  },
];

export type NavLink = {
  label: string;
  /** Either scroll to a section on the home page, or switch to a dedicated view. */
  kind: "scroll" | "view";
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
  { label: "Book a Call", kind: "view", target: "book" },
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
