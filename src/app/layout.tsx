import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gamika Jayawrdana | AI/ML & Full-Stack Engineer",
  description: "Electronics & CS Undergraduate | AI/ML + Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-sans bg-void text-slate-200 selection:bg-electric-blue/30 selection:text-white min-h-full flex flex-col relative overflow-x-hidden">
        {/* Grain overlay for depth */}
        <div className="fixed inset-0 z-50 grain-overlay pointer-events-none" />
        
        {/* Background glow halos */}
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-electric-blue/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] rounded-full bg-plasma-violet/5 blur-[120px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
