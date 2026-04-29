"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import styles from "./Certificates.module.css";

export default function Certificates() {
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
    <section id="certificates" className={styles.certificates}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>Licenses &amp; Certifications</p>
          <h2 className={styles.title}>CERTIFICATES</h2>
        </div>

        <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <div className={styles.imageWrap}>
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className={styles.image}
                    unoptimized
                  />
                ) : (
                  <div className={styles.placeholderImage}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle} title={cert.title}>{cert.title}</h3>
                <p className={styles.cardIssuer}>{cert.issuer}</p>
                <p className={styles.cardDate}>{cert.date}</p>
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
