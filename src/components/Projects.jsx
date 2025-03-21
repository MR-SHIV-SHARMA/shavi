"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const tools = [
  {
    id: 1,
    name: "Image Background Remover",
    slug: "imageBackgroundRemover",
    description:
      "Automatically remove backgrounds from images with AI-powered precision",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/image.svg",
  },
  {
    id: 2,
    name: "Text Summarizer",
    slug: "text-summarizer",
    description:
      "Generate concise summaries from long texts using advanced NLP algorithms",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/file-alt.svg",
  },
  {
    id: 3,
    name: "Document Translator",
    slug: "document-translator",
    description:
      "Instantly translate documents between 50+ languages with AI-driven accuracy",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/language.svg",
  },
  {
    id: 4,
    name: "PDF Converter",
    slug: "pdf-converter",
    description:
      "Convert PDFs to editable formats while preserving layout and formatting",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/file-pdf.svg",
  },
  {
    id: 5,
    name: "Audio Transcription",
    slug: "audio-transcription",
    description:
      "Convert speech to text with 99% accuracy using deep learning models",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/microphone.svg",
  },
  {
    id: 6,
    name: "Video Subtitle Generator",
    slug: "video-subtitle-generator",
    description:
      "Automatically generate and sync subtitles for videos in multiple languages",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/closed-captioning.svg",
  },
  {
    id: 7,
    name: "Data Format Converter",
    slug: "data-format-converter",
    description:
      "Convert between CSV, JSON, XML and other formats with intelligent parsing",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/exchange-alt.svg",
  },
  {
    id: 8,
    name: "Code Formatter",
    slug: "code-formatter",
    description:
      "Automatically format and beautify code in 20+ programming languages",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/code.svg",
  },
  {
    id: 9,
    name: "Ebook Converter",
    slug: "ebook-converter",
    description:
      "Convert between EPUB, MOBI, PDF and other ebook formats seamlessly",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/book.svg",
  },
  {
    id: 10,
    name: "Image Compressor",
    slug: "image-compressor",
    description:
      "Smart lossless compression for images while maintaining visual quality",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/compress.svg",
  },
];

const stats = [
  {
    label: "Active Users",
    value: "50,000+",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/users.svg",
  },
  {
    label: "Tools Available",
    value: "10+",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/tools.svg",
  },
  {
    label: "Processed Files",
    value: "1M+",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/folder.svg",
  },
  {
    label: "Supported Formats",
    value: "100+",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/file.svg",
  },
];

const features = [
  {
    title: "Real-time Processing",
    description: "Instant results with our cloud-powered infrastructure",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/bolt.svg",
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption for all your files",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/lock.svg",
  },
  {
    title: "Cross-platform",
    description: "Access tools from any device with a web browser",
    icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/laptop.svg",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Animated Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Productivity Suite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your workflow with 10+ intelligent tools powered by
            state-of-the-art machine learning
          </p>
        </motion.header>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="grid xl:flex xl:items-center xl:justify-between w-full p-2 sm:p-4 md:p-6 gap-2 sm:gap-4 md:gap-6">
                <span className="min-w-0 truncate text-center xl:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </span>
                <div className="flex justify-center xl:justify-end">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.section>

        {/* Tools Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.article
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <Link
                href={`/projects/${tool.slug}`}
                className="block p-6 h-full"
                aria-label={`Learn more about ${tool.name}`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 w-16 h-16 rounded-lg bg-blue-50 dark:bg-gray-700 flex items-center justify-center"
                  >
                    <Image
                      src={tool.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-auto w-full">
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span className="mr-2">Explore Tool</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 dark:bg-gray-700 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.section>

        {/* SEO Content Section */}
        <section className="mt-24 max-w-4xl mx-auto prose dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionize Your Digital Workflow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our AI-powered platform offers a comprehensive suite of tools
            designed to streamline document processing, media manipulation, and
            data transformation. Leveraging cutting-edge machine learning models
            including GPT-4 and TensorFlow-based neural networks, we provide:
          </p>
          <ul className="mt-6 space-y-3">
            <li>⚡ Real-time processing with AWS cloud infrastructure</li>
            <li>🔒 End-to-end encryption for all file transfers</li>
            <li>🌍 Multi-language support for global accessibility</li>
            <li>🤖 Smart automation with customizable workflows</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
