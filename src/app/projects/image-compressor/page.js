// page.jsx (Next.js frontend example)
"use client";
import { useState } from "react";
export default function HomePage() {
    const [image, setImage] = useState(null);
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/compress", { method: "POST", body: formData });
        const data = await res.json();
        setImage(data.image);
    };
    return (
        <div>
            <input type="file" onChange={handleUpload} />
            {image && <img src={image} alt="Compressed" />}
        </div>
    );
}