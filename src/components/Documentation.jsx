"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const documentationSections = [
  {
    id: "intro",
    title: "Introduction",
    content:
      "Welcome to the documentation. This guide will help you get started.",
  },
  {
    id: "installation",
    title: "Installation",
    content: "Follow these steps to install the project dependencies.",
  },
  {
    id: "usage",
    title: "Usage",
    content: "Learn how to use the key features of our system.",
  },
  {
    id: "api",
    title: "API Reference",
    content: "Detailed information about our API endpoints and usage.",
  },
  {
    id: "faq",
    title: "FAQ",
    content: "Common questions and troubleshooting tips.",
  },
  {
    id: "support",
    title: "Support",
    content: "Need help? Contact our support team for assistance.",
  },
  {
    id: "changelog",
    title: "Changelog",
    content: "Stay updated with the latest changes and new features.",
  },
];

const Documentation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      documentationSections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:translate-x-0 md:w-72 md:relative`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Documentation</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {documentationSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block p-2 rounded-lg transition ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-gray-700 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Documentation Sections */}
        {documentationSections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="mb-6 p-4 sm:p-6 bg-gray-800 shadow-md rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-2 text-gray-300">{section.content}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
