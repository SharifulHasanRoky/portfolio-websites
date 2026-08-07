"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { navLinks } from "@/lib/marketer-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-300",
              scrolled
                ? "glass-panel shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)]"
                : "border border-transparent"
            )}
          >
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-fire text-brand-foreground shadow-[0_8px_20px_-6px_var(--brand)]">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                Rakib<span className="text-brand">.</span>Hasan
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    active === l.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-brand to-fire"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <a
                href="#book"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors group"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <button
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid place-items-center h-10 w-10 rounded-xl border border-border bg-card/60 backdrop-blur"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/85 backdrop-blur-md pt-24 px-6"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="flex flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium border border-border bg-card/60 hover:bg-card transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-5 py-4 text-base font-semibold"
              >
                Book a Call <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
