export interface Experience {
  company: string;
  url: string;
  roles: {
    title: string;
    team: string;
    period: string;
    is_internship: boolean;
    is_current: boolean;
  }[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  stack: string[];
}

export interface Socials {
  name: string;
  url: string;
}