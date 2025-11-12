import type { Protocol } from './types';
import { Handshake, Zap, Network, Globe, Lock, BookMarked, FolderGit2, Mail } from 'lucide-react';
import TcpDiagram from './components/diagrams/TcpDiagram';
import UdpDiagram from './components/diagrams/UdpDiagram';
import IpDiagram from './components/diagrams/IpDiagram';
import HttpDiagram from './components/diagrams/HttpDiagram';
import HttpsDiagram from './components/diagrams/HttpsDiagram';
import DnsDiagram from './components/diagrams/DnsDiagram';
import FtpDiagram from './components/diagrams/FtpDiagram';
import SmtpDiagram from './components/diagrams/SmtpDiagram';

export const CATEGORIES = ['All', 'Transport', 'Application', 'Network'];

export const PROTOCOLS: Protocol[] = [
  {
    id: 'tcp',
    name: 'TCP',
    fullName: 'Transmission Control Protocol',
    description: 'A reliable, connection-oriented protocol used to send data over a network. It ensures that all packets arrive in order and without errors.',
    characteristics: ['Reliable & Ordered Delivery', 'Connection-Oriented', 'Error Checking', 'Flow Control'],
    icon: Handshake,
    category: 'Transport',
    diagram: TcpDiagram,
  },
  {
    id: 'udp',
    name: 'UDP',
    fullName: 'User Datagram Protocol',
    description: 'A simple, connectionless protocol that sends packets (datagrams) without establishing a connection first. It is fast but does not guarantee delivery.',
    characteristics: ['Connectionless', 'Unreliable Delivery', 'No Error Checking', 'Faster than TCP'],
    icon: Zap,
    category: 'Transport',
    diagram: UdpDiagram,
  },
  {
    id: 'ip',
    name: 'IP',
    fullName: 'Internet Protocol',
    description: 'The principal communications protocol for relaying datagrams across network boundaries. Its primary function is to deliver packets from the source host to the destination host based on IP addresses.',
    characteristics: ['Packet Addressing', 'Routing', 'Connectionless', 'Part of TCP/IP Suite'],
    icon: Network,
    category: 'Network',
    diagram: IpDiagram,
  },
  {
    id: 'http',
    name: 'HTTP',
    fullName: 'Hypertext Transfer Protocol',
    description: 'An application protocol for distributed, collaborative, hypermedia information systems. It is the foundation of data communication for the World Wide Web.',
    characteristics: ['Client-Server Model', 'Stateless', 'Text-Based', 'Runs on top of TCP'],
    icon: Globe,
    category: 'Application',
    diagram: HttpDiagram,
  },
  {
    id: 'https',
    name: 'HTTPS',
    fullName: 'Hypertext Transfer Protocol Secure',
    description: 'An extension of HTTP for secure communication over a computer network. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS).',
    characteristics: ['Secure & Encrypted', 'Data Integrity', 'Authentication', 'Protects against Eavesdropping'],
    icon: Lock,
    category: 'Application',
    diagram: HttpsDiagram,
  },
  {
    id: 'dns',
    name: 'DNS',
    fullName: 'Domain Name System',
    description: 'A hierarchical and decentralized naming system that translates human-readable domain names (e.g., www.google.com) to machine-readable IP addresses.',
    characteristics: ['Domain to IP Translation', 'Hierarchical Structure', 'Distributed Database', 'Uses UDP (usually)'],
    icon: BookMarked,
    category: 'Application',
    diagram: DnsDiagram,
  },
   {
    id: 'ftp',
    name: 'FTP',
    fullName: 'File Transfer Protocol',
    description: 'A standard network protocol used for the transfer of computer files between a client and server on a computer network. It uses separate control and data connections.',
    characteristics: ['File Transfer', 'Client-Server Architecture', 'Requires Authentication', 'Separate Control/Data Channels'],
    icon: FolderGit2,
    category: 'Application',
    diagram: FtpDiagram,
  },
   {
    id: 'smtp',
    name: 'SMTP',
    fullName: 'Simple Mail Transfer Protocol',
    description: 'A communication protocol for electronic mail transmission. As an Internet standard, SMTP is used by mail servers to send and receive mail messages.',
    characteristics: ['Email Transmission', 'Push Protocol', 'Text-Based', 'Store-and-Forward Model'],
    icon: Mail,
    category: 'Application',
    diagram: SmtpDiagram,
  },
];