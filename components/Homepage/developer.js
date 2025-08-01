'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useRef, useState } from 'react';
import useInView from '@/components/useInView';
import Image from 'next/image';

export default function DevelopersSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // State to track if the section should be hidden or shown
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  const developers = [
    { name: 'Dev 1', profile:'Software Developer', image: '/assets/developer/dev1.webp', color: '#FF894F', techstack: ['/assets/hireby/skills/Angular.webp','/assets/hireby/skills/Fedora.webp','/assets/hireby/skills/JavaScript.webp'] },
    { name: 'Dev 2', profile:'DevOps Developer', image: '/assets/developer/dev2.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/GraphQL.webp','/assets/hireby/skills/FileZilla.webp','/assets/hireby/skills/Docker.webp'] },
    { name: 'Dev 3', profile:'Backend Developer', image: '/assets/developer/dev3.webp', color: '#EA5B6F', techstack: ['/assets/hireby/skills/Livewire.webp','/assets/hireby/skills/GraphQL.webp','/assets/hireby/skills/MongoDB.webp'] },
    { name: 'Dev 4', profile:'FullStack Developer', image: '/assets/developer/dev4.webp', color: '#2c98d6ff', techstack: ['/assets/hireby/skills/React.webp','/assets/hireby/skills/Slack.webp','/assets/hireby/skills/Postman.webp'] },
    { name: 'Dev 5', profile:'Angular Developer', image: '/assets/developer/dev5.webp', color: '#579b7eff', techstack: ['/assets/hireby/skills/Angular.webp','/assets/hireby/skills/Tailwind-CSS.webp','/assets/hireby/skills/Visual-Studio.webp'] },
  ];

  // Monitor Swiper slide visibility and compare with card limit
  useEffect(() => {
    
  }, []);

  const { elementRef, isVisible } = useInView();

  return (
    <section  ref={elementRef} className={`bg-white dark:bg-gray-700 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto`}>
      <div className={`transform relative transition-all duration-300 opacity-100 py-10 bg-black dark:bg-gray-800 rounded-md xl:px-30 px-4 mx-auto`}>
        <Image loading='lazy' width={100} height={100} className='absolute hidden object-cover bottom-0 w-full start-0 end-0' src={'/assets/cloudbg.webp'} alt="cloudbg"/>
        <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-12">Meet Our Developers</h2>

        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true  }}
          speed={1000}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setIsSectionVisible(swiper.allowSlideNext);
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1450: { slidesPerView: 4 },
            1850: { slidesPerView: 4 },
          }}
        >
          {developers.map((dev, index) => (
            <SwiperSlide key={index}>
              <div className={`dev bg-white aspect-[1/1.3] text-black relative rounded-xl shadow-lg animate-fade animate-duration-1000 animate-delay-${index}00 animate-ease-linear hover:shadow-2xl ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{border:`5px solid ${dev.color}`}}>
                <div className="relative mb-4 w-2/3 mx-auto overflow-hidden rounded-full absolute top-0 aspect-[1/1] mt-4" style={{border:`3px solid ${dev.color}`}}>
                  {/* Profile Image with Border and Hover Effect */}
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full mx-auto object-cover transform transition-all duration-300 hover:scale-105"
                  />
                </div>
                <div className='p-4 flex flex-col gap-3'>
                  <div className='grid space-y-2 gap-4'>
                    <div className='flex flex-col text-center gap-2 md:gap-0'>
                      <h3 className="font-semibold text-gray-900 text-ellipsis overflow-hidden text-clip">{dev.name}</h3>
                      <p className="text-sm text-gray-500 overflow-hidden text-ellipsis text-clip">{dev.profile}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-around">
                      {dev.techstack.length > 0 && dev.techstack.map((items, index)=>(
                        <div key={index} className='aspect-[1/1]'>
                          <img src={items} alt='icon' className='object-cover h-8 w-8'/>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className='text-xs text-justify text-clip'>Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua enim.</p>
                </div>
              </div>

            </SwiperSlide>
          ))}
          {/* Custom Navigation Arrows */}
          {isSectionVisible && 
            <div className="hidden md:flex justify-center items-center gap-6 mt-6 relative z-20">
              <button ref={prevRef} aria-label='prevref'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </button>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                </svg>
              </div>
              <button ref={nextRef} aria-label='nextref'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          }
        </Swiper>
      </div>
    </section>
  );
}
