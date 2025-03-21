"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import Image from "next/image";

const Documentation = ({ content }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Section observer logic
  const sectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    content.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [content]);

  useEffect(() => {
    sectionObserver();
  }, [sectionObserver]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileNavOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Product Documentation",
            description: "Comprehensive product documentation and user guide",
            author: {
              "@type": "Organization",
              name: "Your Company",
            },
          }),
        }}
      />

      {/* Mobile Navigation */}
      <nav className="lg:hidden sticky top-0 bg-white dark:bg-gray-900 z-50 border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-label="Toggle navigation"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">{content.title}</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: scrollProgress + "%" }}
      />

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 fixed left-0 top-0 h-screen border-r bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-8">{content.title}</h2>
            <nav className="space-y-2">
              {content.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  aria-current={
                    activeSection === section.id ? "page" : undefined
                  }
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <motion.aside
          className="lg:hidden fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gray-900 z-50 border-r"
          initial={{ x: "-100%" }}
          animate={{ x: isMobileNavOpen ? 0 : "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="p-4 flex items-center justify-between border-b">
            <h2 className="text-xl font-bold">{content.title}</h2>
            <button
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close navigation"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            {content.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main
          ref={containerRef}
          className="lg:ml-80 flex-1 p-6 max-w-4xl mx-auto overflow-y-auto h-screen"
        >
          <h1 className="text-3xl font-bold mb-8 hidden lg:block">
            {content.title}
          </h1>

          {content.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {section.content}
                  {section.image && (
                    <div className="my-6">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={1200}
                        height={630}
                        className="rounded-lg shadow-lg"
                        priority={index < 3}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Documentation;
