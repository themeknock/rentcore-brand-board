import localFont from "next/font/local";

const dallas = localFont({
  src: [
    { path: "../../../public/fonts/Dallas-Light.woff2", weight: "300", style: "normal" },
    { path: "../../../public/fonts/Dallas-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Dallas-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const morality = localFont({
  src: [
    { path: "../../../public/fonts/morality-webfont.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export default function V9Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dallas.variable} ${morality.variable}`}>
      <style>{`
        /* V9 color overrides — Dale's final palette */
        .v9-root {
          --c-bg: #FFFFFF;
          --c-bg2: #F5F5F3;
          --c-card: #FFFFFF;
          --c-inp: #F5F5F3;
          --c-sage: #478984;
          --c-copr: #7F2A17;
          --c-head: #000000;
          --c-body: #212121;
          --c-mut: #80898C;
          --c-bd: #E8E8E8;
          --c-ok: #478984;
          --c-foot: #0D272B;
          --c-header-bg: rgba(255,255,255,0.95);
          --c-badge-bg: rgba(255,255,255,0.9);
          --c-grad: linear-gradient(135deg, #478984, #5BA39E);
          --c-license-bg: #0D272B;
          --c-areas-overlay: rgba(255,255,255,0.92);
          --c-cta-overlay: rgba(13,39,43,0.92);
          --c-trust-bg: #F5F5F3;
          --c-card-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px #E8E8E8;
          --c-icon-bg: rgba(127,42,23,0.08);
          --c-step-bg: #FFFFFF;
          --c-hero-img: 0.05;
          background: #FFFFFF;
          color: #000000;
          font-family: var(--font-body), system-ui, sans-serif;
        }
        .v9-root .gradient-text {
          background: linear-gradient(135deg, #478984, #5BA39E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .v9-root ::selection { background: #478984; color: white; }
      `}</style>
      <div className="v9-root">
        {children}
      </div>
    </div>
  );
}
