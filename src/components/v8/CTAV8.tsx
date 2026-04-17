export default function CTAV8() {
  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "#F9F9F7" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <h2
          className="font-[family-name:var(--font-heading)] text-[28px] lg:text-[40px] font-extrabold tracking-tight uppercase leading-[1.15] mb-5"
          style={{ color: "#0B2545" }}
        >
          Ready to See What Your<br />Property Can Earn?
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-[480px] mx-auto" style={{ color: "#4A4A4A" }}>
          Get a clear, data-based rental analysis and a plan to maximize your investment.
          No obligation, no pressure — just answers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 text-[14px] font-bold tracking-wide uppercase transition-all hover:-translate-y-0.5"
            style={{ background: "#C4784A", color: "#FFFFFF" }}
          >
            Get Your Free Report
          </a>
          <a
            href="tel:+16025550180"
            className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-semibold tracking-wide transition-all hover:-translate-y-0.5"
            style={{ border: "1.5px solid #0B2545", color: "#0B2545" }}
          >
            Call Dale Directly
          </a>
        </div>
        <p className="mt-6 text-[13px]" style={{ color: "#8E9690" }}>
          (602) 555-0180 &middot; info@rentcorepm.com
        </p>
      </div>
    </section>
  );
}
