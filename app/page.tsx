'use client';

import DevelopersSlider from "@/components/Homepage/Developers";
import FaqSection from "@/components/Homepage/FAQ";
import Herosection from "@/components/Homepage/Hero";
import HireBy from "@/components/Homepage/HireBy";
import HiringProcess from "@/components/Homepage/HiringProcess";
import OurProjectsSlider from "@/components/Homepage/Projects";
import TrustedBySection from "@/components/Homepage/TrustedBy2";
import WhyChooseUs from "@/components/Homepage/WhyUs";

export default function Home() {
    
  return (
    <>
      <Herosection/>
      <DevelopersSlider/>
      <HiringProcess/>
      <TrustedBySection/>
      <WhyChooseUs/>
      <OurProjectsSlider/>
      <HireBy/>
      <FaqSection/>
    </>
  );
}
