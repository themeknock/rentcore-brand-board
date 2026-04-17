const POSTS = [
  { category: "Market Data", catColor: "#5B8F8B", title: "Phoenix Rental Market Report: Q1 2026", desc: "Average rents, vacancy rates, and demand trends across Phoenix metro — updated quarterly.", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&h=450&fit=crop" },
  { category: "Guide", catColor: "#6BBF8A", title: "Out-of-State Investing in Arizona: What You Need to Know", desc: "Tax implications, management considerations, and why Phoenix attracts out-of-state capital.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=450&fit=crop" },
  { category: "Education", catColor: "#D4845A", title: "5 Hidden Costs That Kill Your Rental ROI", desc: "The fees and expenses most landlords overlook — and how professional management eliminates them.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop" },
];

export default function Resources() {
  return (
    <section className="py-16 lg:py-24" style={{ background: "linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg2) 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Investor Resources</span>
          <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--c-head)" }}>
            Insights for <span className="gradient-text">Smarter</span> Investments
          </h2>
          <p className="text-[17px] mt-5 max-w-[480px] mx-auto" style={{ color: "var(--c-body)" }}>Market reports, tax strategies, and tips for Phoenix and Tucson investors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((post) => (
            <article key={post.title} className="rounded-[24px] overflow-hidden bg-[var(--c-card)]" style={{ border: "1px solid var(--c-bd)", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
              <div className="relative h-52 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold" style={{ background: "rgba(255,255,255,0.92)", color: "#334155", backdropFilter: "blur(8px)" }}>5 min read</span>
              </div>
              <div className="p-7 lg:p-8">
                <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-semibold mb-4" style={{ color: post.catColor, background: `${post.catColor}15` }}>{post.category}</span>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[17px] mb-3 leading-snug tracking-tight" style={{ color: "var(--c-head)" }}>{post.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--c-body)" }}>{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
