
import { Reveal } from '../../../components/ui/Reveal';
import { getMentors } from '../../../lib/data';
import { Mail, Linkedin, Globe, BookOpen, GraduationCap, Link as LinkIcon, ExternalLink } from 'lucide-react';

export default async function PeoplePage() {
    const mentors = await getMentors();

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <div className="mb-16 border-b border-slate-200 pb-8">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Our People</h1>
                    <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                        Meet the researchers, faculty, and innovators driving discovery at Nxtlab.
                    </p>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor, idx) => (
                    <Reveal key={mentor.id} delay={idx * 100} variant="fade" className="h-full">
                        <div className="bg-white group border border-slate-200 hover:border-brand-500 transition-all duration-300 h-full flex flex-col p-8 hover:shadow-lg rounded-sm">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-20 h-20 overflow-hidden rounded-full bg-slate-100 border border-slate-100">
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

                                {mentor.researchInterest && (
                                    <div className="mt-4">
                                        <h4 className="text-xs font-bold text-slate-900 uppercase mb-2">Research Interests</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                                            {mentor.researchInterest}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex gap-4 text-xs font-medium text-slate-500">
                                {mentor.googleScholar && (
                                    <a href={mentor.googleScholar} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                                        <GraduationCap className="w-3.5 h-3.5" /> Scholar
                                    </a>
                                )}
                                {mentor.researchGate && (
                                    <a href={mentor.researchGate} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                                        <BookOpen className="w-3.5 h-3.5" /> ResearchGate
                                    </a>
                                )}
                                {mentor.orcid && (
                                    <a href={mentor.orcid} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                                        <ExternalLink className="w-3.5 h-3.5" /> ORCID
                                    </a>
                                )}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
