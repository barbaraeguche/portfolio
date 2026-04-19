import type { IExperience, IProject, ISocial } from "@/lib/types";

export const experience: IExperience[] = [
  {
    company: "Autodesk",
    url: "https://www.autodesk.com/company",
    roles: [{
      title: "Software Engineer",
      team: "ems | rdo trust",
      period: "Jan 2026 - Apr 2026",
      is_internship: true,
      is_current: true,
    }],
  },
  {
    company: "Radio-IP Software",
    url: "https://www.radio-ip.com/en/solutions/mult-ip/",
    roles: [{
      title: "Software Engineer",
      team: "nextgen | multip x command center",
      period: "Jan 2025 - Aug 2025",
      is_internship: true,
      is_current: false,
    }],
  },
];

export const projects: IProject[] = [
  {
    name: "",
    url: "",
    description: "",
    stack: [],
  },
];

export const socials: ISocial[] = [
  {
    name: "email",
    url: "mailto:barbareguche@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/barbaraeguche/",
  },
  {
    name: "github",
    url: "https://github.com/barbaraeguche",
  },
];