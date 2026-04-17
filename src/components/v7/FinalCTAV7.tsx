export default function FinalCTAV7() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Divider */}
        <div className="w-full h-px mb-14" style={{ background: "linear-gradient(90deg, transparent, #DFE4EC, transparent)" }} />

        <div className="text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px] font-extrabold tracking-tight leading-[1.1] text-[#0B2545] mb-4">
            Ready to See What Your<br className="hidden sm:block" /> Property Can Earn?
          </h2>
          <p className="text-[16px] lg:text-[17px] leading-relaxed text-[#515151] max-w-xl mx-auto mb-10">
            Get a clear, data-based rental analysis and a plan to maximize your investment. No obligation, no pressure — just answers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hero"
              className="inline-flex items-center px-8 py-4 text-[15px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-white"
              style={{ background: "linear-gradient(135deg, #049DD9, #0D5FA6)" }}
            >
              Get Your Free Report
            </a>
            <a
              href="tel:+16025550180"
              className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-bold rounded-full transition-all hover:-translate-y-0.5 text-[#0B2545]"
              style={{ border: "1.5px solid #DFE4EC" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.5 11.35v2.1a1.4 1.4 0 01-1.53 1.4 13.86 13.86 0 01-6.04-2.15 13.66 13.66 0 01-4.2-4.2A13.86 13.86 0 01.58 2.43 1.4 1.4 0 011.97 1h2.1a1.4 1.4 0 011.4 1.2c.09.67.25 1.32.48 1.95a1.4 1.4 0 01-.31 1.48l-.89.89a11.2 11.2 0 004.2 4.2l.89-.89a1.4 1.4 0 011.48-.31c.63.23 1.28.39 1.95.48a1.4 1.4 0 011.2 1.42z" stroke="#0B2545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Contact Dale
            </a>
          </div>

          <p className="mt-8 text-[13px] text-[#8E9690]">
            Or call directly: <a href="tel:+16025550180" className="font-semibold text-[#049DD9] hover:underline">(602) 555-0180</a>
          </p>
        </div>
      </div>
    </section>
  );
}
