"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useViewStore } from "@/lib/view-store";

const CALENDLY_URL = "https://calendly.com/sharifulhasanroky/free15miniuteconsultancy";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yMid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
      {/* Background glow */}
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

      <motion.div
        style={{ y: yMid, opacity }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Google Ads + Facebook Ads · AI-powered growth systems
        </motion.div>

        {/* Portrait — centered above headline, no overlap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 140, damping: 14 }}
          className="relative mx-auto mt-6 w-fit"
          style={{ perspective: 600 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full overflow-hidden mx-auto"
          >
            <div className="absolute inset-0 rounded-full ring-2 ring-brand/50 shadow-[0_0_30px_-6px_var(--brand),0_0_60px_-20px_var(--fire)] pointer-events-none z-20" />
            <Image
              src="/marketer-portrait.webp"
              alt="Shariful Hasan Roky — revenue growth strategist"
              fill
              priority
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-background/30 via-transparent to-fire/10 pointer-events-none z-10" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 14 }}
            style={{ transform: "translateZ(40px)" }}
            className="absolute -bottom-1 right-1/2 translate-x-10 z-30 grid place-items-center h-5 w-5 rounded-full bg-background ring-2 ring-brand/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
          </motion.span>
        </motion.div>

        {/* H1 — value proposition */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 text-[1.875rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.08] sm:leading-[1.05] tracking-tight"
        >
          Make Customer Acquisition Your{" "}
          <span className="text-gradient-brand">Competitive Advantage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          Build intelligent growth systems where AI, automation, performance media
          and data work together to drive efficient acquisition, higher
          conversions, and scalable revenue.
        </motion.p>

        {/* Stats strip — big numbers, stacked vertically */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mx-auto mt-10 max-w-4xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3"
        >
          {[
            { value: "$6M+", label: "Ad Spend", highlight: true },
            { value: "30K+", label: "Leads & Calls" },
            { value: "$18M+", label: "Revenue" },
            { value: "4×", label: "ROI" },
            { value: "13×", label: "Highest ROAS Achieved" },
          ].map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -2 }}
              className={`relative flex flex-col items-center justify-center rounded-2xl border px-3 py-4 sm:py-5 text-center overflow-hidden ${
                s.highlight
                  ? "border-brand/50 bg-brand/10 glow-brand"
                  : "border-border bg-card/50 backdrop-blur"
              }`}
            >
              {/* top accent line */}
              <div className={`absolute top-0 left-3 right-3 h-px ${s.highlight ? "bg-brand" : "bg-gradient-to-r from-transparent via-brand/40 to-transparent"}`} />
              <div
                className={`font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none tracking-tight ${
                  s.highlight ? "text-gradient-brand" : "text-foreground"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-mono leading-tight">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
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
