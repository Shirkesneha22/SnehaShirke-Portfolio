export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "[TODO: add project name]",
    description: "[TODO: add clear, concise description of the project and your role in it. E.g., 'Built a scalable RAG-based search engine for internal documentation...']",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/Shirkesneha22/[TODO]",
    liveUrl: "https://[TODO]",
  },
  {
    id: "project-2",
    title: "[TODO: add project name]",
    description: "[TODO: add specific achievements and metrics for the project.]",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Shirkesneha22/[TODO]",
  },
];
