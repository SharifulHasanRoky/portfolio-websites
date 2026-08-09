# Shariful Hasan Roky — Portfolio Website Backup

**Backup date:** 2026-08-09 18:18 (Asia/Dhaka)
**Project:** 3D storytelling portfolio website for Shariful Hasan Roky — Revenue Growth Strategist
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion

---

## What's inside this backup

```
backup/
├── src/                    # All source code
│   ├── app/                # Next.js App Router (layout.tsx, page.tsx, api/)
│   ├── components/marketer/  # All React components (Hero, Navbar, Portfolio, CaseStudies, CV, etc.)
│   ├── lib/                # Data files (marketer-data.ts — central content), view-store.ts, utils
│   └── hooks/              # React hooks (use-toast.ts)
├── public/                 # Static assets
│   ├── marketer-portrait.webp
│   ├── Resume-of-Shariful-Hasan-Roky.pdf
│   ├── llms.txt             # AI-friendly summary
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── *.svg, *.png         # Logos, icons
├── scripts/                 # Generation scripts (expand-companies.cjs)
├── prisma/                  # Prisma schema (if needed)
├── .zscripts/               # Build/dev helper scripts
├── package.json             # Dependencies + scripts
├── next.config.ts           # Next.js config
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
├── postcss.config.mjs       # PostCSS config
├── eslint.config.mjs        # ESLint config
├── components.json          # shadcn/ui config
├── .gitignore
├── .env                     # Environment variables
├── Caddyfile                # Reverse proxy config (production)
└── worklog.md               # Development work log (all changes recorded)
```

## Current state (31 + 31 entries)

- **Portfolio:** 31 items — ecommerce (Origani, Skycoms, Golfinex, Gearovo, Hypr Fuel, Scuba Xpress, Pixi AI, Car Formula, FX Edu, Reli Group, Winhub, MarwaridHR, TNS Global, Safe Food, Clockwork Synergy, Htown Printing, DTC Electronics, Downioa, VSL Lead Gen, Meta Ads CYNTHIA) + home services (Calgary Cleaning, Tint Shop, Home Service Group, Service Pro Network, Lead Gen 13 Campaigns, Call-Heavy Lead Gen, Meta Ads Lifetime Budgets, Home Repairs 24, Handyman Services, Right Now Painting, Best Handyman SG)
- **Case Studies:** 31 items — same brands, with challenge/approach/results/timeline/spend
- **CV entries:** 4 — Arvion, Verce, ByteCodeSoft, Alberto Pro & iSmart BD
- **Testimonials:** 10
- **AI tools:** 30 (across 5 categories)
- **Daily tools:** 6
- **Calendly URL on all "Book a Call" buttons:** https://calendly.com/sharifulhasanroky/free15miniuteconsultancy

## How to restore

1. Create a new Next.js 16 project (or clone an empty one):
   ```bash
   npx create-next-app@latest my-portfolio --typescript --tailwind --app
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install zustand framer-motion lucide-react clsx tailwind-merge class-variance-authority
   npm install -D @types/node
   ```

3. Copy the contents of this backup folder INTO the project root, overwriting defaults:
   ```bash
   cp -r backup/src ./
   cp -r backup/public ./
   cp -r backup/scripts ./
   cp backup/package.json ./
   cp backup/next.config.ts ./
   cp backup/tsconfig.json ./
   cp backup/tailwind.config.ts ./
   cp backup/postcss.config.mjs ./
   cp backup/components.json ./
   cp backup/.env ./
   ```

4. Install shadcn/ui components used by the project (or copy from any existing project):
   - button, toast (sonner), card, etc.

5. Run dev server:
   ```bash
   npm run dev
   ```

6. Visit http://localhost:3000

## Production deployment

The project is configured for standalone output (`output: "standalone"` in next.config.ts). To build and run in production:

```bash
npm run build
node .next/standalone/server.js
```

For Caddy reverse proxy, use the included `Caddyfile` as a template.

## Important notes

- The project uses a Zustand-based client-side view router (no separate page routes — everything is in `/`)
- All "Book a Call" buttons open the Calendly URL in a new tab
- The portrait image (`marketer-portrait.webp`) is 31KB optimized
- The downloadable CV PDF (`Resume-of-Shariful-Hasan-Roky.pdf`) is in /public
- All structured data (JSON-LD) is in `src/app/layout.tsx`
- Domain configured: sharifulroky.com (in layout.tsx, sitemap.xml, robots.txt, llms.txt)

## Contact info embedded in the site

- Name: Shariful Hasan Roky
- Email: sharifulhasanrocky@gmail.com
- Phone: +8801538363143
- LinkedIn: linkedin.com/in/sharifulhasanroky
- Location: Feni, Bangladesh
- Calendly: https://calendly.com/sharifulhasanroky/free15miniuteconsultancy

## Stats

- Years of experience: 4+
- Companies worked with: 150+
- Core niches: 2 (Ecommerce & Home Services)
- Countries served: 60+
