import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import { Poppler } from "node-poppler";
import { promisify } from "util";
import { Readable } from "stream";

const tempDir = path.join(process.cwd(), "public/temp");
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

// Convert buffer to readable stream
const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

export async function POST(req) {
  console.log("📨 Received POST request");

  try {
    // ✅ Read the entire request body as a buffer
    const chunks = [];
    for await (const chunk of req.body) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    console.log("📥 Request body received, size:", buffer.length);

    const form = new IncomingForm({
      uploadDir: tempDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      multiples: false,
    });

    // ✅ Convert buffer into readable stream
    const stream = bufferToStream(buffer);
    const parseForm = promisify(form.parse.bind(form));

    try {
      const [fields, files] = await parseForm(stream);
      console.log("📄 Parsed files:", files);

      if (!files.file) {
        console.warn("⚠️ No file uploaded");
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }

      const uploadedFile = files.file;
      const pdfFilePath = uploadedFile.path;
      const textOutputPath = path.join(tempDir, uploadedFile.name.replace(".pdf", ".txt"));

      console.log("📂 Processing PDF:", pdfFilePath);

      // ✅ Extract text using Poppler
      const poppler = new Poppler();
      await poppler.pdfToText(pdfFilePath, textOutputPath, {
        firstPageToConvert: 1,
        lastPageToConvert: 5, // Change as needed
      });

      // ✅ Read extracted text
      const extractedText = fs.readFileSync(textOutputPath, "utf-8");

      return NextResponse.json({
        success: true,
        filename: uploadedFile.name,
        extractedText,
      });
    } catch (parseError) {
      console.error("❌ Formidable parse error:", parseError);
      return NextResponse.json({ error: "File upload failed" }, { status: 500 });
    }
  } catch (error) {
    console.error("🔥 Top-level error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export const config = { api: { bodyParser: false } };
