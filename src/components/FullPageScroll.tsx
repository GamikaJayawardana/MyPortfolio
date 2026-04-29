"use client";

import { useEffect, useRef, useState } from "react";
import { usePageContext, PAGE_SECTIONS } from "@/context/PageContext";
import styles from "./FullPageScroll.module.css";

export default function FullPageScroll({ children }: { children: React.ReactNode[] }) {
  const { currentPage, isTransitioning, goToPage } = usePageContext();
  const curRef = useRef(currentPage);
  const touchStartY = useRef(0);

  useEffect(() => { curRef.current = currentPage; }, [currentPage]);

  /* ── Mobile Check ── */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ── Wheel ── */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isMobile) return;
      e.preventDefault();
      if (e.deltaY > 20)       goToPage(curRef.current + 1);
      else if (e.deltaY < -20) goToPage(curRef.current - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goToPage, isMobile]);

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isMobile) return;
      if (["ArrowDown", "PageDown"].includes(e.key)) { e.preventDefault(); goToPage(curRef.current + 1); }
      if (["ArrowUp",   "PageUp"  ].includes(e.key)) { e.preventDefault(); goToPage(curRef.current - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goToPage, isMobile]);

  /* ── Touch ── */
  useEffect(() => {
    const onStart = (e: TouchEvent) => { 
      if (isMobile) return;
      touchStartY.current = e.touches[0].clientY; 
    };
    const onEnd   = (e: TouchEvent) => {
      if (isMobile) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff >  50) goToPage(curRef.current + 1);
      if (diff < -50) goToPage(curRef.current - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend",   onEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [goToPage, isMobile]);

  return (
    <div className={styles.outer}>
      {/* Transition sweep overlay */}
      <div className={`${styles.sweep} ${isTransitioning ? styles.sweepActive : ""}`} aria-hidden />

      {/* Sliding track */}
      <div
        className={styles.track}
        style={{ transform: `translateY(calc(${-currentPage} * 100vh))` }}
      >
        {children.map((child, i) => (
          <div 
            key={i} 
            className={`${styles.page} ${i === currentPage ? styles.pageActive : styles.pageInactive} ${i === currentPage ? "is-active" : ""}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Side dot nav */}
      <nav className={styles.dots} aria-label="Section navigation">
        {PAGE_SECTIONS.map((sec, i) => (
          <button
            key={sec.id}
            className={`${styles.dot} ${i === currentPage ? styles.dotActive : ""}`}
            onClick={() => goToPage(i)}
            aria-label={`Go to ${sec.label}`}
            title={sec.label}
          />
        ))}
      </nav>

      {/* Page counter */}
      <div className={styles.counter} aria-live="polite">
        <span className={styles.counterCurrent}>0{currentPage + 1}</span>
        <span className={styles.counterDivider} />
        <span className={styles.counterTotal}>0{PAGE_SECTIONS.length}</span>
        <span className={styles.counterLabel}>{PAGE_SECTIONS[currentPage].label}</span>
      </div>
    </div>
  );
}
