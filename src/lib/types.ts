export interface IExperience {
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

export interface IProject {
  name: string;
  url: string;
  description: string;
  stack: string[];
}

export interface ISocial {
  name: string;
  url: string;
}

export type Routes = {
  name: string;
  url: string;
};