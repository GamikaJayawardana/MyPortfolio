"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/Sections";
import { CanvasBackground } from "@/components/CanvasBackground";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsArchive() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <CanvasBackground />
      <main className="min-h-screen flex flex-col py-28 px-6 max-w-7xl mx-auto relative z-10 w-full">

        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-electric-blue mb-16 font-sans font-medium text-sm transition-colors self-start bg-white/[0.04] px-5 py-2.5 rounded-full border border-white/10 hover:border-electric-blue/40">
          <ArrowLeft size={15} /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-electric-blue/60" />
            <span className="font-mono text-xs text-electric-blue tracking-[0.25em] uppercase">Portfolio</span>
            <div className="h-px w-8 bg-electric-blue/60" />
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-5">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Archive</span>
          </h1>
          <p className="font-sans text-slate-400 text-base md:text-lg leading-relaxed mb-16 max-w-2xl">
            A complete record of system components, research modules, and full-stack implementations — spanning AI extensions to enterprise architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} idx={idx} />
            ))}
          </div>
        </motion.div>
      </main>
    </ReactLenis>
  );
}
