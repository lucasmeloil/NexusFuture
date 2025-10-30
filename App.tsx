import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageInput } from './components/ImageInput';
import { ImageOutput } from './components/ImageOutput';
import { PromptControls } from './components/PromptControls';
import { ImageHistory } from './components/ImageHistory';
import { editImage } from './services/geminiService';
import { UploadIcon3D, TypeIcon3D, WandIcon3D, CropIcon3D, ImageIcon3D, SparklesIcon3D, NexusSoftTechIcon, InstagramIcon } from './components/icons3D';
import { Logo } from './components/Logo';
import { dataUrlToFile, useActiveSection } from './utils/fileUtils';
import { MobileNav } from './components/MobileNav';


const App: React.FC = () => {
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [editedImageBase64, setEditedImageBase64] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<string[]>([]);

    const sectionIds = ['how-it-works', 'features', 'history-section', 'editor'];
    const activeSection = useActiveSection(sectionIds);

    const originalImageUrl = useMemo(() => {
        if (!originalFile) return null;
        return URL.createObjectURL(originalFile);
    }, [originalFile]);

    const editedImageUrl = useMemo(() => {
        if (!editedImageBase64) return null;
        return `data:image/png;base64,${editedImageBase64}`;
    }, [editedImageBase64]);

    const handleImageUpload = useCallback((file: File) => {
        setOriginalFile(file);
        setEditedImageBase64(null);
        setError(null);
        setPrompt('');
    }, []);

    const handleNewEdit = useCallback(() => {
        setOriginalFile(null);
        setEditedImageBase64(null);
        setPrompt('');
        setError(null);
    }, []);

    const handleHistorySelect = useCallback((imageBase64: string) => {
        setEditedImageBase64(imageBase64);
        document.getElementById('editor')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleUseAsOriginal = useCallback(async () => {
        if (!editedImageUrl) return;

        try {
            const newFile = await dataUrlToFile(editedImageUrl, `edited-${Date.now()}.png`);
            setOriginalFile(newFile);
            setEditedImageBase64(null);
            setPrompt('');
            setError(null);
            document.getElementById('editor')?.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error("Failed to convert data URL to file:", error);
            setError("Could not use the edited image as a new original.");
        }
    }, [editedImageUrl]);

    const handleSubmit = async () => {
        if (!originalFile) {
            setError('Please upload an image first.');
            return;
        }
        if (!prompt.trim()) {
            setError('Please enter a prompt to describe your edit.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setEditedImageBase64(null);

        try {
            const resultBase64 = await editImage(originalFile, prompt);
            setEditedImageBase64(resultBase64);
            setHistory(prevHistory => [resultBase64, ...prevHistory]);
        } catch (e) {
            console.error(e);
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during image generation.';
            setError(`Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
            <Header activeSection={activeSection} />

            {/* Hero Section */}
            <section id="hero" className="text-center py-20 px-4 bg-gray-900">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white animate-fade-in-down">
                    Transforme Suas Imagens com IA
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 animate-fade-in-up">
                    Libere sua criatividade. Descreva qualquer edição e veja nossa IA dar vida a ela em segundos.
                </p>
                <a href="#editor" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('editor')?.scrollIntoView({ behavior: 'smooth' });
                }} className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-500 transition-transform hover:scale-105">
                    Comece a Criar Agora
                </a>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="py-16 bg-gray-800/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-2">Simples e Poderoso</h2>
                    <p className="text-gray-400 mb-12">O processo é fácil e intuitivo.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full mb-4">
                                <UploadIcon3D className="h-20 w-20" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">1. Envie sua Imagem</h3>
                            <p className="text-gray-400">Faça o upload ou arraste e solte a imagem que você deseja editar.</p>
                        </div>
                        <div className="flex flex-col items-center">
                           <div className="p-4 rounded-full mb-4">
                                <TypeIcon3D className="h-20 w-20" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">2. Descreva a Edição</h3>
                            <p className="text-gray-400">Escreva em linguagem natural o que você quer mudar ou adicionar.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full mb-4">
                                <WandIcon3D className="h-20 w-20" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">3. Gere a Mágica</h3>
                            <p className="text-gray-400">Nossa IA processa seu pedido e entrega a imagem editada em instantes.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <main id="editor" className="flex-grow container mx-auto p-4 md:p-8 flex flex-col">
                 {error && (
                    <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative mb-6" role="alert">
                        <strong className="font-bold">Oops! </strong>
                        <span className="block sm:inline">{error}</span>
                        <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-200" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </button>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
                    <ImageInput onImageUpload={handleImageUpload} imageUrl={originalImageUrl} />
                    <ImageOutput imageUrl={editedImageUrl} isLoading={isLoading} onUseAsOriginal={handleUseAsOriginal} />
                </div>
                <PromptControls
                    prompt={prompt}
                    setPrompt={setPrompt}
                    onSubmit={handleSubmit}
                    onNewEdit={handleNewEdit}
                    isLoading={isLoading}
                    originalFile={originalFile}
                />
            </main>

            <ImageHistory history={history} onSelectImage={handleHistorySelect} />

            {/* Feature Ideas Section */}
            <section id="features" className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-2">Infinitas Possibilidades</h2>
                    <p className="text-gray-400 mb-12">Explore novas funcionalidades para expandir sua criatividade.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-gray-800/50 p-6 rounded-lg text-left flex flex-col items-center sm:items-start text-center sm:text-left">
                            <CropIcon3D className="h-14 w-14 mb-3" />
                            <h3 className="font-semibold text-lg">Formatos Sociais</h3>
                            <p className="text-gray-400 text-sm">Gere imagens nos formatos ideais para post, story ou paisagem com um clique.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg text-left flex flex-col items-center sm:items-start text-center sm:text-left">
                            <ImageIcon3D className="h-14 w-14 mb-3" />
                            <h3 className="font-semibold text-lg">Gere do Zero</h3>
                            <p className="text-gray-400 text-sm">Não tem uma imagem? Descreva sua ideia e deixe a IA criar uma arte original para você.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg text-left flex flex-col items-center sm:items-start text-center sm:text-left">
                            <SparklesIcon3D className="h-14 w-14 mb-3" />
                            <h3 className="font-semibold text-lg">Estilos Prontos</h3>
                            <p className="text-gray-400 text-sm">Aplique estilos como "cinemático", "vintage" ou "fantasia" com prompts simples.</p>
                        </div>
                    </div>
                </div>
            </section>

             <footer className="bg-gray-800/50 border-t border-gray-700/50">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1: Logo and Copyright */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <Logo className="h-10 mb-4" />
                            <p className="text-gray-400 max-w-xs">
                                Acelere sua criatividade com o poder da Inteligência Artificial.
                            </p>
                             <p className="text-sm text-gray-500 mt-6">
                                &copy; {new Date().getFullYear()} NEXUS FUTURE. Todos os direitos reservados.
                            </p>
                        </div>

                        {/* Column 2: Navigation */}
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Navegação</h3>
                            <ul className="space-y-2">
                                <li><a href="#how-it-works" className="text-gray-400 hover:text-indigo-400 transition-colors">Como Funciona</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-indigo-400 transition-colors">Recursos</a></li>
                                <li><a href="#history-section" className="text-gray-400 hover:text-indigo-400 transition-colors">Histórico</a></li>
                                 <li><a href="#editor" className="text-gray-400 hover:text-indigo-400 transition-colors">Editor</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Social and Contact */}
                        <div className="text-center md:text-left">
                             <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Desenvolvido por</h3>
                             <ul className="space-y-3">
                                <li className="flex items-center justify-center md:justify-start gap-3">
                                    <NexusSoftTechIcon className="h-6 w-6" />
                                    <a href="https://www.nexussofttech.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        Nexus Soft Tech
                                    </a>
                                </li>
                                <li className="flex items-center justify-center md:justify-start gap-3">
                                    <InstagramIcon className="h-6 w-6" />
                                    <a href="https://www.instagram.com/nexusofttech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        @nexusofttech
                                    </a>
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <MobileNav activeSection={activeSection} />
        </div>
    );
};

export default App;