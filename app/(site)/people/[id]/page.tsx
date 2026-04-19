"use client";

import { notFound, useParams } from 'next/navigation';
import { useState } from 'react';
import { MENTORS } from '../../../../lib/data';
import { Reveal } from '../../../../components/ui/Reveal';
import { ImageModal } from '../../../../components/ui/ImageModal';
import { Mail, Linkedin, GraduationCap, BookOpen, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PersonDetailPage() {
    const { id } = useParams<{ id: string }>();
    const mentor = MENTORS.find((m) => m.id === id);

    if (!mentor) return notFound();

    const [modalOpen, setModalOpen] = useState(false);

    const socials = [
        mentor.email && {
            label: 'Email',
            href: `mailto:${mentor.email}`,
            icon: <Mail className="w-4 h-4" />,
        },
        mentor.linkedIn && {
            label: 'LinkedIn',
            href: mentor.linkedIn,
            icon: <Linkedin className="w-4 h-4" />,
        },
        mentor.googleScholar && {
            label: 'Google Scholar',
            href: mentor.googleScholar,
            icon: <GraduationCap className="w-4 h-4" />,
        },
        mentor.researchGate && {
            label: 'ResearchGate',
            href: mentor.researchGate,
            icon: <BookOpen className="w-4 h-4" />,
        },
        mentor.orcid && {
            label: 'ORCID',
            href: mentor.orcid,
            icon: <ExternalLink className="w-4 h-4" />,
        },
    ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <Link
                    href="/people"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-10"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Mentors
                </Link>
            </Reveal>

            {/* Hero card */}
            <Reveal>
                <div className="flex flex-col md:flex-row gap-10 items-start border border-slate-200 p-8 md:p-12 bg-white rounded-sm">
                    {/* Photo */}
                    <div className="shrink-0">
                        <div
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-50 cursor-pointer"
                            onClick={() => setModalOpen(true)}
                            title="Click to enlarge"
                        >
                            <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-2">
                            {mentor.role}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-2">
                            {mentor.name}
                        </h1>
                        <p className="text-slate-500 text-sm mb-8 border-l-2 border-slate-200 pl-3">
                            {mentor.department}
                        </p>

                        {mentor.researchInterest && (
                            <div className="mb-8">
                                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                                    Research Interests
                                </h2>
                                <p className="text-slate-600 leading-relaxed">{mentor.researchInterest}</p>
                            </div>
                        )}

                        {/* Social links */}
                        {socials.length > 0 && (
                            <div>
                                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                                    Links & Profiles
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {socials.map(({ label, href, icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target={href.startsWith('mailto') ? undefined : '_blank'}
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-sm text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors rounded-sm"
                                        >
                                            {icon} {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Reveal>

            {/* About / Bio section */}
            {mentor.bio && (
                <Reveal delay={100}>
                    <div className="mt-8 border border-slate-200 bg-white p-8 md:p-12 rounded-sm">
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">
                            About
                        </h2>
                        <p className="text-slate-600 leading-loose text-base md:text-lg">
                            {mentor.bio}
                        </p>
                    </div>
                </Reveal>
            )}

            <ImageModal
                isOpen={modalOpen}
                imageSrc={mentor.image}
                altText={mentor.name}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}
