import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Phoenix Property Management for Investors | Rent Core",
  description:
    "Rent Core is Phoenix and Tucson's investor-first property management company. Maximize your rental income with expert leasing, maintenance, and financial reporting. Get a free rental analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="bg-white text-[#0F172A]">{children}</body>
    </html>
  );
}
