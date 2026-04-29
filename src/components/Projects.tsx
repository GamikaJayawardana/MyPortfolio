"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const max = scrollWidth - clientWidth;
    setProgress(max <= 0 ? 0 : scrollLeft / max);
  };

  useEffect(() => {
    handleScroll(); // Init progress
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scrollByAmount = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>What I&apos;ve Built</p>
          <h2 className={styles.title}>PROJECTS</h2>
        </div>

        <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  unoptimized
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDate}>{project.date}</p>
                <p className={styles.cardDesc}>{project.shortDesc}</p>
                <div className={styles.tags}>
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className={styles.tag}>+{project.tags.length - 2} skills</span>
                  )}
                </div>
                <div className={styles.actions}>
                  <Link href={`/projects/${project.id}`} className={styles.readMore}>
                    Read More
                  </Link>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                      View Live Site
                    </a>
                  ) : project.download ? (
                    <a href={project.download} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                      Download Release
                    </a>
                  ) : project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                      View Source Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Floating Controls */}
        <div className={styles.mobileControls}>
          <button 
            className={styles.ctrlBtn} 
            onClick={() => scrollByAmount(-300)} 
            aria-label="Previous"
            disabled={progress === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className={styles.progressRing}>
            <svg viewBox="0 0 36 36" className={styles.circularChart}>
              <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className={styles.circle} strokeDasharray={`${progress * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>

          <button 
            className={styles.ctrlBtn} 
            onClick={() => scrollByAmount(300)} 
            aria-label="Next"
            disabled={progress >= 0.99}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
