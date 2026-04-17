"use client";

import { Megaphone, Shield, Wallet, Wrench, BarChart3, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  { icon: Megaphone, title: "Marketing & Leasing", desc: "Pro photos, multi-platform listings. Avg 15 days to lease.", featured: true },
  { icon: Shield, title: "Tenant Screening", desc: "Credit, income & background checks. Reliable tenants who stay.", featured: false },
  { icon: Wallet, title: "Rent Collection", desc: "Automated payments. Funds in your account by the 10th.", featured: false },
  { icon: Wrench, title: "Maintenance", desc: "24/7 coordination with vetted vendors. No markups.", featured: false },
  { icon: BarChart3, title: "Financial Reporting", desc: "Monthly statements, 1099s, real-time portal access.", featured: false },
  { icon: ClipboardCheck, title: "Inspections & Compliance", desc: "Move-in/out inspections and AZ law compliance.", featured: false },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background image */}
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.15 }} loading="lazy" />
      <div className="absolute inset-0" style={{ background: "var(--c-bg2)" }} />
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(91,143,139,0.07)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>What We Do</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
            Everything Between<br className="hidden sm:block" />
            <span style={{ color: "var(--c-mut)" }}>&apos;Keys in Hand&apos;</span>
            {" "}and{" "}
            <span style={{ color: "var(--c-mut)" }}>&apos;Rent in Your Account&apos;</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`rounded-[24px] p-8 lg:p-9 ${service.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{
                background: "var(--c-card)",
                border: service.featured ? "1px solid var(--c-copr)" : "1px solid var(--c-bd)",
              }}
            >
              {service.featured && (
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4" style={{ background: "rgba(212,132,90,0.2)", color: "var(--c-copr)" }}>Core Service</span>
              )}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)" }}>
                <service.icon className="w-5 h-5" style={{ color: "var(--c-copr)" }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{service.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
