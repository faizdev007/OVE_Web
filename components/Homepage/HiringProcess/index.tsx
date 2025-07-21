'use client';

import { useEffect, useState } from 'react';
import TrustedBy from '../TrustedBy';

export default function HiringProcess()
{
    return(<>
    <div className='bg-white dark:bg-gray-700 text-black'>
        <div className='flex items-center pt-20'>
            <div className='container mx-auto h-full grid lg:grid-cols-3 md:grid-cols-2 '>  
                <div className='p-4 flex flex-col lg:col-span-2 justify-center 2xl:gap-20 lg:gap-10 gap-5 text-center md:text-start'>
                    <h1 className='flex xl:text-4xl 2xl:text-5xl text-3xl 2xl:gap-6 gap-3 2xl:text-5xl font-bold flex-col'>
                        <span>Our Comprehensive</span>
                        <span>Hiring Process</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliton  eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim venia nostrud exercitation ullamco laboris nisiut aliquip commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    <div className='max-w-auto'>  
                        <button className='w-1/2 bg-green-600 lg:p-3 p-2 xl:text-3xl font-bold rounded'>Hire a talent</button>
                    </div>
                </div>
                <div className='p-4 grid grid-cols-2 space-2 flex items-center rounded-md gap-8 w-full h-full'>
                    <div className="bg-[#77BEF0] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white border border-gray-500 rounded-lg object-container absolute w-full h-full top-3 start-3'>
                            <div className='relative h-full w-full overflow-hidden p-2'>
                                <h4 className='font-bold text-lg'>Heading Goes Here</h4>
                                <p className='text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                <img src={'#'} alt="img"/>
                                <div className="relative w-full h-16 overflow-hidden">
                                    <div className='absolute -bottom-10 -end-10 flex flex-col text-center bg-[#77BEF0] rounded-full w-32 h-32 items-center justify-center'>
                                        <span>Step</span>
                                        <strong>1</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#FFCB61] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white border border-gray-500 rounded-lg object-container absolute w-full h-full end-3 top-3'>
                            <div className='relative h-full w-full overflow-hidden p-2'>
                                <h4 className='font-bold text-lg'>Heading Goes Here</h4>
                                <p className='text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                <img src={'#'} alt="img"/>
                                <div className="relative w-full h-16 overflow-hidden">
                                    <div className='absolute -bottom-10 -start-10 flex flex-col text-center bg-[#FFCB61] rounded-full w-32 h-32 items-center justify-center'>
                                        <span>Step</span>
                                        <strong>2</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF894F] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white rounded-lg object-container absolute w-full h-full start-3 bottom-3'>
                            <div className='relative h-full w-full overflow-hidden p-2 rounded-lg'>
                                <div className="relative w-full h-16 overflow-hidden">
                                    <div className='absolute -top-10 -end-10 flex flex-col text-center bg-[#FF894F] rounded-full w-32 h-32 items-center justify-center'>
                                        <span>Step</span>
                                        <strong>4</strong>
                                    </div>
                                </div>
                                <img src={'#'} alt="img"/>
                                <h4 className='font-bold text-lg'>Heading Goes Here</h4>
                                <p className='text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#EA5B6F] rounded-lg aspect-[1/1] relative">
                        <div className='bg-white border border-gray-500 rounded-lg object-container absolute w-full h-full end-3 bottom-3'>
                            <div className='relative h-full w-full overflow-hidden p-2'>
                                <div className="relative w-full h-16 overflow-hidden">
                                    <div className='absolute -top-10 -start-10 flex flex-col text-center bg-[#EA5B6F] rounded-full w-32 h-32 items-center justify-center'>
                                        <span>Step</span>
                                        <strong>3</strong>
                                    </div>
                                </div>
                                <img src={'#'} alt="img"/>
                                <h4 className='font-bold text-lg'>Heading Goes Here</h4>
                                <p className='text-xs'>Lorem ipsum door amet consectetur adipiscing sededo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}