'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const projects = [
  {
    tag: 'ECOMMERCE 🛍️',
    features: [
      { icon: '🌍', heading: 'Heading goes here', text: 'Lorem ipsum amet consectetur adipiscing elit.' },
      { icon: '🚀', heading: 'Heading goes here', text: 'Lorem ipsum amet consectetur adipiscing elit.' },
      { icon: '📱', heading: 'Heading goes here', text: 'Lorem ipsum amet consectetur adipiscing elit.' },
    ],
    image: 'IMAGE 1',
  },
  {
    tag: 'FINTECH 💰',
    features: [
      { icon: '🔒', heading: 'Secure Payments', text: 'Encryption-based secure transactions for users.' },
      { icon: '📊', heading: 'Real-time Reports', text: 'Live insights into user finances and transactions.' },
      { icon: '💳', heading: 'Multi-Currency', text: 'Supports transactions in 15+ global currencies.' },
    ],
    image: 'IMAGE 2',
  },
];

export default function OurProjectsSlider() {
  const prevProj = useRef(null);
  const nextProj = useRef(null);

  return (
    <section className="py-16 px-4 dark:bg-gray-700 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
      <p className="max-w-4xl mx-auto text-gray-600 dark:text-white mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed iusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="relative container mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000 }}
          navigation={{ prevEl: prevProj.current, nextEl: nextProj.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevProj.current;
            swiper.params.navigation.nextEl = nextProj.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
                {/* Left Box */}
                <div className="border border-gray-300 rounded-md p-6 w-full md:w-1/3 text-left">
                  <div className="mb-4">
                    <span className="text-sm font-semibold bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-6">
                      {project.tag}
                    </span>

                    {project.features.map((feature, i) => (
                      <div key={i} className="mb-4">
                        <h3 className="font-semibold text-md mb-1">
                          {feature.icon} {feature.heading}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-white">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="bg-gray-300 w-full md:w-2/3 aspect-[2/1] flex items-center justify-center rounded-md text-2xl font-bold text-black">
                  {project.image}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="hidden md:flex justify-center items-center gap-6 mt-6">
          <button ref={prevProj} aria-label='prevproj'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
            </svg>
          </div>
          <button ref={nextProj} aria-label='nextproj'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
