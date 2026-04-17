import { Inter } from "next/font/google";

const bodyLight = Inter({
  variable: "--font-body-v2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Home2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bodyLight.variable}`} style={{ fontFamily: "var(--font-body-v2), var(--font-body), system-ui, sans-serif", fontWeight: 300 }}>
      {children}
    </div>
  );
}
