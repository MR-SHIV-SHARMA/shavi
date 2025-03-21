"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
  title: "AI-Powered Features | Your Platform",
  description:
    "Explore our advanced AI tools and features transforming digital workflows",
  keywords:
    "AI features, machine learning tools, document processing, image recognition",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og-features.jpg",
        width: 1200,
        height: 630,
        alt: "Platform Features",
      },
    ],
  },
};

const tools = [
  {
    name: "Document Automation",
    icon: "/icons/document.svg",
    description: "AI-powered document processing and analysis",
  },
  {
    name: "Image Processing",
    icon: "/icons/image.svg",
    description: "Advanced computer vision solutions",
  },
  {
    name: "Language Translation",
    icon: "/icons/translate.svg",
    description: "Real-time multilingual support",
  },
  {
    name: "Predictive Analytics",
    icon: "/icons/analytics.svg",
    description: "Data-driven insights and forecasting",
  },
  {
    name: "Speech Recognition",
    icon: "/icons/microphone.svg",
    description: "Accurate voice-to-text conversion",
  },
  {
    name: "Workflow Automation",
    icon: "/icons/automation.svg",
    description: "Smart process optimization",
  },
];

const stats = [
  { label: "Processing Speed", value: "2x Faster", icon: "/icons/speed.svg" },
  { label: "Accuracy Rate", value: "99.9%", icon: "/icons/accuracy.svg" },
  { label: "Supported Formats", value: "50+", icon: "/icons/formats.svg" },
  { label: "Languages", value: "30+", icon: "/icons/languages.svg" },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: tools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.name,
            description: tool.description,
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
          Advanced AI Capabilities
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Empower your workflow with our cutting-edge machine learning tools
        </p>
      </motion.section>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 dark:bg-gray-800 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <div className="text-2xl font-bold dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-blue-600 dark:bg-blue-800 text-center py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Workflow?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
