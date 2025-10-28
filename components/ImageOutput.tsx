import React from 'react';
import { ImageIcon, DownloadIcon, EditIcon } from './icons';
import { Spinner } from './Spinner';

interface ImageOutputProps {
    imageUrl: string | null;
    isLoading: boolean;
    onUseAsOriginal: () => void;
}

export const ImageOutput: React.FC<ImageOutputProps> = ({ imageUrl, isLoading, onUseAsOriginal }) => {

    const handleDownload = () => {
        if (!imageUrl) return;
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `gemini-edited-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold text-gray-300">Edited Image</h2>
            <div className={`aspect-square w-full bg-gray-800/50 rounded-lg border-2 border-gray-700/80 flex items-center justify-center overflow-hidden relative transition-all duration-300 ease-in-out`}>
                {isLoading && <Spinner />}
                {!isLoading && imageUrl && (
                    <img src={imageUrl} alt="Edited" className="object-contain h-full w-full" />
                )}
                {!isLoading && !imageUrl && (
                    <div className="text-center text-gray-500 p-4">
                        <ImageIcon className="h-12 w-12 mx-auto" />
                        <p className="mt-2">Your edited image will appear here</p>
                    </div>
                )}
                {!isLoading && imageUrl && (
                     <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <button
                            onClick={onUseAsOriginal}
                            className="bg-gray-900/70 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all backdrop-blur-sm flex items-center gap-2"
                            title="Use this image for the next edit"
                        >
                            <EditIcon className="h-4 w-4" />
                            Editar
                        </button>
                        <button
                            onClick={handleDownload}
                            className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2"
                        >
                            <DownloadIcon className="h-4 w-4"/>
                            Download
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};