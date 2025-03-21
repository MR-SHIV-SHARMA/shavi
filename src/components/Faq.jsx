"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "FAQ Center - AI Tools Explained",
  description: "Get instant answers about our AI-powered solutions",
  keywords: "FAQ, AI tools help, background removal, document processing",
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const categories = [
    {
      title: "🖼️ Image Tools",
      items: [
        {
          question: "How does the AI background removal work?",
          answer:
            "Our AI uses advanced computer vision techniques to detect and remove backgrounds from images with high accuracy.",
        },
        {
          question: "Can I remove the background from multiple images at once?",
          answer:
            "Yes! Our batch processing feature allows you to remove backgrounds from multiple images at once.",
        },
        {
          question: "How does the image compressor work?",
          answer:
            "Our image compressor reduces file size while maintaining high quality, making it perfect for web use.",
        },
        {
          question: "What formats are supported for compression?",
          answer:
            "We support PNG, JPG, and WEBP formats for image compression.",
        },
      ],
    },
    {
      title: "📄 Document Processing",
      items: [
        {
          question: "Can I convert images and documents to PDF?",
          answer:
            "Yes! Our PDF converter allows you to convert images, text files, and Word documents into high-quality PDFs.",
        },
        {
          question: "Can I extract text from a PDF?",
          answer:
            "Yes! Our tool can extract text from scanned PDFs using Optical Character Recognition (OCR).",
        },
        {
          question: "What languages does the document translator support?",
          answer:
            "We support over 100 languages, including English, Spanish, French, German, and Chinese.",
        },
        {
          question: "Can I translate entire PDFs and Word documents?",
          answer:
            "Yes! You can upload PDFs, DOCX files, or plain text files for instant translation.",
        },
      ],
    },
    {
      title: "🔄 Data Conversion",
      items: [
        {
          question: "What data formats can I convert?",
          answer:
            "You can convert JSON, XML, CSV, and YAML formats seamlessly.",
        },
        {
          question: "Is the conversion process lossless?",
          answer:
            "Yes, our tool ensures high accuracy without any data loss during conversion.",
        },
        {
          question: "What ebook formats are supported?",
          answer: "You can convert between EPUB, MOBI, PDF, and AZW3 formats.",
        },
        {
          question: "Does this tool keep the original formatting?",
          answer:
            "Yes, our conversion engine maintains text structure, fonts, and images.",
        },
      ],
    },
    {
      title: "🎙️ Audio & Video Tools",
      items: [
        {
          question: "Can I convert speech to text?",
          answer:
            "Yes! Our AI-powered transcription tool converts audio files into text with high accuracy.",
        },
        {
          question: "What audio formats are supported?",
          answer:
            "We support MP3, WAV, and FLAC audio files for transcription.",
        },
        {
          question: "Can I add subtitles to my videos?",
          answer:
            "Yes! Our tool generates subtitles automatically using speech recognition.",
        },
        {
          question: "What subtitle formats are supported?",
          answer: "We support SRT, VTT, and plain text formats for subtitles.",
        },
      ],
    },
    {
      title: "💻 Developer Tools",
      items: [
        {
          question:
            "What programming languages does the code formatter support?",
          answer: "We support JavaScript, Python, Java, C++, and many more.",
        },
        {
          question: "Can I customize the code formatting?",
          answer:
            "Yes, you can choose from different styles and indentation options.",
        },
        {
          question: "Is there an API for developers?",
          answer:
            "Yes, we provide APIs for integrating our AI tools into your own applications. Contact us for API access.",
        },
      ],
    },
    {
      title: "📂 File Management",
      items: [
        {
          question: "What types of files can I convert?",
          answer:
            "You can convert images, documents, audio files, and videos into different formats.",
        },
        {
          question: "Is there a file size limit?",
          answer:
            "Free users can upload files up to 10MB, while premium users can convert files up to 2GB.",
        },
      ],
    },
    {
      title: "📝 AI Writing & Summarization",
      items: [
        {
          question: "How does the text summarizer work?",
          answer:
            "Our AI extracts key points from long text documents and provides concise summaries.",
        },
        {
          question: "Can I adjust the summary length?",
          answer:
            "Yes! You can choose between short, medium, or detailed summaries.",
        },
      ],
    },
    {
      title: "❓ General Questions",
      items: [
        {
          question: "Do I need to install any software?",
          answer:
            "No, our tool is completely web-based. You just need an internet connection.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes! All files are encrypted and automatically deleted after 24 hours to ensure privacy.",
        },
        {
          question: "Is this tool free to use?",
          answer:
            "Yes, we offer a free plan with limited features. Premium users get access to advanced options and higher file limits.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: categories.flatMap((category) =>
            category.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            }))
          ),
        })}
      </script>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Tools Explained
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse categorized FAQs or search for specific answers
        </p>
      </motion.section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() =>
                setActiveCategory(activeCategory === catIndex ? null : catIndex)
              }
              className="w-full text-left p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold dark:text-white flex items-center justify-between">
                {category.title}
                <span className="text-blue-600 dark:text-blue-400 text-2xl">
                  {activeCategory === catIndex ? "−" : "+"}
                </span>
              </h2>
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                activeCategory === catIndex
                  ? {
                      opacity: 1,
                      height: "auto",
                    }
                  : {
                      opacity: 0,
                      height: 0,
                    }
              }
              className="pl-6 mt-4 space-y-4"
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                >
                  <button
                    onClick={() =>
                      setActiveFAQ(
                        activeFAQ === `${catIndex}-${itemIndex}`
                          ? null
                          : `${catIndex}-${itemIndex}`
                      )
                    }
                    className="w-full text-left"
                  >
                    <h3 className="text-lg font-semibold dark:text-white flex justify-between items-center">
                      {item.question}
                      <span className="text-blue-600 dark:text-blue-400 text-xl ml-4">
                        {activeFAQ === `${catIndex}-${itemIndex}` ? "−" : "+"}
                      </span>
                    </h3>
                  </button>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      activeFAQ === `${catIndex}-${itemIndex}`
                        ? {
                            opacity: 1,
                            height: "auto",
                          }
                        : {
                            opacity: 0,
                            height: 0,
                          }
                    }
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-blue-600 dark:bg-blue-800 text-center py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need Personalized Assistance?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg"
          >
            <Link href="/contact">Contact Support Team</Link>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
