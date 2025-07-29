'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkmod, setdarkmod] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  const toggle = () => {
    setShowDropdown(showDropdown === true ? false : true);
    setActiveIndex(activeIndex === true ? false : true);
  };

  const hiremenu = [{
    menuTitle:'Hire by role',
    menuCategory:'Hire',
    urls:[
      {name:'Full-stack Developer',url:'/full_stack_developer'},
      {name:'Front-End Developer',url:'/front_end_developer'},
      {name:'Back-End Developer',url:'/back_end_developer'},
      {name:'Mobile Developer',url:'/mobile_developer'},
    ]
  },
  {
    menuTitle:'Hire by Skill',
    menuCategory:'Hire',
    urls:[
      {name:'Full-stack Developer',url:'/full_stack_developer'},
      {name:'Front-End Developer',url:'/front_end_developer'},
      {name:'Back-End Developer',url:'/back_end_developer'},
      {name:'Mobile Developer',url:'/mobile_developer'},
    ]
  }
];

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setdarkmod(isDarkMode);
  }, []);

  return (
    <header className="bg-white font-bold dark:bg-gray-700 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo */}
        <a href={'/'} className="flex items-center">
          {darkmod ? (
            <Image src={"/assets/logo2.webp"} width={150} height={100} alt="OVE" />
          ) : (
            <Image src={"/assets/logo.webp"} width={150} height={100} alt="OVE" />
          )}
        </a>

        {/* Desktop Menu */}
        <nav className="md:flex gap-6 items-center">
          <div className="" onMouseEnter={() => toggle()}>
            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition hidden md:flex gap-2">
              <span>Services</span> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-6 transition-transform duration-300 ${
                    activeIndex ? 'rotate-180' : ''
                }`}>
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <a href="#testimonials" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
          <a href="#case-studies" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Case Studies
          </a>
          <a href="/contact" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
          <a href="#career" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
            Career
          </a>
          <a href="#contact" className="hidden border-2 border-black hover:bg-gray-200 hover:dark:bg-gray-800 text-black dark:border-white dark:text-white px-4 py-2 rounded-md transition">
              Get Started
          </a>
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition text-xl">
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
          <div onMouseLeave={() => toggle()} className="absolute border-t z-50 left-0 top-full w-screen bg-white dark:bg-gray-700 shadow-lg z-40 py-4">
            {hiremenu.map((single,key)=>(
              <div className='relative px-4 py-2 sm:px-6 lg:px-8 mx-auto' key={key}>
                <h2 className='border-b-2 font-bold md:text-2xl text-sm'>{single.menuTitle}</h2>
                <div className='grid md:grid-cols-4 gap-2'>
                    {single.urls.map((url,key2)=>(
                      <a href={url.name} key={key2} className="hover:text-blue-600 dark:hover:text-blue-300 block py-4">
                        <span className='text-black/60'>{single.menuCategory}</span>-{url.name}
                      </a>
                    ))}
                </div>
              </div>
            ))}
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
          <a href="/contact" className="hidden block hover:text-blue-600 dark:hover:text-blue-400">
            About Us
          </a>
          <a href="#about" className="hidden block hover:text-blue-600 dark:hover:text-blue-400">
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
