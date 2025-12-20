import { Reveal } from '../../../components/ui/Reveal';
import { getPublications } from '../../../lib/data';
import { ExternalLink } from 'lucide-react';

export default async function PublicationsPage() {
    const publications = await getPublications();

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Publications</h1>
            </Reveal>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {publications.map((pub, idx) => (
                    <Reveal key={pub.id} delay={idx * 100} variant="slide-left">
                        <div className="py-8 group flex flex-col md:flex-row gap-6 md:items-start hover:bg-slate-50 transition-colors px-4 -mx-4 rounded-lg">
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
                                <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-600 border border-slate-200 px-4 py-2 hover:border-brand-600 transition-colors bg-white">
                                    View <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
