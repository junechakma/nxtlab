import { Reveal } from '../../../components/ui/Reveal';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Contact Us</h1>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <Reveal delay={100} variant="fade">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Interested in collaborating with Nxtlab or have questions about our research?
                            We'd love to hear from you.
                        </p>

                        <ul className="space-y-6 text-slate-600">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Visit Us</strong>
                                    Kaliakair, Gazipur-1750,<br />Bangladesh.
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Email Us</strong>
                                    <a href="mailto:nxtlab8@gmail.com" className="hover:text-brand-600 transition-colors">nxtlab8@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Call Us</strong>
                                    09666775534
                                </div>
                            </li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={200} variant="slide-up">
                        <form className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
