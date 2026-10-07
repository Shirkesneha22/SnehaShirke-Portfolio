export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Node.js"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "AWS (Lambda, S3, CloudFront)"],
  },
  {
    category: "Specialized",
    items: ["GenAI", "RAG", "NLP"],
  },
];
