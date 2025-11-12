import React from 'react';

const HttpDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-labelledby="http-diagram-title">
             <title id="http-diagram-title">HTTP Request/Response Cycle Diagram</title>
             <defs>
                <marker id="arrowhead-http" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
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

            {/* Request */}
            <g className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <title>The client sends a request to the server, asking for a resource (e.g., a web page).</title>
                <path d="M 130 80 H 270" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-http)" className="draw-line" />
                <text x="200" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="12">HTTP Request</text>
                <text x="200" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10">GET /page.html</text>
            </g>

            {/* Response */}
            <g className="animate-fade-in" style={{ animationDelay: '1500ms' }}>
                <title>The server processes the request and sends back a response, which includes the requested resource and a status code (e.g., 200 OK).</title>
                <path d="M 270 100 H 130" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-http)" className="draw-line" />
                <text x="200" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="12">HTTP Response</text>
                 <text x="200" y="135" textAnchor="middle" fill="#94a3b8" fontSize="10">200 OK</text>
            </g>
        </svg>
    );
};
export default HttpDiagram;