'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import FaqSection from "@/components/Homepage/faq";

export default function AboutPage()
{
    const logos = [
        '/assets/companies/company1.webp',
        '/assets/companies/company2.webp',
        '/assets/companies/company3.webp',
        '/assets/companies/company5.webp',
        '/assets/companies/company6.webp',
        '/assets/companies/company7.webp',
        '/assets/companies/company9.webp',
        '/assets/companies/company10.webp',
        '/assets/companies/company12.webp',
        '/assets/companies/company14.webp',
    ];

    return(
        <>
            <section className="bg-black p-12 justify-between relative flex md:flex-row flex-col dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative md:w-[30%]">
                    <div className="md:p-10 md:absolute p-4 -end-40 md:top-10 md:rounded-md rounded-t bg-stone-800">
                        <h1 className="xl:text-4xl md:text-2xl text-xl md:mb-10 mb-4">Heading Goes Here</h1>
                        <p className="lg:text-lg text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elitop sed do eiusmod tempor incididunt ut labore et dolore magna aliqua anim veniam quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
                        <p className="lg:text-lg text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elitop sed do eiusmod tempor incididunt ut labore et dolore magna aliqua anim veniam quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
                    </div>
                </div>
                <div className="md:w-[70%] md:rounded-md rounded-b-md">
                    <Image src={'/assets/about/img1.webp'} alt="aboutimg1" className="object-cover w-full" height={500} width={1000}/>
                </div>
            </section>
            <section className="bg-black p-12 relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Heading Goes Here</h2>
                            <p className="md:text-lg text-xs">Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl md:text-xl text-lg">Heading Goes Here</h3>
                            <ul className="md:text-lg text-xs">
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center aspect-[1/1]">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={200} className="object-cover"/>
                    </div>
                </div>
            </section>
            <section className="bg-black p-12 relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="md:grid flex flex-col items-center md:grid-cols-2 gap-4 mb-4">
                    <div className="flex justify-center items-center aspect-[1/1]">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={200} className="object-cover"/>
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Heading Goes Here</h2>
                            <p className="md:text-lg text-xs">Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl md:text-xl text-lg">Heading Goes Here</h3>
                            <ul className="md:text-lg text-xs">
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black p-12 relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Heading Goes Here</h2>
                            <p className="md:text-lg text-xs">Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl md:text-xl text-lg">Heading Goes Here</h3>
                            <ul className="md:text-lg text-xs">
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center aspect-[1/1]">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={200} className="object-cover"/>
                    </div>
                </div>
            </section>
            <section className="p-12 dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-blue-700 mb-10 text-center font-bold text-4xl">
                    Here are a few words shared by our Employees
                </h2>

                <div className="w-full">
                    <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="w-full"
                    >
                    {logos.map((src, index) => (
                        <SwiperSlide key={index} className="h-full">
                        <div className="flex flex-col justify-between p-4 h-[300px] w-full bg-stone-700 rounded-md shadow">
                            <p className="text-sm mb-4">
                            Lorem ipsum amet consectetur adipiscing elit eiusmod tempor incididunt ut labore.
                            </p>
                            <div className="flex gap-2 items-center">
                            <Image
                                src="/assets/developer/dev1.webp"
                                alt="dev"
                                height={40}
                                width={40}
                                className="object-cover h-10 w-10 rounded-full"
                            />
                            <div>
                                <h4 className="font-bold text-sm">Jennifer Deoche</h4>
                                <span className="text-xs">Project Manager</span>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>
            <FaqSection/>
        </>
    );
}