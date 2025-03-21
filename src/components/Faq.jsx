"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "FAQ Center - AI Tools Explained",
  description:
    "Get instant answers about our background removal, document processing, and AI-powered solutions",
  keywords: "FAQ, AI tools help, background removal, document processing",
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How does the AI background removal work?",
      answer:
        "Our neural network analyzes images in real-time, using advanced computer vision to detect and remove backgrounds with pixel-perfect precision",
    },
    {
      question: "Is there a limit on file size?",
      answer:
        "Free tier supports files up to 10MB. Premium users can process files up to 2GB",
    },
    {
      question: "What image formats do you support?",
      answer: "All major formats including PNG, JPG, WEBP, and SVG",
    },
    {
      question: "How secure is my data?",
      answer:
        "Files are encrypted in transit and automatically deleted after 24 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
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
          Have questions? We've got answers! Explore how our AI-powered
          solutions can transform your workflow
        </p>
      </motion.section>

      {/* FAQ Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full text-left"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h2 className="text-xl font-semibold dark:text-white flex items-center justify-between">
                {item.question}
                <span className="text-blue-600 dark:text-blue-400 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h2>
            </button>

            <motion.div
              id={`faq-${index}`}
              initial={{ opacity: 0, height: 0 }}
              animate={
                activeIndex === index
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
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {item.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-blue-600 dark:bg-blue-800 text-center py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need More Help?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg"
          >
            <Link href="/contact">Contact 24/7 Support</Link>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
