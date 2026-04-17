"use client";

import { CreditCard, Wrench, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: CreditCard,
    title: "Easy Online Payments",
    desc: "Pay rent from anywhere — set up autopay and never worry about a late payment again.",
  },
  {
    icon: Wrench,
    title: "Fast Maintenance Response",
    desc: "Submit a request online and our team coordinates repairs quickly with vetted vendors.",
  },
  {
    icon: LayoutDashboard,
    title: "Your Tenant Portal",
    desc: "View your lease, track payments, and communicate with management — all in one place.",
  },
];

export default function TenantFeatures() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="rounded-[24px] p-8 lg:p-9 bg-[var(--c-card)]"
              style={{ border: "1px solid rgba(91,143,139,0.1)", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(91,143,139,0.08)" }}>
                <feature.icon className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{feature.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
