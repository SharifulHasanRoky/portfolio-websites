/**
 * Generates expanded portfolio + caseStudies entries and patches marketer-data.ts
 * by inserting new entries BEFORE the closing `];` of each array.
 *
 * Run: node /home/z/my-project/scripts/expand-companies.cjs
 */
const fs = require("fs");
const path = require("path");

const DATA_FILE = "/home/z/my-project/src/lib/marketer-data.ts";
let src = fs.readFileSync(DATA_FILE, "utf8");

// === New case studies to insert BEFORE the closing `];` of caseStudies array ===
const newCaseStudies = [
  // ---- Ecommerce (Shopify DTC, gadgets, cosmetics, clothing, supplements, etc.) ----
  {
    id: "cs-skycoms",
    industry: "Ecommerce · Telecom / eSIM",
    icon: "Smartphone",
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
      { metric: "New countries scaled", value: "14", delta: "+9 new" },
    ],
    timeline: "5 months",
    spend: "$28k/mo",
    highlight: "3,800+ eSIM activations/month at 4.2x ROAS across 14 countries.",
  },
  {
    id: "cs-golfinex",
    industry: "Ecommerce · Sports / Golf",
    icon: "Mountain",
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
      { metric: "AOV", value: "$248", delta: "+38%" },
    ],
    timeline: "4 months",
    spend: "$22k/mo",
    highlight: "Scaled golf accessories DTC from 1.8x to 4.6x ROAS with a 38% AOV lift.",
  },
  {
    id: "cs-gearovo",
    industry: "Ecommerce · Gadgets",
    icon: "Smartphone",
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
      { metric: "Spend", value: "$42k/mo", delta: "+180%" },
    ],
    timeline: "7 months",
    spend: "$42k/mo",
    highlight: "Scaled gadget store from 800 to 3,400 orders/month at 4.8x ROAS.",
  },
  {
    id: "cs-hypr-fuel",
    industry: "Ecommerce · Supplements / Energy",
    icon: "Zap",
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
      { metric: "90-day churn", value: "−38%", delta: "−38%" },
    ],
    timeline: "8 months",
    spend: "$38k/mo",
    highlight: "5,200+ active subscriptions with 38% lower churn and 4.6x ROAS.",
  },
  {
    id: "cs-scuba-xpress",
    industry: "Ecommerce · Sports / Scuba",
    icon: "Mountain",
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
      { metric: "New customers", value: "+178%", delta: "+178%" },
    ],
    timeline: "6 months",
    spend: "$26k/mo",
    highlight: "Scaled scuba gear DTC to 5.2x ROAS with $340k/mo revenue.",
  },
  {
    id: "cs-pixi-ai",
    industry: "Ecommerce · Tech / AI Tools",
    icon: "Smartphone",
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
      { metric: "CAC", value: "$22", delta: "−44%" },
    ],
    timeline: "5 months",
    spend: "$18k/mo",
    highlight: "Trial-to-paid conversion doubled from 7.6% to 14.8% with email nurture + onboarding events.",
  },
  {
    id: "cs-car-formula",
    industry: "Ecommerce · Automotive",
    icon: "Car",
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
      { metric: "Monthly revenue", value: "$180k", delta: "+228%" },
    ],
    timeline: "6 months",
    spend: "$20k/mo",
    highlight: "DTC conversion rate jumped from 1.2% to 3.1% with repeat purchase at 42%.",
  },
  {
    id: "cs-fx-edu",
    industry: "Ecommerce · Info Product / Edu",
    icon: "Megaphone",
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
      { metric: "Cost per sale", value: "$284", delta: "−42%" },
    ],
    timeline: "4 months",
    spend: "$24k/mo",
    highlight: "Webinar show-up rate jumped from 18% to 32%, course sales more than tripled.",
  },
  {
    id: "cs-reli-group",
    industry: "Ecommerce · Multi-Brand",
    icon: "Building2",
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
      { metric: "Reporting time saved", value: "20 hrs/wk", delta: "+20 hrs/wk" },
    ],
    timeline: "5 months",
    spend: "$45k/mo",
    highlight: "Unified 4-brand portfolio with 3.8x blended ROAS and 20+ hrs/wk reporting saved.",
  },
  {
    id: "cs-winhub",
    industry: "Ecommerce · Marketplace",
    icon: "Building2",
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
      { metric: "GMV", value: "+148%", delta: "+148%" },
    ],
    timeline: "6 months",
    spend: "$14k/mo",
    highlight: "Seller acquisition scaled 4x with $18 cost-per-seller sign-up.",
  },
  {
    id: "cs-marwaridhr",
    industry: "Ecommerce · B2B / HR Tech",
    icon: "Building2",
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
      { metric: "CAC", value: "$94", delta: "−52%" },
    ],
    timeline: "5 months",
    spend: "$16k/mo",
    highlight: "B2B SaaS paid conversion rate tripled from 2.4% to 8.2% with qualified-funnel rebuild.",
  },
  {
    id: "cs-tns-global",
    industry: "Ecommerce · Wholesale / Trade",
    icon: "Building2",
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
      { metric: "Monthly revenue", value: "$280k", delta: "+168%" },
    ],
    timeline: "4 months",
    spend: "$12k/mo",
    highlight: "Wholesale AOV jumped from $340 to $612 with tiered bundle offers.",
  },
  {
    id: "cs-safe-food",
    industry: "Ecommerce · Food / Safety",
    icon: "Coffee",
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
      { metric: "CAC", value: "−38%", delta: "−38%" },
    ],
    timeline: "5 months",
    spend: "$9k/mo",
    highlight: "Email became 32% of revenue with a 14-day nurture + retargeting flow.",
  },
  {
    id: "cs-clockwork-synergy",
    industry: "Ecommerce · Watches / Niche",
    icon: "Watch",
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
      { metric: "Email revenue", value: "28%", delta: "+28pts" },
    ],
    timeline: "6 months",
    spend: "$11k/mo",
    highlight: "Repeat purchase rate jumped from 18% to 44% with a 78% LTV lift.",
  },
  {
    id: "cs-htown-printing",
    industry: "Ecommerce · Printing / Custom",
    icon: "Printer",
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
      { metric: "Avg order value", value: "$284", delta: "+34%" },
    ],
    timeline: "5 months",
    spend: "$8k/mo",
    highlight: "Custom printing funnel conversion doubled, quote requests up 245%.",
  },

  // ---- Home Services extras ----
  {
    id: "cs-home-repairs-24",
    industry: "Home Services · Home Repair",
    icon: "Wrench",
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
      { metric: "Close rate", value: "42%", delta: "+18pts" },
    ],
    timeline: "90 days",
    spend: "$7k/mo",
    highlight: "Home repair lead flow scaled from inconsistent to 320+/mo at $18/lead.",
  },
  {
    id: "cs-handyman-services",
    industry: "Home Services · Handyman",
    icon: "Wrench",
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
      { metric: "Repeat customers", value: "+42%", delta: "+42%" },
    ],
    timeline: "4 months",
    spend: "$6k/mo",
    highlight: "280+ online bookings/mo from a previously walk-in-only handyman service.",
  },
  {
    id: "cs-right-now-painting",
    industry: "Home Services · Painting",
    icon: "Brush",
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
      { metric: "Off-season revenue", value: "+178%", delta: "+178%" },
    ],
    timeline: "6 months",
    spend: "$9k/mo",
    highlight: "200+ quote requests/mo for painting, off-season revenue up 178%.",
  },
  {
    id: "cs-best-handyman-sg",
    industry: "Home Services · Handyman",
    icon: "Wrench",
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
      { metric: "Cost per lead", value: "$22", delta: "−58%" },
    ],
    timeline: "5 months",
    spend: "$5k/mo",
    highlight: "Singapore handyman service scaled to 280+ leads/mo, hired 2 new crews.",
  },
];

