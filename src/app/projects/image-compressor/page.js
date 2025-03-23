"use client";
import { useState } from "react";

export default function HomePage() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [fileSize, setFileSize] = useState({ original: 0, compressed: 0 });

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("📂 Selected file:", file);
    setOriginalImage(URL.createObjectURL(file));
    setFileSize((prev) => ({
      ...prev,
      original: (file.size / 1024).toFixed(2),
    }));

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/imageCompressor", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.success) {
      console.log("✅ Image compressed successfully");
      setCompressedImage(data.image);

      const base64String = data.image.split(",")[1];
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length)
        .fill(null)
        .map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const compressedFile = new Blob([byteArray], { type: "image/jpeg" });

      setFileSize((prev) => ({
        ...prev,
        compressed: (compressedFile.size / 1024).toFixed(2),
      }));
    } else {
      console.error("❌ Error in compression:", data.message);
    }
  };

  const downloadImage = (format) => {
    if (!compressedImage) return;
    const a = document.createElement("a");
    a.href = compressedImage;
    a.download = `compressed-image.${format}`;
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
        accept="image/jpeg, image/png, image/webp"
        className="mb-4 p-2 border border-gray-300 rounded-lg"
        onChange={handleUpload}
      />

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

          {compressedImage && (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-600">Compressed Image</p>
              <img
                src={compressedImage}
                alt="Compressed"
                className="w-48 h-48 object-cover border rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2">
                Size: {fileSize.compressed} KB
              </p>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => downloadImage("jpeg")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download as JPEG
                </button>
                <button
                  onClick={() => downloadImage("png")}
                  className="bg-green-500 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download as PNG
                </button>
                <button
                  onClick={() => downloadImage("webp")}
                  className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download as WEBP
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
