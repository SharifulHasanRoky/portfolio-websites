"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  durationMs?: number;
};

/** Animated count-up — triggers on scroll into view. */
export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  durationMs = 1800,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const from = 0;
    const to = value;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setDisplay(current);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span ref={ref} className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
