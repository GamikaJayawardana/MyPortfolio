"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

export const PAGE_SECTIONS = [
  { id: "home",       label: "Home"       },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "education",  label: "Education"  },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
] as const;

export type SectionId = (typeof PAGE_SECTIONS)[number]["id"];

interface PageContextValue {
  currentPage: number;
  isTransitioning: boolean;
  goToPage: (index: number) => void;
}

const PageContext = createContext<PageContextValue>({
  currentPage: 0,
  isTransitioning: false,
  goToPage: () => {},
});

export const usePageContext = () => useContext(PageContext);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canNav = useRef(true);
  const curRef = useRef(0);
  const THROTTLE = 950;

  const goToPage = useCallback((index: number) => {
    if (!canNav.current) return;
    if (index < 0 || index >= PAGE_SECTIONS.length) return;
    if (index === curRef.current) return;
    canNav.current = false;
    curRef.current = index;
    setIsTransitioning(true);
    setCurrentPage(index);
    setTimeout(() => {
      canNav.current = true;
      setIsTransitioning(false);
    }, THROTTLE);
  }, []);

  return (
    <PageContext.Provider value={{ currentPage, isTransitioning, goToPage }}>
      {children}
    </PageContext.Provider>
  );
}
