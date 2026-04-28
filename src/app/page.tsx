import { PageProvider } from "@/context/PageContext";
import Navbar from "@/components/Navbar";
import FullPageScroll from "@/components/FullPageScroll";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import PlaceholderSection from "@/components/PlaceholderSection";

export default function Home() {
  return (
    <PageProvider>
      <Navbar />
      <FullPageScroll>
        {[
          <Hero key="home" />,
          <Skills key="skills" />,
          <PlaceholderSection key="projects" title="Projects" subtitle="What I've built" index={2} />,
          <PlaceholderSection key="education" title="Education" subtitle="My academic journey" index={3} />,
          <PlaceholderSection key="experience" title="Experience" subtitle="Where I've worked" index={4} />,
          <PlaceholderSection key="contact" title="Contact" subtitle="Let's work together" index={5} />,
        ]}
      </FullPageScroll>
    </PageProvider>
  );
}
