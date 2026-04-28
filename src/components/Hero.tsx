import styles from "./Hero.module.css";

export default function Hero() {
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
        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnOutline}>
            View My Projects
          </a>
          <a
            href="/CV/GamikaJayawardhana.pdf"
            className={styles.btnOutline}
            download="GamikaJayawardhana_CV.pdf"
          >
            Download Resume
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
