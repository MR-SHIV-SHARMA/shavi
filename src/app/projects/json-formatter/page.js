"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FiCopy, FiRefreshCw, FiCode, FiSun, FiMoon } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

const ReactJson = dynamic(() => import("@microlink/react-json-view"), { ssr: false });

export default function JsonFormatter() {
  const [jsonText, setJsonText] = useState("");
  const [parsedJson, setParsedJson] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("tree");

  const defaultJson = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
    },
    hobbies: ["reading", "gaming", "traveling"],
  };

  useEffect(() => {
    handleReset();
  }, []);

  const handleFormat = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/jsonFormatter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonText }),
      });

      if (!response.ok) throw new Error(await response.text());

      const data = await response.json();
      setParsedJson(JSON.parse(data.formattedJson));
      toast.success("JSON formatted successfully!");
    } catch (err) {
      toast.error(`Formatting failed: ${err.message}`);
      setParsedJson(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(parsedJson, null, 2))
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy"));
  };

  const handleReset = () => {
    setJsonText(JSON.stringify(defaultJson, null, 2));
    setParsedJson(null);
  };

  return (
    <>
      <Head>
        <title>JSON Formatter | Online JSON Validator & Viewer</title>
        <meta
          name="description"
          content="Validate, format, and beautify JSON data online with real-time parsing and syntax highlighting. Free JSON formatter with tree view and copy/download options."
        />
        <meta property="og:title" content="Online JSON Formatter & Validator" />
        <meta
          property="og:description"
          content="Professional JSON formatting tool with syntax validation, tree visualization, and export options. Supports both light and dark themes."
        />
      </Head>
      <Toaster position="top-right" />

      <div
        className={`min-h-screen p-4 md:p-8 transition-colors ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <main className="max-w-8xl mx-auto space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <FiCode className="text-blue-500" />
              JSON Formatter
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setTheme((t) => (t === "dark" ? "light" : "dark"))
                }
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </header>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Input JSON</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-md"
                  >
                    <FiRefreshCw /> Reset
                  </button>
                </div>
              </div>
              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                placeholder="Paste JSON here..."
                className={`w-full h-96 p-4 font-mono text-sm rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 focus:border-blue-500 text-gray-100"
                    : "bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                } resize-none`}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Formatted Output</h2>
                <div className="flex gap-2">
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="p-2 border rounded-md "
                  >
                    <option value="tree" className="text-black">
                      Tree
                    </option>
                    <option value="text" className="text-black">
                      Text
                    </option>
                    <option value="form" className="text-black">
                      Form
                    </option>
                    <option value="view" className="text-black">
                      View
                    </option>
                    <option value="code" className="text-black">
                      Code
                    </option>
                  </select>
                  <button
                    onClick={handleCopy}
                    disabled={!parsedJson}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-md disabled:opacity-50"
                  >
                    <FiCopy /> Copy
                  </button>
                </div>
              </div>
              <div
                className={`h-96 overflow-auto p-4 rounded-lg border ${
                  theme === "dark"
                    ? "border-gray-700 bg-gray-800"
                    : "border-gray-300 bg-white"
                }`}
              >
                {parsedJson ? (
                  viewMode === "tree" ? (
                    <ReactJson
                      src={parsedJson}
                      theme={theme === "dark" ? "monokai" : "rjv-default"}
                    />
                  ) : viewMode === "text" ? (
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(parsedJson, null, 2)}
                    </pre>
                  ) : viewMode === "form" ? (
                    <form className="space-y-2">
                      {Object.entries(parsedJson).map(([key, value]) => (
                        <div key={key} className="flex gap-2 items-center">
                          <label className="font-medium w-32">{key}:</label>
                          <input
                            type="text"
                            value={value}
                            readOnly
                            className="p-1 border rounded w-full"
                          />
                        </div>
                      ))}
                    </form>
                  ) : viewMode === "view" ? (
                    <div className="space-y-2">
                      {Object.entries(parsedJson).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                        >
                          <strong>{key}:</strong> {JSON.stringify(value)}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <pre className="p-2 border rounded bg-gray-800 text-white">
                      {jsonText}
                    </pre>
                  )
                ) : (
                  <div className="text-gray-500">
                    Formatted JSON will appear here...
                  </div>
                )}
              </div>
            </div>
          </section>

          <button
            onClick={handleFormat}
            disabled={isLoading}
            className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">🌀</span> Formatting...
              </>
            ) : (
              "Format JSON"
            )}
          </button>
        </main>
      </div>
    </>
  );
}
