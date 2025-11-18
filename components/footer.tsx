'use client';

import { RoleBaseSlug, SkillBaseSlug } from "@/app/(main)/utils/CategorySlug";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {

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
        menuTitle:'Hire By Role',
        icon:'../assets/menuicons/ico_sol.svg',
        menuCategory:'',
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
        menuCategory:'',
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
    },
    {
        menuTitle:'Quick Links',
        icon:'../assets/menuicons/ico_ai.svg',
        menuCategory:'',
        urls:[
        {name:'About Us',url:'/about-us', context:null, icon:null },
        {name:'Contact Us',url:'/contact-us', context:null, icon:null },
        {name:'Privacy Policy',url:'/privacy-policy', context:null, icon:null },
        ]
    }
    ];
    
    const officelocation = [
        {
            name:'Australia',
            image:'/assets/offices/AUSTRALIA.webp',
            address: 'Level 15, 333 Collins St, Melbourne 3000, Victoria, Australia',
            tel:'+61 489921411'
        },
        {
            name:'USA',
            image:'/assets/offices/USA.webp',
            address: '109 Mojonera Court, Los Gatos, CA, USA 95032',
            tel:'+1 2028499199'
        },
        {
            name:'UK',
            image:'/assets/offices/UK.webp',
            address: '4TH Floor, Rex House, 4-12 Regent Street, London SW1Y 4PE(UK)',
            tel:'+44 7411118134'
        },
        {
            name:'India',
            image:'/assets/offices/INDIA.webp',
            address: 'B27, Images Tower, Sector 132, Noida,  Uttar Pradesh 201301.',
            tel:'+91 9999979934'
        }
    ];

    return (
        <div className={`relative`}>
            <div className="bg-gray-100 dark:hidden hidden">
                <Image src={'/assets/bgblack.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
            </div>
            <div className="gird footerbg relative">
                <section className="container mx-auto dark:bg-gray-800 text-white relative px-4 md:py-10 py-2 sm:px-6 lg:px-8 mx-auto pt-10">
                    <div>
                        <h3 className="text-center hidden text-2xl md:text-3xl lg:text-4xl xl-text-5xl 2xl:text-6xl font-bold mb-8">OUR OFFICE LOCATIONS</h3>
                        <div className="lg:flex grid md:grid-cols-2 w-full gap-6">
                            {hiremenu.map((menu, i) => (
                            <div className="flex-1 mt-8" key={i}>
                                <h2 className="font-bold lg:text-xl flex gap-2 border-b pb-1 border-gray-100/20">{menu.menuTitle}</h2>
                                <div className="grid xl:grid-cols-2 gap-3 py-2">
                                    {menu.urls.map((url:any, i:number) => (
                                        <div key={i}>
                                            <a href={url.url} className="hover:text-blue-600 flex text-gray-400 dark:hover:text-blue-300 gap-1 hover:underline">
                                                {url.icon && <img src={url.icon} alt="icon"/>}<span className='text-md'>{url.name}</span>
                                            </a>
                                            {url?.context && <p className='font-normal text-xs'>{url?.context}</p>}  
                                        </div>
                                    ))}
                                </div>
                            </div>
                            ))}
                        </div>
                        <hr className="border border-b-0 border-gray-100/20 mt-10"></hr>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-gray-600 md:divide-y-0 lg:px-4">
                            {officelocation.map((location,key)=>(
                                <div key={key} className="flex flex-col justify-between px-4 py-6 gap-2" aria-labelledby={location.name}>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <div className="h-8 aspect-[1.6/1] border border-white drop-shadow shadow-white/50 overflow-hidden rounded-md">
                                            <Image loading="lazy" width={100} height={50} src={location.image} alt={location.name} className="w-full h-full object-cover"/>
                                        </div>
                                        <h2 className="xl:text-xl font-bold text-shadow-lg hover:text-shadow-sm">{location.name}</h2>
                                    </div>
                                    <p className="text-sm">{location.address}</p>
                                    <a className="flex gap-2 items-center hover:underline" href={`tel:${location.tel}`} aria-label={location.tel}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
                                        </svg>
                                        {location.tel}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="blackgradiant border-t border-gray-300 dark:bg-gray-800 flex flex-col md:flex-row gap-4 text-center md:text-start justify-between items-center text-white relative px-4 py-6 sm:px-6 lg:px-8 mx-auto">
                    <div>
                        <nav className="flex gap-3">
                            <a href="https://www.facebook.com/Optimal-virtual-Employee-2093585584194627/" aria-label="facebook"><Image src={'/assets/sociallinks/facebook_white.webp'} width={100} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" height={100} alt="facebook"/></a>
                            <a href="https://www.linkedin.com/company/optimal-virtual-employee-ove/" aria-label="linkedin"><Image src={'/assets/sociallinks/linkedin_white.webp'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="linkedin"/></a>
                            <a href="https://twitter.com/OptimalVE" aria-label="X"><Image src={'/assets/sociallinks/twitter_white.webp'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="youtube"/></a>
                        </nav>
                    </div>
                    <div className="text-xs">
                        @ Copywrite {new Date().getUTCFullYear()} Optimal Virtual Employee. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}