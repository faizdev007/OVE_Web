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
      <DevelopersSlider developers={[
    { name: 'Aisha', profile:'Full-Stack Developer', describe:'Expert in serverless full-stack application development, focusing on real-time interactive apps.', previous:'/assets/previous/idp.webp', image: '/assets/developer/Aisha.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/MongoDB.webp','/assets/hireby/skills/Express.webp','/assets/hireby/skills/React.webp'] },
    { name: 'Ethan', profile:'AI RESEARCH ENG', describe:'Develops cloud-native, containerized backend services.', previous:'/assets/previous/linktree.webp', image: '/assets/developer/Ethan.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Scikit-Learn.webp','/assets/hireby/skills/MLflow.webp','/assets/hireby/skills/Docker.webp'] },
    { name: 'Tanvi', profile:'BACK-END DEVELOPER', describe:'Develops cloud-native, containerized backend services.', previous:'/assets/previous/gamma.webp', image: '/assets/developer/Tanvi.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Go.webp','/assets/hireby/skills/Kubernetes.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Renu', profile:'ML ENGINEER', describe:'Fine-tunes LLMs for advanced NLP use cases.', previous:'/assets/previous/airwallex.webp', image: '/assets/developer/Renu.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/PyTorch.webp','/assets/hireby/skills/Hugging Face.webp'] },
    { name: 'Alexander', profile:'Full-Stack Developer', describe:'Builds scalable full-stack apps with modern JS frameworks.', previous:'/assets/previous/afterplay.webp', image: '/assets/developer/Alexander.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Ruby on Rails.webp','/assets/hireby/skills/React.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Miguel', profile:'FULL-STACK DEVELOPER', describe:'Full-stack engineer with deep Ruby on Rails expertise.', previous:'/assets/previous/tesco.webp', image: '/assets/developer/Miguel.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Ruby on Rails.webp','/assets/hireby/skills/React.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Jose', profile:'ML OPS ENGINEER', describe:'Automates ML pipelines and deploys models at scale.', previous:'/assets/previous/atlassian.webp', image: '/assets/developer/Jose.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Kubeflow.webp','/assets/hireby/skills/MLflow.webp'] },
    { name: 'Ella', profile:'FRONT-END DEVELOPER', describe:'Creates pixel-perfect UI with seamless user experience.', previous:'/assets/previous/kainos.webp', image: '/assets/developer/Ella.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/React.webp','/assets/hireby/skills/Vue.js.webp','/assets/hireby/skills/SASS.webp'] },
    { name: 'Karthik', profile:'AI ENGINEER', describe:'Designs and deploys deep learning pipelines for computer vision in production.', previous:'/assets/previous/canva.webp', image: '/assets/developer/Karthik.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/TensorFlow.webp','/assets/hireby/skills/Keras.webp'] },
    { name: 'Preeda', profile:'ML ENGINEER', describe:'Optimizes deep learning models for edge devices.', previous:'/assets/previous/bhp.webp', image: '/assets/developer/Preeda.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Lightning.webp','/assets/hireby/skills/ONNX.webp'] },
  ]}/>
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