// === New portfolio items to insert BEFORE the closing `];` of portfolio array ===
const newPortfolioItems = [
  // Ecommerce - brands mentioned in CV / testimonials
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
  // Home services extras
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

// === Build the case study insertion text ===
function buildCaseStudyText(cs) {
  return `{
    id: "${cs.id}",
    industry: "${cs.industry}",
    icon: ${cs.icon},
    client: "${cs.client}",
    location: "${cs.location}",
    vertical: "${cs.vertical}",
    challenge:
      "${cs.challenge}",
    approach:
      "${cs.approach}",
    results: [
      ${cs.results.map((r) => `{ metric: "${r.metric}", value: "${r.value}", delta: "${r.delta}" }`).join(",\n      ")}
    ],
    timeline: "${cs.timeline}",
    spend: "${cs.spend}",
    highlight: "${cs.highlight}",
  },`;
}

function buildPortfolioText(p) {
  return `{
    id: "${p.id}",
    title: "${p.title}",
    category: "${p.category}",
    description:
      "${p.description}",
    metric: "${p.metric}",
    metricLabel: "${p.metricLabel}",
    tags: [${p.tags.map((t) => `"${t}"`).join(", ")}],
    accent: "${p.accent}",
  },`;
}

const caseStudyInsertText = newCaseStudies.map(buildCaseStudyText).join("\n");
const portfolioInsertText = newPortfolioItems.map(buildPortfolioText).join("\n");

// === Insert: find the closing `];` of caseStudies array ===
const caseStudiesStart = src.indexOf("export const caseStudies: CaseStudy[] = [");
if (caseStudiesStart === -1) {
  throw new Error("Could not find caseStudies array");
}
const caseStudiesEndIdx = src.indexOf("\n];", caseStudiesStart);
if (caseStudiesEndIdx === -1) {
  throw new Error("Could not find end of caseStudies array");
}
const caseStudiesInsertPos = caseStudiesEndIdx + 1; // position right after the newline before `];`

// === Insert: find the closing `];` of portfolio array ===
const portfolioStart = src.indexOf("export const portfolio: PortfolioItem[] = [");
if (portfolioStart === -1) {
  throw new Error("Could not find portfolio array");
}
const portfolioEndIdx = src.indexOf("\n];", portfolioStart);
if (portfolioEndIdx === -1) {
  throw new Error("Could not find end of portfolio array");
}
const portfolioInsertPos = portfolioEndIdx + 1;

// Apply edits — caseStudies appears BEFORE portfolio in the file,
// so we must insert case studies text first (at the smaller position),
// then portfolio text. Order matters when slicing.
const newSrc =
  src.slice(0, caseStudiesInsertPos) +
  caseStudyInsertText + "\n" +
  src.slice(caseStudiesInsertPos, portfolioInsertPos) +
  portfolioInsertText + "\n" +
  src.slice(portfolioInsertPos);

fs.writeFileSync(DATA_FILE, newSrc);

console.log(`Inserted ${newCaseStudies.length} new case studies (total now ${12 + newCaseStudies.length}).`);
console.log(`Inserted ${newPortfolioItems.length} new portfolio items (total now ${12 + newPortfolioItems.length}).`);
console.log(`File: ${DATA_FILE}`);
