"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Star } from "lucide-react";
import { useViewStore } from "@/lib/view-store";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers — gentle, only the headline moves
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse-reactive background tilt (very subtle)
  const mx = useSpring(0, { stiffness: 50, damping: 20 });
  const my = useSpring(0, { stiffness: 50, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    mx.set((e.clientX / w - 0.5) * 2);
    my.set((e.clientY / h - 0.5) * 2);
  }

  const rotateX = useTransform(my, [-1, 1], [3, -3]);
  const rotateY = useTransform(mx, [-1, 1], [-3, 3]);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 section-anchor"
    >
      {/* Background 3D layer — just 2 floating tiles + orbiting rings,
          kept far enough from the headline to not crowd the fold */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-10 hidden sm:flex items-center justify-center pointer-events-none"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[80vh] w-[120vh] max-w-[1400px]"
        >
          {/* Only 2 floating tiles — pushed to the edges so they don't fight the headline */}
          <FloatingTile
            className="left-[2%] top-[22%] w-40 h-28"
            depth={50}
            delay={0.1}
          >
            <div className="p-3.5">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-brand">
                <TrendingUp className="h-3 w-3" /> ROAS
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">
                4.8x
              </div>
              <div className="text-[10px] text-muted-foreground">blended, 90d</div>
            </div>
          </FloatingTile>

          <FloatingTile
            className="right-[2%] top-[28%] w-40 h-28"
            depth={-40}
            delay={0.3}
            accent="fire"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-fire">
                <Star className="h-3 w-3" /> CAC drop
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">−57%</div>
              <div className="text-[10px] text-muted-foreground">avg, all clients</div>
            </div>
          </FloatingTile>

          {/* central orbiting rings — barely visible, depth only */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto h-[55%] w-[55%] rounded-full border border-dashed border-brand/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto h-[75%] w-[75%] rounded-full border border-dashed border-fire/12"
          />
        </motion.div>
      </motion.div>

      {/* Headline + CTAs — the only thing actually above the fold */}
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

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-7 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.98] tracking-tight"
        >
          Campaigns that convert.
          <br />
          <span className="text-gradient-brand">Scales that stick.</span>
        </motion.h1>

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
          <a
            href="#book"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand to-fire opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Book a free strategy call</span>
            <ArrowDown className="relative h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <button
            type="button"
            onClick={() => useViewStore.getState().setView("cases")}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-card transition-colors"
          >
            See case studies
          </button>
        </motion.div>
      </motion.div>

      {/* scroll cue — single, subtle */}
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

function FloatingTile({
  children,
  className,
  depth,
  delay,
  accent = "brand",
}: {
  children: React.ReactNode;
  className: string;
  depth: number;
  delay: number;
  accent?: "brand" | "fire";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      style={{ transform: `translateZ(${depth}px)` }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, depth > 0 ? -8 : 8, 0] }}
        transition={{
          duration: 6 + Math.abs(depth) / 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className={`h-full w-full rounded-2xl border ${
          accent === "brand"
            ? "border-brand/30 glow-brand"
            : "border-fire/30 glow-fire"
        } bg-card/70 backdrop-blur-md`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
