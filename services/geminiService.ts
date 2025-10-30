import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";
import { fileToBase64 } from "../utils/fileUtils";

// Fix: Use `process.env.API_KEY` as required by the coding guidelines. This resolves the error on `import.meta.env`.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const editImage = async (imageFile: File, prompt: string): Promise<string> => {
    try {
        const base64Image = await fileToBase64(imageFile);
        const imageMimeType = imageFile.type;

        // Add a clearer instruction to the prompt to guide the model's behavior.
        const enhancedPrompt = `Your task is to edit the provided image based on this instruction: "${prompt}". Please apply the changes as described.`;

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image,
                            mimeType: imageMimeType,
                        },
                    },
                    {
                        text: enhancedPrompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });
        
        // First, check for prompt feedback which indicates a block before generation
        const blockReason = response.promptFeedback?.blockReason;
        if (blockReason) {
            throw new Error(`Request was blocked: ${blockReason}. Please adjust your prompt.`);
        }

        // If there are no candidates, generation failed.
        if (!response.candidates || response.candidates.length === 0) {
            const textFeedback = response.text;
            if (textFeedback) {
                 throw new Error(`Image generation failed. Model feedback: ${textFeedback}`);
            }
            throw new Error("Image generation failed. The model did not return a response, possibly due to a policy violation.");
        }

        const candidate = response.candidates[0];

        // The happy path: we have an image
        const imagePart = candidate.content?.parts?.find(p => !!p.inlineData);
        if (imagePart?.inlineData) {
            return imagePart.inlineData.data;
        }

        // If there's no image, figure out why and give a helpful error.
        const finishReason = candidate.finishReason;
        const textFeedback = response.text;
        
        let errorMessage = "An unknown error occurred during image generation.";

        switch (finishReason) {
            case 'NO_IMAGE':
                errorMessage = "The model was unable to generate an image from your prompt.";
                if (textFeedback) {
                    errorMessage = `Model feedback: "${textFeedback}". Try rephrasing your request.`;
                } else {
                    errorMessage += " Please try being more descriptive about the visual changes you'd like to see.";
                }
                break;
            
            case 'SAFETY':
                errorMessage = "The request was blocked due to safety policies. Please modify your prompt or use a different image.";
                break;
            
            case 'RECITATION':
                errorMessage = "The request was blocked due to the model's recitation policy. Please rephrase your prompt.";
                break;
                
            case 'IMAGE_OTHER':
                errorMessage = "Image generation failed for a general reason. This can sometimes be fixed by rephrasing your prompt, using a different starting image, or simply trying again.";
                break;

            default:
                if (finishReason && finishReason !== 'STOP') {
                    errorMessage = `Image generation failed with reason: ${finishReason}.`;
                } else if (textFeedback) {
                    errorMessage = `Model returned text instead of an image: "${textFeedback}"`;
                } else {
                    console.error("Unusual API Response, could not find image:", JSON.stringify(response, null, 2));
                    errorMessage = "No image data found in the API response for an unknown reason.";
                }
                break;
        }
        throw new Error(errorMessage);

    } catch (error) {
        console.error("Gemini API call failed:", error);
        if (error instanceof Error) {
            if (error.message.includes("API key not valid")) {
                throw new Error("The API key is invalid. Please check your configuration.");
            }
            // Re-throw the specific error from the try block or the underlying API error
            throw error;
        }
        // Generic fallback for non-Error exceptions
        throw new Error("Failed to generate image. The model may have refused the request.");
    }
};
