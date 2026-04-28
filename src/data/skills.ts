export type Skill = {
  name: string;
  iconSlug?: string;
  abbr?: string;
  svg?: string;
};

export type Category = {
  id: string;
  label: string;
  skills: Skill[];
};

export const categories: Category[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      { name: "Machine Learning", abbr: "ML", svg: '<rect x="16" y="16" width="6" height="6" rx="1" stroke="currentColor" fill="none" stroke-width="2.5"/><rect x="2" y="16" width="6" height="6" rx="1" stroke="currentColor" fill="none" stroke-width="2.5"/><rect x="9" y="2" width="6" height="6" rx="1" stroke="currentColor" fill="none" stroke-width="2.5"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-5V8" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "Deep Learning", abbr: "DL", svg: '<polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" fill="none" stroke-width="2.5"/><polyline points="2 17 12 22 22 17" stroke="currentColor" fill="none" stroke-width="2.5"/><polyline points="2 12 12 17 22 12" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "Computer Vision", iconSlug: "opencv", abbr: "CV" },
      { name: "PyTorch", iconSlug: "pytorch", abbr: "PT" },
      { name: "TensorFlow", iconSlug: "tensorflow", abbr: "TF" },
      { name: "Scikit-Learn", iconSlug: "scikitlearn", abbr: "SK" },
      { name: "GenAI (LLMs, RAG)", abbr: "AI", svg: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="currentColor" fill="none" stroke-width="2.5" />' },
      { name: "Prompt Engineering", abbr: "PE", svg: '<polyline points="4 17 10 11 4 5" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "Agentic AI", iconSlug: "langchain", abbr: "AG" },
      { name: "n8n", iconSlug: "n8n", abbr: "N8N" },
      { name: "MLOps", iconSlug: "mlflow", abbr: "MO" },
    ],
  },
  {
    id: "fullstack",
    label: "Full-Stack",
    skills: [
      { name: "Java", abbr: "JV", svg: '<path d="M8.85 17.77s-.96.56.68.75c1.98.23 3 .2 5.18-.22 0 0 .57.36 1.38.67-4.9 2.1-11.08-.12-7.24-.2zM8.3 15.27s-1.08.8.57.97c2.14.22 3.83.24 6.75-.33 0 0 .4.4 1.02.63-5.98 1.75-12.64.14-8.34-.27zM13.18 10.64c1.22 1.4-.32 2.65-.32 2.65s3.08-1.59 1.67-3.58c-1.32-1.86-2.33-2.78 3.15-5.97 0 0-8.61 2.15-4.5 6.9z M17.7 19.86s.71.59-.79 1.04c-2.84.86-11.84 1.12-14.35.03-.9-.39.79-.93 1.32-.04.36.62 1.44.94 2.14.95 2.47.07 6.17-.39 8.36-.48 1.77-.07 3.03.56 3.32.5z M9.28 12.55S5.04 13.6 7.75 14c1.2.18 3.6.14 5.83-.07 1.82-.17 3.65-.54 3.65-.54s-.64.27-1.11.59c-4.47 1.17-13.1.63-10.61-.57 2.1-1.02 3.77-.86 3.77-.86z M15.84 16.17c4.55-2.37 2.45-4.64 1-4.33-.35.07-.5.14-.5.14s.13-.2.38-.29c2.82-1 4.99 2.93-.96 4.48 0 0 .07-.06.08-.1z M13.52 0S15.8 2.28 11.25 5.8c-3.64 2.88-.83 4.52 0 6.4-2.13-1.92-3.69-3.61-2.64-5.19C10.1 4.7 14.5 3.56 13.52 0z M10.05 21.5c4.37.28 11.08-.16 11.24-2.2 0 0-.3.78-3.61 1.4-3.73.7-8.33.62-11.06.17 0 0 .56.46 3.43.63z" fill="currentColor"/>' },
      { name: "Spring Boot", iconSlug: "springboot", abbr: "SB" },
      { name: "Python", iconSlug: "python", abbr: "PY" },
      { name: "FastAPI", iconSlug: "fastapi", abbr: "FA" },
      { name: "JavaScript", iconSlug: "javascript", abbr: "JS" },
      { name: "TypeScript", abbr: "TS", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/></svg>' },
      { name: "Next.js", iconSlug: "nextdotjs", abbr: "NX" },
      { name: "React", iconSlug: "react", abbr: "RE" },
      { name: "C# (.NET)", iconSlug: "dotnet", abbr: "C#" },
      { name: "C", iconSlug: "c", abbr: "C" },
    ],
  },
  {
    id: "database",
    label: "Database & Cloud",
    skills: [
      { name: "MySQL", iconSlug: "mysql", abbr: "My" },
      { name: "MS SQL Server", abbr: "MS", svg: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>' },
      { name: "MongoDB", iconSlug: "mongodb", abbr: "MG" },
      { name: "PostgreSQL", iconSlug: "postgresql", abbr: "PG" },
      { name: "AWS", abbr: "AWS", svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.76 11.62c0 .4.04.72.12.95.09.23.2.48.36.75a.45.45 0 01.07.24c0 .1-.06.2-.19.3l-.63.42a.47.47 0 01-.26.09c-.1 0-.2-.05-.3-.14a3.14 3.14 0 01-.36-.47 7.84 7.84 0 01-.31-.59c-.78.92-1.76 1.38-2.94 1.38-.84 0-1.51-.24-2-.72-.49-.48-.74-1.12-.74-1.92 0-.85.3-1.54.9-2.05.6-.51 1.4-.77 2.4-.77.33 0 .67.03 1.03.08.36.05.73.13 1.12.22v-.71c0-.74-.15-1.26-.46-1.56-.31-.31-.84-.46-1.6-.46-.34 0-.69.04-1.05.13-.36.09-.71.2-1.05.35a2.8 2.8 0 01-.33.12.58.58 0 01-.14.02c-.12 0-.18-.09-.18-.27v-.43c0-.14.02-.24.06-.3a.63.63 0 01.25-.19c.34-.17.75-.32 1.23-.43a5.96 5.96 0 011.5-.17c1.14 0 1.97.26 2.52.77.54.51.81 1.29.81 2.33v3.07zm-4.06 1.52c.32 0 .65-.06.99-.18.34-.12.64-.33.9-.63.15-.18.27-.38.33-.61a3.42 3.42 0 00.09-.82v-.4a8.23 8.23 0 00-.9-.17 7.37 7.37 0 00-.91-.06c-.65 0-1.13.13-1.45.38-.32.26-.48.62-.48 1.1 0 .44.11.78.34 1 .22.24.54.39.97.39H2.7zm7.82.84c-.16 0-.27-.03-.34-.08-.07-.04-.14-.15-.2-.29L7.68 7.92c-.06-.15-.09-.25-.09-.3 0-.12.06-.19.18-.19h.74c.17 0 .28.03.35.08.07.05.13.15.19.3l1.71 6.73 1.58-6.73c.05-.15.1-.25.18-.3.08-.05.2-.08.36-.08h.6c.17 0 .28.03.36.08.08.05.14.15.18.3l1.6 6.82 1.77-6.82c.06-.15.13-.25.2-.3.07-.05.18-.08.35-.08h.7c.12 0 .18.06.18.19a.73.73 0 01-.02.14c-.01.05-.03.1-.06.17l-2.43 6.69c-.06.15-.13.25-.2.29-.08.05-.18.08-.34.08h-.65c-.17 0-.28-.03-.36-.09-.08-.05-.14-.15-.19-.3l-1.57-6.53-1.56 6.52c-.05.15-.1.25-.19.3-.08.06-.2.09-.36.09h-.65zm12.96.25c-.4 0-.8-.05-1.18-.14-.38-.1-.68-.2-.88-.32-.12-.07-.2-.15-.23-.22a.56.56 0 01-.05-.22v-.45c0-.18.07-.27.2-.27a.49.49 0 01.16.03c.05.02.13.05.22.1.3.13.62.24.97.31.36.07.7.1 1.05.1.56 0 1-.09 1.3-.28a.9.9 0 00.46-.8c0-.23-.08-.43-.23-.6-.16-.16-.45-.31-.89-.44l-1.27-.4c-.64-.2-1.12-.5-1.4-.9a2.15 2.15 0 01-.43-1.29c0-.38.08-.71.24-1 .17-.28.39-.53.67-.73.28-.2.6-.35.97-.45.36-.1.75-.15 1.15-.15.2 0 .41.01.62.04.22.03.41.07.6.11.18.05.35.1.51.16.16.06.28.12.37.18.13.08.22.16.27.25.05.08.08.18.08.32v.41c0 .19-.07.28-.2.28-.07 0-.18-.04-.33-.11a3.9 3.9 0 00-1.63-.33c-.5 0-.9.08-1.18.25-.28.17-.42.43-.42.79 0 .24.09.44.26.6.17.16.49.33.96.47l1.25.4c.63.2 1.08.48 1.36.84.27.37.41.79.41 1.26 0 .39-.08.74-.25 1.05-.17.31-.4.58-.7.8-.3.23-.65.4-1.07.52-.43.12-.89.18-1.38.18z"/><path fill="currentColor" d="M11.53 17.65c-3.14 0-6.17-1.12-8.4-3.13-.31-.28-.35-.74-.08-1.06.26-.3.72-.34 1.03-.07 1.95 1.74 4.54 2.7 7.22 2.7 2.95 0 5.8-1.18 7.9-3.3.28-.29.75-.29 1.04-.01.28.28.28.74-.01 1.03-2.38 2.4-5.54 3.73-8.7 3.84zM23.63 12.51c-.2-.68-.86-1.12-1.55-1.07l-3.95.27c-.4.03-.7-.31-.67-.71.03-.39.36-.69.76-.66l2.42.16c-.02-.1-.04-.19-.07-.28-.31-1.08-1.06-1.87-2.09-2.2-.4-.13-.82-.2-1.25-.2-1.57 0-2.95.98-3.47 2.45-.14.4-.6.61-1 .47-.4-.14-.61-.6-.47-1 1.25-3.56 5.56-4.54 8.2-1.85.6.61 1.05 1.34 1.3 2.15l.08.27v-2.3c0-.4.32-.72.72-.72.4 0 .72.32.72.72v3.83c0 .85-.64 1.57-1.48 1.67z" /></svg>' },
    ],
  },
  {
    id: "hardware",
    label: "Hardware / Embedded",
    skills: [
      { name: "Arduino", iconSlug: "arduino", abbr: "ARD" },
      { name: "ESP32-CAM", iconSlug: "espressif", abbr: "ESP" },
      { name: "PIC", abbr: "PIC", svg: '<path d="M4 4h16v16H4V4zm5 5v6M15 9v6M4 9h16M4 15h16" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "Microcontrolers", abbr: "μC", svg: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="currentColor" fill="none" stroke-width="2.5"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="20" y1="14" x2="23" y2="14" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" fill="none" stroke-width="2.5"/><line x1="1" y1="14" x2="4" y2="14" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "IoT", iconSlug: "internetcomputer", abbr: "IoT" },
      { name: "Micro C", abbr: "μC" },
      { name: "PCB Design", abbr: "PCB", svg: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.5" ry="2.5" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M7 22v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M12 2v5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="12" cy="9" r="2" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M22 12h-5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="15" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M2 12h5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="9" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>' },
      { name: "ROS 2", iconSlug: "ros", abbr: "ROS" },
    ],
  },
  {
    id: "tools",
    label: "Tools / Other",
    skills: [
      { name: "Docker", iconSlug: "docker", abbr: "DKR" },
      { name: "Git", iconSlug: "git", abbr: "GIT" },
      { name: "Linux", iconSlug: "linux", abbr: "LIN" },
      { name: "Chrome Ext Dev", iconSlug: "googlechrome", abbr: "EXT" },
      { name: "UI/UX Design", iconSlug: "figma", abbr: "UX" },
      { name: "Graphic Design", abbr: "GD", svg: '<path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" fill="none" stroke-width="2.5"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" fill="none" stroke-width="2.5"/><path d="M2 2l7.586 7.586" stroke="currentColor" fill="none" stroke-width="2.5"/><circle cx="11" cy="11" r="2" stroke="currentColor" fill="none" stroke-width="2.5"/>' },
      { name: "3D Design", iconSlug: "blender", abbr: "3D" },
    ],
  },
];
