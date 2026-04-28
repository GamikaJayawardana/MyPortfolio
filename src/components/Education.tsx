"use client";

import { education } from "@/data/education";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>My Academic Journey</p>
          <h2 className={styles.title}>EDUCATION</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.timelineSection}>
            <div className={styles.timeline}>
              {education.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineNode}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemDegree}>{item.degree}</h4>
                      <span className={styles.itemDate}>{item.date}</span>
                    </div>
                    <p className={styles.itemInstitution}>{item.institution}</p>
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
