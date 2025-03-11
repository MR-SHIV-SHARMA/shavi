import { GoogleTranslate } from "@google-cloud/translate";
import { GOOGLE_API_KEY } from "./config.js";

const translate = new GoogleTranslate({ key: GOOGLE_API_KEY });

export const translateText = async (text, targetLanguage) => {
    try {
        const [translated] = await translate.translate(text, targetLanguage);
        return translated;
    } catch (error) {
        console.error("Translation Failed:", error);
        throw new Error("Translation Service Error");
    }
};
