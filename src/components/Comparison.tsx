import { Check, X } from "lucide-react";

const ROWS = [
  { task: "Find & screen tenants", self: false, rc: true },
  { task: "Collect rent on time", self: false, rc: true },
  { task: "Handle midnight maintenance calls", self: false, rc: true },
  { task: "Keep up with AZ landlord-tenant law", self: false, rc: true },
  { task: "Monthly financial statements & 1099s", self: false, rc: true },
  { task: "Coordinate vendor repairs & inspections", self: false, rc: true },
  { task: "Your evenings & weekends free", self: false, rc: true },
  { task: "Full control & transparency", self: true, rc: true },
];

export default function Comparison() {
  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-8 lg:mb-12">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>The Difference</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
            Self-Managing vs. <span className="gradient-text">Rent Core</span>
          </h2>
        </div>

        <div className="rounded-[24px] overflow-hidden" style={{ border: "1px solid var(--c-bd)" }}>
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px]" style={{ background: "var(--c-inp)" }}>
            <div className="px-6 py-4" />
            <div className="px-4 py-4 text-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
              <p className="text-[12px] font-bold uppercase tracking-wider" style={{ color: "var(--c-mut)" }}>Self</p>
            </div>
            <div className="px-4 py-4 text-center" style={{ borderLeft: "1px solid var(--c-bd)", background: "var(--c-sage)", opacity: 0.9 }}>
              <p className="text-[12px] font-bold uppercase tracking-wider text-white">Rent Core</p>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div key={row.task} className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px]" style={{ background: i % 2 === 0 ? "var(--c-card)" : "var(--c-inp)", borderTop: "1px solid var(--c-bd)" }}>
              <div className="px-6 py-4 flex items-center">
                <span className="text-[14px] font-medium" style={{ color: "var(--c-head)" }}>{row.task}</span>
              </div>
              <div className="px-4 py-4 flex items-center justify-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
                {row.self ? (
                  <Check className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
                ) : (
                  <X className="w-5 h-5" style={{ color: "var(--c-copr)" }} />
                )}
              </div>
              <div className="px-4 py-4 flex items-center justify-center" style={{ borderLeft: "1px solid var(--c-bd)" }}>
                <Check className="w-5 h-5" style={{ color: "var(--c-sage)" }} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[14px] mt-6" style={{ color: "var(--c-mut)" }}>
          Keep full control — without the full-time job.
        </p>
      </div>
    </section>
  );
}
