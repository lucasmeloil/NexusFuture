import React from 'react';

type IconProps = {
    className?: string;
};

export const UploadIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="upload-grad-1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#a8b5ff' }} />
                <stop offset="100%" style={{ stopColor: '#6366f1' }} />
            </radialGradient>
            <linearGradient id="upload-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#dbeafe' }} />
                <stop offset="100%" style={{ stopColor: '#bfdbfe' }} />
            </linearGradient>
            <filter id="upload-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#upload-shadow)">
            <path d="M99.1,63.1c-1.7-16.3-15.6-29-32.3-29c-11.2,0-21.1,5.8-26.8,14.9c-1.3-0.2-2.6-0.4-3.9-0.4c-9.9,0-18,8.1-18,18s8.1,18,18,18h53c9.4,0,17-7.6,17-17C115.1,70.5,108.2,63.9,99.1,63.1z" fill="url(#upload-grad-2)" />
            <path d="M74,68.3v22c0,3.3-2.7,6-6,6s-6-2.7-6-6v-22h-9.9c-2.8,0-4.3-3.6-2.2-5.5l15-13.8c2.4-2.2,6.1-2.2,8.5,0l15,13.8c2.1,1.9,0.7,5.5-2.2,5.5H74z" fill="url(#upload-grad-1)" />
        </g>
    </svg>
);


export const TypeIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="type-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#c4b5fd' }} />
                <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
            </linearGradient>
            <linearGradient id="type-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#e0e7ff' }} />
                <stop offset="100%" style={{ stopColor: '#c7d2fe' }} />
            </linearGradient>
             <filter id="type-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g transform="rotate(10 64 64)" filter="url(#type-shadow)">
            <rect x="20" y="20" width="88" height="88" rx="12" ry="12" fill="url(#type-grad-2)" />
            <path d="M52,42 h24 v44 h-8 v-18 h-8 v18 h-8 z" fill="url(#type-grad-1)" />
        </g>
    </svg>
);

export const WandIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="wand-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
            <linearGradient id="wand-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
             <filter id="wand-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g transform="rotate(-30 64 64)" filter="url(#wand-shadow)">
            <rect x="68" y="32" width="12" height="74" rx="6" ry="6" fill="url(#wand-grad-2)" transform="rotate(45 74 69)" />
            <path d="M64 10 L 74 38 L 102 48 L 74 58 L 64 86 L 54 58 L 26 48 L 54 38 Z" fill="url(#wand-grad-1)" />
        </g>
    </svg>
);


export const CropIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="crop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
             <filter id="crop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#crop-shadow)">
            <path d="M30 10 V 88 H 108 V 102 H 20 V 10 z" fill="url(#crop-grad)" />
            <path d="M98 118 V 30 H 20 V 16 H 108 V 118 z" fill="url(#crop-grad)" />
        </g>
    </svg>
);

export const ImageIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="img-grad-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
             <linearGradient id="img-grad-sun" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="img-grad-ground" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <linearGradient id="img-grad-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
             <filter id="img-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#img-shadow)">
            <rect x="10" y="10" width="108" height="108" rx="12" ry="12" fill="url(#img-grad-frame)" />
            <rect x="22" y="22" width="84" height="84" rx="6" ry="6" fill="url(#img-grad-sky)" />
            <circle cx="45" cy="45" r="10" fill="url(#img-grad-sun)" />
            <path d="M 22 106 L 22 80 L 52 60 L 96 90 L 106 80 L 106 106 Z" fill="url(#img-grad-ground)" />
        </g>
    </svg>
);

export const SparklesIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
             <filter id="sparkle-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#sparkle-shadow)">
            <path d="M64 10 L 76 42 L 110 50 L 84 74 L 90 108 L 64 90 L 38 108 L 44 74 L 18 50 L 52 42 Z" fill="url(#sparkle-grad)" />
            <path d="M20 20 L 25 30 L 35 35 L 25 40 L 20 50 L 15 40 L 5 35 L 15 30 Z" fill="url(#sparkle-grad)" opacity="0.8" />
            <path d="M108 80 L 112 90 L 120 94 L 112 98 L 108 108 L 104 98 L 96 94 L 104 90 Z" fill="url(#sparkle-grad)" opacity="0.8" />
        </g>
    </svg>
);


export const HistoryIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="history-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>
            <linearGradient id="history-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
             <filter id="history-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>
        </defs>
        <g filter="url(#history-shadow)">
            <circle cx="64" cy="64" r="54" fill="url(#history-grad-1)" />
            <path d="M64 30 V 64 H 90" stroke="url(#history-grad-2)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 94.7,85.7 A 40 40, 0, 1, 0, 80,24" stroke="url(#history-grad-2)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <polygon points="70,12 80,24 90,12" fill="url(#history-grad-2)" />
        </g>
    </svg>
);

export const RefreshIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.06189 13.1317C3.59771 12.607 3.59771 11.751 4.06189 11.2263L11.2891 3.29C12.1102 2.37373 13.561 2.9734 13.561 4.08183V7.91572C17.548 8.24353 20.3333 11.782 19.932 15.9056C19.508 20.245 15.823 23.5113 11.561 22.997C10.161 22.825 8.93189 22.2533 8.00001 21.353" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const EditIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.022 5.234L13.142 3.114C14.242 2.014 15.952 2.014 17.052 3.114L18.882 4.944C19.982 6.044 19.982 7.754 18.882 8.854L16.762 10.974M11.022 5.234L4 12.254V17.254H9L16.762 10.974M11.022 5.234L16.762 10.974" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DownloadIcon3D: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L12 15M12 15L16 11M12 15L8 11M4 17L4 20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22L18 22C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20L20 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


export const NexusSoftTechIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        ></path>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w.org/2000/svg"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);