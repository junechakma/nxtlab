import { Reveal } from '../../../components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

export default function NewsPage() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Latest News</h1>
            </Reveal>

            <div className="text-slate-500 py-12 text-center border-2 border-dashed border-slate-200 rounded-xl">
                <p className="mb-4">No recent news articles at this time.</p>
                <p className="text-sm">Check back later for updates from Nxtlab.</p>
            </div>
        </div>
    );
}
