import { CheckCircle } from "lucide-react";

const SCAN_POINTS = [
  "Pay rent online in seconds",
  "24/7 maintenance — we respond, not a voicemail",
  "Transparent lease terms, no surprises",
];

export default function TenantHero() {
  return (
    <section id="tenants" className="py-16 lg:py-24" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-sage)" }}>
              For Tenants
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
              Renting Made Simple.
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-relaxed mt-5 mb-8" style={{ color: "var(--c-body)" }}>
              We make your renting experience stress-free — from move-in to move-out.
            </p>
            <ul className="space-y-4">
              {SCAN_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--c-sage)" }} />
                  <span className="text-[15px] font-medium" style={{ color: "var(--c-body)" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="relative rounded-[28px] overflow-hidden h-[300px] lg:h-[380px]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop" alt="Modern apartment interior" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--c-bg2) 0%, transparent 40%)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
