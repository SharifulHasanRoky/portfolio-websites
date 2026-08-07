"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PageHero } from "./PageHero";
import { CVSection } from "./CVSection";
import { cvEntries } from "@/lib/marketer-data";

/**
 * Dedicated CV / Experience page view — replaces the home content when the
 * user clicks "CV" in the navbar.
 */
export function CVPage() {
  const totalYears = "8+";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pb-12"
    >
      <PageHero
        eyebrow="CV · experience & skills"
        title="From SMB SEO to running $6.5M in tracked spend — the path."
        description="A condensed CV of the last 8 years: 4 roles, 22 brands, $6.5M+ in tracked spend. Includes certifications, the full tech stack, and skill self-assessments across paid, measurement, and lifecycle."
        icon={GraduationCap}
        accent="brand"
        stats={[
          { label: "Years in performance", value: totalYears },
          { label: "Roles held", value: String(cvEntries.length) },
          { label: "Spend managed", value: "$6.5M+" },
          { label: "Client retention", value: "94%" },
        ]}
      />
      <CVSection hideHeading />
    </motion.div>
  );
}
