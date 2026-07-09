export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  architecture: string;
  techStack: string[];
  skillsLearned: string[];
  toolsUsed: string[];
  keyOutcomes: string[];
  githubLink: string;
  liveLink: string;
  documentLink?: string;
  timeline: string;
  statistics: ProjectStat[];
  images: string[];
}

export interface Skill {
  name: string;
  logo: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Research {
  id: string;
  title: string;
  abstract: string;
  objective: string;
  methodology: string;
  results: string;
  conference: string;
  year: string;
  publicationLink?: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
}

export interface Certification {
  id: string;
  title: string;
  year: string;
}

export interface Award {
  id: string;
  title: string;
}
