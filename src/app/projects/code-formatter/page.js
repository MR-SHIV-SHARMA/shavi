"use client";
import { useState } from "react";

export default function CodeFormatter() {
  const [code, setCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [error, setError] = useState(null);

  const handleFormat = async () => {
    setError(null);
    try {
      const response = await fetch("/api/codeFormatter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Formatting failed");
      setFormattedCode(data.formattedCode);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Code Formatter</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleFormat}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Format Code
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {formattedCode && (
        <pre
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f4f4f4",
            borderRadius: "5px",
            overflowX: "auto",
          }}
        >
          {formattedCode}
        </pre>
      )}
    </div>
  );
}
