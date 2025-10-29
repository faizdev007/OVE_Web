'use client';

import { RoleBaseSlug, SkillBaseSlug } from '@/app/(main)/utils/CategorySlug';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [roleSlugs, setRoleSlugs] = useState<string[]>([]);
  const [SkillSlugs, setSkillSlugs] = useState<string[]>([]);

  useEffect(() => { 
    // Fetch role-based slugs on component mount
    (async () => {
      try {
        const data = await RoleBaseSlug();
        const link2 = await SkillBaseSlug();
        const slugs = data?.category?.hires?.nodes.map(node => node.slug) || [];
        const slugs2 = link2?.category?.hires?.nodes.map(node => node.slug) || [];
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
      icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          ),
      menuCategory:'',
      urls:[
        {name:'Staff Augmentation',context:'Elite AI-powered engineers embedded directly into your projects',url:'#',icon:'../assets/menuicons/ico_staff.svg'},
        {name:'Hire Dedicated Development Teams',context:'Agile development teams custom built to deliver digital experiences',url:'#',icon:'../assets/menuicons/ico_agile.svg'},
      ]
    },{
      menuTitle:'Role Base Hiring',
      icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>),
      menuCategory:'Hire',
      urls:roleSlugs.length > 0 ? roleSlugs.map(slug => {
        const name = slug.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return { name, url: `/hire/${slug}`, context:null, icon:null };
      }) : [
        {name:'Full-stack Developer',url:'/full_stack_developer', context:null, icon:null },
        {name:'Front-End Developer',url:'/front_end_developer', context:null, icon:null },
        {name:'Back-End Developer',url:'/back_end_developer', context:null, icon:null },
        {name:'Database Engineer',url:'/database_engineer', context:null, icon:null },
      ]
    },
    {
      menuTitle:'Skill Base Hiring',
      icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          ),
      menuCategory:'Hire',
      urls:SkillSlugs.length > 0 ? SkillSlugs.map(slug => {
        const name = slug.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return { name, url: `/hire/${slug}`, context:null, icon:null };
      }) : [
        {name:'React Developer',url:'/react_developer', context:null, icon:null },
        {name:'Laravel Developer',url:'/laravel_developer', context:null, icon:null },
        {name:'AI Developer',url:'/ai_developer', context:null, icon:null },
        {name:'Mobile Developer',url:'/mobile_developer', context:null, icon:null },
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
            className="absolute rounded-md w-full drop-shadow left-0 top-full bg-white dark:bg-gray-700 shadow-lg py-4"
          >
            <div className="relative px-4 py-2 grid md:grid-cols-3 gap-4 sm:px-6 lg:px-8 mx-auto">
              {hiremenu.map((single, key) => (
                <div key={key}>
                  <h2 className="border-b-2 font-bold flex gap-2">{single.menuTitle}</h2>
                  <div className="grid gap-2 py-2">
                    {single.urls.map((url, i) => (
                      <div key={i} >
                        <a href={url.url} className="hover:text-blue-600 flex dark:hover:text-blue-300 text-sm gap-2 py-2 hover:underline">
                          <span className='text-gray-600 font-mono'>{single.menuCategory && single.menuCategory}</span>{url.icon && <img src={url.icon} alt="icon"/>}<span className='text-md'>{url.name}</span>
                        </a>
                        {url?.context && <p className='font-light'>{url?.context}</p>}  
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

            <a href="/" className="block hover:text-blue-400 transition hidden">Home</a>

            <details className="group">
              <summary className="cursor-pointer hover:text-blue-400 transition">Services</summary>
              <div className="mt-2 ml-2 space-y-2 text-sm">
                {hiremenu.map((menu, i) => (
                  <div key={i}>
                    <h2 className="border-b-2 font-bold flex gap-2">{menu.menuTitle}</h2>
                    <div className="grid gap-2 py-2">
                      {menu.urls.map((url, i) => (
                        <div key={i}>
                          <a href={url.url} className="hover:text-blue-600 flex dark:hover:text-blue-300 text-sm gap-2 py-2 hover:underline">
                            <span className='text-gray-600 font-mono'>{menu.menuCategory && menu.menuCategory}</span>{url.icon && <img src={url.icon} alt="icon"/>}<span className='text-md'>{url.name}</span>
                          </a>
                          {url?.context && <p className='font-light'>{url?.context}</p>}  
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
              Get Started
            </a>
            <a
              href="/contact-us"
              className="block text-center bg-btnblue hover:bg-btnblue/90 text-white px-4 py-2 rounded-md"
            >
              Hire Developer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
