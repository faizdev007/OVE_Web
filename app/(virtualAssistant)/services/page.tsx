import FaqSection from "@/components/main/Homepage/faq";
import HeroSection from "@/components/virtualassistance/HeroSection";
import ServicessArea from "@/components/virtualassistance/ServicessArea";
import VAStapes from "@/components/virtualassistance/VAStapes";
import ServiceWhyChooseUs from "@/components/virtualassistance/WhyChooseUs";

// src/app/(services)/services/page.tsx
export default function ServicesPage() {
  return (
    <>
        <HeroSection/>
        <VAStapes/>
        <ServicessArea/>
        <ServiceWhyChooseUs/>
        <FaqSection/>
    </>
  );
}
