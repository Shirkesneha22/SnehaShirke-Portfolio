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
  description: string;
  content?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
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
