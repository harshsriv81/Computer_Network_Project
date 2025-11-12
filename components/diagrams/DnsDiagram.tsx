import React from 'react';

const DnsDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-labelledby="dns-diagram-title">
             <title id="dns-diagram-title">DNS Lookup Diagram</title>
             <defs>
                <marker id="arrowhead-dns" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
                </marker>
            </defs>

            {/* Nodes */}
            <g className="animate-fade-in">
                <rect x="25" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="75" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">You</text>
            </g>
             <g className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <rect x="275" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="325" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">DNS Server</text>
            </g>

            {/* Query */}
            <g className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <title>The client asks the DNS server for the IP address of 'example.com'.</title>
                <path d="M 130 80 H 270" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-dns)" className="draw-line" />
                <text x="200" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="12">Query: example.com?</text>
            </g>

            {/* Response */}
            <g className="animate-fade-in" style={{ animationDelay: '1500ms' }}>
                <title>The DNS server replies with the corresponding IP address.</title>
                <path d="M 270 100 H 130" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-dns)" className="draw-line" />
                <text x="200" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="12">Response: 93.184.216.34</text>
            </g>
        </svg>
    );
};
export default DnsDiagram;