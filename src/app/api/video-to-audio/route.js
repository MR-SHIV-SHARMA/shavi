import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import multer from "multer";
import ffmpegStatic from "ffmpeg-static"; // ✅ डायरेक्ट इम्पोर्ट

// Check if ffmpeg-static is correctly imported
if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
} else {
  console.error("❌ ffmpeg-static path is undefined.");
}

// Promisify file operations
const unlinkAsync = promisify(fs.unlink);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

// Configure Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

export async function POST(req) {
  try {
    const formData = await new Promise((resolve, reject) => {
      upload.single("video")(req, {}, (err) => {
        if (err) reject(err);
        else resolve(req.file);
      });
    });

    if (!formData) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const file = formData;
    const uploadsDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadsDir)) {
      await mkdirAsync(uploadsDir, { recursive: true });
    }

    const timestamp = Date.now();
    const videoPath = path.join(
      uploadsDir,
      `${timestamp}-${file.originalname}`
    );
    const audioPath = path.join(
      uploadsDir,
      `${timestamp}-${file.originalname}.mp3`
    );

    await writeFileAsync(videoPath, file.buffer);

    await new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .output(audioPath)
        .toFormat("mp3")
        .on("end", resolve)
        .on("error", reject)
        .run();
    });

    await unlinkAsync(videoPath);

    return NextResponse.json({
      audioUrl: `/uploads/${timestamp}-${file.originalname}.mp3`,
    });
  } catch (error) {
    console.error("FFmpeg Conversion Error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
