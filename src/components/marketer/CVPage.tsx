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
  const totalYears = "4+";
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
        title="Revenue growth strategist — 4+ years, 150+ companies, 2 niches."
        description="4+ years. 150+ companies. Ecommerce & home services. Real work, real numbers."
        icon={GraduationCap}
        accent="brand"
        stats={[
          { label: "Years experience", value: totalYears },
          { label: "Companies", value: "150+" },
          { label: "Niches", value: "2" },
          { label: "Countries", value: "60+" },
        ]}
      />
      <CVSection hideHeading />
    </motion.div>
  );
}
