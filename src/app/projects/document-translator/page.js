"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { saveAs } from "file-saver";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi"); // Default: Hindi

  const languages = [
    { code: "hi", name: "Hindi" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle translation request
  const handleTranslate = async () => {
    if (!selectedFile) {
      alert("Please select a document first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("targetLanguage", targetLanguage);

    try {
      setLoading(true);
      const response = await axios.post("/api/documentTranslator", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to translate document!");
    } finally {
      setLoading(false);
    }
  };

  // Export translated text as PDF
  const handleDownloadPDF = () => {
    const blob = new Blob([translatedText], { type: "application/pdf" });
    saveAs(blob, "translated_document.pdf");
  };

  return (
    <div className="flex flex-col items-center text-center py-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Document Translator Instantly!
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Shavi's AI-powered document translator helps you translate documents
        with a single click.
      </p>

      {/* Image Preview */}
      {preview && (
        <Image
          src={preview}
          alt="Selected Document"
          width={300}
          height={200}
          className="rounded shadow-md mb-4"
        />
      )}

      {/* File Input */}
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Language Selection Dropdown */}
      <select
        className="mb-4 p-2 border rounded"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate Document"}
      </button>

      {/* Show Translated Text */}
      {translatedText && (
        <div className="mt-6 p-4 border rounded shadow-md bg-gray-100 max-w-2xl">
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Translated Text:
          </h2>
          <p className="text-gray-800">{translatedText}</p>

          {/* Download Translated PDF */}
          <button
            onClick={handleDownloadPDF}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
}
