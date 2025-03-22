const express = require("express"); // Importing Express framework for building the server
const cors = require("cors"); // Importing CORS middleware to allow cross-origin requests
const multer = require("multer"); // Importing Multer for handling file uploads
const ffmpeg = require("fluent-ffmpeg"); // Importing Fluent FFmpeg to handle video/audio conversion
const ffmpegPath = require("ffmpeg-static"); // Importing static path of FFmpeg binaries
const fs = require("fs"); // Importing File System module for file operations
const path = require("path"); // Importing Path module for handling file paths

ffmpeg.setFfmpegPath(ffmpegPath); // Setting the FFmpeg path for Fluent FFmpeg

const app = express(); // Creating an Express application
app.use(cors()); // Enabling CORS for all routes
const upload = multer({ dest: "uploads/" }); // Configuring Multer to store uploaded files in 'uploads/' directory

// Route to handle video file conversion
app.post("/convert", upload.single("video"), (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).send("No file uploaded."); // Sending error response if no file is provided
  }

  const videoPath = req.file.path; // Path of the uploaded video file
  const audioPath = path.join("uploads", `${req.file.filename}.mp3`); // Path for the converted audio file

  // Using FFmpeg to convert the video to audio format
  ffmpeg(videoPath)
    .toFormat("mp3") // Setting output format to MP3
    .on("end", () => {
      // Called when the conversion is complete
      res.download(audioPath, (err) => {
        // Sending the audio file for download
        if (err) {
          console.error(err); // Logging any errors during file download
        }
        // Cleanup: remove the uploaded video and audio files after download
        fs.unlinkSync(videoPath); // Deleting the original video file
        fs.unlinkSync(audioPath); // Deleting the converted audio file
      });
    })
    .on("error", (err) => {
      console.error(err); // Logging any errors that occur during conversion
      res.status(500).send("Conversion failed"); // Sending error response if conversion fails
    })
    .save(audioPath); // Saving the converted audio file
});

// Starting the server
const PORT = process.env.PORT || 5000; // Defining the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging that the server is running
});
