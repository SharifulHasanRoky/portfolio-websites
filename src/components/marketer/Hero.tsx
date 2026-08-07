"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useViewStore } from "@/lib/view-store";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax — gentle, only the inner content moves
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Subtle mouse tilt for the portrait chip
  const mx = useSpring(0, { stiffness: 50, damping: 20 });
  const my = useSpring(0, { stiffness: 50, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    mx.set((e.clientX / w - 0.5) * 2);
    my.set((e.clientY / h - 0.5) * 2);
  }

  const rotateX = useTransform(my, [-1, 1], [5, -5]);
  const rotateY = useTransform(mx, [-1, 1], [-5, 5]);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 section-anchor"
    >
      {/* Soft background glow blobs — kept far behind everything */}
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute left-[18%] top-[20%] h-[26rem] w-[26rem] rounded-full blur-[140px] opacity-35"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--brand) 70%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute right-[18%] bottom-[18%] h-[24rem] w-[24rem] rounded-full blur-[140px] opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--fire) 70%, transparent), transparent 70%)",
          }}
        />
      </motion.div>

      {/* ===== Centered headline block (same style as before) ===== */}
      <motion.div
        style={{ y: yMid, opacity }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Performance marketer for home services &amp; DTC ecommerce
        </motion.div>

        {/* ===== Headline row — H1 with small circular portrait to the right ===== */}
        <div className="relative mt-7 flex items-center justify-center gap-4 sm:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-semibold leading-[0.98] tracking-tight"
          >
            Campaigns that convert.
            <br />
            <span className="text-gradient-brand">Scales that stick.</span>
          </motion.h1>

          {/* Small circular portrait chip — sits beside the headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.25, type: "spring", stiffness: 140, damping: 14 }}
            className="relative shrink-0"
            style={{ perspective: 600 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full ring-2 ring-brand/50 shadow-[0_0_30px_-6px_var(--brand),0_0_60px_-20px_var(--fire)] pointer-events-none z-20" />
              {/* The photo */}
              <Image
                src="/marketer-portrait.webp"
                alt="Rakib Hasan — performance marketer"
                fill
                priority
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                className="object-cover object-center"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-background/30 via-transparent to-fire/10 pointer-events-none z-10" />
            </motion.div>

            {/* Tiny floating status dot — bottom-right of the circle */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 14 }}
              style={{ transform: "translateZ(40px)" }}
              className="absolute -bottom-1 -right-1 z-30 grid place-items-center h-5 w-5 rounded-full bg-background ring-2 ring-brand/40"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
            </motion.span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I&apos;m{" "}
          <span className="text-foreground font-medium">Rakib Hasan</span> — I
          build full-funnel paid + lifecycle systems for plumbers, roofers,
          ecommerce brands, and 11 other industries. Growth that compounds in
          your bank account, not just in your ad dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={() => useViewStore.getState().setView("book")}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand to-fire opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Book a free strategy call</span>
            <ArrowDown className="relative h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => useViewStore.getState().setView("cases")}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-card transition-colors"
          >
            See case studies
          </button>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span>scroll to walk the story</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
