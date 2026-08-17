"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Linkedin,
  MapPin,
} from "lucide-react";
import { navLinks, type NavLink } from "@/lib/marketer-data";
import { useViewStore, type View } from "@/lib/view-store";

export function Footer() {
  const setView = useViewStore((s) => s.setView);
  const goHomeAndScroll = useViewStore((s) => s.goHomeAndScroll);
  const view = useViewStore((s) => s.view);

  function handleNavClick(l: NavLink) {
    if (l.kind === "link") {
      window.open(l.target, "_blank");
      return;
    }
    if (l.kind === "view") {
      setView(l.target as View);
    } else {
      if (view !== "home") {
        goHomeAndScroll(l.target);
      } else {
        const el = document.querySelector(l.target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
  return (
    <footer className="relative mt-auto border-t border-border bg-card/30 backdrop-blur">
      {/* Top stripe */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-background/40 backdrop-blur p-8 sm:p-10 lg:p-12 mb-12 sm:mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full blur-3xl bg-brand/30" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full blur-3xl bg-fire/30" />
          <div className="relative">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
              Ready to stop renting growth
              <br className="hidden sm:block" /> and start{" "}
              <span className="text-gradient-brand">owning a brand</span>?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              One call. Real numbers. A real plan. If we&apos;re not a fit,
              you&apos;ll still walk away with the next 30 days mapped out.
            </p>
            <a
              href="https://calendly.com/sharifulhasanroky/free15miniuteconsultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors"
            >
              Book your strategy call
              <ArrowUp className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-fire text-brand-foreground">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Shariful<span className="text-brand">.</span>Roky
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Revenue growth strategist for ecommerce &amp; home service brands. 4+ years, 150+ companies, 2 niches, 60+ countries. I
              build full-funnel systems that compound in your bank account, not
              just in your ad dashboard.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              Feni, BD · serving clients worldwide
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(l)}
                    className="text-sm text-foreground/80 hover:text-brand transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-4">
              Industries
            </div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              {[
                "Plumbing",
                "Roofing",
                "Handyman",
                "Ecommerce · Gadgets",
                "Ecommerce · Cosmetics",
                "Telecom",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-4">
              Connect
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:sharifulhasanrocky@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-brand transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  sharifulhasanrocky@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sharifulhasanroky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-brand transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Shariful Hasan Roky · Performance Marketing Studio. Built
            with intent — and a lot of caffeine.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-1 hover:text-brand transition-colors"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
