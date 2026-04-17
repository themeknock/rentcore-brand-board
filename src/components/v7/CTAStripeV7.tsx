export default function CTAStripeV7() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #049DD9, #0D5FA6)" }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16 relative">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <h3 className="font-[family-name:var(--font-heading)] text-[20px] lg:text-[26px] font-extrabold tracking-tight text-white text-center sm:text-left">
            Ready to See What Your Property Can Earn?
          </h3>
          <a
            href="#hero"
            className="inline-flex items-center px-7 py-3.5 text-[14px] font-bold rounded-full transition-all hover:-translate-y-0.5 shrink-0 bg-white text-[#0D5FA6] hover:bg-white/90"
          >
            Get Your Report
          </a>
        </div>
      </div>
    </section>
  );
}
