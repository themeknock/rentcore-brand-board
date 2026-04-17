export default function CTAStripe() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "#F0EDE8" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
        <h3 className="font-[family-name:var(--font-heading)] text-[22px] lg:text-[28px] font-extrabold tracking-tight text-[#1A2030]">
          Ready to See What Your Property Can Earn?
        </h3>
        <a
          href="#hero"
          className="inline-flex items-center px-7 py-3 text-[14px] font-bold rounded-full transition-all hover:-translate-y-0.5 shrink-0 text-[#5B8F8B]"
          style={{ border: "1.5px solid #5B8F8B" }}
        >
          Get Your Report
        </a>
      </div>
    </section>
  );
}
