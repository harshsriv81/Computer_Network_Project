import React, { useState, useMemo } from 'react';
import type { Protocol } from '../types';

interface ComparisonPoints {
    reliability: string;
    speed: string;
    connectionType: string;
}

const getComparisonPoints = (protocol: Protocol | null): ComparisonPoints => {
    if (!protocol) {
        return { reliability: '-', speed: '-', connectionType: '-' };
    }

    const chars = protocol.characteristics.map(c => c.toLowerCase());
    let reliability = 'Varies';
    let speed = 'Contextual';
    let connectionType = 'Varies';

    if (chars.some(c => c.includes('reliable'))) reliability = 'High (Reliable & Ordered)';
    if (chars.some(c => c.includes('unreliable'))) reliability = 'Low (Unreliable)';
    
    if (chars.some(c => c.includes('faster than tcp'))) speed = 'Faster';
    if (protocol.id === 'tcp') speed = 'Slower (due to overhead)';

    if (chars.some(c => c.includes('connection-oriented'))) connectionType = 'Connection-Oriented';
    if (chars.some(c => c.includes('connectionless'))) connectionType = 'Connectionless';

    if (['http', 'https', 'ftp', 'smtp'].includes(protocol.id)) {
        reliability = 'High (via TCP)';
        connectionType = 'Connection-Oriented (via TCP)';
    }

    if (protocol.id === 'dns' && chars.some(c => c.includes('uses udp'))) {
        reliability = 'Low (usually UDP)';
    }

    return { reliability, speed, connectionType };
};


interface ProtocolComparisonProps {
    protocols: Protocol[];
}

const ProtocolComparison: React.FC<ProtocolComparisonProps> = ({ protocols }) => {
    const [protocol1Id, setProtocol1Id] = useState<string>('');
    const [protocol2Id, setProtocol2Id] = useState<string>('');

    const protocol1 = useMemo(() => protocols.find(p => p.id === protocol1Id) || null, [protocol1Id, protocols]);
    const protocol2 = useMemo(() => protocols.find(p => p.id === protocol2Id) || null, [protocol2Id, protocols]);

    const points1 = getComparisonPoints(protocol1);
    const points2 = getComparisonPoints(protocol2);
    
    const renderProtocolColumn = (protocol: Protocol | null, placeholder: string, position: 'left' | 'right') => {
        const isLeft = position === 'left';
        
        if (!protocol) {
            return (
                <div className="flex-1 flex items-center justify-center h-full min-h-[10rem] bg-slate-800/50 rounded-lg p-4 border-2 border-dashed border-slate-700">
                    <p className="text-slate-500">{placeholder}</p>
                </div>
            );
        }
        const Icon = protocol.icon;
        const Diagram = protocol.diagram;
        const accentColor = isLeft ? 'sky' : 'emerald';
        const backgroundGradient = isLeft 
            ? 'bg-gradient-to-br from-slate-800/80 to-sky-900/30'
            : 'bg-gradient-to-bl from-slate-800/80 to-emerald-900/30';
        
        return (
            <div className={`flex-1 flex flex-col p-6 rounded-lg border border-slate-700/50 border-t-4 border-t-${accentColor}-500 transition-all ${backgroundGradient}`}>
                <div>
                    <div className="flex items-center gap-3">
                        <Icon className={`h-8 w-8 text-${accentColor}-400 flex-shrink-0`} />
                        <div>
                            <h3 className="text-xl font-bold text-slate-100">{protocol.name}</h3>
                            <p className="text-sm text-slate-400">{protocol.fullName}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-base text-slate-300 leading-relaxed">{protocol.description}</p>
                </div>
                <div className="mt-6 flex-grow flex items-center justify-center rounded-lg bg-slate-900/70 p-4 border border-slate-700 overflow-hidden">
                    <Diagram />
                </div>
            </div>
        );
    };

    const renderComparisonRow = (label: string, value1: string, value2: string) => {
        const areDifferent = value1 !== '-' && value2 !== '-' && value1.split(' ')[0] !== value2.split(' ')[0];
    
        return (
            <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-4">
                <div className={`flex items-center justify-end p-3 rounded-lg text-right font-semibold text-lg transition-all duration-300 ${areDifferent ? 'bg-sky-500/10 text-sky-300' : 'text-slate-300'}`}>
                    {value1}
                </div>
                <div className="flex items-center justify-center">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors duration-300 ${areDifferent ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-700/80 text-slate-300'}`}>
                        {label}
                    </span>
                </div>
                <div className={`flex items-center justify-start p-3 rounded-lg text-left font-semibold text-lg transition-all duration-300 ${areDifferent ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-300'}`}>
                    {value2}
                </div>
            </div>
        );
    };

    return (
        <div className="animate-fade-in">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-center text-slate-100 mb-6">Side-by-Side Protocol Comparison</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <select
                        value={protocol1Id}
                        onChange={(e) => setProtocol1Id(e.target.value)}
                        className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-slate-600 bg-slate-700/80 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors cursor-pointer"
                        aria-label="Select first protocol to compare"
                    >
                        <option value="">-- Select Protocol 1 --</option>
                        {protocols.map(p => <option key={p.id} value={p.id}>{p.name} - {p.fullName}</option>)}
                    </select>
                    <select
                        value={protocol2Id}
                        onChange={(e) => setProtocol2Id(e.target.value)}
                        className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-slate-600 bg-slate-700/80 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors cursor-pointer"
                        aria-label="Select second protocol to compare"
                    >
                        <option value="">-- Select Protocol 2 --</option>
                        {protocols.map(p => <option key={p.id} value={p.id}>{p.name} - {p.fullName}</option>)}
                    </select>
                </div>

                <div className="animate-fade-in">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        {renderProtocolColumn(protocol1, 'Select Protocol 1 above', 'left')}
                        {renderProtocolColumn(protocol2, 'Select Protocol 2 above', 'right')}
                    </div>
                    
                    {(protocol1 && protocol2) && (
                        <div className="text-slate-200 bg-slate-900/50 rounded-lg p-4 space-y-3 animate-fade-in">
                            {renderComparisonRow("Connection", points1.connectionType, points2.connectionType)}
                            {renderComparisonRow("Reliability", points1.reliability, points2.reliability)}
                            {renderComparisonRow("Speed", points1.speed, points2.speed)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProtocolComparison;