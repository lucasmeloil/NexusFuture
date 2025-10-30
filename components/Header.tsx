import React, { useState } from 'react';
import { Logo } from './Logo';
import { MenuIcon, XIcon } from './icons3D';

interface HeaderProps {
    activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#how-it-works', label: 'Como Funciona' },
        { href: '#features', label: 'Recursos' },
        { href: '#history-section', label: 'Histórico' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu on click
        // Optional: update URL hash without causing a page jump
        if (history.pushState) {
            history.pushState(null, '', targetId);
        }
    };

    return (
        <>
            <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Home">
                                <Logo className="h-12" />
                            </a>
                        </div>
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a 
                                        key={link.href} 
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`text-sm font-semibold transition-colors ${isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400'}`}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                        </nav>
                        <div className="flex items-center">
                             <a href="#editor" onClick={(e) => handleNavClick(e, '#editor')} className="hidden md:inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-indigo-500 transition-colors">
                                Criar Agora
                            </a>
                            {/* Mobile Menu Button */}
                            <div className="md:hidden ml-4">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 z-40 animate-fade-in-down">
                    <div className="pt-20 px-2 space-y-1 text-center">
                        {navLinks.map((link) => (
                             <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-3 py-4 rounded-md text-xl font-medium text-gray-200 hover:text-indigo-400 hover:bg-gray-800">
                                {link.label}
                            </a>
                        ))}
                         <a href="#editor" onClick={(e) => handleNavClick(e, '#editor')} className="block w-full max-w-xs mx-auto mt-6 bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-500 text-lg">
                            Comece a Criar
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};