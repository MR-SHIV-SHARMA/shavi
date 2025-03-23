import { NextResponse } from "next/server";
import sharp from "sharp";
import PDFDocument from "pdfkit";

export async function POST(req) {
  try {
    console.log("📩 Received POST request to /api/imageCompressor");

    // File extract karo
    const formData = await req.formData();
    const file = formData.get("file");
    const format = formData.get("format") || "jpeg";

    if (!file) {
      console.error("🚨 No file found in request");
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    console.log("📂 File received:", file.name, file.type, "Format:", format);

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("🔄 Compressing image...");

    let compressedBuffer;
    let mimeType = `image/${format}`;
    let fileName = `compressed.${format}`;

    if (format === "pdf") {
      console.log("📝 Generating PDF...");
      compressedBuffer = await generatePDF(buffer);
      mimeType = "application/pdf";
      fileName = "compressed.pdf";
      console.log("✅ PDF successfully generated!");
    } else {
      compressedBuffer = await sharp(buffer)
        .resize(800)
        .toFormat(format, { quality: 70 })
        .toBuffer();
    }

    console.log("✅ Compression successful!");

    return new Response(compressedBuffer, {
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `attachment; filename=${fileName}`,
      },
    });
  } catch (error) {
    console.error("🔥 Compression error:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// ✅ Proper PDF Generator
async function generatePDF(imageBuffer) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4" });
    let chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", (err) => reject(err));

    doc.font("Times-Roman");

    doc.image(imageBuffer, 50, 50, { fit: [500, 500] });
    doc.text("Compressed Image", 50, 550);

    doc.end();
  });
}
