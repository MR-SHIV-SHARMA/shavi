"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { FiUpload, FiDownload, FiImage, FiSettings } from "react-icons/fi";

export default function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [originalPreview, setOriginalPreview] = useState(null);
  const [compressedPreview, setCompressedPreview] = useState(null);
  const [fileSize, setFileSize] = useState({ original: 0, compressed: 0 });
  const [selectedFormat, setSelectedFormat] = useState("webp");
  const [isProcessing, setIsProcessing] = useState(false);

  // Cleanup blob URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
      if (compressedPreview) URL.revokeObjectURL(compressedPreview);
    };
  }, [originalPreview, compressedPreview]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/tiff",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload an image.");
      return;
    }

    // Validate file size
    if (file.size > 25 * 1024 * 1024) {
      toast.error("File exceeds 25MB limit.");
      return;
    }

    setIsProcessing(true);
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setFileSize({ original: (file.size / 1024).toFixed(2), compressed: 0 });

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("format", selectedFormat);

      const res = await fetch("/api/imageCompressor", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const blob = await res.blob();
      setCompressedFile(blob);
      setCompressedPreview(URL.createObjectURL(blob));
      setFileSize((prev) => ({
        ...prev,
        compressed: (blob.size / 1024).toFixed(2),
      }));

      toast.success("Image compressed successfully!");
    } catch (error) {
      toast.error(`Compression failed: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const a = document.createElement("a");
    a.href = compressedPreview;
    a.download = `optimized.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Head>
        <title>Image Optimizer | Compress & Convert Images</title>
        <meta
          name="description"
          content="Optimize images for web with real-time compression and format conversion. Reduce file size while maintaining quality."
        />
        <meta
          property="og:title"
          content="Image Optimizer | Web Performance Tool"
        />
        <meta
          property="og:description"
          content="Free online image compression for JPEG, PNG, WEBP, and more. Boost your website speed with optimized media files."
        />
      </Head>
      <Toaster position="bottom-right" />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Image Optimizer
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Compress and convert images to WebP, JPEG, PNG with optimal
              quality
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Upload Image
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                    id="fileInput"
                    disabled={isProcessing}
                  />
                  <label
                    htmlFor="fileInput"
                    className={`flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                      isProcessing
                        ? "opacity-50 cursor-not-allowed"
                        : "group-hover:border-indigo-500 group-hover:bg-indigo-50"
                    }`}
                  >
                    <FiUpload className="w-8 h-8 text-gray-400 mb-3 group-hover:text-indigo-600" />
                    <span className="text-gray-600 group-hover:text-indigo-600">
                      {isProcessing ? "Processing..." : "Choose Image"}
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Output Settings
                </label>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <FiSettings className="text-gray-500" />
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="flex-1 bg-transparent focus:outline-none"
                    >
                      {["webp", "jpeg", "png", "gif", "tiff", "bmp"].map(
                        (format) => (
                          <option key={format} value={format}>
                            {format.toUpperCase()}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {(originalPreview || compressedPreview) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-2 gap-8 mt-10"
              >
                {originalPreview && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiImage />
                      <span>Original ({fileSize.original}KB)</span>
                    </div>
                    <img
                      src={originalPreview}
                      alt="Original preview"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50 border"
                      loading="lazy"
                    />
                  </div>
                )}

                {compressedPreview && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiImage />
                      <span>Optimized ({fileSize.compressed}KB)</span>
                    </div>
                    <img
                      src={compressedPreview}
                      alt="Optimized preview"
                      className="w-full h-64 object-contain rounded-lg bg-gray-50 border"
                      loading="lazy"
                    />
                    <button
                      onClick={handleDownload}
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <FiDownload />
                      Download {selectedFormat.toUpperCase()}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
