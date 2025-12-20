import { LucideIcon } from 'lucide-react';

export interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export interface Publication {
    id: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    link: string;
}

export interface Mentor {
    id: string;
    name: string;
    role: string;
    department: string;
    image: string;
    email?: string;
    researchInterest?: string;
    googleScholar?: string;
    researchGate?: string;
    linkedIn?: string;
    orcid?: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
}

export interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
}
