'use client';

import DevelopersSlider from "@/components/Homepage/Developers";
import FaqSection from "@/components/Homepage/FAQ";
import Herosection from "@/components/Homepage/Hero";
import HireBy from "@/components/Homepage/HireBy";
import HiringProcess from "@/components/Homepage/HiringProcess";
import OurProjectsSlider from "@/components/Homepage/Projects";
import TrustedBySection from "@/components/Homepage/TrustedBy2";
import WhyChooseUs from "@/components/Homepage/WhyUs";
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    
  return (
    <>
    {/* <div className="absolute top-0 w-full"> */}
      <Herosection/>
      <DevelopersSlider/>
      <HiringProcess/>
      <TrustedBySection/>
      <WhyChooseUs/>
      <OurProjectsSlider/>
      <HireBy/>
      <FaqSection/>
    {/* </div> */}

    <button onClick={openModal}>Open Modal</button>

      {/* Modal Component */}
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2>Modal Title</h2>
      <p>This is a simple modal in Next.js</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
    </>
  );
}
