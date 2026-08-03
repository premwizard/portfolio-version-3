export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: string;
  featured: boolean;
  image?: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
  status?: 'Production Ready' | 'In Progress' | 'Personal Project' | 'Internship Project';
  language?: string;
  repoType?: 'Public' | 'Private';
  lastUpdated?: string;
  version?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level?: number;
    experience?: string;
    iconName?: string;
    popular?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  category?: 'Experience' | 'Education';
  role: string;
  company?: string;
  organization?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  image: string;
  skillsAcquired: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectTag?: string;
  linkedinUrl?: string;
}
