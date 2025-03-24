"use client";

import { useState } from "react";
import axios from "axios";

export default function PDFConverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionType, setConversionType] = useState("pdf"); // Default format
  const [loading, setLoading] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [error, setError] = useState("");

  // Allowed file types
  const allowedTypes = {
    "application/pdf": "PDF",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "DOCX",
    "image/jpeg": "JPG",
    "image/png": "PNG",
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!Object.keys(allowedTypes).includes(file.type)) {
      setError(
        "Unsupported file format! Please select PDF, DOCX, JPG, or PNG."
      );
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setError(""); // Clear previous errors
  };

  // Handle file upload & conversion
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first!");
      return;
    }

    setLoading(true);
    setError("");
    setExtractedText("");

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("convertTo", conversionType); // Send conversion type

    try {
      const response = await axios.post("/api/pdfConverter", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: conversionType === "pdf" ? "blob" : "json", // PDF as blob, text as JSON
      });

      if (conversionType === "text") {
        setExtractedText(response.data.text || "No text extracted.");
      } else {
        // Download converted file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `converted.${conversionType}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to process the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        PDF & File Converter
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Upload a file and convert it to PDF, DOCX, JPG, PNG, or extract text.
      </p>

      {/* File Input */}
      <input
        type="file"
        accept=".pdf,.docx,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Conversion Type Selection */}
      <select
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-lg"
      >
        <option value="pdf">Convert to PDF</option>
        <option value="text">Extract Text</option>
        <option value="docx">Convert to DOCX</option>
        <option value="jpg">Convert to JPG</option>
        <option value="png">Convert to PNG</option>
      </select>

      {/* Selected File Info */}
      {selectedFile && (
        <p className="text-gray-600">Selected: {selectedFile.name}</p>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Processing..." : "Upload & Convert"}
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
