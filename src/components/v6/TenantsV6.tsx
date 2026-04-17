import { CheckCircle, CreditCard, Wrench, LayoutDashboard } from "lucide-react";

const POINTS = [
  "Pay rent online in seconds",
  "24/7 maintenance — we respond, not a voicemail",
  "Transparent lease terms, no surprises",
];

const FEATURES = [
  { icon: CreditCard, title: "Easy Online Payments", desc: "Pay rent from anywhere — set up autopay and never worry about a late payment again." },
  { icon: Wrench, title: "Fast Maintenance Response", desc: "Submit a request online and our team coordinates repairs quickly with vetted vendors." },
  { icon: LayoutDashboard, title: "Your Tenant Portal", desc: "View your lease, track payments, and communicate with management — all in one place." },
];

export default function TenantsV6() {
  return (
    <section id="tenants" className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      {/* Decorative */}
      <svg className="absolute bottom-0 right-0 w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]" viewBox="0 0 260 260" fill="none">
        <path d="M260 260C260 116.406 143.594 0 0 0L0 260L260 260Z" fill="var(--c-sage)" fillOpacity="0.04" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-sage)" }}>For Tenants</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
              Renting Made Simple.
            </h2>
            <p className="text-[17px] leading-[1.75] mt-5 mb-8" style={{ color: "var(--c-body)" }}>
              We make your renting experience stress-free — from move-in to move-out.
            </p>
            <ul className="space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--c-sage)" }} />
                  <span className="text-[15px] font-medium" style={{ color: "var(--c-body)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* People-focused image — happy tenant/family */}
          <div className="relative rounded-[28px] overflow-hidden h-[320px] lg:h-[400px]" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop" alt="Happy tenant in modern apartment" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-[24px] p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-card)", border: "1px solid var(--c-bd)", boxShadow: "var(--c-card-shadow)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)" }}>
                <f.icon className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] mb-3 tracking-tight" style={{ color: "var(--c-head)" }}>{f.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
