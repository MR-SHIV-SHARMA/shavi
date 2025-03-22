"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How does the AI background removal work?",
      answer:
        "Our advanced neural network analyzes images using computer vision to detect and remove backgrounds with pixel-level precision, preserving fine details automatically.",
    },
    {
      question: "Is this service completely free?",
      answer:
        "Yes, we offer unlimited free background removal with no watermarks. Premium features are available for professional needs.",
    },
    {
      question: "What image formats are supported?",
      answer:
        "We support all major formats: JPG, PNG, and WEBP. Maximum file size is 10MB for free users.",
    },
    {
      question: "How long does processing take?",
      answer:
        "Most images process in 2-5 seconds using our cloud-optimized AI infrastructure.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. All uploads are encrypted and automatically deleted after 2 hours. We never store personal information.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
          Frequently Asked Questions
        </h1>

        {/* FAQ Schema */}
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

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold dark:text-white">
                    {item.question}
                  </h2>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              <motion.div
                id={`faq-${index}`}
                initial={false}
                animate={openIndex === index ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  closed: { opacity: 0, height: 0 },
                }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white dark:bg-gray-900">
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
