"use client";
import { useState } from "react";

export default function HomePage() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [fileSize, setFileSize] = useState({ original: 0, compressed: 0 });
  const [selectedFormat, setSelectedFormat] = useState("jpeg");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOriginalImage(URL.createObjectURL(file));
    setFileSize((prev) => ({
      ...prev,
      original: (file.size / 1024).toFixed(2),
    }));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("format", selectedFormat);

    const res = await fetch("/api/imageCompressor", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("❌ Error in compression:", await res.text());
      return;
    }

    const blob = await res.blob();
    setCompressedFile(blob);
    setFileSize((prev) => ({
      ...prev,
      compressed: (blob.size / 1024).toFixed(2),
    }));
  };

  const handleDownload = () => {
    if (!compressedFile) {
      console.error("❌ No compressed file available");
      return;
    }

    const url = window.URL.createObjectURL(compressedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Image Compressor
      </h1>

      <input
        type="file"
        accept="image/*"
        className="mb-4 p-2 border border-gray-300 rounded-lg"
        onChange={handleUpload}
      />

      <select
        className="mb-4 p-2 border border-gray-300 rounded-lg"
        value={selectedFormat}
        onChange={(e) => setSelectedFormat(e.target.value)}
      >
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
        <option value="webp">WEBP</option>
        <option value="gif">GIF</option>
        <option value="tiff">TIFF</option>
        <option value="bmp">BMP</option>
      </select>

      {originalImage && (
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600">Original Image</p>
            <img
              src={originalImage}
              alt="Original"
              className="w-48 h-48 object-cover border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-2">
              Size: {fileSize.original} KB
            </p>
          </div>

          {compressedFile && (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-600">Compressed File</p>
              <img
                src={URL.createObjectURL(compressedFile)}
                alt="Compressed"
                className="w-48 h-48 object-cover border rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2">
                Size: {fileSize.compressed} KB
              </p>
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm mt-2"
              >
                Download as {selectedFormat.toUpperCase()}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
