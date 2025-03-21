"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const documentationSections = [
  { id: "intro", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "api", title: "API Reference" },
  { id: "faq", title: "FAQ" },
];

const Documentation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:translate-x-0 md:w-72`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-700">Documentation</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {documentationSections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="block p-2 text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-72 p-6">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mb-4 p-2 bg-gray-200 rounded-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        {/* Content Sections */}
        {documentationSections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="mb-10 p-6 bg-white shadow-md rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {section.title}
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
