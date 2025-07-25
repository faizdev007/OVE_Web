'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const logos = [
  '/assets/companies/company1.webp',
  '/assets/companies/company2.webp',
  '/assets/companies/company3.webp',
  '/assets/companies/company5.webp',
  '/assets/companies/company6.webp',
  '/assets/companies/company7.webp',
  '/assets/companies/company8.webp',
  '/assets/companies/company9.webp',
  '/assets/companies/company10.webp',
  '/assets/companies/company11.webp',
  '/assets/companies/company12.webp',
  '/assets/companies/company14.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
  // '/assets/trustedby/uber.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
  // '/assets/trustedby/uber.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
  // '/assets/trustedby/uber.webp',
  // '/assets/trustedby/spotify.webp',
  // '/assets/trustedby/disney.webp',
];

export default function TrustedBy() {
  return (
    <section className="py-10 text-center">
      <div className="mx-auto flex items-center overflow-hidden">
        {/* Left Static Text */}
        <div className="min-w-[150px] text-white text-sm border-r border-gray-700 dark:border-black">
          <h3 className='text-xl font-bold'>Trusted by</h3>
          <p className="text-xs text-gray-400">Top companies</p>
        </div>

        {/* Marquee Section */}
        <div className="flex-1 px-4 overflow-hidden relative">
          <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1000 }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[4/1] flex justify-center items-center">
                <img
                  src={src}
                  alt="logo"
                  width={150}
                  height={150}
                  className="object-contain px-2 opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}
