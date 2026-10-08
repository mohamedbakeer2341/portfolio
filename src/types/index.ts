export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  status: string;
  tagline: string;
  summary: string;
}

export interface WorkHighlight {
  title: string;
  desc: string;
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  featured: boolean;
  summary: string;
  highlights: WorkHighlight[];
  technologies: string[];
}

export interface EducationInfo {
  degree: string;
  faculty: string;
  institution: string;
  year: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  tag: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  featured: boolean;
  tagline: string;
  shortDesc: string;
  github: string;
  liveDemo: string | null;
  technologies: string[];
  architectureHighlights: string[];
  verifiedFeatures: string[];
  engineeringFocus: string;
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface ArchitectureStep {
  step: number;
  actor: string;
  badge: string;
  text: string;
}

export interface ArchitectureFlow {
  id: string;
  title: string;
  context: string;
  description: string;
  steps: ArchitectureStep[];
  codeSnippet: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  type: 'education' | 'work';
  details: string;
}
