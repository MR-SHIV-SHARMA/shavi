"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-json-view to prevent SSR issues
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

export default function JsonFormatter() {
  const defaultJson = `{
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "zip": "10001"
    },
    "hobbies": ["reading", "gaming", "traveling"]
  }`;

  const [jsonText, setJsonText] = useState(defaultJson);
  const [parsedJson, setParsedJson] = useState(null);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    handleFormat();
  }, []);

  const handleFormat = async () => {
    setError(null);
    setCopySuccess("");

    try {
      const response = await fetch("/api/jsonFormatter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonText }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Formatting failed");

      setParsedJson(JSON.parse(data.formattedJson));
    } catch (err) {
      setError(err.message);
      setParsedJson(null);
    }
  };

  const handleClear = () => {
    setJsonText("");
    setParsedJson(null);
    setError(null);
    setCopySuccess("");
  };

  const handleReset = () => {
    setJsonText(defaultJson);
    handleFormat();
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(parsedJson, null, 2))
      .then(() => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(() => setCopySuccess("Failed to copy!"));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        JSON Formatter & Tree Viewer
      </h1>

      {/* Textarea for input */}
      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        placeholder="Enter your JSON here..."
        className="w-full h-40 mt-4 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleFormat}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Format JSON
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Clear
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Reset Default
        </button>
      </div>

      {/* JSON Tree Viewer */}
      {parsedJson && (
        <div className="relative mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-md">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
          >
            Copy JSON
          </button>
          <ReactJson
            src={parsedJson}
            theme="monokai" // Dark theme
            collapsed={1} // Start with all objects collapsed
            displayDataTypes={false} // Hide data types
            enableClipboard={true} // Enable copying values
            displayObjectSize={false} // Hide object size
            indentWidth={2} // Spacing
          />
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
    </div>
  );
}
