"use client";

import { leadershipExperience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Volunteering() {
  return (
    <section id="volunteering" className={styles.experience} style={{ background: "#0a0a0a" }}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>Giving Back</p>
          <h2 className={styles.title} style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>LEADERSHIP &amp; VOLUNTEERING</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.timelineSection}>
            <div className={styles.timeline}>
              {leadershipExperience.map((item) => (
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
