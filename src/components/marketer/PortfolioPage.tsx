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
        title="Brands I've scaled — across home services, DTC, and local."
        description="Each card is a real engagement with real numbers. From 184 plumbing jobs/mo at $62 CAC, to scaling a premium audio brand from $440k to $1.4M/mo without ROAS collapse. Filter by vertical inside the case studies page for the full story."
        icon={Briefcase}
        accent="brand"
        stats={[
          { label: "Brands shipped", value: String(portfolio.length) },
          { label: "Industries", value: "14+" },
          { label: "Avg revenue lift", value: "168%" },
        ]}
      />
      {/* Render the existing Portfolio grid (without its own SectionHeading) */}
      <Portfolio hideHeading />
    </motion.div>
  );
}
