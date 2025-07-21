import DevelopersSlider from "@/components/Homepage/Developers";
import Herosection from "@/components/Homepage/Hero";
import HiringProcess from "@/components/Homepage/HiringProcess";
import TrustedBySection from "@/components/Homepage/TrustedBy2";
import WhyChooseUs from "@/components/Homepage/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="absolute top-0 w-full">
      <Herosection/>
      <DevelopersSlider/>
      <HiringProcess/>
      <TrustedBySection/>
      <WhyChooseUs/>
    </div>
    </>
  );
}
