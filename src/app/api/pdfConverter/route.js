import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs-extra";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";
import pdfParse from "pdf-parse";
import path from "path";

export async function POST(req) {
  const form = formidable({ multiples: false, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return resolve(
          NextResponse.json({ error: "File parsing error" }, { status: 500 })
        );
      }

      const file = files.file;
      if (!file) {
        return resolve(
          NextResponse.json({ error: "No file uploaded" }, { status: 400 })
        );
      }

      const fileExt = path.extname(file.originalFilename).toLowerCase();
      const filePath = file.filepath;
      const outputPath = filePath.replace(fileExt, ".pdf");

      try {
        let convertedBuffer;

        if (fileExt === ".docx") {
          convertedBuffer = await docxToPdf(filePath);
        } else if ([".jpg", ".jpeg", ".png"].includes(fileExt)) {
          convertedBuffer = await imageToPdf(filePath);
        } else if (fileExt === ".pdf") {
          const extracted = await pdfToText(filePath);
          return resolve(
            NextResponse.json({ text: extracted }, { status: 200 })
          );
        } else {
          return resolve(
            NextResponse.json(
              { error: "Unsupported file format" },
              { status: 400 }
            )
          );
        }

        resolve(
          new NextResponse(convertedBuffer, {
            headers: {
              "Content-Type": "application/pdf",
              "Content-Disposition": `attachment; filename="converted.pdf"`,
            },
          })
        );
      } catch (error) {
        console.error(error);
        resolve(
          NextResponse.json({ error: "Conversion failed" }, { status: 500 })
        );
      } finally {
        fs.removeSync(filePath);
      }
    });
  });
}

// Convert DOCX to PDF
async function docxToPdf(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  page.drawText(result.value, { x: 50, y: 750, size: 12 });
  return pdfDoc.save();
}

// Convert Image to PDF
async function imageToPdf(filePath) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const imageBytes = await fs.readFile(filePath);
  const image = await pdfDoc.embedJpg(imageBytes);
  page.drawImage(image, { x: 50, y: 50, width: 500, height: 700 });
  return pdfDoc.save();
}

// Extract text from PDF
async function pdfToText(filePath) {
  const data = await pdfParse(await fs.readFile(filePath));
  return data.text;
}

export const config = { api: { bodyParser: false } };
