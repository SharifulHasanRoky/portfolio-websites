"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur",
          align === "center" && "mx-auto"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display mt-5 text-[1.5rem] sm:text-2xl md:text-3xl font-semibold leading-[1.1] tracking-tight text-gradient-brand"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
