"use client";

import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { PageHero } from "./PageHero";
import { BookMeeting } from "./BookMeeting";

/**
 * Dedicated Book a Meeting page view — replaces the home content when the
 * user clicks "Book a Call" in the navbar or any "book" CTA.
 */
export function BookPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pb-12"
    >
      <PageHero
        eyebrow="Book a meeting · 2 spots left this quarter"
        title="Free 30-min strategy call. No pitch deck, no fluff."
        description="You bring a real number (current CAC, current revenue, current ROAS). I'll bring a real plan — what I'd change in your funnel in the first 30 days. If we're a fit, we talk next steps. If not, you walk away with a plan you can hand to anyone."
        icon={CalendarClock}
        accent="brand"
        stats={[
          { label: "Call length", value: "30 min" },
          { label: "Response time", value: "< 4 hrs" },
          { label: "Spots left Q3", value: "2" },
        ]}
      />
      <BookMeeting hideHeading />
    </motion.div>
  );
}
