export type SkillCategory = "frontend" | "backend" | "workflow";

export interface SkillItem {
  name: string;
  status: "Project use" | "Working" | "Familiar";
}

export interface SkillCategoryData {
  id: SkillCategory;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryData[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive interfaces and component-based React development.",
    skills: [
      { name: "HTML5 / CSS3 / JavaScript", status: "Working" },
      { name: "TypeScript / React", status: "Project use" },
      { name: "Next.js", status: "Familiar" },
      { name: "Tailwind CSS / Shadcn UI", status: "Project use" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "REST APIs, server structure, database models, and auth flows.",
    skills: [
      { name: "Node.js / Express.js", status: "Project use" },
      { name: "RESTful APIs / MVC Architecture", status: "Project use" },
      { name: "Prisma", status: "Project use" },
      { name: "PostgreSQL / MySQL", status: "Familiar" },
    ],
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    description: "Development tools used for debugging, deployment, and delivery.",
    skills: [
      { name: "Git / GitHub", status: "Working" },
      { name: "Postman / npm / yarn", status: "Working" },
      { name: "Clerk / Cloudinary", status: "Project use" },
      { name: "Render / Environment Variables", status: "Familiar" },
    ],
  },
];
