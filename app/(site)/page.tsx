import Hero from '../../components/sections/Hero';
import { Reveal } from '../../components/ui/Reveal';
import { ArrowRight, Plus, Mail } from 'lucide-react';
import { FOCUS_AREAS, STATS, EXTRA_STATS, PROJECTS, PUBLICATIONS, MENTORS, EVENTS, COLLABORATORS } from '../../lib/data';

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
    return (
        <div className="flex flex-col font-sans bg-white text-slate-900">
            <Hero />

            {/* Research Stats Summary (Moved up for impact) */}
            <section className="bg-slate-900 text-white py-20 border-y border-white/10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left divide-x divide-white/10">
                        {STATS.map((stat, idx) => (
                            <Reveal key={idx} delay={idx * 150} variant="blur-in" className="pl-8 first:pl-0">
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

            {/* We Focus On */}
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

            {/* Featured Projects (Limit 3) */}
            <section id="projects" className="py-16 md:py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Featured Projects" subtitle="Research Activities" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {PROJECTS.slice(0, 3).map((project, index) => (
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

            {/* Collaborators */}
            <section className="py-24 bg-white overflow-hidden">
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
            </section>
        </div>
    );
}
