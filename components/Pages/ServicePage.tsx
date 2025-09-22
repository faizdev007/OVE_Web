'use client';
import FaqSection from "@/components/main/Homepage/faq";
import HeroSection from "@/components/virtualassistance/HeroSection";
import ImagineTask from "@/components/virtualassistance/ImagineTask";
import ServicessArea from "@/components/virtualassistance/ServicessArea";
import SkillsVA from "@/components/virtualassistance/SkillsVA";
import VACTA from "@/components/virtualassistance/VACTA";
import VACTA2 from "@/components/virtualassistance/VACTA2";
import VAStapes from "@/components/virtualassistance/VAStapes";
import VAWork from "@/components/virtualassistance/VAWork";
import ServiceWhyChooseUs from "@/components/virtualassistance/WhyChooseUs";
import WhyYourShouldChoose from "@/components/virtualassistance/WhyYouShoudChoose";
import { useState } from "react";
import Modal from "../virtualassistance/VAModal";
import ClientSuccessStories from "../virtualassistance/ClientSuccessStories";
import Client from "../main/Hire/Client";
import RoleWeHired from "../virtualassistance/RoleWeHired";

// src/app/(services)/services/page.tsx
export default function ServicePage(pageData:any) {
  const [isOpen, setIsOpen] = useState(false);
    // console.log(pageData?.pageData);
    // return;
  return (
    <>
      <HeroSection HeroData={pageData?.pageData?.HeroSection}/>
      <VAStapes StepsBlock={pageData?.pageData?.stepCard}/>
      <div id="WWS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <RoleWeHired RoleBaseHired={pageData?.pageData?.hoverCards?.group1}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.one}/>
      <div id="SWS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <RoleWeHired RoleBaseHired={pageData?.pageData?.hoverCards?.group2}/>
      </div>
      <ImagineTask Information={pageData?.pageData?.infoCards}/>
      <div id="WCUS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <ServiceWhyChooseUs WhyChooseUs={pageData?.pageData?.whyChoose}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.two}/>
      <SkillsVA/>
      <WhyYourShouldChoose/>
      <VAWork StoryBlock={pageData?.pageData?.storyBlock}/>
      <VACTA2 CTA2={pageData?.pageData?.cta?.three}/>
      <ClientSuccessStories ClientStories={pageData?.pageData?.clientStories}/>
      <Client Testimonials={pageData?.pageData?.testimonial}/>
      <div id="FAQ" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <FaqSection FAQ={pageData?.pageData?.faq}/>
      </div>
      
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Hello from Modal 🎉</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a reusable modal component in Next.js.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </Modal>
    </>
  );
}
