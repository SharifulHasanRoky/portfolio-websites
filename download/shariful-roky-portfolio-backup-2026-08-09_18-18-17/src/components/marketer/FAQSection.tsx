"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/marketer-data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 section-anchor">
      <div className="mx-auto max-w-5xl relative">
        <SectionHeading
          eyebrow="FAQ · straight answers, no agency-speak"
          title="The questions every founder asks before signing."
          description="Six honest answers. If you have one that's not here, the strategy call is free — bring it."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "rounded-2xl border bg-card/40 backdrop-blur overflow-hidden transition-colors",
                  isOpen ? "border-brand/40" : "border-border hover:border-border/80"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-5"
                >
                  <div
                    className={cn(
                      "grid place-items-center h-9 w-9 shrink-0 rounded-xl transition-colors",
                      isOpen
                        ? "bg-brand text-brand-foreground"
                        : "bg-background/60 text-muted-foreground"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "font-display text-base sm:text-lg font-semibold pr-4 transition-colors",
                      isOpen ? "text-foreground" : "text-foreground/90"
                    )}
                  >
                    {f.question}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pl-[3.75rem] sm:pl-[4.25rem]">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {f.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
