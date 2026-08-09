"use client";

import { motion } from "framer-motion";

/**
 * Decorative 3D background — floating gradient blobs + grid + noise.
 * Purely cosmetic, sits behind everything with pointer-events-none.
 */
export function Background3D() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--brand) 70%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full blur-[140px] opacity-45"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, color-mix(in oklch, var(--fire) 70%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, -50, 20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--brand) 50%, color-mix(in oklch, var(--fire) 50%)), transparent 70%)",
        }}
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
