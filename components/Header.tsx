import React from 'react';
import { Search, GitCompareArrows } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    isCompareMode: boolean;
    onToggleCompareMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, selectedCategory, onSelectCategory, isCompareMode, onToggleCompareMode }) => {
    return (
        <header className="py-8 text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Networking Protocol Explorer
            </h1>
            <p className="mt-4 text-lg text-slate-400">
                An interactive guide by Harsh Srivastav& Anupam Bhargav
            </p>
            <div className="mt-8 max-w-xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="Search protocols (e.g., TCP, Secure...)"
                        value={searchTerm}
                        onChange={onSearchChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        aria-label="Search networking protocols"
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
                 {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500
                            ${selectedCategory === category && !isCompareMode
                                ? 'bg-sky-500 text-white shadow-md' 
                                : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                            }`}
                        disabled={isCompareMode}
                    >
                        {category}
                    </button>
                ))}
                <button
                    onClick={onToggleCompareMode}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500
                        ${isCompareMode
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                        }`}
                >
                    <GitCompareArrows className="h-4 w-4" />
                    {isCompareMode ? 'Close Comparison' : 'Compare Protocols'}
                </button>
            </div>
        </header>
    );
};

export default Header;