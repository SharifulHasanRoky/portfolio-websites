import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://sharifulroky.studio";
const SITE_NAME = "Shariful Hasan Roky — Performance Marketing Studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shariful Hasan Roky — Revenue Growth Strategist | Turning Ad Spend Into Unfair Advantage",
    template: "%s · Shariful Hasan Roky",
  },
  description:
    "Performance marketer for ecommerce & home service brands. Worked across 50+ niches and 60+ countries. $6.5M+ tracked ad spend managed. Book a free 30-min strategy call.",
  keywords: [
    "performance marketing",
    "performance marketer",
    "paid ads",
    "Meta ads",
    "Google ads",
    "Google PMax",
    "Local Service Ads",
    "TikTok ads",
    "ecommerce marketing",
    "Shopify marketing",
    "home services marketing",
    "plumbing marketing",
    "roofing leads",
    "electrician marketing",
    "cleaning marketing",
    "handyman marketing",
    "scaling campaigns",
    "ROAS",
    "MER",
    "blended CAC",
    "conversion rate optimization",
    "lifecycle marketing",
    "Klaviyo",
    "Recharge",
    "subscription retention",
    "server-side tracking",
    "GA4",
    "Conversions API",
    "BigQuery",
    "Shariful Hasan Roky",
    "Shariful Roky",
    "Independent Performance Marketing Studio",
    "Dhaka marketer",
    "Bangladesh marketer",
  ],
  authors: [{ name: "Shariful Hasan Roky", url: SITE_URL }],
  creator: "Shariful Hasan Roky",
  publisher: "Shariful Hasan Roky",
  applicationName: SITE_NAME,
  category: "Marketing",
  classification: "Performance Marketing Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Shariful Hasan Roky — Revenue Growth Strategist | Turning Ad Spend Into Unfair Advantage",
    description:
      "Performance marketer for ecommerce & home service brands. 50+ niches, 60+ countries, $6.5M+ tracked spend. Book a free 30-min strategy call.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "profile",
    firstName: "Shariful Hasan",
    lastName: "Roky",
    username: "sharifulroky",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shariful Hasan Roky — Revenue Growth Strategist",
    description:
      "Turning ad spend into unfair advantage. 50+ niches, 60+ countries, $6.5M+ tracked spend managed.",
    creator: "@sharifulroky",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

// JSON-LD structured data — helps Google, Bing, and AI crawlers understand
// exactly who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shariful Hasan Roky",
  url: SITE_URL,
  image: `${SITE_URL}/marketer-portrait.webp`,
  jobTitle: "Revenue Growth Strategist",
  description:
    "Performance marketer for home services and DTC ecommerce brands. Managed $6.5M+ in tracked ad spend across 22 brands in 18 months.",
  worksFor: {
    "@type": "Organization",
    name: "Shariful Hasan Roky Performance Studio",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  email: "mailto:shariful@roky.studio",
  knowsAbout: [
    "Performance Marketing",
    "Paid Social (Meta, TikTok, YouTube)",
    "Paid Search (Google Ads, PMax, LSA)",
    "Server-side Tracking (GA4, GTM, CAPI)",
    "Lifecycle Marketing (Klaviyo, Recharge)",
    "Subscription Retention",
    "Conversion Rate Optimization",
    "Marketing Mix Modeling",
    "Ecommerce (Shopify)",
    "Home Services Marketing",
  ],
  nationality: {
    "@type": "Country",
    name: "Bangladesh",
  },
  sameAs: [
    "https://www.linkedin.com/in/sharifulroky",
    "https://twitter.com/sharifulroky",
    "https://www.youtube.com/@sharifulroky",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  author: { "@type": "Person", name: "Shariful Hasan Roky" },
  description:
    "Performance marketing portfolio and case studies of Shariful Hasan Roky — serving ecommerce and home service brands across 60+ countries.",
  inLanguage: "en",
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shariful Hasan Roky Performance Studio",
  description:
    "Independent performance marketing studio for home services and DTC ecommerce brands.",
  url: SITE_URL,
  image: `${SITE_URL}/marketer-portrait.webp`,
  email: "shariful@roky.studio",
  priceRange: "$$$",
  areaServed: ["US", "CA", "UK", "AU"],
  serviceType: [
    "Performance Marketing",
    "Paid Media Management",
    "Lifecycle Marketing",
    "Marketing Measurement",
    "Conversion Rate Optimization",
  ],
  founder: { "@type": "Person", name: "Shariful Hasan Roky" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* JSON-LD structured data for search engines and AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
