import { useState, useEffect } from 'react';

export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // The result is a data URL: "data:image/jpeg;base64,....". We only need the part after the comma.
            const base64String = result.split(',')[1];
            if (base64String) {
                resolve(base64String);
            } else {
                reject(new Error("Failed to extract base64 string from file."));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};

export const dataUrlToFile = async (dataUrl: string, filename: string): Promise<File> => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type });
};

export const useActiveSection = (sectionIds: string[], rootMargin = '-50% 0px -50% 0px'): string => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    observer.unobserve(el);
                }
            });
        };
    }, [sectionIds, rootMargin]);

    return activeSection;
};