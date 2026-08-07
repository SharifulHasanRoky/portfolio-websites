"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background3D } from "@/components/marketer/Background3D";
import { Navbar } from "@/components/marketer/Navbar";
import { Hero } from "@/components/marketer/Hero";
import { IndustriesMarquee } from "@/components/marketer/IndustriesMarquee";
import { FeaturedCaseStudies } from "@/components/marketer/FeaturedCaseStudies";
import { StoryScroll } from "@/components/marketer/StoryScroll";
import { Pillars } from "@/components/marketer/Pillars";
import { NumbersShowcase } from "@/components/marketer/NumbersShowcase";
import { TestimonialsSlider } from "@/components/marketer/TestimonialsSlider";
import { FAQSection } from "@/components/marketer/FAQSection";
import { PortfolioPage } from "@/components/marketer/PortfolioPage";
import { CaseStudiesPage } from "@/components/marketer/CaseStudiesPage";
import { CVPage } from "@/components/marketer/CVPage";
import { BookPage } from "@/components/marketer/BookPage";
import { Footer } from "@/components/marketer/Footer";
import { useViewStore } from "@/lib/view-store";

export default function Home() {
  const view = useViewStore((s) => s.view);
  const pendingScroll = useViewStore((s) => s.pendingScroll);
  const clearPendingScroll = useViewStore((s) => s.clearPendingScroll);

  // When user clicks a scroll-link (Story / Pillars / Numbers / Book) from a
  // non-home view, we set pendingScroll, switch to home, and then scroll once
  // the home view has actually mounted.
  useEffect(() => {
    if (view !== "home" || !pendingScroll) return;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 40; // ~40 frames ≈ 660ms

    function tryScroll() {
      if (cancelled) return;
      attempts += 1;
      const el = document.querySelector(pendingScroll) as HTMLElement | null;
      if (el && el.offsetParent !== null) {
        // Element is mounted AND visible (offsetParent non-null means it's rendered).
        // Force a hard reset first so the smooth scroll starts from the top.
        window.scrollTo({ top: 0, behavior: "auto" });
        // Then smooth-scroll to the target on the next frame.
        requestAnimationFrame(() => {
          if (cancelled) return;
          const top =
            el.getBoundingClientRect().top + window.scrollY - 80; // 80px navbar offset
          window.scrollTo({ top, behavior: "smooth" });
          setTimeout(() => clearPendingScroll(), 100);
        });
        return;
      }
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryScroll);
      } else {
        clearPendingScroll();
      }
    }

    const t = setTimeout(() => requestAnimationFrame(tryScroll), 100);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [view, pendingScroll, clearPendingScroll]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Background3D />
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Hero />
              <IndustriesMarquee />
              <FeaturedCaseStudies />
              <StoryScroll />
              <Pillars />
              <NumbersShowcase />
              <TestimonialsSlider />
              <FAQSection />
            </motion.div>
          )}

          {view === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <PortfolioPage />
            </motion.div>
          )}

          {view === "cases" && (
            <motion.div
              key="cases"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <CaseStudiesPage />
            </motion.div>
          )}

          {view === "cv" && (
            <motion.div
              key="cv"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <CVPage />
            </motion.div>
          )}

          {view === "book" && (
            <motion.div
              key="book"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <BookPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
