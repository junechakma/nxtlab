import { Reveal } from '../../../components/ui/Reveal';
import { getMentors } from '../../../lib/data';
import { Mail } from 'lucide-react';

export default async function PeoplePage() {
    const mentors = await getMentors();

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Our People</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {mentors.map((mentor, idx) => (
                    <Reveal key={mentor.id} delay={idx * 100} variant="fade" className="bg-white">
                        <div className="p-8 group border border-slate-200 hover:border-brand-500 transition-colors h-full flex flex-col md:flex-row gap-6 items-start rounded-lg hover:shadow-lg duration-300">
                            <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-full bg-slate-100 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{mentor.name}</h4>
                                <p className="text-brand-600 text-sm font-medium mb-3 uppercase tracking-wide">{mentor.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{mentor.department}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-brand-600">
                                    <Mail className="w-4 h-4" /> Contact
                                </a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
