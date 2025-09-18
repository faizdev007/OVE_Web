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
export default function ServicePage() {
  // fallback (optional)
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gray-100 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-red-500 tracking-widest">404</h1>
        <p className="mt-4 text-xl text-black">Page not found</p>
        <a
          href="/"
          className="mt-8 inline-block bg-oveblue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
  // return (
  //   <>
  //     <HeroSection/>
  //     <VAStapes/>
  //     <VACTA/>
  //     <ServicessArea/>
  //     <ServiceWhyChooseUs/>
  //     <ImagineTask/>
  //     <ServicessArea/>
  //     <VACTA/>
  //     <SkillsVA/>
  //     <WhyYourShouldChoose/>
  //     <VAWork/>
  //     <VACTA2/>
  //     <FaqSection/>
  //     <Modal isOpen={false} onClose={() => {}}/>
  //   </>
  // );
}
