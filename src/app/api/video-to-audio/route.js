import { NextResponse } from "next/server";
import multer from "multer";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import fs from "fs";
import path from "path";
import { promisify } from "util";

ffmpeg.setFfmpegPath(ffmpegPath);

// Configure Multer for file uploads
const upload = multer({ dest: "public/uploads/" });

// Promisify multer for Next.js API support
const uploadMiddleware = promisify(upload.single("video"));

// Handle video-to-audio conversion
export async function POST(req) {
  try {
    // Parse the form data
    const formData = await req.formData();
    const file = formData.get("video");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save uploaded file
    const videoPath = `public/uploads/${file.name}`;
    const audioPath = `public/uploads/${file.name}.mp3`;

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(videoPath, buffer);

    // Convert video to MP3
    await new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .toFormat("mp3")
        .on("end", resolve)
        .on("error", reject)
        .save(audioPath);
    });

    // Cleanup the video file after conversion
    fs.unlinkSync(videoPath);

    // Return the converted audio file URL
    return NextResponse.json({ audioUrl: `/uploads/${file.name}.mp3` });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
