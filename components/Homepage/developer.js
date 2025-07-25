'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useRef, useState } from 'react';
import useInView from '@/components/useInView';

function updateclass()
{
  
}

export default function DevelopersSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const developers = [
    { name: 'Dev 1', image: '/assets/developer/dev1.webp' },
    { name: 'Dev 2', image: '/assets/developer/dev2.webp' },
    { name: 'Dev 3', image: '/assets/developer/dev3.webp' },
    { name: 'Dev 4', image: '/assets/developer/dev4.webp' },
    { name: 'Dev 5', image: '/assets/developer/dev5.webp' },
  ];

  useEffect(()=>{
    const selection = document.querySelector('.dev');
    if (selection.parentElement.parentElement.classList.contains('swiper-wrapper')) {
      selection.parentElement.parentElement.classList.add('addmarginforcard');
    }
    document.querySelectorAll('.dev').forEach((element)=>{
      if(element.parentElement.classList.contains('swiper-slide-active')) {
        element.parentElement.classList.add('clideup');
      }
    });
  },[]);

  const { elementRef, isVisible } = useInView();

  return (
    <section  ref={elementRef} className={`bg-white dark:bg-gray-700 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto`}>
      <div className="max-w-7xl transform transition-all duration-300 opacity-100 py-10 bg-black dark:bg-gray-800 rounded-md md:px-30 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Developers</h2>

        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={60}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {developers.map((dev, index) => (
            <SwiperSlide key={index}>
              <div className={`dev bg-white aspect-[1/1.3] text-black p-6 rounded-xl shadow-lg text-center transition-transform duration-300 transform hover:shadow-2xl animate-fade-up animate-ease-in ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative mb-4">
                  {/* Profile Image with Border and Hover Effect */}
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 transform transition-all duration-300 hover:scale-105"
                  />
                </div>

                {/* Developer Name and Role */}
                <h3 className="text-xl font-semibold text-gray-900">{dev.name}</h3>
                <p className="text-sm text-gray-500 mt-2">Software Developer</p>

                {/* Description or Social Links */}
                <div className="mt-4 flex justify-center gap-4">
                  <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600 hover:text-blue-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75H7.5a.75.75 0 00-.75.75v16.5a.75.75 0 00.75.75h9a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75zM9 9.75h6v9H9v-9zM12 4.5a.75.75 0 01.75.75V9h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H12V12a.75.75 0 01-.75-.75v-1.5h-1.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.5V5.25A.75.75 0 0112 4.5z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-800 hover:text-gray-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.315 2.828 8.004 6.75 9.295.493.09.67-.213.67-.474 0-.234-.009-.856-.015-1.682-2.738.595-3.307-1.317-3.307-1.317-.446-1.134-1.088-1.435-1.088-1.435-.889-.606.067-.594.067-.594 1.033.072 1.574 1.062 1.574 1.062.918 1.558 2.405 1.112 2.993.852.093-.664.358-1.112.651-1.368-2.268-.257-4.65-1.134-4.65-5.029 0-1.112.397-2.023 1.048-2.738-.105-.257-.453-1.284.089-2.573 0 0 .853-.275 2.78 1.04 1.073-.298 2.228-.447 3.367-.447s2.294.149 3.367.447c1.927-1.315 2.78-1.04 2.78 2.573 0 3.906-2.397 4.772-4.65 5.029.3.256.557.697.557 1.366 0 1.211-.008 2.497-.008 2.829 0 .263.174.566.678.473 3.922-1.29 6.75-4.038 6.75-9.295 0-5.385-4.365-9.75-9.75-9.75z" />
                    </svg>
                  </a>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="hidden md:flex justify-center items-center gap-6 mt-6">
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
      </div>
    </section>
  );
}
