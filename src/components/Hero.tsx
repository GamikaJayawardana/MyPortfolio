"use client";

import { usePageContext, PAGE_SECTIONS } from "@/context/PageContext";
import styles from "./Hero.module.css";

const sectionIndex = (id: string) => PAGE_SECTIONS.findIndex((s) => s.id === id);

export default function Hero() {
  const { goToPage } = usePageContext();

  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgDesktop} aria-hidden="true" />
      <div className={styles.bgMobile} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.nameTag}>GAMIKA JAYAWARDHANA</p>
        <h1 className={styles.title}>
          AI ML ENGINEER &amp;<br />
          FULL STACK DEVELOPER
        </h1>
        <p className={styles.subtitle}>
          Bridging intelligent algorithms with robust full‑stack solutions.
        </p>
        {/*
          These must drive the full-page scroll via goToPage. A plain #hash
          anchor makes the browser scroll the fixed, overflow:hidden container
          instead — which leaves the section transform out of sync and, with no
          scrollbar available, no way to scroll back.
        */}
        <div className={styles.ctas}>
          <button
            type="button"
            onClick={() => goToPage(sectionIndex("projects"))}
            className={styles.btnOutline}
          >
            View My Projects
          </button>
          <a
            href="/CV/GamikaJayawardhana.pdf"
            className={styles.btnOutline}
            download="GamikaJayawardhana_CV.pdf"
          >
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => goToPage(sectionIndex("contact"))}
            className={styles.btnOutline}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
