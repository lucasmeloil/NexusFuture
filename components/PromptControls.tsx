import React from 'react';
import { WandIcon, RefreshIcon } from './icons';

interface PromptControlsProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onSubmit: () => void;
    onNewEdit: () => void;
    isLoading: boolean;
    originalFile: File | null;
}

export const PromptControls: React.FC<PromptControlsProps> = ({ prompt, setPrompt, onSubmit, onNewEdit, isLoading, originalFile }) => {
    
    const isButtonDisabled = isLoading || !originalFile;

    return (
        <div className="w-full pt-8">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <textarea
                    rows={2}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={originalFile ? "e.g., Add a retro filter and a golden retriever" : "Please upload an image first..."}
                    disabled={!originalFile || isLoading}
                    className="flex-grow bg-gray-800 border-2 border-gray-600 rounded-lg py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-white placeholder-gray-500 resize-none disabled:cursor-not-allowed disabled:opacity-60"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (!isButtonDisabled) onSubmit();
                        }
                    }}
                />
                <div className="flex-shrink-0 flex items-center justify-end gap-2">
                     <button
                        onClick={onNewEdit}
                        disabled={isButtonDisabled}
                        className="bg-gray-700 text-gray-300 font-bold py-3 px-4 rounded-md hover:bg-gray-600 disabled:bg-gray-700/50 disabled:text-gray-500 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                        aria-label="Start new edit"
                    >
                        <RefreshIcon className="h-5 w-5" />
                        <span className="hidden sm:inline">Nova Edição</span>
                    </button>
                    <button
                        onClick={onSubmit}
                        disabled={isButtonDisabled}
                        className="bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed transition-all flex items-center gap-2 flex-grow sm:flex-grow-0 justify-center"
                    >
                        <WandIcon className="h-5 w-5" />
                        <span>{isLoading ? 'Gerando...' : 'Gerar'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};