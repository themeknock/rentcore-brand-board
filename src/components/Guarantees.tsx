import { Shield, Clock, Home, Scale } from "lucide-react";

const GUARANTEES = [
  { icon: Home, title: "Rent Deposit Guarantee", desc: "Tenant breaks lease early? We find a replacement — no additional leasing fee." },
  { icon: Clock, title: "60-Day Leasing Guarantee", desc: "Vacancy filled within 60 days or your first month's management fee is waived." },
  { icon: Shield, title: "Eviction Protection", desc: "We cover eviction filing costs for tenants we placed." },
  { icon: Scale, title: "Compliance Guarantee", desc: "Full AZ landlord-tenant law compliance. You stay protected." },
];

export default function Guarantees() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_1.1fr] gap-8 lg:gap-10 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Our Guarantees</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--c-head)" }}>
              Your Investment,{" "}
              <span className="gradient-text">Protected.</span>
            </h2>
            <p className="text-[17px] leading-[1.75]" style={{ color: "var(--c-body)" }}>
              Real guarantees backed by action — not just words on a page.
            </p>
          </div>

          {/* Center — Image */}
          <div className="relative rounded-[24px] overflow-hidden h-[320px] lg:h-[400px] hidden lg:block" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&h=800&fit=crop" alt="Keys handover" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--c-bg2) 0%, transparent 50%)" }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-[family-name:var(--font-heading)] font-bold text-white text-[16px]">Your keys, our responsibility.</p>
            </div>
          </div>

          {/* Right — Cards stacked */}
          <div className="space-y-3">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="rounded-[16px] p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--c-sage)", opacity: 0.9 }}>
                  <g.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[15px] mb-1 tracking-tight" style={{ color: "var(--c-head)" }}>{g.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-body)" }}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
