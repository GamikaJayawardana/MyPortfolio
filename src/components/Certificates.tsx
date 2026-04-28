"use client";

import Image from "next/image";
import { certificates } from "@/data/certificates";
import styles from "./Certificates.module.css";

export default function Certificates() {
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>Licenses &amp; Certifications</p>
          <h2 className={styles.title}>CERTIFICATES</h2>
        </div>

        <div className={styles.carousel}>
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
      </div>
    </section>
  );
}
