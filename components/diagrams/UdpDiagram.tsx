import React from 'react';

const UdpDiagram: React.FC = () => {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-labelledby="udp-diagram-title">
            <title id="udp-diagram-title">UDP Datagram Transmission Diagram</title>
            <defs>
                <style>
                    {`
                    @keyframes send-packet {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(145px); opacity: 1; }
                    }
                    @keyframes send-packet-lost {
                        from { transform: translate(0, 0); opacity: 1; }
                        to { transform: translate(100px, 40px) scale(0.5); opacity: 0; }
                    }
                    .packet { animation: send-packet 1s ease-in-out forwards; }
                    .packet-lost { animation: send-packet-lost 1.2s ease-in-out forwards; }
                    `}
                </style>
            </defs>
            {/* Nodes */}
            <g className="animate-fade-in">
                <title>The sender transmits datagrams without establishing a prior connection.</title>
                <rect x="25" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="75" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Sender</text>
            </g>
            <g className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <title>The receiver gets the datagrams, but some may be lost or arrive out of order.</title>
                <rect x="275" y="70" width="100" height="40" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <text x="325" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Receiver</text>
            </g>

            {/* Packets */}
            <g transform="translate(130, 80)">
                <rect className="packet" style={{ animationDelay: '0.5s' }} x="0" y="0" width="20" height="20" rx="4" fill="#38bdf8"/>
            </g>
            <g transform="translate(130, 80)">
                <rect className="packet" style={{ animationDelay: '0.8s' }} x="0" y="0" width="20" height="20" rx="4" fill="#38bdf8"/>
            </g>
            <g transform="translate(130, 80)">
                 <g>
                    <title>UDP does not guarantee delivery. This packet is lost in transit and will not be re-sent.</title>
                    <rect className="packet-lost" style={{ animationDelay: '1.1s' }} x="0" y="0" width="20" height="20" rx="4" fill="#f472b6"/>
                 </g>
            </g>
             <g transform="translate(130, 80)">
                <rect className="packet" style={{ animationDelay: '1.4s' }} x="0" y="0" width="20" height="20" rx="4" fill="#38bdf8"/>
            </g>
            
            <text x="200" y="160" textAnchor="middle" fill="#cbd5e1" fontSize="12" className="animate-fade-in" style={{ animationDelay: '2s' }}>
                Connectionless, no delivery guarantee
            </text>
        </svg>
    );
};

export default UdpDiagram;