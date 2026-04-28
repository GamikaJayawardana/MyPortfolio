export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  points: string[];
}

export const professionalExperience: ExperienceItem[] = [
  {
    id: "greams",
    role: "Founder and Freelancer",
    company: "Greams",
    date: "March 2023 - Present",
    points: [
      "Leading a creative design and development service, delivering full-stack web solutions and branding for international clients.",
      "Architected and deployed high-performance web applications using Next.js 16 and React 19, achieving 98%+ Core Web Vital performance scores and a 40% increase in organic SEO traffic.",
      "Developed automated service modules and custom API integrations to streamline business operations and lead generation for global professional services.",
    ],
  },
  {
    id: "boc",
    role: "Digital Product Promoting Assistant Trainee",
    company: "Bank of Ceylon",
    date: "May 2022 - Feb 2023",
    points: [
      "Assisted in digital banking adoption and collaborated with technical teams to improve service quality and customer onboarding.",
    ],
  },
];

export const leadershipExperience: ExperienceItem[] = [
  {
    id: "vide-editor",
    role: "Senior Editor",
    company: "Vide Club - University of Kelaniya",
    date: "May 2025 – April 2026",
    points: [],
  },
  {
    id: "vide-design",
    role: "Head of Designs, KelaniSTEAM Avenue",
    company: "Vide Club - University of Kelaniya",
    date: "Dec 2024 – May 2025",
    points: [],
  },
  {
    id: "leo-relations",
    role: "External Relations Coordinator, Poverty and Hunger Avenue",
    company: "Leo Club of University of Kelaniya",
    date: "Sep 2024 – May 2025",
    points: [],
  },
  {
    id: "medusa-design",
    role: "Head of Designs",
    company: "Medusa 1.0",
    date: "Aug 2024 – Dec 2024",
    points: [],
  },
  {
    id: "uok-robot-pr",
    role: "Assistant Public Relations Coordinator",
    company: "UOK Robot Battles",
    date: "Jun 2024 – Oct 2024",
    points: [],
  },
];
