"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const slots = [
  "Mon · 10:00 AM",
  "Mon · 02:00 PM",
  "Tue · 11:00 AM",
  "Tue · 03:30 PM",
  "Wed · 09:30 AM",
  "Wed · 01:00 PM",
  "Thu · 10:30 AM",
  "Thu · 04:00 PM",
];

const budgets = ["< $5k/mo", "$5k – $15k/mo", "$15k – $50k/mo", "$50k+/mo"];

export function BookMeeting({ hideHeading = false }: { hideHeading?: boolean }) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    budget: budgets[1],
    slot: slots[0],
    message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulated submission — in production this hits /api/book
    setSubmitted(true);
    toast({
      title: "Booking request received",
      description: `We'll confirm ${form.slot} (your timezone) within 4 business hours.`,
    });
  }

  return (
    <section
      id="book"
      className={cn(
        "relative px-4 sm:px-6 section-anchor",
        hideHeading ? "py-8 sm:py-12" : "py-24 sm:py-32"
      )}
    >
      <div className="mx-auto max-w-7xl relative">
        {!hideHeading && (
          <SectionHeading
            eyebrow="Book a meeting · 2 spots left this quarter"
            title="Free 30-min strategy call. No pitch deck, no fluff."
            description="You bring a real number (current CAC, current revenue, current ROAS). I'll bring a real plan — what I'd change in your funnel in the first 30 days. If we're a fit, we talk next steps. If not, you walk away with a plan you can hand to anyone."
          />
        )}

        <div className={cn("grid lg:grid-cols-12 gap-6", hideHeading ? "mt-0" : "mt-14")}>
          {/* Left — value props + slot picker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <TiltCard
              max={6}
              className="h-full rounded-3xl border border-brand/30 bg-card/60 backdrop-blur p-6 sm:p-8 glow-brand"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" />
                <h3 className="font-display text-xl font-semibold text-gradient-brand">
                  What you get on the call
                </h3>
              </div>

              <ul className="mt-6 space-y-3.5">
                {[
                  "Live audit of your funnel, ad account & tracking",
                  "3 prioritized fixes ranked by revenue impact",
                  "Realistic scale path with budget + timeline",
                  "Honest answer on whether I can help — or who can",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/60">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-3">
                  Pick a time (Asia/Dhaka · GMT+6)
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => update("slot", s)}
                      className={cn(
                        "rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-medium transition-all text-left",
                        form.slot === s
                          ? "border-brand bg-brand/10 text-foreground glow-brand"
                          : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:bg-card/70"
                      )}
                    >
                      <Calendar className="h-3.5 w-3.5 inline-block mr-1.5 -mt-0.5" />
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  30 minutes
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand" />
                  Reply within 4 hrs
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 16 }}
                    className="grid place-items-center h-16 w-16 rounded-full bg-brand text-brand-foreground mb-5"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-gradient-brand">
                    You&apos;re on the list.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    Booking request for{" "}
                    <span className="text-foreground font-medium">
                      {form.slot}
                    </span>{" "}
                    received. I&apos;ll email{" "}
                    <span className="text-foreground font-medium">
                      {form.email}
                    </span>{" "}
                    within 4 business hours to confirm. Reply with any context
                    you want me to review beforehand.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:underline"
                  >
                    Submit another request <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      icon={<User className="h-4 w-4" />}
                      label="Your name"
                      required
                    >
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                      />
                    </Field>
                    <Field
                      icon={<Mail className="h-4 w-4" />}
                      label="Work email"
                      required
                    >
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="jane@brand.com"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      icon={<Building2 className="h-4 w-4" />}
                      label="Company / brand"
                    >
                      <input
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Brand Co."
                        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                      />
                    </Field>
                    <Field
                      icon={<Phone className="h-4 w-4" />}
                      label="Phone (optional)"
                    >
                      <input
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      icon={<Building2 className="h-4 w-4" />}
                      label="Industry"
                    >
                      <select
                        value={form.industry}
                        onChange={(e) => update("industry", e.target.value)}
                        className="w-full bg-transparent text-sm outline-none text-foreground [&>option]:bg-background"
                      >
                        <option value="">Select an industry…</option>
                        {[
                          "Plumbing",
                          "Handyman",
                          "Roofing",
                          "Electrician",
                          "Cleaning",
                          "Printing",
                          "Car Repair",
                          "Yarn / Crafts",
                          "Ecommerce · Gadgets",
                          "Ecommerce · Cosmetics",
                          "Ecommerce · Clothing",
                          "Ecommerce · Telecom",
                          "Ecommerce · Sports",
                          "Other",
                        ].map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      icon={<Wallet />}
                      label="Monthly ad budget"
                    >
                      <select
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        className="w-full bg-transparent text-sm outline-none text-foreground [&>option]:bg-background"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    icon={<MessageSquare className="h-4 w-4" />}
                    label="What are you trying to fix? (optional)"
                  >
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={4}
                      placeholder="e.g. Spending $20k/mo on Meta at 2.1 ROAS, want to hit 3.5 without raising CAC. iOS attribution is broken."
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70 resize-none"
                    />
                  </Field>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to receive a reply email about
                      your booking request. No newsletter, no spam, ever.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors whitespace-nowrap"
                    >
                      Request {form.slot}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Wallet() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function Field({
  icon,
  label,
  required,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block group">
      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-2">
        {label}
        {required && <span className="text-fire ml-0.5">*</span>}
      </span>
      <span className="flex items-center gap-2.5 rounded-xl border border-border bg-background/40 px-3.5 py-3 focus-within:border-brand/60 focus-within:bg-background/70 transition-colors">
        <span className="text-muted-foreground group-focus-within:text-brand transition-colors">
          {icon}
        </span>
        {children}
      </span>
    </label>
  );
}
