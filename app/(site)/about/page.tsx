import { Reveal } from '../../../components/ui/Reveal';

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">About Us</h1>
                <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Nxtlab is the premier research and innovation hub at the University of Frontier Technology Bangladesh.
                    We bridge the gap between academic theory and industrial application through cutting-edge research in
                    AI, IoT, and Cyber Security.
                </p>
            </Reveal>
        </div>
    );
}
