'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-2 py-1 md:py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.webp" width={150} alt="OVE" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Case Studies
          </a>
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Career
          </a>
          <a href="#contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              Contact Us
            </button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <a href="#home" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </a>
          <a href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Testimonials
          </a>
          <a href="#services" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Case Studies
          </a>
          <a href="#services" className="block hover:text-blue-600 dark:hover:text-blue-400">
            About Us
          </a>
          <a href="#services" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Career
          </a>
          <a href="#contact">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
