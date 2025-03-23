"use client";

import { useState } from "react";

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
      .then(() => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(() => setCopySuccess("Failed to copy!"));
  };

  const handleDownload = () => {
    const fileNameWithExtension = `${fileName}.${fileExtension}`;
    const element = document.createElement("a");
    const file = new Blob([formattedCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileNameWithExtension;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "auto",
        padding: "20px",
        backgroundColor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Code Formatter</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <select value={parser} onChange={(e) => setParser(e.target.value)}>
        <option value="babel">JavaScript (Babel)</option>
        <option value="typescript">TypeScript</option>
        <option value="json">JSON</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>

      <label>
        <input type="checkbox" checked={semi} onChange={() => setSemi(!semi)} />
        Use Semicolons
      </label>
      <label>
        <input
          type="checkbox"
          checked={singleQuote}
          onChange={() => setSingleQuote(!singleQuote)}
        />
        Use Single Quotes
      </label>
      <label>
        Tab Width:
        <input
          type="number"
          value={tabWidth}
          onChange={(e) => setTabWidth(Number(e.target.value))}
          min="1"
          max="8"
        />
      </label>
      <label>
        Print Width:
        <input
          type="number"
          value={printWidth}
          onChange={(e) => setPrintWidth(Number(e.target.value))}
          min="20"
          max="120"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={bracketSpacing}
          onChange={() => setBracketSpacing(!bracketSpacing)}
        />
        Bracket Spacing
      </label>
      <label>
        Arrow Parens:
        <select
          value={arrowParens}
          onChange={(e) => setArrowParens(e.target.value)}
        >
          <option value="always">Always</option>
          <option value="avoid">Avoid</option>
        </select>
      </label>
      <label>
        End of Line:
        <select
          value={endOfLine}
          onChange={(e) => setEndOfLine(e.target.value)}
        >
          <option value="lf">LF</option>
          <option value="crlf">CRLF</option>
          <option value="cr">CR</option>
          <option value="auto">Auto</option>
        </select>
      </label>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code..."
        style={{ width: "100%", height: "150px" }}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={handleFormat}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Formatting..." : "Format Code"}
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="File Name"
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <select
          value={fileExtension}
          onChange={(e) => setFileExtension(e.target.value)}
        >
          <option value="js">.js</option>
          <option value="jsx">.jsx</option>
          <option value="ts">.ts</option>
          <option value="tsx">.tsx</option>
        </select>
        <button onClick={handleDownload}>Download</button>
      </div>

      {formattedCode && (
        <div style={{ position: "relative", marginTop: "10px" }}>
          <button
            onClick={handleCopy}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              backgroundColor: "#0070f3",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              backgroundColor: "#eee",
              padding: "10px",
              minHeight: "100px",
            }}
          >
            {formattedCode}
          </pre>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {copySuccess && <p style={{ color: "green" }}>{copySuccess}</p>}
    </div>
  );
}
