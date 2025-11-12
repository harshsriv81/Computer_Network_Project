import React from 'react';

const FtpDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-labelledby="ftp-diagram-title">
             <title id="ftp-diagram-title">FTP Control and Data Channels Diagram</title>
             <defs>
                <marker id="arrowhead-ftp" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
                </marker>
            </defs>

            {/* Nodes */}
            <g className="animate-fade-in">
                <rect x="25" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="75" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Client</text>
            </g>
             <g className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <rect x="275" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="325" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Server</text>
            </g>

            {/* Control Channel */}
            <g className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <title>The control channel is used to send commands and receive responses, like logging in and listing files.</title>
                <path d="M 130 80 H 270" stroke="#f0abfc" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrowhead-ftp)" className="draw-line" />
                <text x="200" y="70" textAnchor="middle" fill="#f0abfc" fontSize="12">Control Channel (Port 21)</text>
                <text x="200" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10">Commands: USER, PASS, LIST</text>
            </g>
            
            {/* Data Channel */}
            <g className="animate-fade-in" style={{ animationDelay: '1500ms' }}>
                <title>The data channel is used for the actual transfer of file content.</title>
                <path d="M 130 110 H 270" stroke="#38bdf8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead-ftp)" className="draw-line" />
                <text x="200" y="125" textAnchor="middle" fill="#38bdf8" fontSize="12">Data Channel (Port 20)</text>
                <text x="200" y="140" textAnchor="middle" fill="#94a3b8" fontSize="10">File Contents</text>
            </g>
        </svg>
    );
};
export default FtpDiagram;