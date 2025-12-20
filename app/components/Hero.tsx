"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { CAROUSEL_SLIDES } from '../constants';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isPlaying]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-slate-900">
            {CAROUSEL_SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="relative h-full container mx-auto px-6 flex flex-col justify-center md:justify-end pb-20 md:pb-32">
                        <div className="max-w-4xl space-y-8">
                            <div className="flex items-center gap-4 animate-fade-in">
                                <span className="h-[1px] w-12 bg-brand-500"></span>
                                <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">
                                    Featured Research
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight animate-slide-up">
                                {slide.title}
                            </h1>

                            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed border-l-2 border-brand-500 pl-6 animate-slide-up animation-delay-200">
                                {slide.subtitle}
                            </p>

                            <div className="pt-8 flex gap-6 animate-fade-in animation-delay-300">
                                <button className="group px-8 py-4 bg-white text-slate-900 font-bold hover:bg-brand-500 hover:text-white transition-all flex items-center gap-3">
                                    Explore Project
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Tech Style Controls */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-900/50 backdrop-blur-sm z-10">
                <div className="container mx-auto px-6 py-4 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
                        <div className="flex gap-1">
                            {CAROUSEL_SLIDES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-1 transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-brand-500' : 'w-8 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="text-white/40 font-mono text-xs">
                            0{currentSlide + 1} / 0{CAROUSEL_SLIDES.length}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white/60 hover:text-white transition-colors"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
