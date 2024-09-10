import { ElementType } from 'react';

/* ~~ types ~~ */
export type Theme = 'light' | 'dark';
export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
export type SocialData = {
    icon: ElementType;
    socialUrl: string;
    name: string;
}
export type NavLinkData = {
    icon: ElementType;
    href: string;
    name: string;
}

/* ~~ interfaces ~~ */
export interface ExperienceData {
    icon: ElementType;
    title: string;
    location: string;
    date: string;
    description: string;
}
export interface ProjectData {
    projIcon: ElementType;
    gitUrl: string;
    title: string;
    description: string;
    tags: string[];
}
export interface ContactData {
    email: string;
    message: string;
}