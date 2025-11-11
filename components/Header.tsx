'use client';

import { RoleBaseSlug, SkillBaseSlug } from '@/app/(main)/utils/CategorySlug';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  const [roleSlugs, setRoleSlugs] = useState<object[]>([]);
  const [SkillSlugs, setSkillSlugs] = useState<object[]>([]);

  useEffect(() => { 
    // Fetch role-based slugs on component mount
    (async () => {
      try {
        const data = await RoleBaseSlug(8);
        const link2 = await SkillBaseSlug(8);
        const slugs = data?.category?.hires?.nodes.map(node => node) || [];
        const slugs2 = link2?.category?.hires?.nodes.map(node => node) || [];
        setRoleSlugs(slugs);
        setSkillSlugs(slugs2);
      }
      catch (e) {
        console.error('Failed to fetch role-based slugs', e);
      }
    })();
  }, []);

  const hiremenu = [{
      menuTitle:'How We Engage',
      icon:null,
      menuCategory:'',
      urls:[
        {name:'Staff Augmentation',context:'Elite AI-powered engineers embedded directly into your projects',url:'/staff-augmentation',icon:'../assets/menuicons/ico_staff.svg'},
        {name:'Hire Dedicated Development Teams',context:'Agile development teams custom built to deliver digital experiences',url:'/hire-development-teams',icon:'../assets/menuicons/ico_agile.svg'},
      ]
    },{
      menuTitle:'Hire By Role',
      icon:'../assets/menuicons/ico_sol.svg',
      menuCategory:'Hire',
      urls:roleSlugs.length > 0 ? Object(roleSlugs).map((menu:any) => {
        const name = menu?.title;
        return { name, url: `/hire/${menu?.slug}`, context:null, icon:null };
      }) : [
        {name:'Full-stack Developer',url:'/hire/full-stack-developer', context:null, icon:null },
        {name:'Back-end Developers',url:'/hire/back-end-developers', context:null, icon:null },
        {name:'Front-end Developers',url:'/hire/front-end-developers', context:null, icon:null },
        {name:'Cloud Engineers',url:'/hire/cloud-engineers', context:null, icon:null },
        {name:'Mobile Developer',url:'/hire/mobile-developer', context:null, icon:null },
        {name:'AI Engineers',url:'/hire/ai-engineers', context:null, icon:null },
        {name:'Blockchain Developers',url:'/hire/blockchain-developers', context:null, icon:null },
      ]
    },
    {
      menuTitle:'Hire By Skill',
      icon:'../assets/menuicons/ico_ai.svg',
      menuCategory:'Hire',
      urls:SkillSlugs.length > 0 ? Object(SkillSlugs).map((menu:any) => {
        const name = menu.title;
        return { name, url: `/hire/${menu?.slug}`, context:null, icon:null };
      }) : [
        {name:'Alpine.js Developer',url:'/hire/alpine-js-developer', context:null, icon:null },
        {name:'Python Developer',url:'/hire/python-developer', context:null, icon:null },
        {name:'Laravel Developer',url:'/hire/laravel-developer', context:null, icon:null },
        {name:'Jupyter Developer',url:'/hire/jupyter-developer', context:null, icon:null },
        {name:'Jest Developer',url:'/hire/jest-developer', context:null, icon:null },
        {name:'JavaScript Developer',url:'/hire/javascript-developer', context:null, icon:null },
        {name:'Java Developer',url:'/hire/java-developer', context:null, icon:null },
      ]
    }
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
      <header
      className={`${
        scrolled
          ? 'bg-headerblue shadow-md dark:bg-gray-700 border-gray-700'
          : 'bg-transparent'
      } font-bold text-white dark:text-white sticky top-0 z-50 transition-all duration-500`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image loading='eager' priority src={"/assets/whiteLogo.webp"} width={500} height={450} className='h-12 w-auto' alt="OVE" />
        </a>

        {/* Desktop Menu */}
        <div className="lg:flex gap-6 items-center hidden">
          <nav className="lg:flex gap-6 items-center hidden">
            <a href="/" className="hover:text-blue-400 transition hidden">Home</a>
            <div
              onMouseEnter={() => { setShowDropdown(true); setActiveIndex(true); }}
              onMouseLeave={() => { setShowDropdown(false); setActiveIndex(false); }}
              className="p-3"
            >
              <button className="hover:text-blue-400 transition flex gap-2">
                <span>Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                  className={`size-6 transition-transform duration-300 ${activeIndex ? 'rotate-180' : ''}`}>
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L8.53 10.53a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <a href="/about-us" className="hover:text-blue-400 transition">About Us</a>
            <a href="/contact-us" className="hover:text-blue-400 transition">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
          </nav>

          <a href="/contact-us" className="border-2 border-btnblue hover:bg-btnblue/90 text-white px-4 py-2 rounded-md transition">
            Schedule A Call
          </a>
          <a href="/contact-us" className="bg-btnblue hover:bg-btnblue/90 text-white border-2 border-btnblue px-4 py-2 rounded-md transition">
            Start Hiring
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Desktop Dropdown */}
      {showDropdown && (
        <div className="max-w-5xl text-black grid mx-auto relative -top-3">
          <div
            onMouseEnter={() => { setShowDropdown(true); setActiveIndex(true); }}
            onMouseLeave={() => { setShowDropdown(false); setActiveIndex(false); }}
            className="absolute rounded-md w-full drop-shadow left-0 top-full bg-white dark:bg-gray-700 shadow-lg py-2"
          >
            <div className="relative px-4 py-2 grid md:grid-cols-3 gap-4 sm:px-6 lg:px-8 mx-auto">
              {hiremenu.map((single, key) => (
                <div key={key}>
                  <h2 className="border-b-2 menuheading font-bold flex gap-2 pb-2">{single.icon && <img src={single.icon} alt="icon"/>}{single.menuTitle}</h2>
                  <div className="grid gap-2 py-2">
                    {single.urls.map((url:any, i:number) => (
                      <div key={i} >
                        <a href={url.url} className="hover:text-blue-600 flex dark:hover:text-blue-300 text-sm gap-1 py-0.5 hover:underline">
                          <span className='text-gray-500 font-mono'>{single.menuCategory && single.menuCategory}</span>{url.icon && <img src={url.icon} alt="icon"/>}<span className='text-md'>{url.name}</span>
                        </a>
                        {url?.context && <p className='font-normal text-xs'>{url?.context}</p>}  
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            <div className='py-2'>
              <a href="/hire" className="hover:bg-btnblue/90 hover:text-white border-2 border-btnblue text-btnblue px-4 py-2 rounded-md transition">
                View All Services
              </a>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={e => e.stopPropagation()}
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-headerblue dark:bg-gray-900 text-white flex flex-col justify-between transform transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="overflow-y-auto h-full p-6 space-y-4">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <Image loading='eager' priority src={"/assets/whiteLogo.webp"} width={500} height={450} className='h-12 w-auto' alt="OVE" />
              <button onClick={() => setMenuOpen(false)} className="text-2xl font-bold">×</button>
            </div>

            <a href="/" className=" hover:text-blue-400 transition hidden">Home</a>

            <details className="group">
              <summary className="cursor-pointer hover:text-blue-400 transition">Services</summary>
              <div className="mt-2 ml-2 space-y-2 text-sm">
                {hiremenu.map((menu, i) => (
                  <div key={i}>
                    <h2 className="border-b-2 font-bold flex gap-2">{menu.menuTitle}</h2>
                    <div className="grid gap-2 py-2">
                      {menu.urls.map((url:any, i:number) => (
                        <div key={i}>
                          <a href={url.url} className="hover:text-blue-600 flex dark:hover:text-blue-300 text-sm gap-1 hover:underline">
                            <span className='text-gray-500 font-mono'>{menu.menuCategory && menu.menuCategory}</span>{url.icon && <img src={url.icon} alt="icon"/>}<span className='text-md'>{url.name}</span>
                          </a>
                          {url?.context && <p className='font-normal text-xs'>{url?.context}</p>}  
                        </div>
                      ))}
                    </div>
                </div>
                ))}
              </div>
            </details>

            <a href="/about-us" className="block hover:text-blue-400">About Us</a>
            <a href="/contact-us" className="block hover:text-blue-400">Contact Us</a>
            <a href="/privacy-policy" className="block hover:text-blue-400">Privacy Policy</a>

            <hr className="border-gray-600 my-4" />

            <a
              href="/contact-us"
              className="block text-center border-2 border-btnblue hover:bg-btnblue/90 px-4 py-2 rounded-md"
            >
              Schedule A Call
            </a>
            <a
              href="/contact-us"
              className="block text-center bg-btnblue hover:bg-btnblue/90 text-white px-4 py-2 rounded-md"
            >
              Start Hiring
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
