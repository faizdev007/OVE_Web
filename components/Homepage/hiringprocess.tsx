'use client';

import useInView from "@/components/useInView";

export default function HiringProcess()
{
    const { elementRef, isVisible } = useInView();
    return(
    <section className='bg-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto dark:bg-gray-700'>
        <div className={`animate-fade-left animate-ease-in animate-alternate animate-fill-both flex items-center`}>
            <div className='mx-auto w-full h-full grid md:grid-cols-2'>  
                <div className='mb-6 flex flex-col justify-center 2xl:gap-15 lg:gap-10 gap-5 text-center md:text-start'>
                    <h1 className='flex xl:text-4xl 2xl:text-5xl text-3xl 2xl:gap-6 gap-3 2xl:text-5xl font-bold flex-col'>
                        <span>Our Comprehensive</span>
                        <span>Hiring Process</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliton  eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim venia nostrud exercitation ullamco laboris nisiut aliquip commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    <div className='max-w-auto'>  
                        <button className='w-1/2 bg-green-600 text-white lg:p-3 p-2 xl:text-3xl font-bold rounded'>Hire a talent</button>
                    </div>
                </div>
                <div className="aspect-[1/1] flex items-center justify-center">
                    <img loading="lazy" src={'/assets/hirprocess.webp'} className="object-cover md:h-1/2 md:w-1/2" alt="steps"/>
                </div>
                <div className='p-4 hidden aspect-[1/1] w-2/3 h-full grid grid-cols-2 gap-8'>
                    <div className="">

                    </div>
                    <div className="bg-[#77BEF0] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white relative overflow-hidden dark:bg-gray-700 border border-gray-500 rounded-lg object-container absolute w-full h-full top-3 start-3'>
                            <div className='flex flex-col gap-2 justify-between h-full w-full p-2'>
                                <h4 className='font-bold md:text-lg text-sm'>Heading Goes Here</h4>
                                <p className='md:text-sm text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                <img src={'#'} alt="img"/>
                                <div className="relative w-full h-16">
                                    <div className='absolute -bottom-18 -end-18 flex flex-col text-center bg-[#77BEF0] rounded-full w-32 h-32 items-center justify-center'>
                                        <div className='absolute top-5 start-6 text-sm flex flex-col items-center'>
                                            <span>Step</span>
                                            <strong className='font-bold'>01</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#FFCB61] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white relative overflow-hidden dark:bg-gray-700 border border-gray-500 rounded-lg object-container absolute w-full h-full end-3 top-3'>
                            <div className='flex flex-col gap-2 justify-between h-full w-full p-2'>
                                <h4 className='font-bold md:text-lg text-sm'>Heading Goes Here</h4>
                                <p className='md:text-sm text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                <img src={'#'} alt="img"/>
                                <div className="relative w-full h-16">
                                    <div className='absolute -bottom-18 -start-18 flex flex-col text-center bg-[#FFCB61] rounded-full w-32 h-32 items-center justify-center'>
                                        <div className='absolute top-5 end-6 text-sm flex flex-col items-center'>
                                            <span>Step</span>
                                            <strong className='font-bold'>02</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF894F] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white relative overflow-hidden dark:bg-gray-700 border border-gray-500 rounded-lg object-container absolute w-full h-full start-3 bottom-3'>
                            <div className='flex flex-col gap-2 justify-between h-full w-full p-2 rounded-lg'>
                                <div className="relative w-full h-16">
                                    <div className='absolute -top-18 -end-18 flex flex-col text-center bg-[#FF894F] rounded-full w-32 h-32 items-center justify-center'>
                                        <div className='absolute bottom-5 start-6 text-sm flex flex-col'>
                                            <span>Step</span>
                                            <strong className='font-bold'>04</strong>
                                        </div>
                                    </div>
                                </div>
                                <img src={'#'} alt="img"/>
                                <h4 className='font-bold md:text-lg text-sm'>Heading Goes Here</h4>
                                <p className='md:text-sm text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#EA5B6F] rounded-lg aspect-[1/1] relative">
                        <div className='relative overflow-hidden bg-white dark:bg-gray-700 border border-gray-500 rounded-lg object-container absolute w-full h-full end-3 bottom-3'>
                            <div className='flex flex-col gap-2 justify-between h-full w-full p-2'>
                                <div className="relative w-full h-16">
                                    <div className='absolute -top-18 -start-18 flex flex-col bg-[#EA5B6F] rounded-full w-32 h-32'>
                                        <div className='absolute bottom-5 end-6 text-sm flex flex-col items-center'>
                                            <span>Step</span>
                                            <strong className='font-bold'>03</strong>
                                        </div>
                                    </div>
                                </div>
                                <img src={'#'} alt="img"/>
                                <h4 className='font-bold md:text-lg text-sm'>Heading Goes Here</h4>
                                <p className='md:text-sm text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}