"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Beaker, ArrowRight } from 'lucide-react';
import { LAB_NAME } from '../../lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use dark text if not on home page or if scrolled
    const isHome = pathname === '/';
    const isDarkText = isScrolled || isMobileMenuOpen || !isHome;

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Links mapped to Multi-Page structure
    const navLinks = [
        { name: 'Research Areas', href: '/#focus' }, // Anchor on home
        { name: 'Projects', href: '/projects' },
        { name: 'Publications', href: '/publications' },
        { name: 'People', href: '/people' },
        { name: 'Events', href: '/events' },
        { name: 'News', href: '/news' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMobileMenuOpen
            ? 'bg-transparent border-transparent py-6'
            : isScrolled || !isHome
                ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4'
                : 'bg-transparent py-6 border-b border-white/10'
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group cursor-pointer" style={{ zIndex: 60 }}>
                    <div className={`w-10 h-10 rounded-none border ${isDarkText ? 'border-brand-600 text-brand-600' : 'border-white text-white'} flex items-center justify-center transition-colors`}>
                        <Beaker className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-display font-bold leading-none ${isDarkText ? 'text-slate-900' : 'text-white'}`}>
                            {LAB_NAME}
                        </span>
                        <span className={`text-[10px] tracking-[0.2em] uppercase ${isDarkText ? 'text-slate-500' : 'text-slate-300'}`}>
                            Research & Innovation
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-all hover:tracking-wider ${isDarkText ? 'text-slate-600 hover:text-brand-600' : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={`flex items-center gap-2 px-6 py-2 border text-sm font-semibold transition-all hover:bg-brand-600 hover:border-brand-600 hover:text-white ${isDarkText ? 'border-slate-900 text-slate-900' : 'border-white text-white'
                        }`}>
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 relative z-50 ${isDarkText ? 'text-slate-900' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div className={`absolute inset-0 bg-white/80 backdrop-blur-xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

                {/* Menu Content */}
                <div className={`relative h-full flex flex-col p-8 pt-32 transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
                    }`}>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl md:text-5xl font-display font-bold text-slate-900 hover:text-brand-600 transition-colors tracking-tight"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 100}ms`,
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div
                        className="mt-auto pt-8 border-t border-slate-200"
                        style={{
                            transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100}ms`,
                            opacity: isMobileMenuOpen ? 1 : 0,
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group flex items-center justify-between px-8 py-6 bg-slate-900 text-white text-lg font-bold hover:bg-brand-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Start a Conversation
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </Link>

                        <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-500 font-mono uppercase tracking-widest">
                            <div>
                                <span className="block text-slate-300 mb-1">Email</span>
                                info@uftb.ac.bd
                            </div>
                            <div>
                                <span className="block text-slate-300 mb-1">Phone</span>
                                09666775534
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
