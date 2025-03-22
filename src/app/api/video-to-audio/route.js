import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import * as ffmpegStaticModule from "ffmpeg-static";

// Attempt to retrieve the FFmpeg binary path
const ffmpegPath = ffmpegStaticModule.default || ffmpegStaticModule;
if (typeof ffmpegPath === "string" && ffmpegPath) {
  ffmpeg.setFfmpegPath(ffmpegPath);
} else {
  console.error("❌ ffmpeg-static did not provide a valid path.");
}

// Promisify file operations
const unlinkAsync = promisify(fs.unlink);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

export async function POST(req) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get("video");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Define upload paths
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadsDir)) {
      await mkdirAsync(uploadsDir, { recursive: true });
    }

    // Generate unique filenames
    const timestamp = Date.now();
    const videoPath = path.join(uploadsDir, `${timestamp}-${file.name}`);
    const audioPath = path.join(uploadsDir, `${timestamp}-${file.name}.mp3`);

    // Save the uploaded video file
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFileAsync(videoPath, buffer);

    // Convert video to audio (MP3)
    await new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .output(audioPath)
        .toFormat("mp3")
        .on("end", resolve)
        .on("error", reject)
        .run();
    });

    // Delete the original video file after conversion
    await unlinkAsync(videoPath);

    // Return the audio file URL
    return NextResponse.json({ audioUrl: `/uploads/${timestamp}-${file.name}.mp3` });
  } catch (error) {
    console.error("FFmpeg Conversion Error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
