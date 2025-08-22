'use client';

import '../components/Homepage/customstyle.css';

import DevelopersSlider from "@/components/Homepage/developer";
import FaqSection from "@/components/Homepage/faq";
import Herosection from "@/components/Homepage/hero";
import HireBy from "@/components/Homepage/hireby";
import HiringProcess from "@/components/Homepage/hiringprocess";
import OurProjectsSlider from "@/components/Homepage/projects";
import TrustedBySection from "@/components/Homepage/trustedby2";
import WhyChooseUs from "@/components/Homepage/whyus";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const WP = 'https://staging.optimalvirtualemployee.com.au';

type DeveloperItem = {
  id: number;
  slug: string;
  title: { rendered: string };
  thumbnail: any;
  content?: { rendered: string };
  _embedded?: any;
};

async function getDevelopers(signal?: AbortSignal): Promise<DeveloperItem | null> {
  const url = `${WP}/wp-json/wp/v2/developer`;
  const res = await fetch(url, { cache: "no-store", signal });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const arr: DeveloperItem[] = await res.json();
  return arr[0] ?? null; // empty array = not found
}

export default function Home() {
  const [Developers, setDevelopers] = useState<DeveloperItem | null>(null);
  useEffect(() => {
      const ac = new AbortController();
      
      (async () => {
      try {
          const data = await getDevelopers(ac.signal);
          if (!data) {
              // Mark as not found so UI can render 404
              throw new Error("NOT_FOUND");
          }
          setDevelopers(data);
      } catch (e: any) {
          
      }
      })();

      return () => ac.abort();
  }, []);

  return (
    <>
      <Herosection/>
      <DevelopersSlider/>
      <HireBy/>
      <div className="relative">
        <div className="bg-black">
            <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <HiringProcess/>
      </div>
      <div className="relative">
        <div className='bg-gray-100'>
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <TrustedBySection/>
      </div>
      <div className="relative">
        <div className='bg-black'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <WhyChooseUs/>
      </div>
      <div className="relative">
        <div className="bg-gray-100">
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <OurProjectsSlider/>
      </div>
      <div className="relative">
        <div className='bg-lightblack'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <FaqSection/>
      </div>
    </>
  );
}
