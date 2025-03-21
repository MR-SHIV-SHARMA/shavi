const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Shavi. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Empowering digital creativity through AI
            </p>
          </div>

          <nav className="flex space-x-6">
            <a
              href="/privacy"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-xs text-gray-500">
            Designed in Silicon Valley · Crafted with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
