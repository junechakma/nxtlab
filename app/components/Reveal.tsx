"use client";

import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant =
    | 'fade'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
    | 'zoom-in'
    | 'blur-in';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in milliseconds
    variant?: RevealVariant;
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    className = "",
    delay = 0,
    variant = 'slide-up'
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getHiddenClass = () => {
        switch (variant) {
            case 'fade': return 'opacity-0';
            case 'slide-up': return 'opacity-0 translate-y-20';
            case 'slide-down': return 'opacity-0 -translate-y-20';
            case 'slide-left': return 'opacity-0 translate-x-20'; // Starts right, moves left
            case 'slide-right': return 'opacity-0 -translate-x-20'; // Starts left, moves right
            case 'zoom-in': return 'opacity-0 scale-90';
            case 'blur-in': return 'opacity-0 blur-md scale-95';
            default: return 'opacity-0 translate-y-20';
        }
    };

    const getVisibleClass = () => {
        return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0';
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-out transform will-change-transform ${isVisible ? getVisibleClass() : getHiddenClass()
                } ${className}`}
        >
            {children}
        </div>
    );
};
