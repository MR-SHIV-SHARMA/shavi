import { NextResponse } from "next/server";
import sharp from "sharp";

const MAX_FILE_SIZE_MB = 25;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_FORMATS = ["jpeg", "jpg", "webp", "png", "tiff", "gif", "bmp"];

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const format = (formData.get("format") || "webp").toLowerCase();

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded. Please select an image.",
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: `File size exceeds ${MAX_FILE_SIZE_MB}MB limit. Please upload a smaller file.`,
        },
        { status: 400 }
      );
    }

    // Extract MIME type and ensure it's a supported image format
    const mimeType = file.type.split("/")[1]; // Extract file extension from MIME
    if (!ALLOWED_FORMATS.includes(mimeType)) {
      return NextResponse.json(
        {
          success: false,
          message: `Unsupported file type: ${mimeType}. Please upload a valid image.`,
        },
        { status: 400 }
      );
    }

    if (!ALLOWED_FORMATS.includes(format)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid format selected: ${format}. Please choose a valid format.`,
        },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const formatOptions = {};

    switch (format) {
      case "jpeg":
      case "jpg":
        formatOptions.quality = 85;
        formatOptions.mozjpeg = true;
        break;
      case "webp":
        formatOptions.quality = 85;
        formatOptions.lossless = false;
        break;
      case "png":
        formatOptions.compressionLevel = 6;
        formatOptions.adaptiveFiltering = true;
        break;
      case "tiff":
        formatOptions.quality = 90;
        break;
      case "gif":
        formatOptions.lossy = true;
        break;
      case "bmp":
        break;
    }

    const compressedBuffer = await sharp(buffer)
      .toFormat(format, formatOptions)
      .toBuffer();

    return new Response(compressedBuffer, {
      headers: {
        "Content-Type": `image/${format}`,
        "Content-Disposition": `attachment; filename=optimized.${format}`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        errorDetails:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
