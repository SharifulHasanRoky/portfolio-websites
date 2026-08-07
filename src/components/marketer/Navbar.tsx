"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap, ArrowLeft } from "lucide-react";
import { navLinks } from "@/lib/marketer-data";
import { useViewStore, type View } from "@/lib/view-store";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const view = useViewStore((s) => s.view);
  const setView = useViewStore((s) => s.setView);
  const goHomeAndScroll = useViewStore((s) => s.goHomeAndScroll);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scroll position ONLY when the view actually changes — never re-run
  // on pendingScroll updates (page.tsx handles in-page scroll separately).
  const pendingScroll = useViewStore((s) => s.pendingScroll);
  const prevView = useRef(view);
  useEffect(() => {
    if (prevView.current === view) return;
    prevView.current = view;
    if (pendingScroll) return; // page.tsx will handle scrolling
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [view, pendingScroll]);

  function handleNav(link: (typeof navLinks)[number]) {
    setOpen(false);
    if (link.kind === "view") {
      setView(link.target as View);
      return;
    }
    // scroll link — make sure we're on home, then scroll
    if (view !== "home") {
      goHomeAndScroll(link.target);
    } else {
      const el = document.querySelector(link.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function goHome() {
    setOpen(false);
    setView("home");
  }

  const viewLabel: Record<View, string> = {
    home: "Home",
    portfolio: "Portfolio",
    cases: "Case Studies",
    cv: "CV / Experience",
  };

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
            {/* Logo — always goes home */}
            <button
              onClick={goHome}
              className="flex items-center gap-2.5 group"
              aria-label="Back to home"
            >
              <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-fire text-brand-foreground shadow-[0_8px_20px_-6px_var(--brand)]">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                Rakib<span className="text-brand">.</span>Hasan
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => {
                const isActive =
                  l.kind === "view" && l.target === view;
                return (
                  <button
                    key={l.label}
                    onClick={() => handleNav(l)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-brand to-fire"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + breadcrumb on sub-pages */}
            <div className="flex items-center gap-2">
              {view !== "home" && (
                <button
                  onClick={goHome}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 backdrop-blur px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Home
                </button>
              )}
              <button
                onClick={() => handleNav({ label: "Book", kind: "scroll", target: "#book" })}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors group"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid place-items-center h-10 w-10 rounded-xl border border-border bg-card/60 backdrop-blur"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Subtle breadcrumb strip on non-home views */}
          {view !== "home" && (
            <div className="mt-2 mx-auto max-w-7xl flex items-center gap-2 px-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              <button onClick={goHome} className="hover:text-brand transition-colors">
                home
              </button>
              <span className="opacity-50">/</span>
              <span className="text-brand">{viewLabel[view]}</span>
            </div>
          )}
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
              {navLinks.map((l) => {
                const isActive = l.kind === "view" && l.target === view;
                return (
                  <button
                    key={l.label}
                    onClick={() => handleNav(l)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium border transition-colors",
                      isActive
                        ? "border-brand bg-brand/10 text-foreground"
                        : "border-border bg-card/60 hover:bg-card"
                    )}
                  >
                    {l.label}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                );
              })}
              <button
                onClick={() => handleNav({ label: "Book", kind: "scroll", target: "#book" })}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-5 py-4 text-base font-semibold"
              >
                Book a Call <ArrowUpRight className="h-5 w-5" />
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
