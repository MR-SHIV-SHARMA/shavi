// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Morpho. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="text-sm hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  