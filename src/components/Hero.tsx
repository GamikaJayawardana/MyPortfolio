"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: "GitHub", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
  { label: "Instagram", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "Twitter", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
];

function FadeUp({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-28">

      {/* Ambient halos */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-electric-blue/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-plasma-violet/[0.05] blur-[140px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 w-full max-w-6xl mx-auto">

        {/* ——— AVATAR ——— */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-[-30px] rounded-full border border-dashed border-electric-blue/20 animate-[spin_22s_linear_infinite]" />
          <div className="absolute inset-[-15px] rounded-full border border-plasma-violet/20 animate-[spin_14s_linear_infinite_reverse]" />
          <div className="absolute inset-[-2px] rounded-full border border-electric-blue/30 shadow-[0_0_50px_rgba(79,195,247,0.18)]" />

          <motion.div
            className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(79,195,247,0.12)]"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/Avatar.png" alt="Gamika Jayawardana" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-void/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 whitespace-nowrap shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            <span className="font-sans text-xs text-slate-300 font-medium">Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* ——— TEXT CONTENT ——— */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">

          <FadeUp delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-electric-blue/60" />
              <span className="font-mono text-xs text-electric-blue tracking-[0.25em] uppercase">Electronics & CS Undergraduate</span>
              <div className="h-px w-8 bg-electric-blue/60" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6">
              Gamika{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">
                Jayawardana
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-7">
              {["AI / ML Engineering", "Full-Stack Development", "Research"].map((tag) => (
                <span key={tag} className="font-sans text-sm text-slate-300 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="font-sans text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Building gravity-defying digital experiences at the intersection of{" "}
              <span className="text-electric-blue font-medium">machine learning</span>,{" "}
              <span className="text-plasma-violet font-medium">full-stack systems</span>, and immersive UI design.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start mb-9 text-slate-400 text-sm font-sans">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-electric-blue flex-shrink-0" />
                <span>Ratnapura, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-plasma-violet flex-shrink-0" />
                <span>gamikakj@gmail.com</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link href="#contact" className="group flex items-center gap-2.5 font-sans font-semibold text-sm text-void bg-electric-blue px-7 py-3.5 rounded-full shadow-[0_0_30px_rgba(79,195,247,0.35)] hover:shadow-[0_0_50px_rgba(79,195,247,0.6)] hover:bg-white transition-all duration-300 hover:-translate-y-0.5">
                Initiate Contact
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="flex items-center font-sans font-semibold text-sm text-white px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-0.5">
                View Projects
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <Link key={s.label} href={s.href} aria-label={s.label} className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:border-electric-blue/50 hover:bg-electric-blue/10 hover:-translate-y-1 transition-all duration-300">
                  {s.icon}
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
