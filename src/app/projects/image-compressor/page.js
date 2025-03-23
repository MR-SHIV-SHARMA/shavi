"use client";
import { useState } from "react";

export default function HomePage() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleUpload = async (e) => {
        setError(null);
        const file = e.target.files[0];

        if (!file) {
            console.warn("⚠️ No file selected!");
            setError("No file selected");
            return;
        }

        console.log("📂 Selected file:", file.name, file.type);

        const formData = new FormData();
        formData.append("file", file);

        try {
            console.log("🚀 Sending request to /api/imageCompressor...");
            const res = await fetch("/api/imageCompressor", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                console.error("❌ Server responded with error:", res.status);
                const errorData = await res.json();
                setError(errorData.message);
                return;
            }

            const data = await res.json();
            console.log("✅ Response received:", data);

            if (data.success) {
                setImage(data.image);
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error("🔥 Network error:", err.message);
            setError("Failed to process request");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Next.js Image Compressor</h1>
            <input
                type="file"
                accept="image/jpeg, image/png, image/webp"
                onChange={handleUpload}
                className="mb-4 border p-2"
            />
            {error && <p className="text-red-500">{error}</p>}
            {image && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Compressed Image:</h2>
                    <img src={image} alt="Compressed" className="mt-2 border p-2" />
                </div>
            )}
        </div>
    );
}
