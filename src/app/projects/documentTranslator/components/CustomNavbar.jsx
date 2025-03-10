// src/app/projects/imageBackgroundRemover/components/CustomNavbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const CustomNavbar = ({ basePath = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href={`${basePath}/`}>Image BG Remover</Link>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href={`${basePath}/`}>Home</Link>
          <Link href={`${basePath}/about`}>About</Link>
          <Link href={`${basePath}/features`}>Features</Link>
          <Link href={`${basePath}/faq`}>FAQ</Link>
          <Link href={`${basePath}/contact`}>Contact</Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow">
          <nav className="px-4 py-2 space-y-2">
            <Link href={`${basePath}/`}>Home</Link>
            <Link href={`${basePath}/about`}>About</Link>
            <Link href={`${basePath}/features`}>Features</Link>
            <Link href={`${basePath}/faq`}>FAQ</Link>
            <Link href={`${basePath}/contact`}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CustomNavbar;
