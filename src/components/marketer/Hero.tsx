"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles, Star, TrendingUp } from "lucide-react";
import { headlineMetrics } from "@/lib/marketer-data";
import { useViewStore } from "@/lib/view-store";
import { AnimatedNumber } from "./AnimatedNumber";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const yFar = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse-reactive layer tilt
  const mx = useSpring(0, { stiffness: 60, damping: 18 });
  const my = useSpring(0, { stiffness: 60, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    mx.set((e.clientX / w - 0.5) * 2);
    my.set((e.clientY / h - 0.5) * 2);
  }

  const rotateX = useTransform(my, [-1, 1], [6, -6]);
  const rotateY = useTransform(mx, [-1, 1], [-6, 6]);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 section-anchor"
    >
      <motion.div
        style={{ opacity, y: yFar }}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[80vh] w-[80vh] max-w-[900px] max-h-[900px]"
        >
          {/* floating glass tiles for the 3D storytelling vibe */}
          <FloatingTile
            className="left-[8%] top-[18%] w-44 h-32"
            depth={50}
            delay={0}
          >
            <div className="p-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-brand">
                <TrendingUp className="h-3.5 w-3.5" /> ROAS
              </div>
              <div className="mt-1 font-display text-3xl font-semibold">4.8x</div>
              <div className="text-xs text-muted-foreground">blended, 90d</div>
            </div>
          </FloatingTile>

          <FloatingTile
            className="right-[10%] top-[12%] w-44 h-32"
            depth={-40}
            delay={0.4}
            accent="fire"
          >
            <div className="p-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-fire">
                <Star className="h-3.5 w-3.5" /> CAC Drop
              </div>
              <div className="mt-1 font-display text-3xl font-semibold">−57%</div>
              <div className="text-xs text-muted-foreground">avg, all clients</div>
            </div>
          </FloatingTile>

          <FloatingTile
            className="left-[14%] bottom-[18%] w-48 h-28"
            depth={70}
            delay={0.2}
          >
            <div className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Spend managed
              </div>
              <div className="mt-1 font-display text-3xl font-semibold">$8.4M+</div>
              <div className="text-xs text-muted-foreground">18 months</div>
            </div>
          </FloatingTile>

          <FloatingTile
            className="right-[12%] bottom-[16%] w-48 h-28"
            depth={-60}
            delay={0.6}
            accent="fire"
          >
            <div className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Industries served
              </div>
              <div className="mt-1 font-display text-3xl font-semibold">14+</div>
              <div className="text-xs text-muted-foreground">home &amp; DTC</div>
            </div>
          </FloatingTile>

          {/* central orbiting ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto h-[60%] w-[60%] rounded-full border border-dashed border-brand/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full border border-dashed border-fire/20"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: yMid, opacity }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Performance marketer for home services &amp; DTC ecommerce
          <span className="h-1 w-1 rounded-full bg-brand" />
          Booking 2 new clients / quarter
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-7 text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.98] tracking-tight"
        >
          Campaigns that convert.
          <br />
          <span className="text-gradient-brand">Scales that stick.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
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
          transition={{ duration: 0.7, delay: 0.32 }}
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

        {/* headline metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ y: yNear }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {headlineMetrics.map((m) => (
            <div
              key={m.label}
              className="relative rounded-2xl border border-border bg-card/50 backdrop-blur p-4 sm:p-5 text-left overflow-hidden group"
            >
              <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-60" />
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold">
                <AnimatedNumber
                  value={parseFloat(m.value)}
                  suffix={m.suffix}
                  decimals={m.value.includes(".") ? 1 : 0}
                />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {m.caption}
              </div>
            </div>
          ))}
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
      style={{
        transform: `translateZ(${depth}px)`,
      }}
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
