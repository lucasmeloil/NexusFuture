
import React, { useRef, useCallback } from 'react';
import { UploadIcon } from './icons';

interface ImageInputProps {
    onImageUpload: (file: File) => void;
    imageUrl: string | null;
}

export const ImageInput: React.FC<ImageInputProps> = ({ onImageUpload, imageUrl }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageUpload(file);
        }
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            onImageUpload(file);
        }
    }, [onImageUpload]);

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold text-gray-300">Original Image</h2>
            <div className="aspect-square w-full bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden relative">
                {imageUrl ? (
                    <img src={imageUrl} alt="Original" className="object-contain h-full w-full" />
                ) : (
                     <label
                        htmlFor="image-upload"
                        className="w-full h-full flex flex-col items-center justify-center text-center p-4 cursor-pointer group"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <UploadIcon className="h-12 w-12 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                        <p className="mt-2 text-gray-400">
                            <span className="font-semibold text-indigo-400">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP, etc.</p>
                        <input
                            ref={fileInputRef}
                            id="image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                )}
                 {imageUrl && (
                    <button
                        onClick={triggerFileSelect}
                        className="absolute bottom-4 right-4 bg-gray-900/70 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all backdrop-blur-sm"
                    >
                        Change Image
                    </button>
                )}
            </div>
        </div>
    );
};
