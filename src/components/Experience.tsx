"use client";

import { MouseEvent } from "react";
import { professionalExperience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>Where I&apos;ve Worked</p>
          <h2 className={styles.title}>EXPERIENCE</h2>
        </div>

        <div className={styles.layout}>
          {/* Professional Experience */}
          <div className={styles.timelineSection}>

            <div className={styles.timeline}>
              {professionalExperience.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineNode}></div>
                  <div
                    className={styles.spotlightCard}
                    onMouseMove={handleMouseMove}
                  >
                    <div className={styles.timelineContent}>
                      <div className={styles.itemHeader}>
                        <h4 className={styles.itemRole}>{item.role}</h4>
                        <span className={styles.itemDate}>{item.date}</span>
                      </div>
                      <p className={styles.itemCompany}>{item.company}</p>
                      {item.points.length > 0 && (
                        <ul className={styles.itemPoints}>
                          {item.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
