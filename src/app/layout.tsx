import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Anish Bhat | AI Engineer",
  description: "Portfolio of Anish Bhat, AI/ML Engineer and Backend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-brand-black text-brand-light relative min-h-screen`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
