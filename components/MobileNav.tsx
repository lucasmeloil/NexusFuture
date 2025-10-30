import React from 'react';
import { WandIcon3D, HistoryIcon3D, SparklesIcon3D } from './icons3D';

interface MobileNavProps {
    activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection }) => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { href: '#editor', label: 'Criar', icon: WandIcon3D, id: 'editor' },
        { href: '#history-section', label: 'Histórico', icon: HistoryIcon3D, id: 'history-section' },
        { href: '#features', label: 'Recursos', icon: SparklesIcon3D, id: 'features' }
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm border-t border-gray-700/50 z-50">
            <div className="flex justify-around items-center h-16">
                {navLinks.map(link => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                        <a 
                            key={link.id}
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`flex flex-col items-center justify-center transition-colors w-full h-full ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-indigo-400'}`}
                        >
                            <Icon className="h-6 w-6" />
                            <span className="text-xs font-medium">{link.label}</span>
                        </a>
                    )
                })}
            </div>
        </nav>
    );
};