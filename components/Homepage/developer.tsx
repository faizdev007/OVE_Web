'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Developer = {
  name: string;
  profile: string;
  describe: string;
  previous: string;     // logo/image path
  image: string;        // image path
  color: string;        // hex color
  techstack: string[];  // list of image paths or labels
};

type DevelopersSectionProps = {
  developers?: Developer[];
};

function SampleNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 h-full top-0 p-3 end-0 flex justify-end items-center"
      style={{ background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)' }}
    >
      <button
        type="button"
        aria-label="Next"
        className="bg-oveblue/40 w-12 h-12 rounded-full flex justify-center items-center hover:bg-oveblue/90 border border-white cursor-pointer font-bold"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 h-full top-0 p-3 start-0 flex justify-start items-center"
      style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)' }}
    >
      <button
        type="button"
        aria-label="Previous"
        className="bg-oveblue/40 w-12 h-12 rounded-full opacity-90 flex justify-center items-center hover:bg-blue-600 border border-white cursor-pointer font-bold"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default function DevelopersSlider({ developers }: DevelopersSectionProps) {
  const fallbackDevelopers: Developer[] = [
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
  ];

  const developerList: Developer[] = (developers && developers.length > 0) ? developers : fallbackDevelopers;

  const baseSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    className: 'center',
    centerPadding: '60px',
    centerMode: true,
    pauseOnHover: true,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 2080) {
        setSettings({ ...baseSettings, slidesToShow: 9, slidesToScroll: 1 });
      } else if (width >= 1680) {
        setSettings({ ...baseSettings, slidesToShow: 7, slidesToScroll: 1 });
      } else if (width >= 1590) {
        setSettings({ ...baseSettings, slidesToShow: 6, slidesToScroll: 1 });
      } else if (width >= 1280) {
        setSettings({ ...baseSettings, slidesToShow: 5, slidesToScroll: 1 });
      } else if (width >= 1080) {
        setSettings({ ...baseSettings, slidesToShow: 4, slidesToScroll: 1 });
      } else if (width >= 769) {
        setSettings({ ...baseSettings, slidesToShow: 3, slidesToScroll: 1 });
      } else if (width >= 426) {
        setSettings({ ...baseSettings, slidesToShow: 2, slidesToScroll: 1 });
      } else if (width >= 350) {
        setSettings({ ...baseSettings, slidesToShow: 1, slidesToScroll: 1 });
      } else {
        setSettings({ ...baseSettings, slidesToShow: 1, slidesToScroll: 1, centerMode: false });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-black dark:bg-gray-700 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      <Image
        loading="lazy"
        width={100}
        height={100}
        className="absolute hidden object-cover bottom-0 w-full start-0 end-0"
        src="/assets/cloudbg.webp"
        alt="cloudbg"
      />
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center text-white mb-12">
        Meet Our Developers
      </h2>

      <div className="transform relative bg-black/90 rounded overflow-hidden dark:bg-gray-800 rounded-md mx-auto">
        <div className="slider-container relative z-10">
          {settings ? (
            <Slider {...settings}>
              {developerList.map((dev, index) => (
                <div key={dev.name + index} className="px-1 py-2">
                  <div
                    className={`bg-oveblue gap-4 flex flex-col justify-between mt-25 aspect-[1/1.2] text-white relative rounded-xl shadow-md hover:shadow-lg`}
                    style={{ border: `3px solid ${dev.color}` }}
                  >
                    <div className="relative w-2/3 flex items-center justify-center aspect-[3/1] mx-auto">
                      <div className="overflow-hidden absolute -top-20 border border-gray-800 z-20 rounded-full aspect-[1/1]">
                        <Image
                          loading="eager"
                          src={dev.image}
                          alt={dev.name}
                          width={300}
                          height={300}
                          decoding="async"
                          className="w-38 h-38 mx-auto object-cover transform transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="p-2 flex flex-col gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-col text-center gap-0">
                          <h3 className="font-semibold text-xl text-ellipsis overflow-hidden text-clip">
                            {dev.name}
                          </h3>
                          <p className="text-sm overflow-hidden text-ellipsis text-clip text-white/80">
                            {dev.profile}
                          </p>
                        </div>

                        <div className="overflow-hidden">
                          <div className="flex flex-wrap w-full gap-1 h-[60px] text-xs items-center justify-center">
                            {dev.techstack.map((item, i) => (
                              <span key={item + i} className="border border-gray-100 rounded-full px-2 py-1">
                                {item.split('/').pop()?.replace('.webp', '')}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col text-center">
                          <p className="text-white/60 mb-1 font-bold text-sm">PREVIOUSLY AT</p>
                          <div className="flex justify-center items-center aspect-[4/1] h-12">
                            <Image
                              loading="eager"
                              fetchPriority="high"
                              decoding="async"
                              width={300}
                              height={300}
                              className="object-contain w-auto h-12 mb-2"
                              src={dev.previous}
                              alt={dev.previous.split('/').pop()?.replace('.webp', '') || 'previous'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex flex-col items-center justify-center p-4">
              <div className="loading-text">Loading...</div>
              <div className="loading-spinner" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
