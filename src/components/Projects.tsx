"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>What I&apos;ve Built</p>
          <h2 className={styles.title}>PROJECTS</h2>
        </div>

        <div className={styles.carousel}>
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
      </div>
    </section>
  );
}
