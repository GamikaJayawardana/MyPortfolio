import { PageProvider } from "@/context/PageContext";
import Navbar from "@/components/Navbar";
import FullPageScroll from "@/components/FullPageScroll";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageProvider>
      <Navbar />
      <FullPageScroll>
        {[
          <Hero key="home" />,
          <Skills key="skills" />,
          <Projects key="projects" />,
          <Experience key="experience" />,
          <Volunteering key="volunteering" />,
          <Education key="education" />,
          <Certificates key="certificates" />,
          <Contact key="contact" />,
        ]}
      </FullPageScroll>
    </PageProvider>
  );
}
