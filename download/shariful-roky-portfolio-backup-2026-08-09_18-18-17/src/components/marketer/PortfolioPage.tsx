"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PageHero } from "./PageHero";
import { Portfolio } from "./Portfolio";
import { portfolio } from "@/lib/marketer-data";

/**
 * Dedicated Portfolio page view — replaces the home content when the
 * user clicks "Portfolio" in the navbar.
 */
export function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pb-12"
    >
      <PageHero
        eyebrow="Portfolio · selected work"
        title="Brands I've scaled — ecommerce & home services."
        description="Each card is a real engagement with real numbers. From 100 cleaning leads/mo at $24 CPL in Calgary, to scaling an Australian Shopify store from 2x to 13x ROI in 6 months. Filter by vertical inside the case studies page for the full story."
        icon={Briefcase}
        accent="brand"
        stats={[
          { label: "Brands shipped", value: String(portfolio.length) },
          { label: "Core niches", value: "2" },
          { label: "Countries served", value: "60+" },
        ]}
      />
      {/* Render the existing Portfolio grid (without its own SectionHeading) */}
      <Portfolio hideHeading />
    </motion.div>
  );
}
