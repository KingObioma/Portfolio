export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  icon?: string;
}

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "PHP" },
      { name: "SQL" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    name: "Frontend Frameworks",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Angular" },
    ],
  },
  {
    name: "Backend Frameworks",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Django" },
      { name: "FastAPI" },
      { name: "Laravel" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Azure" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
    ],
  },
  {
    name: "Tools & Libraries",
    items: [
      { name: "Git" },
      { name: "TailwindCSS" },
      { name: "Prisma" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "Redux" },
      { name: "Zustand" },
      { name: "Webpack" },
      { name: "Vite" },
    ],
  },
];
