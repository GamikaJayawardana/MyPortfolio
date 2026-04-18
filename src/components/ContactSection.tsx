"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto relative z-10 w-full" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />

        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
            <Mail className="text-electric-blue" size={26} />
          </div>
        </div>

        <div className="inline-flex items-center gap-3 mb-5 opacity-60">
          <div className="h-px w-8 bg-electric-blue/60" />
          <span className="font-mono text-xs text-electric-blue tracking-[0.25em] uppercase">Let's Work Together</span>
          <div className="h-px w-8 bg-electric-blue/60" />
        </div>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Touch</span>
        </h2>

        <p className="font-sans text-slate-400 md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Open to new opportunities, freelance projects, and collaborations. Whether you have a question or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="mailto:gamikakj@gmail.com" className="group inline-flex items-center gap-3 font-sans font-semibold text-sm text-void bg-electric-blue px-8 py-4 rounded-full shadow-[0_0_30px_rgba(79,195,247,0.35)] hover:shadow-[0_0_50px_rgba(79,195,247,0.6)] hover:bg-white transition-all duration-300 hover:-translate-y-0.5">
            <Mail size={16} />
            gamikakj@gmail.com
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="tel:+94702532380" className="inline-flex items-center gap-3 font-sans font-semibold text-sm text-white px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-plasma-violet/50 transition-all duration-300 hover:-translate-y-0.5">
            <Phone size={16} className="text-plasma-violet" />
            +94-70-253-2380
          </a>
        </div>
      </motion.div>
    </section>
  );
}
