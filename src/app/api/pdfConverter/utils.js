// src/app/api/pdfConverter/utils.js
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

export async function processFileToPdf(file) {
  const uploadDir = path.join(process.cwd(), "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, file.name);

  console.log(`Saving file to: ${filePath}`);
  await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText("File converted to PDF");
  const pdfBytes = await pdfDoc.save();

  console.log(`File processed, deleting: ${filePath}`);
  await fs.unlink(filePath);

  return { pdf: Buffer.from(pdfBytes).toString("base64") };
}
