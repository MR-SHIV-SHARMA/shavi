"use client";
import { motion } from "framer-motion";
export default function Features() {
  const features = [
    {
      title: "AI-Powered Precision",
      icon: "🤖",
      description:
        "Advanced neural networks deliver pixel-perfect background removal in seconds",
    },
    {
      title: "Multi-Format Support",
      icon: "🖼️",
      description:
        "Process JPG, PNG, and WEBP files up to 10MB with perfect quality retention",
    },
    {
      title: "Lightning Fast Processing",
      icon: "⚡",
      description:
        "Get results in 2-3 seconds using our cloud-optimized AI infrastructure",
    },
    {
      title: "Free Forever Tier",
      icon: "🎁",
      description:
        "Unlimited usage with no registration required - perfect for casual users",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your images with our cutting-edge AI background removal
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-75">
          {["Secure Processing", "No Watermarks", "Auto Deletion"].map(
            (badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
