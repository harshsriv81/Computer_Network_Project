import React, { useState, useEffect } from 'react';

const TcpDiagram: React.FC = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 500),
            setTimeout(() => setStep(2), 1500),
            setTimeout(() => setStep(3), 2500),
            setTimeout(() => setStep(4), 3500),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const getOpacity = (s: number) => step >= s ? 1 : 0;

    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-labelledby="tcp-diagram-title">
            <title id="tcp-diagram-title">TCP Three-Way Handshake Diagram</title>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
                </marker>
            </defs>

            {/* Nodes */}
            <g opacity={getOpacity(1)} style={{ transition: 'opacity 0.5s' }}>
                <rect x="25" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="75" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Client</text>
            </g>
            <g opacity={getOpacity(1)} style={{ transition: 'opacity 0.5s' }}>
                <rect x="275" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="325" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Server</text>
            </g>

            {/* Step 1: SYN */}
            <g opacity={getOpacity(2)} style={{ transition: 'opacity 0.5s' }}>
                <title>Step 1 (SYN): The client sends a synchronize packet to the server to initiate a connection.</title>
                <path d="M 130 80 H 270" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                <text x="200" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="12">[SYN]</text>
            </g>

            {/* Step 2: SYN-ACK */}
            <g opacity={getOpacity(3)} style={{ transition: 'opacity 0.5s' }}>
                <title>Step 2 (SYN-ACK): The server acknowledges the client's request and sends its own synchronize packet.</title>
                <path d="M 270 100 H 130" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                <text x="200" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="12">[SYN, ACK]</text>
            </g>

            {/* Step 3: ACK */}
            <g opacity={getOpacity(4)} style={{ transition: 'opacity 0.5s' }}>
                <title>Step 3 (ACK): The client acknowledges the server's response, and the connection is established.</title>
                <path d="M 130 120 H 270" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                <text x="200" y="135" textAnchor="middle" fill="#cbd5e1" fontSize="12">[ACK]</text>
                <text x="200" y="160" textAnchor="middle" fill="#4ade80" fontSize="14" fontWeight="bold">Connection Established</text>
            </g>
        </svg>
    );
};

export default TcpDiagram;