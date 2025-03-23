"use client";

import { useState } from "react";
import Head from "next/head";
import {
  FiCode,
  FiSun,
  FiMoon,
  FiCopy,
  FiDownload,
  FiTrash2,
  FiSettings,
  FiCheck,
} from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

export default function CodeFormatter() {
  const [code, setCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [parser, setParser] = useState("babel");
  const [semi, setSemi] = useState(true);
  const [singleQuote, setSingleQuote] = useState(true);
  const [tabWidth, setTabWidth] = useState(2);
  const [bracketSpacing, setBracketSpacing] = useState(true);
  const [arrowParens, setArrowParens] = useState("always");
  const [printWidth, setPrintWidth] = useState(80);
  const [endOfLine, setEndOfLine] = useState("lf");
  const [theme, setTheme] = useState("light");
  const [fileName, setFileName] = useState("formatted_code");
  const [fileExtension, setFileExtension] = useState("js");

  const handleFormat = async () => {
    setError(null);
    setLoading(true);
    setCopySuccess("");
    try {
      const response = await fetch("/api/codeFormatter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          parser,
          semi,
          singleQuote,
          tabWidth,
          bracketSpacing,
          arrowParens,
          printWidth,
          endOfLine,
        }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Formatting failed");
      setFormattedCode(data.formattedCode);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setFormattedCode("");
    setError(null);
    setCopySuccess("");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(formattedCode)
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy!"));
  };

  const handleDownload = () => {
    // ... [existing handleDownload implementation] ...
    toast.success("Download started!");
  };

  return (
    <>
      <Head>
        <title>Code Formatter | Online Code Formatting Tool</title>
        <meta
          name="description"
          content="Format and beautify your code online with multiple language support. JavaScript, TypeScript, HTML, CSS, and JSON formatting with customizable options."
        />
        <meta
          property="og:title"
          content="Online Code Formatter & Beautifier"
        />
        <meta
          property="og:description"
          content="Professional code formatting tool with syntax support, custom settings, and instant downloads. Improve your code quality in seconds."
        />
      </Head>
      <Toaster position="top-right" />

      <div
        className={`min-h-screen p-4 md:p-8 transition-colors ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
      >
        <main className="max-w-6xl mx-auto space-y-8">
          <header className="flex items-center justify-between mb-12">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <FiCode className="text-blue-500" />
              Code Formatter
            </h1>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </header>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Input Code</h2>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                >
                  <FiTrash2 /> Clear
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className={`w-full h-64 p-4 rounded-lg font-mono text-sm border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                    : "bg-white border-gray-300 focus:border-blue-500"
                } transition-colors resize-none`}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Output Code</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    disabled={!formattedCode}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    <FiCopy /> Copy
                  </button>
                  <button
                    onClick={handleDownload}
                    disabled={!formattedCode}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors disabled:opacity-50"
                  >
                    <FiDownload /> Download
                  </button>
                </div>
              </div>
              <pre
                className={`p-4 h-64 overflow-auto rounded-lg font-mono text-sm border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              >
                {formattedCode || (
                  <span className="text-gray-500">
                    Formatted code will appear here...
                  </span>
                )}
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <details className="group">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <FiSettings className="text-lg" />
                <span className="text-lg font-semibold">
                  Formatting Options
                </span>
              </summary>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Parser</label>
                  <select
                    value={parser}
                    onChange={(e) => setParser(e.target.value)}
                    className="w-full p-2 rounded-lg border bg-transparent"
                  >
                    {["babel", "typescript", "json", "html", "css"].map(
                      (opt) => (
                        <option key={opt} value={opt}>
                          {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    File Extension
                  </label>
                  <select
                    value={fileExtension}
                    onChange={(e) => setFileExtension(e.target.value)}
                    className="w-full p-2 rounded-lg border bg-transparent"
                  >
                    {["js", "jsx", "ts", "tsx"].map((ext) => (
                      <option key={ext} value={ext}>
                        .{ext}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add other form controls with similar structure */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={semi}
                      onChange={() => setSemi(!semi)}
                      className="rounded text-blue-500"
                    />
                    Semicolons
                  </label>
                </div>

                {/* Add remaining options with consistent styling */}
              </div>
            </details>
          </section>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleFormat}
              disabled={loading || !code}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="animate-spin">🌀</span> Formatting...
                </>
              ) : (
                <>
                  <FiCode /> Format Code
                </>
              )}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
