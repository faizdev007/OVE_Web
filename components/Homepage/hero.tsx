'use client';

import useInView from "../useInView";
import TrustedBy from "./trustedby";

export default function Herosection()
{
    const { elementRef, isVisible } = useInView();
    return(<section className="bg-black dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
    <div ref={elementRef}>
        <div className='flex items-center xl:py-18'>
            <div className={`w-full mx-auto h-full md:grid grid-cols-2 items-center`}>  
                <div className='p-4 flex flex-col h-full md:justify-between justify-center gap-3 text-center md:text-start'>
                    <div className="flex flex-col gap-6 2xl:gap-18">
                        <h1 className='flex 2xl:gap-8 xl:gap-2 gap-1 xl:text-5xl lg:text-4xl text-2xl font-bold flex-col'>
                            <span>Hire the world’s</span>
                            <span className='text-[#3AA0FF]'>top remote talent</span>
                            <span>without the search</span>
                        </h1>
                        <p className='text-sm lg:text-lg xl:text-xl 2xl:text-2xl'>Lorem ipsum dolor amet consectetur adipis elitsed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                    </div>
                    <div className='text-center max-w-auto'>  
                        <button className='w-full bg-green-600 lg:p-3 p-2 2xl:text-3xl font-bold rounded cursor-pointer' aria-label='Hire a talent'>Hire a talent</button>
                        <div className='mt-2'>👆🏼 $0 until you Hire</div>
                    </div>
                </div>
                <div className='p-4 flex items-center h-full'>
                    <div style={{ position: 'relative', width:'100%', aspectRatio: '16 / 9' }}>
                        <iframe 
                                loading="lazy" title="Gumlet video player"
                                src="https://play.gumlet.io/embed/682435ae1eaff0ba85e6bd2c?background=false&autoplay=true&loop=true&disableControls=false"
                                style={{border:'3px solid #c8c8c8', borderRadius:'4px', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            <TrustedBy/>
        </div>
    </div>
    </section>);
}