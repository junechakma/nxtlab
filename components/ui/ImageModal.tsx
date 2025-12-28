"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string | null;
    altText?: string;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, altText = "Image", onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !imageSrc) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg overflow-hidden max-w-[500px] max-h-[500px] w-full h-full shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-brand-600 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
