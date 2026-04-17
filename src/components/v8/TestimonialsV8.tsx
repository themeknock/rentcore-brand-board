const REVIEWS = [
  {
    quote: "Vacancy rate dropped and rent increased 11%. Dale treats every property like it's his own. Should have done this sooner.",
    name: "Michael C.",
    detail: "Phoenix investor",
  },
  {
    quote: "I manage from California and Dale's team handles everything. Monthly reports, tenant communication, maintenance — I haven't had a single headache since switching.",
    name: "Sarah M.",
    detail: "Out-of-state investor",
  },
  {
    quote: "The transparency sold us. We see everything in the Rentec portal. No surprises, no hidden fees. This is how property management should work.",
    name: "David T.",
    detail: "Tucson portfolio owner",
  },
];

export default function TestimonialsV8() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F9F9F7" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[36px] font-extrabold tracking-tight uppercase mb-16 text-center"
          style={{ color: "#0B2545" }}
        >
          What Our Investors Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {REVIEWS.map((r) => (
            <div key={r.name}>
              <p className="text-[15px] leading-[1.85] italic mb-6" style={{ color: "#4A4A4A" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold" style={{ background: "#3E8C8C", color: "#FFFFFF" }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-[13px] font-bold" style={{ color: "#0B2545" }}>{r.name}</p>
                  <p className="text-[11px]" style={{ color: "#8E9690" }}>{r.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
