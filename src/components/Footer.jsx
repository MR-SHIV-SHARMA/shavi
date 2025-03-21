import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Branding & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Shavi</h2>
            <p className="text-sm text-gray-400">
              Empowering digital creativity through AI.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a
              href="/privacy"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center md:flex md:justify-between md:items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Shavi. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Designed in Silicon Valley · Crafted with{" "}
            <span className="text-blue-400">Next.js</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
