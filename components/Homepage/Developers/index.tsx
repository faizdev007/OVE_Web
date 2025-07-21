'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function DevelopersSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const developers = [
    { name: 'Dev 1', image: '/dev1.png' },
    { name: 'Dev 2', image: '/dev2.png' },
    { name: 'Dev 3', image: '/dev3.png' },
    { name: 'Dev 4', image: '/dev4.png' },
    { name: 'Dev 5', image: '/dev5.png' },
  ];

  return (
    <section className="bg-white dark:bg-gray-700 text-white py-12">
      <div className="container py-10 bg-black p-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Developers</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
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
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {developers.map((dev, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105 duration-300">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{dev.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button ref={prevRef}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
            </svg>
          </div>
          <button ref={nextRef}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
