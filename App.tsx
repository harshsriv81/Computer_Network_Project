import React, { useState } from 'react';
import { PROTOCOLS } from './constants';
import type { Protocol } from './types';
import Header from './components/Header';
import ProtocolCard from './components/ProtocolCard';
import ProtocolDetailsModal from './components/ProtocolDetailsModal';
import Footer from './components/Footer';
import ProtocolComparison from './components/ProtocolComparison';

const App: React.FC = () => {
    const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
    const [isCompareMode, setIsCompareMode] = useState(false);

    const handleSelectProtocol = (protocol: Protocol) => {
        setSelectedProtocol(protocol);
    };

    const handleCloseModal = () => {
        setSelectedProtocol(null);
    };
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const handleToggleExpand = (protocolId: string) => {
        setExpandedCardId(currentId => (currentId === protocolId ? null : protocolId));
    };

    const handleToggleCompareMode = () => {
        setIsCompareMode(prev => !prev);
    };

    const filteredProtocols = PROTOCOLS
        .filter(protocol => 
            selectedCategory === 'All' || protocol.category === selectedCategory
        )
        .filter(protocol =>
            protocol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            protocol.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            protocol.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
            <div className="relative isolate min-h-screen flex flex-col">
                <div 
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" 
                    aria-hidden="true">
                    <div 
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" 
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    ></div>
                </div>
                
                <Header 
                    searchTerm={searchTerm} 
                    onSearchChange={handleSearchChange}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleSelectCategory}
                    isCompareMode={isCompareMode}
                    onToggleCompareMode={handleToggleCompareMode}
                />
                
                <main className="container mx-auto px-4 py-8 flex-grow">
                    {isCompareMode ? (
                        <ProtocolComparison protocols={PROTOCOLS} />
                    ) : (
                        <>
                            {filteredProtocols.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {filteredProtocols.map((protocol, index) => (
                                        <ProtocolCard 
                                            key={protocol.id} 
                                            protocol={protocol} 
                                            onSelect={handleSelectProtocol}
                                            isExpanded={expandedCardId === protocol.id}
                                            onToggleExpand={handleToggleExpand}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-slate-400 text-xl">No protocols found matching your criteria.</p>
                                </div>
                            )}
                        </>
                    )}
                </main>
                
                <Footer />

                <ProtocolDetailsModal 
                    protocol={selectedProtocol} 
                    onClose={handleCloseModal} 
                />
            </div>
        </div>
    );
};

export default App;