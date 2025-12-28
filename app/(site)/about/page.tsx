"use client";

import { Reveal } from '../../../components/ui/Reveal';
import { STATS, FOCUS_AREAS, COLLABORATORS } from '../../../lib/data';
import { ArrowRight, Plus } from 'lucide-react';

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

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="pt-32 pb-20 container mx-auto px-6">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">About Us</h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        NxtLab is the premier research and innovation hub for university teachers and students. It bridges the gap between academic theory and industrial application through cutting-edge research in Artificial Intelligence, Internet of Things, Robotics, Educational Technology, Data Science, and Software Engineering.
                    </p>
                </Reveal>
            </div>

            {/* Stats Strip */}
            <section className="bg-slate-900 text-white py-20 border-y border-white/10 overflow-hidden">
                <div className="container mx-auto px-6">
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

        </div>
    );
}
