"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { PageHero } from "./PageHero";
import { CaseStudies } from "./CaseStudies";
import { caseStudies } from "@/lib/marketer-data";

/**
 * Dedicated Case Studies page view — replaces the home content when the
 * user clicks "Case Studies" in the navbar.
 */
export function CaseStudiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pb-12"
    >
      <PageHero
        eyebrow="Case studies · real numbers, real clients"
        title="2 niches. 30+ case studies. One repeatable system."
        description="Pick a vertical, see the actual challenge, the exact system I built, and the real numbers we hit. No 'up to 5x ROAS' hedging — these are signed contracts and revenue that hit the bank."
        icon={FileText}
        accent="fire"
        stats={[
          { label: "Case studies", value: String(caseStudies.length) },
          { label: "Core niches", value: "2" },
          { label: "Countries", value: "60+" },
        ]}
      />
      <CaseStudies hideHeading />
    </motion.div>
  );
}
