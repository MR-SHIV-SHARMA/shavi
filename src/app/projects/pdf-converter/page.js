"use client";

import { useState } from "react";
import axios from "axios";

export default function PDFConverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [extractedText, setExtractedText] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  // Handle file upload & text extraction
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      const response = await axios.post("/api/pdfConverter", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setExtractedText(response.data.extractedText);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to extract text from PDF!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        PDF Text Extractor
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Upload a PDF file and extract text instantly using our AI-powered tool.
      </p>

      {/* File Input */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Extracting..." : "Upload & Extract"}
      </button>

      {/* Extracted Text */}
      {extractedText && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-md max-w-2xl text-left">
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Extracted Text:
          </h2>
          <p className="text-gray-800 whitespace-pre-wrap">{extractedText}</p>
        </div>
      )}
    </div>
  );
}
