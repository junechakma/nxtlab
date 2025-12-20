import { Reveal } from '../../../components/ui/Reveal';
import { getEvents } from '../../../lib/data';
import { ArrowRight, MapPin } from 'lucide-react';

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Events</h1>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-12">
                {events.map((event, idx) => (
                    <Reveal key={event.id} delay={idx * 150} variant="slide-right">
                        <div className="group border-t-2 border-slate-200 pt-8 hover:border-brand-600 transition-colors h-full flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-display font-bold text-slate-900 mb-1">{event.date.split(' ')[0]}</span>
                                    <span className="text-sm font-mono uppercase text-slate-500 tracking-widest">{event.date.split(' ').slice(1).join(' ')}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                                {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {event.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
