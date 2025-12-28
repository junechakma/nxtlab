"use client";

import Hero from '../../components/sections/Hero';
import { Reveal } from '../../components/ui/Reveal';
import { ArrowRight, Plus, Mail, MapPin, ExternalLink, Trophy, Globe, Zap, Linkedin } from 'lucide-react';
import { ImageModal } from '../../components/ui/ImageModal';
import { useState } from 'react';
import {
    PROJECTS,
    PUBLICATIONS,
    MENTORS,
    EVENTS,
    FOCUS_AREAS,
    STATS,
    COLLABORATORS,
    UNIVERSITY_NAME
} from '../../lib/data';

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-slate-200">
        <div className="max-w-2xl">
            <Reveal variant="slide-right">
                <span className="text-brand-600 font-mono text-xs font-bold tracking-widest uppercase mb-4 block">
                    {subtitle}
                </span>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight">
                    {title}
                </h2>
            </Reveal>
        </div>
        <div className="hidden md:block">
            <Reveal variant="zoom-in" delay={300}>
                <div className="w-16 h-16 md:w-24 md:h-24 border border-slate-200 rounded-full flex items-center justify-center animate-spin-slow">
                    <Plus className="w-6 h-6 md:w-8 md:h-8 text-slate-300" />
                </div>
            </Reveal>
        </div>
    </div >
);

export default function HomePage() {
    const projects = PROJECTS;
    const publications = PUBLICATIONS;
    const mentors = MENTORS;
    const events = EVENTS;

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="flex flex-col font-sans bg-white text-slate-900">
            <Hero />

            {/* We Focus On - Grid Layout */}
            <section id="focus" className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Research Focus" subtitle="Faculties & Departments" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
                        {FOCUS_AREAS.map((area, idx) => (
                            <Reveal key={idx} delay={idx * 100} variant="zoom-in" className="contents">
                                <div className="group p-8 md:p-12 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer relative overflow-hidden">
                                    <div className="mb-8 text-slate-300 group-hover:text-brand-600 transition-colors">
                                        <area.icon className="w-10 h-10" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{area.title}</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm mb-8">{area.description}</p>
                                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowRight className="w-6 h-6 text-brand-600" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discover / Stats Strip */}
            <section className="bg-slate-900 text-white py-20 border-y border-white/10 overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Main Stats Row */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">
                        {STATS.map((stat, idx) => (
                            <Reveal key={idx} delay={idx * 150} variant="blur-in" className="py-12 md:px-12 first:pl-0 text-center md:text-left">
                                <div>
                                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-slate-400 font-mono text-sm uppercase tracking-wider">
                                        <stat.icon className="w-4 h-4 text-brand-500" />
                                        {stat.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Masonry/Editorial Style */}
            <section id="projects" className="py-16 md:py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Featured Projects" subtitle="Research Activities" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Reveal
                                key={project.id}
                                delay={index * 150}
                                variant="slide-up"
                                className={`group ${index === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="h-full flex flex-col">
                                    <div className="relative overflow-hidden bg-slate-200 aspect-video mb-6 rounded-sm">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                                        <span className="absolute top-6 left-6 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={400} variant="fade" className="mt-16 text-center">
                        <a href="/projects" className="inline-flex items-center gap-2 text-lg font-bold border-b-2 border-brand-600 pb-1 hover:text-brand-600 transition-colors">
                            View All Research Activities <ArrowRight className="w-5 h-5" />
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Publications - Technical List */}
            <section id="publications" className="py-16 md:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <Reveal variant="fade">
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Publications</h2>
                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Our research findings are regularly published in top-tier journals including Physics Open, Sensing and Bio-Sensing Research, and more.
                                </p>
                                <a href="/publications" className="text-brand-600 font-bold hover:underline">Browse Archive &rarr;</a>
                            </Reveal>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                                {publications.map((pub, idx) => (
                                    <Reveal key={pub.id} delay={idx * 100} variant="slide-left">
                                        <div className="py-8 group flex flex-col md:flex-row gap-6 md:items-start hover:bg-slate-50 transition-colors px-4 -mx-4">
                                            <div className="md:w-24 flex-shrink-0">
                                                <span className="font-mono text-sm text-slate-400">{pub.year}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
                                                    {pub.title}
                                                </h4>
                                                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500">
                                                    <span>{pub.authors}</span>
                                                    <span className="text-slate-300">|</span>
                                                    <span className="font-medium text-slate-700">{pub.journal}</span>
                                                </div>
                                            </div>
                                            <div className="md:w-32 flex justify-end">
                                                <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-600 border border-slate-200 px-4 py-2 rounded-none hover:border-brand-600 transition-colors">
                                                    View <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <Reveal variant="fade">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Research Community</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            We are always looking for passionate students and collaborators to work on cutting-edge technologies. Shape the future with us.
                        </p>
                        <a
                            href="mailto:nxtlab8@gmail.com"
                            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-brand-500 transition-all transform hover:-translate-y-1"
                        >
                            Apply Now <ArrowRight className="w-5 h-5" />
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Collaborators */}
            {/* Collaborators */}
            {/* <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our Collaborators" subtitle="Global Network" />

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                        {COLLABORATORS.map((partner, idx) => (
                            <Reveal key={idx} delay={idx * 50} variant="zoom-in">
                                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 p-4 bg-white shadow-sm border border-slate-100 flex items-center justify-center aspect-square">
                                    <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Mentors - Grid */}
            <section id="mentors" className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our People" subtitle="Researchers & Faculty" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 border-slate-200">
                        {mentors.slice(0, 6).map((mentor, idx) => (
                            <Reveal key={mentor.id} delay={idx * 100} variant="fade" className="h-full">
                                <div className="bg-white group border border-slate-200 hover:border-brand-500 transition-all duration-300 h-full flex flex-col p-8 hover:shadow-lg rounded-sm">
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className="w-20 h-20 overflow-hidden rounded-full bg-slate-100 border border-slate-100 cursor-pointer"
                                            onClick={() => setSelectedImage(mentor.image)}
                                        >
                                            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex gap-2 text-slate-400">
                                            {mentor.email && (
                                                <a href={`mailto:${mentor.email}`} className="p-2 hover:bg-slate-50 rounded-full hover:text-brand-600 transition-colors" title="Email">
                                                    <Mail className="w-4 h-4" />
                                                </a>
                                            )}
                                            {mentor.linkedIn && (
                                                <a href={mentor.linkedIn} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-50 rounded-full hover:text-brand-600 transition-colors" title="LinkedIn">
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6 flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{mentor.name}</h3>
                                        <div className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-3">{mentor.role}</div>
                                        <p className="text-slate-500 text-sm mb-4 leading-relaxed border-l-2 border-slate-100 pl-3">
                                            {mentor.department}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={400} variant="fade" className="mt-16 text-center">
                        <a href="/people" className="inline-flex items-center gap-2 text-lg font-bold border-b-2 border-brand-600 pb-1 hover:text-brand-600 transition-colors">
                            Meet The Full Team <ArrowRight className="w-5 h-5" />
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Events - Clean Layout */}
            <section id="events" className="py-16 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Recent Events" subtitle="Workshops & Seminars" />

                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <p className="text-xl text-slate-400 font-medium">No events for now</p>
                    </div>
                </div>
            </section>

            <ImageModal
                isOpen={!!selectedImage}
                imageSrc={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}
