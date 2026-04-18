import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import { CanvasBackground } from "@/components/CanvasBackground";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <CanvasBackground />
      <main className="min-h-screen py-28 px-6 max-w-4xl mx-auto relative z-10 w-full flex flex-col">

        <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-electric-blue mb-16 font-sans font-medium text-sm transition-colors self-start bg-white/[0.04] px-5 py-2.5 rounded-full border border-white/10 hover:border-electric-blue/40">
          <ArrowLeft size={15} /> Back to Archive
        </Link>

        <article className="glass-panel p-8 md:p-12 relative overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-electric-blue/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-plasma-violet/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <header className="mb-10 relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4 opacity-80">
              <div className="h-px w-8 bg-plasma-violet/60" />
              <span className="font-mono text-xs text-plasma-violet tracking-[0.25em] uppercase">{project.date}</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              {project.title}
            </h1>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 font-sans text-xs font-medium border border-electric-blue/20 text-electric-blue bg-electric-blue/10 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-sans font-semibold text-sm text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 px-6 py-3 rounded-full hover:border-white/25 hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  View Source
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-sans font-semibold text-sm text-void bg-electric-blue px-6 py-3 rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(79,195,247,0.4)] transition-all">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </header>

          {/* Project image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 relative z-10 border border-white/[0.06]">
            {project.image
              ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              : <div className="w-full h-full bg-white/[0.02] flex items-center justify-center"><span className="font-mono text-sm text-white/15">NO PREVIEW AVAILABLE</span></div>
            }
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <p className="font-sans text-slate-200 text-lg md:text-xl font-medium leading-relaxed">{project.description}</p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-plasma-violet/60" />
                <span className="font-mono text-xs text-plasma-violet tracking-[0.25em] uppercase">Architecture & Specs</span>
              </div>
              <p className="font-sans text-slate-400 text-base leading-relaxed">{project.details}</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
