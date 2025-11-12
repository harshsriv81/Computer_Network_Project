import React from 'react';

const SmtpDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 250" className="w-full h-auto" aria-labelledby="smtp-diagram-title">
             <title id="smtp-diagram-title">SMTP Email Transmission Diagram</title>
             <defs>
                <marker id="arrowhead-smtp" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
                </marker>
            </defs>

            {/* Nodes */}
            <g className="animate-fade-in">
                <rect x="20" y="30" width="120" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="80" y="55" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Sender's MUA</text>
            </g>
             <g className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <rect x="20" y="150" width="120" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="80" y="175" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Sender's MTA</text>
            </g>
             <g className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <rect x="260" y="150" width="120" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="320" y="175" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Receiver's MTA</text>
            </g>

            {/* Arrows */}
            <g className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <title>The sender's Mail User Agent (MUA), like an email client, submits the outgoing email to its Mail Transfer Agent (MTA) or mail server.</title>
                <path d="M 80 75 V 145" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-smtp)" className="draw-line" />
                <text x="100" y="110" fill="#cbd5e1" fontSize="12">1. Submission</text>
            </g>
            <g className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
                <title>The sender's MTA uses SMTP to relay the email to the recipient's MTA across the internet.</title>
                <path d="M 145 170 H 255" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-smtp)" className="draw-line" />
                <text x="200" y="160" textAnchor="middle" fill="#cbd5e1" fontSize="12">2. SMTP Relay</text>
            </g>
            <g className="animate-fade-in" style={{ animationDelay: '1800ms' }}>
                <title>The recipient's MTA receives the email and delivers it to the recipient's mailbox, where it can be retrieved by their MUA.</title>
                <path d="M 320 145 V 50" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <text x="260" y="100" fill="#cbd5e1" fontSize="12">3. Delivery</text>
                <text x="320" y="30" textAnchor="middle" fill="#94a3b8" fontSize="12">(To Mailbox)</text>
            </g>
        </svg>
    );
};
export default SmtpDiagram;