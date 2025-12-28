"use client";

import React from 'react';
import { UNIVERSITY_NAME } from '../../lib/data';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
                    <div className="md:col-span-2">
                        <Reveal variant="fade">
                            <h2 className="text-3xl font-display font-bold mb-6">Nxtlab</h2>
                            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                                Advancing the frontiers of technology at the {UNIVERSITY_NAME}.
                                We are dedicated to rigorous research, interdisciplinary collaboration, and
                                creating real-world impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email for updates"
                                    className="bg-white/5 border border-white/10 px-4 py-3 w-full sm:w-64 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                                />
                                <button className="px-6 py-3 bg-white text-slate-900 font-bold hover:bg-brand-500 hover:text-white transition-colors w-full sm:w-auto">
                                    Subscribe
                                </button>
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal delay={200} variant="fade">
                            <h4 className="font-bold mb-6 text-lg">Sitemap</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                                <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                                <li><Link href="/people" className="hover:text-white transition-colors">People</Link></li>
                                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                            </ul>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal delay={300} variant="fade">
                            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>Kaliakair, Gazipur-1750,<br />Bangladesh.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                                    <a href="mailto:nxtlab8@gmail.com" className="hover:text-white">nxtlab8@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>09666775534</span>
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
                    <p>&copy; 2024 {UNIVERSITY_NAME}</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy</Link>
                        <Link href="/terms" className="hover:text-white">Terms</Link>
                        <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
