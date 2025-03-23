"use client";
import { useState } from "react";

export default function FileConverter() {
  const [files, setFiles] = useState([]);
  const [convertedData, setConvertedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const supportedFormats = [
    "pdf",
    "docx",
    "txt",
    "csv",
    "xlsx",
    "xml",
    "json",
    "html",
    "zip",
    "md",
    "yaml",
    "ini",
    "plist",
    "rtf",
    "log",
    "bat",
    "sh",
    "config",
    "toml",
    "epub",
    "vcf",
    "ics",
  ];

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter((file) =>
      supportedFormats.includes(file.name.split(".").pop().toLowerCase())
    );

    if (validFiles.length !== selectedFiles.length) {
      alert("Some files are not supported and have been ignored.");
    }
    setFiles(validFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select at least one valid file.");
      return;
    }

    setLoading(true);
    setError(null);
    setConvertedData(null);

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/fileConversion", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setConvertedData(data.data);
      } else {
        setError(data.message || "File conversion failed.");
      }
    } catch (err) {
      setError("An error occurred while uploading files.");
    }

    setLoading(false);
  };

  const handleDownload = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename.replace(/\.[^/.]+$/, "") + "_converted.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">File Converter</h1>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-4 border border-gray-300 p-2 rounded-md"
      />

      <button
        onClick={handleUpload}
        className={`px-4 py-2 text-white rounded-md ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert Files"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {convertedData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold">Converted Files:</h2>
          <ul>
            {convertedData.map((file, index) => (
              <li key={index} className="mt-2">
                <strong>{file.filename}:</strong>
                <pre className="bg-white p-2 mt-1 overflow-auto max-h-40 border border-gray-300">
                  {file.content}
                </pre>
                <button
                  onClick={() => handleDownload(file.filename, file.content)}
                  className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Download
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
