import { extractTextFromDocument } from "./utils.js";
import { translateText } from "./service.js";

export const translateDocument = async (req, res) => {
    try {
        const { targetLanguage } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Extract text from document
        const extractedText = await extractTextFromDocument(file);

        // Translate text
        const translatedText = await translateText(extractedText, targetLanguage);

        return res.status(200).json({ translatedText });
    } catch (error) {
        console.error("Translation Error:", error);
        return res.status(500).json({ error: "Failed to translate document" });
    }
};
