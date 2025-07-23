'use client';

import TrustedBy from '../TrustedBy';

export default function Herosection()
{
    return(<section>
    <div className='bg-black py-10 dark:bg-gray-800 text-white'>
        <div className='flex items-center pt-20'>
            <div className='container mx-auto h-full grid lg:grid-cols-3 md:grid-cols-2 '>  
                <div className='p-4 flex flex-col justify-center 2xl:gap-20 lg:gap-10 gap-5 text-center md:text-start'>
                    <h1 className='flex xl:text-4xl 2xl:text-5xl text-3xl 2xl:gap-6 gap-3 2xl:text-5xl font-bold flex-col'>
                        <span>Hire the world’s</span>
                        <span className='text-[#3AA0FF]'>top remote talent</span>
                        <span>without the search</span>
                    </h1>
                    <p>Lorem ipsum dolor amet consectetur adipis elitsed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                    <div className='text-center'>  
                        <button className='w-full bg-green-600 lg:p-3 p-2 xl:text-3xl font-bold rounded' aria-label='Hire a talent'>Hire a talent</button>
                        <div className='mt-2'>👆🏼 $0 until you hire</div>
                    </div>
                </div>
                <div className='p-4 lg:col-span-2 flex items-center w-full h-full'>
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