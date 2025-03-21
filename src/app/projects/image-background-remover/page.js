// app/projects/imageBackgroundRemover/page.js
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { CompareSlider } from "@/app/projects/image-background-remover/components/CompareSlider";
import { LoadingSpinner } from "@/app/projects/image-background-remover/components/LoadingSpinner";

const data = {
  title: "AI Background Remover | Instant Transparent Backgrounds",
  description:
    "Remove image backgrounds instantly with AI precision. Free online tool with instant downloads. Supports PNG, JPG, WEBP.",
  keywords:
    "remove background, transparent background, AI photo editing, free background remover",
};

export default function ImageBackgroundRemover() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const processingTimeout = useRef(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
      setIsProcessing(true);

      // Simulate AI processing
      processingTimeout.current = setTimeout(() => {
        setProcessedImage(URL.createObjectURL(acceptedFiles[0]));
        setIsProcessing(false);
      }, 2000);
    },
  });

  // Cleanup timeout
  const cancelProcessing = () => {
    if (processingTimeout.current) {
      clearTimeout(processingTimeout.current);
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "AI Background Remover",
          description: data.description,
          applicationCategory: "ImageEditing",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0.00",
            priceCurrency: "USD",
          },
        })}
      </script>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-4">
            AI-Powered Background Remover
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Instantly remove backgrounds from images with 99% accuracy using
            advanced AI technology
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          className="glass-container bg-white/5 backdrop-blur-lg rounded-2xl p-8 mx-auto max-w-2xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-blue-400/30 rounded-xl p-8 cursor-pointer hover:bg-white/5 transition-colors"
          >
            <input {...getInputProps()} aria-label="Image upload" />
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Drag & drop image or{" "}
                <span className="text-blue-400">browse files</span>
              </p>
              <p className="text-sm text-gray-400">
                Supports PNG, JPG, WEBP up to 10MB
              </p>
            </div>
          </div>

          {/* Processing State */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6"
              >
                <LoadingSpinner />
                <p className="text-gray-300 mt-4">
                  AI is processing your image...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          {processedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Result</h2>
              <CompareSlider
                original={image}
                processed={processedImage}
                className="rounded-lg shadow-2xl"
              />

              <div className="mt-6 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center gap-2"
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
                  Download PNG
                </motion.button>

                <button
                  onClick={() => {
                    setImage(null);
                    setProcessedImage(null);
                  }}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust Signals */}
        <div className="mt-16">
          <p className="text-gray-400 mb-4">Trusted by 50,000+ professionals</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-75">
            {["Company1", "Company2", "Company3", "Company4"].map((company) => (
              <Image
                key={company}
                src={`/logos/${company}.svg`}
                alt={company}
                width={120}
                height={40}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800/50 py-16 mt-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Military-Grade Security",
              icon: "🔒",
              text: "All files automatically deleted after 1 hour",
            },
            {
              title: "4K Resolution",
              icon: "🖼️",
              text: "High-quality processing for professional results",
            },
            {
              title: "Batch Processing",
              icon: "⚡",
              text: "Process multiple images simultaneously",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900/50 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
