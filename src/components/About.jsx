"use client";
// app/about/page.js
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
  title: "About Our Platform | AI-Powered Solutions",
  description:
    "Discover our mission, values, and innovative AI-powered tools transforming digital workflows",
  keywords:
    "AI tools, digital transformation, machine learning, workflow automation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/about",
    siteName: "Your Platform",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Our Platform",
      },
    ],
  },
};

const tools = [
  {
    name: "Smart Document Processing",
    icon: "/icons/document.svg",
    description: "AI-driven document analysis and automation",
  },
  {
    name: "Image Recognition",
    icon: "/icons/image.svg",
    description: "Advanced computer vision solutions",
  },
  {
    name: "Language Translation",
    icon: "/icons/translate.svg",
    description: "Real-time multilingual support",
  },
  {
    name: "Data Analytics",
    icon: "/icons/analytics.svg",
    description: "Predictive insights and visualization",
  },
];

const projects = [
  {
    title: "Enterprise AI Platform",
    image: "/projects/enterprise-ai.jpg",
    impact: "40% efficiency boost for Fortune 500 companies",
  },
  {
    title: "Healthcare Analytics Suite",
    image: "/projects/healthcare.jpg",
    impact: "Improved diagnostics for 1M+ patients",
  },
  {
    title: "Retail Automation System",
    image: "/projects/retail.jpg",
    impact: "30% cost reduction for major retailers",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Your Platform",
          description: metadata.description,
          url: "https://yourdomain.com",
          logo: "https://yourdomain.com/logo.png",
          sameAs: [
            "https://twitter.com/yourplatform",
            "https://linkedin.com/company/yourplatform",
          ],
        })}
      </script>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transforming Digital Experiences
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering businesses through innovative AI solutions and
            cutting-edge technology
          </p>
        </div>
      </motion.section>

      {/* AI Tools Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Our AI-Powered Tools
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={tool.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Key Projects
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200">{project.impact}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Our Mission</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          To democratize AI technology and empower organizations of all sizes to
          achieve digital excellence through innovative, accessible, and ethical
          solutions.
        </p>
      </motion.section>
    </div>
  );
}
