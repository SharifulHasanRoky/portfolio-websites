---
Task ID: 1
Agent: main
Task: Fix Portfolio, Case Studies, CV, and Book a Call sections — remove reverted old data, keep only user-given content

Work Log:
- Read full marketer-data.ts to inventory caseStudies (12), portfolio (12), cvEntries (4), navLinks, dailyTools, aiTools (30), headlineMetrics, aboutStats
- Found "I Fix Fast" and "Jamuna Gas" still mentioned in 3 places in Verce CV entry + personalTimeline (lines 596, 599, 1074) — removed them
- Found PortfolioPage.tsx description referenced "premium audio brand from $440k to $1.4M/mo" (old NovaTech Audio reference) — replaced with real Calgary Cleaning + Origani examples
- Found PortfolioPage stats: "Industries 14+" → changed to "Core niches 2"
- Found Portfolio.tsx in-section heading mentioned "DTC" — updated to "ecommerce & home services"
- Found CaseStudies.tsx & CaseStudiesPage.tsx heading "14 industries. One repeatable system." → changed to "2 niches. 12 case studies. One repeatable system."
- Found CaseStudiesPage.tsx stat "Spend managed $8.4M+" → replaced with "Core niches 2" and "Countries 60+"
- Found headlineMetrics in marketer-data.ts still had "Ad spend managed 6.5M+" and "Niches worked 50+" (old reverted data) — replaced with "Companies worked with 150+" and "Core niches 2"
- Found NumbersShowcase.tsx stats array had "Ad spend managed 6.5M+" with caption "18 months · 22 brands" — replaced with "Companies worked with 150+" with caption "Ecommerce + home services worldwide"; also removed the "over the last 18 months" copy
- Removed unused DollarSign import from NumbersShowcase
- Fixed Footer email: shariful@roky.studio → sharifulhasanrocky@gmail.com
- Fixed Footer LinkedIn URL: "#" → "https://linkedin.com/in/sharifulhasanroky"
- Removed Footer Twitter/X and YouTube links (user didn't provide these) and their unused imports
- Fixed layout.tsx SITE_URL: sharifulroky.studio → sharifulroky.com
- Fixed layout.tsx SITE_NAME: "Performance Marketing Studio" → "Revenue Growth Studio"
- Fixed layout.tsx JSON-LD email references (2 places): shariful@roky.studio → sharifulhasanrocky@gmail.com
- Completely rewrote public/llms.txt to reflect current state: 4+ years, 150+ companies, 2 niches, 60+ countries, 12 case studies, 30 AI tools, correct Calendly link, correct email/phone/LinkedIn
- Updated public/sitemap.xml: name, caption, lastmod, domain
- Updated public/robots.txt: owner line, sitemap URL
- Updated public/site.webmanifest: name, short_name, description
- Verified Book a Call buttons: Navbar (desktop+mobile), Hero, AboutPage, CVSection, Footer all use Calendly URL `https://calendly.com/sharifulhasanroky/free15miniuteconsultancy` — no `setView("book")` anywhere
- Verified CV entries: only 4 user-given entries remain (Arvion, Verce, ByteCodeSoft, Alberto Pro & iSmart BD) — no Brightway/Lumen/Northbridge
- Verified portfolio: only 12 user-given companies, no MetroFlow/NovaTech/Skyline/I Fix Fast/China Travel/Jamuna Gas
- Verified caseStudies: only 12 user-given case studies, no old companies
- Final grep across src/ and public/ confirms NO remaining old data (I Fix Fast, Jamuna Gas, MetroFlow, NovaTech, Skyline, China Travel, Atelier Nord, PristinePro, Rakib, 22 brands, premium audio, 14 industries, 8+ years, 50+ niches, shariful@roky.studio, rakib@hasan.studio, sharifulroky.studio)
- Build successful with `npm run build` — no errors, no TypeScript issues

Stage Summary:
- Portfolio: cleaned description (no premium audio brand reference), updated stats (Core niches 2 instead of Industries 14+)
- Case Studies: cleaned heading (2 niches, 12 case studies instead of 14 industries), removed $8.4M+ stat
- CV: removed "I Fix Fast" and "Jamuna Gas" from Verce entry summary, achievements, and personalTimeline (3 places)
- Book a Call: confirmed all buttons use Calendly link — no setView("book") anywhere
- Bonus cleanup: fixed headlineMetrics, NumbersShowcase stats, Footer email/LinkedIn, layout.tsx SITE_URL/email, llms.txt, sitemap.xml, robots.txt, site.webmanifest — all old/reverted references purged
- Build passes successfully
