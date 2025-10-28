import React from 'react';

type LogoProps = {
    className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={`flex items-center gap-3 text-white ${className}`}>
            <svg
                viewBox="0 0 24 24"
                className="h-full w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-400"
                />
            </svg>
            <span className="text-xl font-semibold tracking-tight whitespace-nowrap">NEXUS FUTURE</span>
        </div>
    );
};
