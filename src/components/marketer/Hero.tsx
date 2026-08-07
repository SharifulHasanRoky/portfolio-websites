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
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse-reactive portrait tilt
  const mx = useSpring(0, { stiffness: 50, damping: 20 });
  const my = useSpring(0, { stiffness: 50, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  const rotateX = useTransform(my, [-1, 1], [8, -8]);
  const rotateY = useTransform(mx, [-1, 1], [-8, 8]);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] w-full flex items-center pt-28 pb-16 px-4 sm:px-6 section-anchor"
    >
      {/* Soft background glow blobs — kept far behind everything */}
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute left-[15%] top-[25%] h-[28rem] w-[28rem] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--brand) 70%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute right-[15%] bottom-[20%] h-[26rem] w-[26rem] rounded-full blur-[140px] opacity-35"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--fire) 70%, transparent), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: yMid, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ===== LEFT: circular portrait (desktop) / top (mobile) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ y: yPortrait }}
            className="lg:col-span-5 order-1 lg:order-1 flex justify-center lg:justify-start"
          >
            <PortraitCircle rotateX={rotateX} rotateY={rotateY} />
          </motion.div>

          {/* ===== RIGHT: text content ===== */}
          <div className="lg:col-span-7 order-2 lg:order-2 text-center lg:text-left">
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
              className="font-display mt-7 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-semibold leading-[0.98] tracking-tight"
            >
              Campaigns that convert.
              <br />
              <span className="text-gradient-brand">Scales that stick.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto lg:mx-0 mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              I&apos;m{" "}
              <span className="text-foreground font-medium">Rakib Hasan</span>{" "}
              — I build full-funnel paid + lifecycle systems for plumbers,
              roofers, ecommerce brands, and 11 other industries. Growth that
              compounds in your bank account, not just in your ad dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
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
          </div>
        </div>
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

/**
 * Circular portrait with:
 *  - 3D mouse-reactive tilt
 *  - Orbiting gradient ring (counter-rotating)
 *  - Glowing brand/fire border
 *  - Floating status badge ("Available · 2 spots left")
 */
function PortraitCircle({
  rotateX,
  rotateY,
}: {
  rotateX: ReturnType<typeof useSpring>;
  rotateY: ReturnType<typeof useSpring>;
}) {
  return (
    <div
      className="relative"
      style={{ perspective: 1000 }}
    >
      {/* Counter-rotating orbiting ring (outside) */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -m-6 sm:-m-8 rounded-full pointer-events-none"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--brand) 50deg, transparent 110deg, transparent 200deg, var(--fire) 260deg, transparent 320deg)",
            mask: "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            opacity: 0.8,
          }}
        />
      </motion.div>

      {/* Static dashed ring */}
      <div
        aria-hidden
        className="absolute inset-0 -m-3 sm:-m-4 rounded-full border border-dashed border-border/60 pointer-events-none"
      />

      {/* The portrait itself, mouse-tilt reactive */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] xl:h-[26rem] xl:w-[26rem] rounded-full overflow-hidden"
      >
        {/* Glow ring border */}
        <div className="absolute inset-0 rounded-full ring-2 ring-brand/40 shadow-[0_0_60px_-10px_var(--brand),0_0_120px_-30px_var(--fire)] pointer-events-none z-20" />

        {/* The photo */}
        <Image
          src="/marketer-portrait.webp"
          alt="Rakib Hasan — performance marketer, founder of Hasan Performance Studio"
          fill
          priority
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 416px"
          className="object-cover object-center"
        />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-background/40 via-transparent to-fire/10 pointer-events-none z-10" />

        {/* Floating status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 z-30"
        >
          <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-card/90 backdrop-blur-md px-3 py-1.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-[11px] font-medium text-foreground">
              2 spots left · Q3
            </span>
          </div>
        </motion.div>

        {/* Floating mini-metric badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, x: 10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute -top-2 -left-3 sm:-top-3 sm:-left-5 z-30"
        >
          <div className="rounded-2xl border border-fire/30 bg-card/90 backdrop-blur-md px-3 py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] glow-fire">
            <div className="text-[10px] uppercase tracking-wider text-fire font-mono">
              ROAS
            </div>
            <div className="font-display text-lg font-semibold leading-none mt-0.5">
              4.8x
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
