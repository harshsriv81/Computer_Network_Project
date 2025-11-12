import React, { useEffect, useState, useCallback } from 'react';
import type { Protocol } from '../types';

interface ProtocolDetailsModalProps {
    protocol: Protocol | null;
    onClose: () => void;
}

const ProtocolDetailsModal: React.FC<ProtocolDetailsModalProps> = ({ protocol, onClose }) => {
    const [isShowing, setIsShowing] = useState(false);

    const handleClose = useCallback(() => {
        setIsShowing(false);
        setTimeout(() => {
            onClose();
        }, 300); // Corresponds to the animation duration
    }, [onClose]);
    
    useEffect(() => {
        // Trigger fade-in after mount
        const timer = setTimeout(() => {
            setIsShowing(true);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [handleClose]);

    if (!protocol) {
        return null;
    }

    const Icon = protocol.icon;
    const Diagram = protocol.diagram;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="protocol-name"
        >
            <div 
                className={`relative w-11/12 max-w-2xl rounded-2xl border border-slate-700 bg-slate-800/90 p-8 shadow-xl shadow-slate-900/60 transition-all duration-300 ease-out ${isShowing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors"
                    aria-label="Close details"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-sky-400" aria-hidden="true" />
                    <div>
                        <h2 id="protocol-name" className="text-3xl font-bold text-sky-400">{protocol.name}</h2>
                        <p className="text-md mt-1 text-slate-400">{protocol.fullName}</p>
                    </div>
                </div>
                <div className="my-6 h-px bg-slate-700"></div>
                <p className="text-slate-300">{protocol.description}</p>
                
                <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-200">Visual Representation:</h3>
                <div className="rounded-lg bg-slate-900/70 p-4 border border-slate-700 overflow-hidden">
                    <Diagram />
                </div>

                <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-200">Key Characteristics:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    {protocol.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProtocolDetailsModal;