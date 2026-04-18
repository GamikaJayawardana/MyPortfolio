"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-10">
      {/* Accent bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-xl text-white mb-1">
              Gamika{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Jayawardana</span>
            </h2>
            <p className="font-sans text-sm text-slate-500">AI/ML Engineer · Full-Stack Developer</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center">
            {["Projects", "Experience", "Education", "Certifications", "Contact"].map((l) => (
              <Link key={l} href={l === "Projects" ? "/projects" : `#${l.toLowerCase()}`} className="font-sans text-sm text-slate-400 hover:text-white transition-colors">
                {l}
              </Link>
            ))}
          </div>

          {/* Scroll top */}
          <button onClick={scrollToTop} className="p-3.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-electric-blue hover:shadow-[0_0_15px_rgba(79,195,247,0.3)] transition-all group">
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-slate-600">
            © {new Date().getFullYear()} Gamika Jayawardana. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Built with Next.js & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
