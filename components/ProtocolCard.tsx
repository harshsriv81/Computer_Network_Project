import React, { useState, useEffect, useRef } from 'react';
import type { Protocol } from '../types';

interface ProtocolCardProps {
    protocol: Protocol;
    onSelect: (protocol: Protocol) => void;
    isExpanded: boolean;
    onToggleExpand: (protocolId: string) => void;
    index: number;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol, onSelect, isExpanded, onToggleExpand, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const Icon = protocol.icon;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, 
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const handleCardClick = () => {
        if (isExpanded) {
            onSelect(protocol);
        } else {
            onToggleExpand(protocol.id);
        }
    };
    
    const handleDetailsClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent the main card click handler from toggling the expansion off
        onSelect(protocol);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (isExpanded) {
                onSelect(protocol);
            } else {
                onToggleExpand(protocol.id);
            }
        }
    };
    
    const snippet = protocol.description.substring(0, 90) + '...';

    return (
        <div
            ref={cardRef}
            role="button"
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            className={`group relative w-full rounded-xl border border-white/10 bg-slate-800/80 px-6 py-6 text-center shadow-2xl shadow-slate-900/50 transition-all duration-500 hover:border-sky-400/50 hover:bg-slate-800/60 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${index * 75}ms` }}
            aria-label={`Learn more about ${protocol.fullName}`}
            aria-expanded={isExpanded}
        >
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-normal rounded-lg bg-slate-700 p-3 text-sm text-left shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none w-64">
                <p className="font-bold text-slate-100">{protocol.fullName}</p>
                <p className="mt-1 text-slate-300">{protocol.description}</p>
                <div className="absolute left-1/2 top-full -translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-slate-700"></div>
            </div>

            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-all duration-300 [background:radial-gradient(120%_120%_at_50%_50%,_transparent_40%,_#06b6d4_100%)] group-hover:opacity-100"></div>
            <div className="relative flex flex-col items-center">
                <Icon className="h-10 w-10 mb-4 text-sky-400 transition-colors duration-300 group-hover:text-sky-300" />
                <h2 className="text-2xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-sky-300">{protocol.name}</h2>
                <p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">{protocol.fullName}</p>
            </div>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-48 pt-4' : 'max-h-0'}`}
            >
                <div className="h-px w-full bg-slate-700/50 my-2"></div>
                <p className="text-sm text-slate-400 text-left">
                    {snippet}
                </p>
                <button
                    onClick={handleDetailsClick}
                    className="mt-4 w-full text-center bg-sky-500/20 text-sky-300 text-sm font-semibold py-2 rounded-lg hover:bg-sky-500/40 transition-colors"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProtocolCard;