'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkmod, setdarkmod] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setdarkmod(isDarkMode);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-700 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo */}
        <a href={'/'} className="flex items-center">
          {darkmod ? (
            <img src="/assets/logo2.webp" width={150} alt="OVE" />
          ) : (
            <img src="/assets/logo.webp" width={150} alt="OVE" />
          )}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <div className="hidden" onMouseEnter={() => setShowDropdown(true)}>
            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Services ▼
            </button>
          </div>

          <a href="#testimonials" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
          <a href="#case-studies" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Case Studies
          </a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            About Us
          </a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact Us
          </a>
          <a href="#career" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Career
          </a>
          <a href="#contact" className="hidden border-2 border-black hover:bg-gray-200 hover:dark:bg-gray-800 text-black dark:border-white dark:text-white px-4 py-2 rounded-md transition">
              Get Started
          </a>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              Hire Developer
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
        {/* Full-width dropdown */}
        {showDropdown && (
          <div onMouseLeave={() => setShowDropdown(false)} className="absolute z-50 left-0 top-full w-screen bg-white dark:bg-gray-700 shadow-lg z-40 py-4">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#web-dev" className="hover:text-blue-600 dark:hover:text-blue-300 block">
                Web Development
              </a>
              <a href="#mobile-app" className="hover:text-blue-600 dark:hover:text-blue-300 block">
                Mobile Apps
              </a>
              <a href="#ui-ux" className="hover:text-blue-600 dark:hover:text-blue-300 block">
                UI/UX Design
              </a>
              <a href="#cloud" className="hover:text-blue-600 dark:hover:text-blue-300 block">
                Cloud Services
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu with Dropdown */}
      <div
        className={`transition-all duration-500 md:hidden overflow-hidden absolute top-full start-0 end-0 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-white dark:bg-gray-800">
          {/* Services Dropdown - Mobile */}
          <details className="group hidden">
            <summary className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </summary>
            <div className="ml-4 mt-2 space-y-1 text-sm">
              <a href="#web-dev" className="block hover:text-blue-600 dark:hover:text-blue-300">
                Web Development
              </a>
              <a href="#mobile-app" className="block hover:text-blue-600 dark:hover:text-blue-300">
                Mobile Apps
              </a>
              <a href="#ui-ux" className="block hover:text-blue-600 dark:hover:text-blue-300">
                UI/UX Design
              </a>
              <a href="#cloud" className="block hover:text-blue-600 dark:hover:text-blue-300">
                Cloud Services
              </a>
            </div>
          </details>

          <a href="#testimonials" className="hidden hover:text-blue-600 dark:hover:text-blue-400">
            Testimonials
          </a>
          <a href="#case-studies" className="hidden hover:text-blue-600 dark:hover:text-blue-400">
            Case Studies
          </a>
          <a href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400">
            About Us
          </a>
          <a href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Contact Us
          </a>
          <a href="#career" className="hidden hover:text-blue-600 dark:hover:text-blue-400">
            Career
          </a>
          <a href="#contact" className="hidden text-center border-2 border-black hover:bg-gray-200 hover:dark:bg-gray-700 text-black dark:border-white dark:text-white px-4 py-2 rounded-md transition">
              Get Started
          </a>
          <a href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              Hire Developer
          </a>
        </div>
      </div>
    </header>
  );
}
