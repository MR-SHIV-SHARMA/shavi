import fs from "fs/promises";
import path from "path";
import { writeFile } from "fs/promises";

const tempDir = path.join(process.cwd(), "public/temp");

// ✅ Ensure `public/temp` Folder Exists
async function ensureTempFolderExists() {
  try {
    await fs.mkdir(tempDir, { recursive: true });
    console.log("📁 Temp folder is ready.");
  } catch (err) {
    console.error("❌ Failed to create temp folder:", err);
  }
}

// ✅ Save PDF File to `public/temp`
export async function saveFileToTemp(file) {
  await ensureTempFolderExists();

  // 🔹 FIXED FILE PATH ISSUE
  const filePath = path.join(tempDir, file.name);
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    await writeFile(filePath, buffer);
    console.log(`✅ File saved at: ${filePath}`);
    return filePath;  // ✅ Ensure correct path is returned
  } catch (err) {
    console.error("❌ Error saving file:", err);
    throw new Error("File save failed");
  }
}

// ✅ Convert PDF to Text
export async function convertPdfToText(filePath) {
  const { default: pdfParse } = await import("pdf-parse");

  try {
    console.log(`📄 Converting PDF: ${filePath}`);

    // ✅ Ensure Correct Path is Used
    const absolutePath = path.resolve(filePath);
    console.log(`🔹 Absolute Path: ${absolutePath}`);

    // ✅ Read File from Correct Location
    const dataBuffer = await fs.readFile(absolutePath);
    const data = await pdfParse(dataBuffer);
    console.log("✅ PDF converted successfully!");

    // ✅ Delete File After Processing
    await fs.unlink(absolutePath);
    console.log("🗑️ Temp file deleted!");

    return data.text;
  } catch (error) {
    console.error("❌ Error in convertPdfToText:", error);
    throw new Error("Error processing PDF file");
  }
}
