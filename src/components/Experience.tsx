"use client";

import { professionalExperience, leadershipExperience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
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
            <h3 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h3>
            <div className={styles.timeline}>
              {professionalExperience.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineNode}></div>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
