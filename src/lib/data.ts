import type { IExperience, IProject, ISocial } from "@/lib/types";

export const experience: IExperience[] = [
  {
    company: "XX",
    url: "#",
    roles: [{
      title: "Software Engineer",
      team: "xx | xx",
      period: "Incoming Summer '26",
      is_internship: true,
      is_current: true,
    }],
  },
  {
    company: "Autodesk",
    url: "https://www.autodesk.com/company",
    roles: [{
      title: "Software Engineer",
      team: "rdo trust | code coverage analysis on 3ds max & maya",
      period: "Jan 2026 - Apr 2026",
      is_internship: true,
      is_current: false,
    }],
  },
  {
    company: "Radio-IP Software",
    url: "https://www.radio-ip.com/en/solutions/mult-ip/",
    roles: [{
      title: "Software Engineer",
      team: "mult-ip | building interfaces for mobile vpn software",
      period: "Jan 2025 - Aug 2025",
      is_internship: true,
      is_current: false,
    }],
  },
];

export const projects: IProject[] = [
  {
    name: "surveyllama",
    url: "https://github.com/barbaraeguche/surveyllama",
    description: "a cloud-based survey platform for creating, distributing, and analyzing online surveys",
    stack: ["react", "node.js", "express", "firebase"],
  },
  {
    name: "risk warzone",
    url: "https://github.com/barbaraeguche/risk-warzone",
    description: "a simplified implementation of the warzone strategy game with automated player strategies and tournament mode",
    stack: ["c++", "cmake"],
  },
  {
    name: "medisync",
    url: "https://github.com/barbaraeguche/medisync",
    description: "a healthcare platform for managing patient appointments and doctor schedules",
    stack: ["react", "redux", "spring boot", "postgresql"],
  },
  {
    name: "pawsitive",
    url: "https://github.com/barbaraeguche/pawsitive",
    description: "a pet adoption platform where users can adopt and rehome pets",
    stack: ["next.js", "zustand", "prisma", "postgresql"],
  },
  {
    name: "eternity",
    url: "https://github.com/barbaraeguche/eternity",
    description: "a scientific calculator built to compute various transcendental functions",
    stack: ["java", "java swing"],
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