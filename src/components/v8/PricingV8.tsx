const FEES = [
  { label: "Management Fee", value: "9% of rent/month", note: "Minimum $125/month" },
  { label: "Leasing Fee", value: "75% of one month's rent", note: "Tenant placement" },
  { label: "Lease Renewal", value: "$300", note: "" },
  { label: "Maintenance Fee", value: "$50/quarter", note: "Per work order" },
  { label: "Setup/Admin Fee", value: "$195", note: "One-time" },
];

export default function PricingV8() {
  return (
    <section id="pricing" className="py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px] font-extrabold tracking-tight uppercase mb-4 text-center"
          style={{ color: "#0B2545" }}
        >
          Simple, Transparent Pricing
        </h2>
        <p className="text-[15px] leading-relaxed text-center mb-14 max-w-[500px] mx-auto" style={{ color: "#4A4A4A" }}>
          We provide full-service, hands-on property management designed to eliminate the stress
          of ownership — our pricing reflects the level of service and communication most investors
          don&apos;t get elsewhere.
        </p>

        <div className="space-y-0">
          {FEES.map((f, i) => (
            <div
              key={f.label}
              className="flex items-center justify-between py-5"
              style={{ borderTop: i === 0 ? "1px solid #E5E5E5" : "none", borderBottom: "1px solid #E5E5E5" }}
            >
              <div>
                <p className="text-[15px] font-semibold" style={{ color: "#0B2545" }}>{f.label}</p>
                {f.note && <p className="text-[12px] mt-0.5" style={{ color: "#8E9690" }}>{f.note}</p>}
              </div>
              <p className="text-[16px] font-bold" style={{ color: "#0B2545" }}>{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-[14px] font-bold tracking-wide uppercase transition-all hover:-translate-y-0.5"
            style={{ background: "#C4784A", color: "#FFFFFF" }}
          >
            Get Your Free Rental Analysis
          </a>
        </div>
      </div>
    </section>
  );
}
