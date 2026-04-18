import { CanvasBackground } from "@/components/CanvasBackground";
import { Hero } from "@/components/Hero";
import { About, SkillsOrbit, ExperienceTimeline, EducationTimeline, FeaturedProjects, Certifications } from "@/components/Sections";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <CanvasBackground />
      <main className="flex flex-col relative w-full overflow-hidden">
        <Hero />
        <About />
        <SkillsOrbit />
        <ExperienceTimeline />
        <EducationTimeline />
        <FeaturedProjects />
        <Certifications />
        <ContactSection />
        <Footer />
      </main>
    </ReactLenis>
  );
}
