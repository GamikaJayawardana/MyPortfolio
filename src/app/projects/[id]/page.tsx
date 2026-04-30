import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./ProjectDetails.module.css";

// Generate static params
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.backBtn}>
          ← Back to Portfolio
        </Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        </header>

        <div className={styles.heroImageWrap}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.heroImage}
            unoptimized
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDesc}>{project.fullDesc}</p>

          {project.scrollableImage && (
            <div className={styles.scrollableImageWrap}>
              <img 
                src={project.scrollableImage} 
                alt={`${project.title} - Scrollable View`} 
                className={styles.scrollImage} 
              />
            </div>
          )}

          <div className={styles.links}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Visit Live Site
              </a>
            )}
            {project.download && (
              <a href={project.download} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Download Release
              </a>
            )}
            {project.video && (
              <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                Watch Demo Video
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                View Source Code
              </a>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
