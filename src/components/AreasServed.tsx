const PHOENIX = ["Phoenix","Scottsdale","Tempe","Mesa","Chandler","Gilbert","Glendale","Peoria","Surprise","Goodyear","Avondale","Buckeye","Queen Creek","Maricopa"];
const TUCSON = ["Tucson","Oro Valley","Marana","Sahuarita","Vail","Green Valley"];

export default function AreasServed() {
  return (
    <section id="areas" className="relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=1080&fit=crop&q=80" alt="Phoenix Arizona" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "var(--c-areas-overlay, rgba(20,26,40,0.92))" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--c-copr)" }}>Where We Serve</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[34px] lg:text-[50px] font-extrabold leading-[1.08] tracking-tight mb-6" style={{ color: "var(--c-head)" }}>
              Phoenix + Tucson Metro.<br /><span style={{ color: "var(--c-mut)" }}>Block by Block.</span>
            </h2>
            <p className="text-[17px] leading-[1.75] max-w-[460px] mb-8" style={{ color: "var(--c-mut)" }}>
              We manage single-family rentals across both metropolitan areas. Whether your property is in a Scottsdale golf community or a Mesa starter home, we know the local market.
            </p>
            <div className="flex items-center gap-4">
              {["photo-1600585154340-be6161a56a0c","photo-1564013799919-ab600027ffc6","photo-1600607687939-ce8a6c25118c"].map((id) => (
                <img key={id} src={`https://images.unsplash.com/${id}?w=160&h=100&fit=crop`} alt="Property" className="w-20 h-14 rounded-xl object-cover" style={{ opacity: 0.7 }} loading="lazy" />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--c-mut)" }}>Phoenix Metro</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {PHOENIX.map((city) => (
                <span key={city} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "var(--c-body)", background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
                  {city}
                </span>
              ))}
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--c-mut)" }}>Tucson Metro</p>
            <div className="flex flex-wrap gap-2.5">
              {TUCSON.map((city) => (
                <span key={city} className="px-4 py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 hover:text-white" style={{ color: "var(--c-body)", background: "var(--c-card)", border: "1px solid var(--c-bd)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
