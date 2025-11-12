import React from 'react';
import { Lock } from 'lucide-react';

const HttpsDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 250" className="w-full h-auto" aria-labelledby="https-diagram-title">
             <title id="https-diagram-title">HTTPS Secure Communication Diagram</title>
             <defs>
                <marker id="arrowhead-https" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
                </marker>
            </defs>

            {/* Nodes */}
            <g className="animate-fade-in">
                <rect x="25" y="100" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="75" y="125" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Client</text>
            </g>
             <g className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <rect x="275" y="100" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="325" y="125" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Server</text>
            </g>
            
            {/* Handshake */}
            <g className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <title>The client and server perform a TLS handshake to agree on encryption algorithms and exchange keys securely.</title>
                <path d="M 130 110 H 270" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-https)" className="draw-line" />
                <path d="M 270 130 H 130" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-https)" className="draw-line" style={{ animationDelay: '0.2s' }} />
                <text x="200" y="90" textAnchor="middle" fill="#cbd5e1" fontSize="12">1. TLS Handshake</text>
            </g>
            
            {/* Encrypted Tunnel */}
            <g className="animate-fade-in" style={{ animationDelay: '1800ms' }}>
                 <title>Once the handshake is complete, a secure, encrypted tunnel is established between the client and server.</title>
                 <path d="M 130 110 H 270" stroke="#4ade80" strokeWidth="12" fill="none" strokeOpacity="0.3" />
                 <foreignObject x="188" y="55" width="24" height="24">
                    <Lock className="w-6 h-6 text-green-400" />
                 </foreignObject>
                 <text x="200" y="45" textAnchor="middle" fill="#4ade80" fontSize="12">2. Secure Tunnel Established</text>
            </g>
            
            {/* Encrypted Data */}
             <g className="animate-fade-in" style={{ animationDelay: '2500ms' }}>
                <title>All subsequent HTTP data is encrypted and sent through the secure tunnel, protecting it from eavesdropping.</title>
                <path d="M 130 110 H 270" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-https)" className="draw-line"/>
                <text x="200" y="125" textAnchor="middle" fill="#cbd5e1" fontSize="12">Encrypted HTTP Request</text>
            </g>
        </svg>
    );
};
export default HttpsDiagram;