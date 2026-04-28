export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  download?: string;
  video?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "colabgo",
    title: "ColabGO: Ghost Operator & Resource Dashboard",
    date: "Feb 2026 – Feb 2026",
    shortDesc: "Developed a high-performance Chrome Extension to optimize workflows for data scientists using Google Colab.",
    fullDesc: "Developed a high-performance Chrome Extension (Manifest V3) designed to optimize workflows for data scientists using Google Colab. The project focuses on real-time resource transparency and session continuity during long-running machine learning tasks.\n\nKey Technical Contributions:\n⚡Advanced Web Scraping: Engineered a \"Shadow DOM piercing\" scraper to extract live System RAM, Disk, and GPU usage from Google Colab’s internal web components.\n⚡Dynamic UI/UX: Built a responsive dark-mode dashboard using HTML/CSS that dynamically detects and displays hardware acceleration (GPU) metrics only when active.\n⚡Asynchronous Architecture: Implemented a robust messaging system between the background service worker and the UI popup to fetch data across different browser tabs.\n⚡Session Automation: Developed logic to automatically handle idle prompts and \"Reconnect\" dialogs, ensuring uninterrupted background execution for intensive training models.",
    image: "https://opengraph.githubassets.com/1/GamikaJayawardana/Colab-Ghost-Operator",
    tags: ["JavaScript", "Google Colab", "Chrome Extension", "Manifest V3"],
    download: "https://github.com/GamikaJayawardana/Colab-Ghost-Operator/releases",
  },
  {
    id: "ai-email-assistant",
    title: "AI-Powered Email Assistant for Gmail with Browser Extension",
    date: "Jan 2026 – Jan 2026",
    shortDesc: "Helps users generate thoughtful, context-aware email replies directly within their browser.",
    fullDesc: "The AI-Powered Email Assistant is designed to help users generate thoughtful, context-aware email replies directly within their browser.\n\nThis project consists of three core components working together:\n🔹 Spring Boot Backend: A robust API that handles email generation logic. It leverages Spring WebFlux for reactive processing and integrates with AI services to craft high-quality responses.\n🔹 React Frontend: A modern, responsive dashboard built with Vite and Tailwind CSS, providing a clean interface for managing the assistant's settings and features.\n🔹 Chrome Extension: The bridge between the user and the AI. It injects functionality directly into Gmail, allowing for seamless interaction without leaving the inbox.\n\nKey Technical Highlights:\n🔹 Backend: Java 25, Spring Boot 4.0.3, Lombok, and Maven.\n🔹 Frontend: React, Vite, and PostCSS for optimized styling.\n🔹 Browser Integration: Manifest V3 extension with content scripts for secure interaction with Gmail.\n🔹 Permissions: Implements secure storage and active tab permissions to ensure user data privacy while maintaining functionality.\n\nI built this to explore the intersection of productivity tools and Large Language Models (LLMs), focusing on creating a smooth user experience within existing workflows.",
    image: "https://opengraph.githubassets.com/1/GamikaJayawardana/AI-Powered-Email-Assistant",
    tags: ["Java", "Spring Boot", "React", "Vite", "Tailwind CSS", "LLMs"],
    github: "https://github.com/GamikaJayawardana/AI-Powered-Email-Assistant",
    video: "https://www.linkedin.com/posts/gamikakj_softwareengineering-springboot-reactjs-activity-7439556965263024128-dIgA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeBCNwBruCrziSype41ni7RzTR7RHog2Sk",
  },
  {
    id: "onra-international",
    title: "Onra International – Migration Consultancy Website",
    date: "Dec 2025 – Jan 2026",
    shortDesc: "High-performance, SEO-optimized web application for a leading migration consultancy firm.",
    fullDesc: "Associated with Greams\n\nDeveloped a high-performance, SEO-optimized web application for a leading migration consultancy firm. The goal was to transform a complex service offering into a streamlined, trustworthy digital experience that drives lead generation for student and professional visas.\n\nKey Technical Contributions:\n⚡Modern Frontend Architecture: Engineered the platform using Next.js 16 and React 19, leveraging the App Router for optimized server-side rendering and faster page loads.\n⚡Production-Grade Animations: Implemented Framer Motion to create fluid, meaningful transitions (such as the dynamic Hero slider and scroll-reveals) that enhance user engagement without sacrificing performance.\n⚡Responsive UI/UX System: Designed and built a mobile-first UI using Tailwind CSS 4, ensuring a seamless experience across all devices for a global user base.\n⚡Performance Optimization: Integrated the Sharp image processing library for automated asset optimization and maintained a strict TypeScript environment for robust, bug-free deployment.\n⚡Conversion-Focused Design: Architected clear CTA (Call-to-Action) paths and service modules that simplified the user journey from \"Information Seeking\" to \"Expert Consultation\".\n\nStack:\nNext.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion\n\nKey Outcomes:\nSuccessfully delivered a scalable digital gateway capable of handling high traffic with a 98% focus on visa success storytelling.\nAchieved near-perfect Core Web Vitals through efficient component-driven architecture.",
    image: "projects/onra.png",
    tags: ["Next.js", "TypeScript", "React 19", "Tailwind CSS 4", "Framer Motion"],
    link: "https://www.onrainternational.com",
    video: "https://www.linkedin.com/posts/gamikakj_australiancleaningservice-webdesign-branding-activity-7414312025192837120-j_7t?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeBCNwBruCrziSype41ni7RzTR7RHog2Sk",
  },
  {
    id: "dazzle-cleaning",
    title: "Dazzle Cleaning - Cleaning Service Website",
    date: "Oct 2025 – Nov 2025",
    shortDesc: "Comprehensive cleaning service website for the Australian market.",
    fullDesc: "Associated with Greams\n\nThrough Greams Studio, I recently developed a comprehensive cleaning service website for the Australian market. While the design is all about trust and cleanliness, the code \"under the hood\" is built for pure performance and scalability.\n\n👨💻 The Tech Stack: For this project, I utilized the latest web technologies to ensure a lightning-fast user experience and solid SEO:\n\n⚡ Core: Next.js 15 (App Router) & React 19\n🎨 Styling: Tailwind CSS + clsx for conditional styling\n✨ Animations: Framer Motion for smooth UI transitions\n📧 Backend: Server-side email handling integrated with Resend API\n📱 UI: Radix UI components for accessibility\n\nThe goal was to create something that doesn't just look good but performs flawlessly across devices.",
    image: "projects/dazzle.png",
    tags: ["Next.js", "JavaScript", "React 19", "Tailwind CSS"],
    link: "https://www.dazzlecleaning.com.au",
    video: "https://www.linkedin.com/posts/gamikakj_australiancleaningservice-webdesign-branding-activity-7414312025192837120-j_7t?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeBCNwBruCrziSype41ni7RzTR7RHog2Sk",
  },
  {
    id: "ridexpress",
    title: "RideXpress – Car Rental Management System",
    date: "Jun 2025 – Jul 2025",
    shortDesc: "Car Rental Management System built with .NET Framework (C#), MS SQL Server, and RDLC Reports.",
    fullDesc: "Associated with University of Kelaniya Sri Lanka\n\nAs part of the Visual Programming module, my team and I developed RideXpress, a Car Rental Management System built with .NET Framework (C#), MS SQL Server, and RDLC Reports.\n\n🔹 Key Features\nDashboard with interactive RDLC reports\nCustomer management\nCar registration and management\nCar issue & return functionalities\n\n🔹 What I Learned\nThrough this project, I gained practical experience in:\nDeveloping desktop applications with C# and .NET Framework\nDesigning and integrating MS SQL Server databases\nCreating and embedding RDLC reports for reporting & analysis\nEnhancing UI design for usability and user experience",
    image: "https://opengraph.githubassets.com/1/GamikaJayawardana/CarRentalSystem-RideXpress-V3",
    tags: ["C#", ".NET Framework", "MS SQL Server", "RDLC Reports"],
    github: "https://github.com/GamikaJayawardana/CarRentalSystem-RideXpress-V3",
    video: "https://www.linkedin.com/posts/gamikakj_visualprogramming-dotnet-csharp-activity-7372549883360227328-mFIF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEeBCNwBruCrziSype41ni7RzTR7RHog2Sk",
  }
];
