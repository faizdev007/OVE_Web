'use client';
import FaqSection from "@/components/main/Homepage/faq";
import HeroSection from "@/components/virtualassistance/HeroSection";
import ImagineTask from "@/components/virtualassistance/ImagineTask";
import Modal from "@/components/virtualassistance/modal";
import ServicessArea from "@/components/virtualassistance/ServicessArea";
import SkillsVA from "@/components/virtualassistance/SkillsVA";
import VACTA from "@/components/virtualassistance/VACTA";
import VACTA2 from "@/components/virtualassistance/VACTA2";
import VAStapes from "@/components/virtualassistance/VAStapes";
import VAWork from "@/components/virtualassistance/VAWork";
import ServiceWhyChooseUs from "@/components/virtualassistance/WhyChooseUs";
import WhyYourShouldChoose from "@/components/virtualassistance/WhyYouShoudChoose";

// src/app/(services)/services/page.tsx
export default function ServicePage(pageData:any) {
    // console.log(pageData?.pageData);
    // return;
  return (
    <>
      <HeroSection HeroData={pageData?.pageData}/>
      <VAStapes StepsBlock={pageData?.pageData?.stepCard}/>
      <VACTA CTA={pageData?.pageData?.cta?.one}/>
      <ServicessArea ServicessArea={pageData?.pageData?.hoverCards?.group1}/>
      <ServiceWhyChooseUs WhyChooseUs={pageData?.pageData?.whyChoose}/>
      <ImagineTask Information={pageData?.pageData?.infoCards}/>
      <ServicessArea ServicessArea={pageData?.pageData?.hoverCards?.group2}/>
      <VACTA CTA={pageData?.pageData?.cta?.two}/>
      <SkillsVA/>
      <WhyYourShouldChoose/>
      <VAWork StoryBlock={pageData?.pageData?.storyBlock}/>
      <VACTA2 CTA2={pageData?.pageData?.cta?.three}/>
      <FaqSection FAQ={pageData?.pageData?.faq}/>
      <Modal isOpen={false} onClose={() => {}}/>
    </>
  );
}
