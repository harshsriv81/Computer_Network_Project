import React from 'react';

const IpDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 450 150" className="w-full h-auto" aria-labelledby="ip-diagram-title">
            <title id="ip-diagram-title">Simplified IP Packet Structure Diagram</title>
            <style>{`.field:hover > rect { stroke: #38bdf8; } .field:hover > text { fill: #38bdf8; }`}</style>
            
            {/* Main Packet */}
            <rect x="10" y="20" width="430" height="80" rx="5" fill="none" stroke="#334155" strokeWidth="2" />
            <text x="225" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12">IP Datagram</text>

            {/* IP Header */}
            <rect x="10" y="20" width="200" height="80" fill="#1e293b" />
            <text x="110" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">IP Header</text>
            <line x1="210" y1="20" x2="210" y2="100" stroke="#334155" strokeWidth="2" />

            {/* Data Payload */}
            <rect x="210" y="20" width="230" height="80" fill="#0f172a" />
            <text x="325" y="65" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Data Payload (e.g., TCP Segment)</text>

            {/* Header fields */}
            <g className="field">
                <rect x="20" y="50" width="80" height="40" fill="#334155" stroke="#475569" strokeWidth="1" rx="3"/>
                <text x="60" y="75" textAnchor="middle" fill="#94a3b8" fontSize="10">Source IP</text>
                <title>Source IP Address: The address of the sender.</title>
            </g>
            <g className="field">
                <rect x="120" y="50" width="80" height="40" fill="#334155" stroke="#475569" strokeWidth="1" rx="3"/>
                <text x="160" y="75" textAnchor="middle" fill="#94a3b8" fontSize="10">Destination IP</text>
                <title>Destination IP Address: The address of the recipient.</title>
            </g>

            <text x="225" y="125" textAnchor="middle" fill="#cbd5e1" fontSize="12">Hover over header fields for details</text>
        </svg>
    );
};

export default IpDiagram;
