import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rakib Hasan — Performance Marketer | Campaigns That Convert, Scales That Stick",
  description:
    "3D storytelling portfolio of Rakib Hasan, a performance marketer helping home services, ecommerce, and local businesses scale profitably through paid ads, funnels, and conversion-driven measurement.",
  keywords: [
    "performance marketing",
    "paid ads",
    "Meta ads",
    "Google ads",
    "ecommerce marketing",
    "home services marketing",
    "plumbing marketing",
    "roofing leads",
    "scaling campaigns",
    "ROAS",
    "conversion rate optimization",
  ],
  authors: [{ name: "Rakib Hasan" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Rakib Hasan — Performance Marketer",
    description: "Campaigns that convert. Scales that stick. Book a call.",
    siteName: "Rakib Hasan Performance Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Hasan — Performance Marketer",
    description: "Campaigns that convert. Scales that stick.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
