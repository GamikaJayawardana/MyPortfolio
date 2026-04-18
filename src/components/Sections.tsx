"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import {
  ArrowRight, Sparkles, Code2, Briefcase,
  GraduationCap, ChevronLeft, ChevronRight
} from "lucide-react";

// ─── Shared helpers ────────────────────────────────────────────────
function SectionEyebrow({ icon, label, color = "blue" }: { icon: React.ReactNode; label: string; color?: "blue" | "violet" }) {
  return (
    <div className="flex items-center gap-3 justify-center mb-5">
      <div className={`h-px w-10 ${color === "blue" ? "bg-electric-blue/50" : "bg-plasma-violet/50"}`} />
      <span className={`text-xs font-mono tracking-[0.25em] uppercase flex items-center gap-2 ${color === "blue" ? "text-electric-blue" : "text-plasma-violet"}`}>
        {icon} {label}
      </span>
      <div className={`h-px w-10 ${color === "blue" ? "bg-electric-blue/50" : "bg-plasma-violet/50"}`} />
    </div>
  );
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────
export function About() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <SectionEyebrow icon={<Sparkles size={13} />} label="About Me" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Who I{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Am</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="glass-panel p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-5">
              <Sparkles size={18} className="text-electric-blue" />
            </div>
            <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed">
              I am a passionate <span className="text-white font-medium">AI/ML Engineering</span> and <span className="text-white font-medium">Full-Stack Development</span> enthusiast constantly exploring the intersection of distributed systems, machine learning, and beautifully crafted user interfaces.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-panel p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-plasma-violet/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-plasma-violet/10 border border-plasma-violet/20 flex items-center justify-center mb-5">
              <Code2 size={18} className="text-plasma-violet" />
            </div>
            <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed">
              My interests span <span className="text-electric-blue font-medium">Computer Vision</span>, <span className="text-plasma-violet font-medium">Large Language Models</span>, Microservices Architecture, Embedded Systems, and immersive UI/UX experiences. I strive to design applications that defy gravitational norms.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── SKILLS ────────────────────────────────────────────────────────
const skills: Record<string, string[]> = {
  "AI & ML": ["PyTorch", "Computer Vision", "LLMs", "Scikit-Learn", "Data Science"],
  "Full-Stack": ["React 19", "Next.js 15", "Spring Boot", "Tailwind CSS", "Framer Motion"],
  "Database & Cloud": ["MySQL", "Docker", "AWS", "MS SQL", "PostgreSQL"],
  "Systems / Hardware": ["Microservices", "Embedded C++", "IoT"],
  "Tools": ["Git", "Figma", "Linux", "Scrum"],
};

export function SkillsOrbit() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionEyebrow icon={<Code2 size={13} />} label="Skills Matrix" color="violet" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Tech{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Stack</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, items], i) => (
          <ScrollReveal key={cat} delay={i * 0.08}>
            <div className="glass-panel p-7 h-full group hover:border-electric-blue/30 transition-colors">
              <h3 className="font-display text-sm font-semibold text-plasma-violet mb-5 tracking-widest uppercase">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="font-sans text-sm text-slate-300 bg-white/[0.03] border border-white/8 rounded-lg px-3.5 py-1.5 hover:border-electric-blue/40 hover:text-electric-blue transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── TIMELINE ITEM ─────────────────────────────────────────────────
function TimelineItem({ title, org, date, desc, color }: {
  title: string; org: string; date: string; desc: string; color: "blue" | "violet" | "dim";
}) {
  const dotClass = color === "blue"
    ? "bg-electric-blue shadow-[0_0_14px_rgba(79,195,247,0.7)]"
    : color === "violet"
      ? "bg-plasma-violet shadow-[0_0_14px_rgba(199,125,255,0.7)]"
      : "bg-slate-600";
  const orgClass = color === "blue" ? "text-electric-blue" : color === "violet" ? "text-plasma-violet" : "text-slate-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative glass-panel p-7 group hover:border-white/15 transition-colors"
    >
      <div className={`absolute -left-[42px] top-8 w-4 h-4 rounded-full border-4 border-void ${dotClass}`} />
      <div className="font-mono text-xs text-slate-500 mb-2 uppercase tracking-widest">{date}</div>
      <h3 className="font-display text-xl font-semibold text-white mb-1 leading-snug">{title}</h3>
      <div className={`font-sans font-medium text-sm mb-4 ${orgClass}`}>{org}</div>
      {desc && <p className="font-sans text-slate-400 text-sm leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <ScrollReveal>
        <SectionEyebrow icon={<Briefcase size={13} />} label="Experience" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Journey</span>
        </h2>
      </ScrollReveal>
      <div className="relative border-l-2 border-white/[0.07] pl-10 ml-4 space-y-8">
        <TimelineItem title="Founder & Freelancer" org="Greams" date="Mar 2023 – Present" desc="Developing robust full-stack solutions and AI-integrated tools for global clientele. Managing end-to-end software lifecycles and modern architecture implementations." color="blue" />
        <TimelineItem title="Digital Product Promoting Assistant Trainee" org="Bank of Ceylon" date="May 2022 – Feb 2023" desc="Initiated digital product promotions across corporate segments and facilitated technology onboarding programs." color="dim" />
      </div>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <ScrollReveal>
        <SectionEyebrow icon={<GraduationCap size={13} />} label="Education" color="violet" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Academic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma-violet to-electric-blue">Background</span>
        </h2>
      </ScrollReveal>
      <div className="relative border-l-2 border-white/[0.07] pl-10 ml-4 space-y-8">
        <TimelineItem title="BSc (Hons) Electronics & Computer Science" org="University of Kelaniya" date="July 2023 – Present" desc="Current GPA: 3.51. Specialized coursework in Systems Architecture, AI, and Embedded Engineering." color="violet" />
        <TimelineItem title="Diploma in English" org="Sabaragamuwa University of Sri Lanka" date="Jan 2021 – Dec 2022" desc="Advanced communications, professional writing, and literature." color="dim" />
        <TimelineItem title="GCE Advanced Level & Ordinary Level" org="Sivali Central College – Ratnapura" date="Graduated" desc="District Rank 115 in A/L Mathematics Stream. Secured 9 A's in O/L examinations." color="dim" />
      </div>
    </section>
  );
}

// ─── FEATURED PROJECTS ──────────────────────────────────────────────
export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionEyebrow icon={<Code2 size={13} />} label="Projects" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-plasma-violet">Work</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        {featured.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} idx={idx} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/projects" className="group flex items-center gap-2.5 font-sans font-semibold text-sm text-white bg-white/5 border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 hover:border-plasma-violet/50 hover:text-plasma-violet transition-all duration-300">
          Explore All Projects
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

export function ProjectCard({ project, idx }: { project: any; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel overflow-hidden flex flex-col group hover:border-electric-blue/25 transition-colors"
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-electric-blue/10 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500" />
        {project.image
          ? <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          : <div className="w-full h-full bg-white/[0.02] flex items-center justify-center"><span className="font-mono text-xs text-white/15">NO PREVIEW</span></div>
        }
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="font-mono text-xs text-plasma-violet mb-3 tracking-widest uppercase">{project.date}</div>
        <h3 className="font-display font-semibold text-xl text-white group-hover:text-electric-blue transition-colors mb-3 leading-snug">{project.title}</h3>
        <p className="font-sans text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 4).map((st: string) => (
            <span key={st} className="px-3 py-1 text-xs font-sans font-medium bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded-full">{st}</span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-3 py-1 text-xs font-sans font-medium text-slate-500 bg-white/5 border border-white/10 rounded-full">+{project.stack.length - 4}</span>
          )}
        </div>

        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white/60 hover:text-white transition-colors group/link">
          View Case Study
          <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── CERTIFICATIONS CAROUSEL ────────────────────────────────────────
const certs = [
  { title: "Oracle MySQL", issuer: "Oracle", image: "fastapi.png" },
  { title: "Columbia ML", issuer: "Columbia University", image: "fastapi.png" },
  { title: "Linux Foundation", issuer: "Linux Foundation", image: "fastapi.png" },
  { title: "Packt FastAPI", issuer: "Packt", image: "fastapi.png" },
];

export function Certifications() {
  const scrollRef = typeof window !== "undefined" ? require("react").useRef<HTMLDivElement>(null) : null;
  const scroll = (dir: "left" | "right") => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="certifications">
      <ScrollReveal>
        <SectionEyebrow icon={<Sparkles size={13} />} label="Accreditations" color="violet" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white mb-16">
          Certificates &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma-violet to-electric-blue">Awards</span>
        </h2>
      </ScrollReveal>

      <div className="relative flex items-center max-w-6xl mx-auto">
        <button onClick={() => scroll("left")} className="absolute -left-6 z-20 p-3.5 rounded-full bg-void border border-white/10 text-white/60 hover:text-white hover:border-electric-blue hover:shadow-[0_0_20px_rgba(79,195,247,0.3)] transition-all hidden md:flex">
          <ChevronLeft size={22} />
        </button>
        <button onClick={() => scroll("right")} className="absolute -right-6 z-20 p-3.5 rounded-full bg-void border border-white/10 text-white/60 hover:text-white hover:border-electric-blue hover:shadow-[0_0_20px_rgba(79,195,247,0.3)] transition-all hidden md:flex">
          <ChevronRight size={22} />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-4 mask-edges" style={{ scrollbarWidth: "none" }}>
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel overflow-hidden flex-shrink-0 w-[80vw] sm:w-[45vw] lg:w-[calc(33.333%-1rem)] flex flex-col group snap-center hover:border-electric-blue/30 transition-colors"
            >
              <div className="relative w-full aspect-[4/3] bg-white/[0.02] flex items-center justify-center p-8 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 to-plasma-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={`/${cert.image}`} alt={cert.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-white text-base mb-1">{cert.title}</h3>
                <p className="font-sans text-electric-blue text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {["Vide Club", "Leo Club"].map((role) => (
            <span key={role} className="font-sans text-sm text-slate-300 bg-white/[0.04] border border-white/10 rounded-full px-5 py-2">
              {role} — Leadership
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
