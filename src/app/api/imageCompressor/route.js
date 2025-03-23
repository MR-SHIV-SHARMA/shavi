import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const format = formData.get("format") || "jpeg";

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let compressedBuffer = await sharp(buffer)
      .resize(800)
      .toFormat(format, { quality: 70 })
      .toBuffer();

    let mimeType = `image/${format}`;
    let fileName = `compressed.${format}`;

    return new Response(compressedBuffer, {
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `attachment; filename=${fileName}`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
