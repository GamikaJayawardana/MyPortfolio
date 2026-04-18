export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  details: string;
  stack: string[];
  featured: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "colab-go",
    title: "ColabGO: Ghost Operator & Resource Dashboard",
    date: "Feb 2026",
    description: "Chrome Extension (Manifest V3) for data scientists. Advanced Web Scraping, Dynamic UI/UX, Asynchronous Architecture.",
    details: "Advanced Web Scraping (Shadow DOM piercing), Dynamic UI/UX (dark-mode dashboard detecting GPU), Asynchronous Architecture (messaging system), Session Automation (handling idle prompts).",
    stack: ["JavaScript", "Google Colab", "Manifest V3"],
    featured: true,
    image: "/onra.png",
  },
  {
    slug: "ai-email-assistant",
    title: "AI-Powered Email Assistant for Gmail",
    date: "Jan 2026",
    description: "An AI assistant integrating directly into Gmail via a Chrome Extension powered by a Spring Boot backend.",
    details: "The backend is powered by Java 25, Spring Boot 4.0.3, and WebFlux, while the frontend is built using Vite, Tailwind CSS, and React as a secure Manifest V3 Chrome Extension.",
    stack: ["Java 25", "Spring Boot 4.0.3", "React", "Tailwind CSS", "Chrome Extension"],
    featured: true,
    image: "/onra.png",
  },
  {
    slug: "onra-international",
    title: "Onra International – Migration Consultancy Website",
    date: "Dec 2025 – Jan 2026",
    description: "A fast, modern website focusing on visa success storytelling and performance.",
    details: "Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Focused 98% on storytelling and achieving near-perfect Core Web Vitals with sharp image processing.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    featured: true,
    image: "/onra.png",
  },
  {
    slug: "dazzle-cleaning",
    title: "Dazzle Cleaning - Cleaning Service Website",
    date: "Oct 2025 – Nov 2025",
    description: "Modern landing page and interactive booking site for a cleaning service.",
    details: "Developed utilizing Next.js 15, React 19, Tailwind CSS, Framer Motion, Resend API for backend emails, and Radix UI primitives.",
    stack: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Resend", "Radix UI"],
    featured: true,
    image: "/onra.png",
  },
  {
    slug: "ridexpress",
    title: "RideXpress – Car Rental Management System",
    date: "Jun 2025 – Jul 2025",
    description: "A feature-rich .NET application for managing car rentals, customers, and reporting.",
    details: "A .NET Framework (C#) application backed by MS SQL Server, featuring RDLC Reports. Included a dashboard with interactive reports, customer, and car management capabilities.",
    stack: ["C#", ".NET Framework", "MS SQL Server", "RDLC"],
    featured: false,
    image: "/onra.png",
    githubUrl: "#",
  },
  {
    slug: "egocentric-navigation",
    title: "Egocentric Assistive Navigation via Monocular Depth Estimation",
    date: "Ongoing",
    description: "An AI-powered assistive tool estimating depth from monocular vision to navigate space.",
    details: "Ongoing research and implementation into Monocular Depth Estimation utilizing advanced Computer Vision techniques to assist navigation.",
    stack: ["Python", "PyTorch", "Computer Vision", "AI/ML"],
    featured: false,
    image: "/onra.png",
  },
  {
    slug: "harvestlink",
    title: "HarvestLink: Microservices-based B2B Agri Marketplace",
    date: "2024",
    description: "A comprehensive microservices platform connecting agricultural businesses.",
    details: "A distributed B2B marketplace allowing efficient agricultural resource trading, leveraging a robust microservices architecture.",
    stack: ["Microservices", "Docker", "Node.js", "React"],
    featured: false,
    image: "/onra.png",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
