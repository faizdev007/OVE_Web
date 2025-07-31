'use client';

import Image from "next/image";

export default function About()
{
    return(
        <>
            <section className="bg-black p-12 justify-between relative md:flex dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative md:w-[30%]">
                    <div className="md:p-10 absolute p-4 xl:-end-40 -end-20 xl:top-10 rounded-md bg-stone-800">
                        <h1 className="xl:text-4xl md:text-2xl mb-10">Heading Goes Here</h1>
                        <p className="lg:text-lg text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elitop sed do eiusmod tempor incididunt ut labore et dolore magna aliqua anim veniam quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
                    </div>
                </div>
                <div className="md:w-[70%]">
                    <Image src={'/assets/about/img1.webp'} alt="aboutimg1" className="object-cover w-full" height={600} width={1000}/>
                </div>
            </section>
            <section className="bg-black p-12 relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl text-3xl font-bold mb-4">Heading Goes Here</h2>
                            <p>Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl text-xl">Heading Goes Here</h3>
                            <ul>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={500} className="object-cover w-full h-full"/>
                    </div>
                </div>
                <div className="md:grid flex flex-col md:grid-cols-2 gap-4 mb-4">
                    <div className="flex justify-center items-center">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={500} className="object-cover w-full h-full"/>
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl text-3xl font-bold mb-4">Heading Goes Here</h2>
                            <p>Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl text-xl">Heading Goes Here</h3>
                            <ul>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="mb-10">
                            <h2 className="xl:text-5xl text-3xl font-bold mb-4">Heading Goes Here</h2>
                            <p>Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <div  className="flex flex-col gap-6">
                            <h3 className="font-bold xl:text-2xl text-xl">Heading Goes Here</h3>
                            <ul>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                                <li className="list-disc list-inside">Lorem ipsum dolor sit amete consectetur adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={'/assets/about/image2.webp'} alt="slide" width={500} height={500} className="object-cover w-full h-full"/>
                    </div>
                </div>
            </section>
            <section className="p-12 relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">

            </section>
        </>
    );
}