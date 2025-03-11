import { saveFileToTemp, convertPdfToText } from "./service";

export async function handlePdfConversion(file) {
  try {
    // ✅ Step 1: Save file to temp
    const filePath = await saveFileToTemp(file);

    // ✅ Step 2: Convert PDF to Text using Correct Path
    const extractedText = await convertPdfToText(filePath);

    console.log("✅ Conversion Successful:", extractedText);
    return extractedText;
  } catch (error) {
    console.error("❌ Error processing PDF file:", error);
    throw new Error("Error processing PDF file");
  }
}
