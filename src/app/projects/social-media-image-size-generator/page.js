"use client";

import React, { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
};

export default function SocialShare() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(
    "Instagram Square (1:1)"
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const imageRef = useRef(null);
  const dropzoneRef = useRef(null);

  useEffect(() => {
    if (uploadedImage) setIsTransforming(true);
  }, [selectedFormat, uploadedImage]);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/social-media-image-size-generator", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setUploadedImage(data.publicId);
    } catch (err) {
      alert("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (!imageRef.current) return;
    fetch(imageRef.current.src)
      .then((r) => r.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedFormat.replace(/\s+/g, "_").toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      });
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.add("ring-4", "ring-purple-400/30");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.remove("ring-4", "ring-purple-400/30");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.remove("ring-4", "ring-purple-400/30");
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50/50 to-purple-50/30 dark:from-gray-900 dark:to-gray-800/50 transition-colors duration-500">
      {/* Floating particles background */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <section className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 space-y-10 border border-white/30 dark:border-gray-700/30 transition-all duration-500 hover:shadow-3xl">
          <header className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight">
              Pixel Perfect
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Craft stunning social media visuals in seconds
            </p>
          </header>

          {/* Drag & Drop Zone */}
          <div
            className="space-y-4"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            ref={dropzoneRef}
          >
            <input
              type="file"
              onChange={(e) => handleFileUpload(e.target.files?.[0])}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="block group cursor-pointer transition-transform duration-300 hover:scale-[0.98] active:scale-95"
            >
              <div className="h-56 flex flex-col items-center justify-center rounded-2xl border-3 border-dashed border-gray-200 dark:border-gray-700 group-hover:border-purple-400 bg-gradient-to-br from-white/50 to-purple-50/30 dark:from-gray-700/30 dark:to-gray-800/50 transition-all duration-500">
                <div className="text-center space-y-4">
                  <div className="inline-flex bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-4 rounded-2xl shadow-inner">
                    <svg
                      className="w-8 h-8 text-purple-600 dark:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
                      {isUploading
                        ? "Optimizing your image..."
                        : "Drag & drop or click to upload"}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Recommended size: 2000x2000px (max 25MB)
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>

          {/* Content Preview Area */}
          {uploadedImage && (
            <div className="space-y-8 animate-fade-slide">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Platform Format
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.keys(socialFormats).map((format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedFormat === format
                          ? "bg-purple-100/80 dark:bg-purple-900/50 ring-2 ring-purple-500"
                          : "bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-600/50"
                      }`}
                    >
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {format}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {socialFormats[format].width}x
                        {socialFormats[format].height}px
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Preview */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-600 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Live Preview
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {socialFormats[selectedFormat].width}x
                        {socialFormats[selectedFormat].height}px
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-[16/9] bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    {isTransforming && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10">
                        <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow" />
                      </div>
                    )}
                    <CldImage
                      width={socialFormats[selectedFormat].width}
                      height={socialFormats[selectedFormat].height}
                      src={uploadedImage}
                      alt="Transformed preview"
                      crop="fill"
                      gravity="auto"
                      aspectRatio={socialFormats[selectedFormat].aspectRatio}
                      ref={imageRef}
                      onLoad={() => setIsTransforming(false)}
                      className="object-contain w-full h-full p-4 transition-opacity duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => document.getElementById("fileInput").click()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-100/70 hover:bg-gray-200/50 dark:bg-gray-700/70 dark:hover:bg-gray-600/80 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300"
                >
                  Upload New Image
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download {selectedFormat.split(" ")[0]} Version
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 1.5s linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes fade-slide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide {
          animation: fade-slide 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </div>
  );
}
