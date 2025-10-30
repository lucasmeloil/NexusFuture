import React from 'react';
import { HistoryIcon3D } from './icons3D';

interface ImageHistoryProps {
    history: string[];
    onSelectImage: (imageBase64: string) => void;
}

export const ImageHistory: React.FC<ImageHistoryProps> = ({ history, onSelectImage }) => {
    return (
        <section id="history-section" className="py-16 bg-gray-800/50 min-h-[250px] flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                    <HistoryIcon3D className="h-10 w-10 text-indigo-400" />
                    <h2 className="text-3xl font-bold">Seu Histórico</h2>
                </div>
                {history.length === 0 ? (
                    <div className="text-center text-gray-400 p-8 bg-gray-900/30 rounded-lg">
                        <p className="font-semibold">Nenhuma imagem foi gerada ainda.</p>
                        <p className="text-sm text-gray-500 mt-1">Suas criações aparecerão aqui assim que você gerar a primeira imagem.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {history.map((imageBase64, index) => (
                            <div key={index} className="aspect-square bg-gray-700 rounded-lg overflow-hidden group relative cursor-pointer" onClick={() => onSelectImage(imageBase64)}>
                                <img
                                    src={`data:image/png;base64,${imageBase64}`}
                                    alt={`Edited image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-semibold">Visualizar</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};