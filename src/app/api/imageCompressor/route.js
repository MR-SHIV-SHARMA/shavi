import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req) {
  try {
    console.log("📩 Received POST request to /api/imageCompressor");

    // FormData se file extract karna
    const formData = await req.formData();
    console.log("🔍 Extracting file from request...");
    const file = formData.get("file");

    if (!file) {
      console.error("🚨 No file found in request");
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    console.log("📂 File received:", file.name, file.type);

    // File ko Buffer me convert karo
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log("🔄 Compressing image...");
    const compressedImageBuffer = await sharp(buffer)
      .resize(800)
      .jpeg({ quality: 70 })
      .toBuffer();

    console.log("✅ Compression successful!");

    return NextResponse.json({
      success: true,
      image: `data:image/jpeg;base64,${compressedImageBuffer.toString(
        "base64"
      )}`,
    });
  } catch (error) {
    console.error("🔥 Compression error:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
