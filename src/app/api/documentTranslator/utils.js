// import pdfParse from "pdf-parse";
// import mammoth from "mammoth";
// import fs from "fs";
// import { promisify } from "util";
// const readFile = promisify(fs.readFile);

// export const extractTextFromDocument = async (file) => {
//     try {
//         const { mimetype, path } = file;

//         if (mimetype === "application/pdf") {
//             const data = await pdfParse(await readFile(path));
//             return data.text;
//         } else if (mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
//             const { value } = await mammoth.extractRawText({ path });
//             return value;
//         } else if (mimetype.startsWith("text/")) {
//             return await readFile(path, "utf-8");
//         } else {
//             throw new Error("Unsupported file format");
//         }
//     } catch (error) {
//         console.error("Text Extraction Failed:", error);
//         throw new Error("Failed to extract text from document");
//     }
// };
