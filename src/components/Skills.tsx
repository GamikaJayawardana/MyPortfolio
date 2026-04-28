"use client";

import { useState } from "react";
import Image from "next/image";
import { categories } from "@/data/skills";
import styles from "./Skills.module.css";

function SkillIcon({ iconSlug, abbr, svg }: { iconSlug?: string; abbr?: string; svg?: string }) {
  if (svg) {
    if (svg.trim().startsWith("<svg")) {
      return (
        <div 
          className={styles.icon} 
          style={{ color: "#fff" }}
          dangerouslySetInnerHTML={{ __html: svg }} 
        />
      );
    }
    return (
      <svg 
        viewBox="0 0 24 24" 
        className={styles.icon} 
        style={{ color: "#fff" }}
        dangerouslySetInnerHTML={{ __html: svg }} 
      />
    );
  }

  if (iconSlug) {
    // using SimpleIcons CDN
    return (
      <Image
        src={`https://cdn.simpleicons.org/${iconSlug}/white`}
        alt={abbr || "icon"}
        width={32}
        height={32}
        className={styles.icon}
        unoptimized
      />
    );
  }
  return <span className={styles.abbrIcon}>{abbr}</span>;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const cat = categories[activeTab];

  return (
    <section id="skills" className={styles.skills}>


      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.nameTag}>Technologies &amp; Tools</p>
          <h2 className={styles.title}>MY EXPERTISE</h2>
          <p className={styles.summary}>
            Passionate Electronics &amp; Computer Science undergraduate at the University of Kelaniya specializing in AI/ML
            Engineering and Full-Stack Development. Proven track record in architecting enterprise-grade web platforms,
            Agentic AI workflows, and specialized ML models alongside high-performance browser extensions. Expert in
            Computer Vision, Large Language Models (LLMs), and Scalable Microservices, with a unique technical
            foundation in Embedded Systems and UI/UX Design.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Categories Sidebar */}
          <div className={styles.sidebar}>
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(i)}
                className={`${styles.btnOutline} ${i === activeTab ? styles.btnActive : ""}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className={styles.skillsGrid}>
            {cat.skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.iconWrap}>
                  <SkillIcon iconSlug={skill.iconSlug} abbr={skill.abbr} svg={skill.svg} />
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
