"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  max?: number;
  /** Glare enabled */
  glare?: boolean;
  /** Perspective in px */
  perspective?: number;
};

/**
 * 3D tilt card — pointer-reactive. Used across the portfolio, pillars,
 * case studies, and book-a-meeting section to deliver the "3D storytelling" feel.
 */
export function TiltCard({
  children,
  className,
  max = 10,
  glare = true,
  perspective = 800,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const px = useMotionValue(0.5); // 0..1
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 18,
  });

  // Glare position (0..1)
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(Math.max(0, Math.min(1, x)));
    py.set(Math.max(0, Math.min(1, y)));
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
    setHovering(false);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={onLeave}
      style={{ perspective }}
      className={cn("relative", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {children}

        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
            style={{ opacity: hovering ? 0.6 : 0, transition: "opacity 300ms" }}
          >
            <motion.div
              style={{
                background: useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 45%)`,
              }}
              className="absolute inset-0"
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
