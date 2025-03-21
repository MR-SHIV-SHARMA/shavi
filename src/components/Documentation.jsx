"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("intro");
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(64);
  let timeout; // ✅ FIXED: No NodeJS.Timeout

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timeout); // ✅ FIXED

      timeout = setTimeout(() => {
        // ✅ FIXED
        const scrollPosition = window.scrollY + navbarHeight + 24;
        documentationSections.forEach((section) => {
          const sectionElement = document.getElementById(section.id);
          if (sectionElement) {
            const { offsetTop, offsetHeight } = sectionElement;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section.id);
            }
          }
        });
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout); // ✅ FIXED
    };
  }, [navbarHeight]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:w-72 md:relative ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Documentation</h2>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2 h-[calc(100vh-4rem)] overflow-y-auto">
          {documentationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto h-screen">
        {/* Top Bar */}
        <div
          ref={navbarRef}
          className="sticky top-0 bg-gray-900 z-40 p-4 shadow-md flex items-center justify-between"
        >
          <button
            className="md:hidden p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
          <div className="hidden md:block flex-1" /> {/* Spacer */}
        </div>

        {/* Documentation Sections */}
        <div className="p-4 sm:p-6 max-w-4xl mx-auto">
          {documentationSections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              className="mb-6 p-4 sm:p-6 bg-gray-800 shadow-md rounded-lg"
              style={{ scrollMarginTop: navbarHeight + 16 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
