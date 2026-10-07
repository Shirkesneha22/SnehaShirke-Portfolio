export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  problem?: string;
  role?: string;
  features?: string[];
  technologies: string[];
  architectureNotes?: string;
  keyDecisions?: string[];
  challenges?: string[];
  results?: string[];
  link?: string;
  github?: string;
  image?: string;
  screenshots?: string[];
  featured: boolean;
  status: "shipped" | "in-progress";
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
