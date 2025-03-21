"use client";
// src/components/Navbar.js
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Shavi
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/features"
              className="block text-gray-700 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-blue-600"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
