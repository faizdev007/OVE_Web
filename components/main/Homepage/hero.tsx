'use client';

import useInView from "../../useInView";
import TrustedBy from "./trustedby";
import '@/app/(main)/hire/custome.css';
import { motion } from "framer-motion";

export default function Herosection({herodata}: any)
{
    const heroelement = herodata?.hero ?? {};
    const hireslider = herodata?.trustedByScroll?.logos ?? {};

    const { elementRef, isVisible } = useInView();
    
    return(<section className=" text-white">
    <div ref={elementRef} className="relative h-screen px-4 sm:px-6 lg:px-8 mx-auto">
        <div className='flex h-full items-center'>
            <div className={`w-full mx-auto max-w-7xl items-center`}>  
                <div className='p-4 flex flex-col h-full md:justify-between justify-center gap-8 text-center'>
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src={'/assets/videos/herobg.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                    <div className="flex flex-col gap-6 2xl:gap-18">
                        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='page-content text-white'>
                            <span dangerouslySetInnerHTML={{__html:heroelement?.title ?? "Need Developers On Demand? We’re Your Augmentation Partner"}}></span>
                        </motion.h1>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.5, duration: 0.9 }} className='text-sm lg:text-md xl:text-xl 2xl:text-2xl'><span dangerouslySetInnerHTML={{__html:heroelement?.description ?? 'Reduce your time to hire from months to days. Our remote staff augmentation connects you with pre-vetted developers who onboard quickly and start delivering real value from day one.'}}/></motion.div>
                    </div>
                    <div className='text-center max-w-xl mx-auto w-full'>
                        <div className="flex gap-3 md:flex-row flex-col items-start">
                            {/* Primary CTA */}
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.9, duration: 0.9 }} className="w-full">
                                <a
                                href="/contact-us"
                                aria-label="Get Started"
                                className="w-full flex justify-center items-center text-center bg-btnblue text-white 
                                            hover:bg-btnblue/90 transition-all duration-200 
                                            lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded-lg shadow-md 
                                            hover:shadow-lg"
                                >
                                {heroelement?.buttons?.action1?.title ?? '🚀 Get Started'}
                                </a>
                                <div className="mt-2 text-sm text-gray-300">👆🏼 $0 until you Hire</div>
                            </motion.div>

                            {/* OR Divider */}
                            <span className="font-bold hidden w-full md:w-auto md:text-2xl text-lg mt-1 md:mt-[1.3%] text-center text-gray-500">
                                OR
                            </span>

                            {/* Secondary CTA */}
                            <a
                                href="/contact-us"
                                aria-label="Book a 15-min Call"
                                className="w-full hidden justify-center items-center text-center border-2 border-oveblue text-oveblue 
                                        hover:bg-oveblue hover:text-white transition-all duration-200
                                        lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded-lg shadow-sm hover:shadow-md"
                            >
                                {heroelement?.buttons?.action2?.title ?? '📅 Book a Call'}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-4 hidden items-start h-full'>
                    <div style={{ position: 'relative', width:'100%', aspectRatio: '16 / 9' }}>
                        <iframe 
                            loading="lazy" title="Gumlet video player"
                            src="https://play.gumlet.io/embed/68b98b969bce03c1972d9e42?background=false&autoplay=true&loop=true&disableControls=false"
                            style={{border:'3px solid #c8c8c8', borderRadius:'4px', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=''>
        <TrustedBy trustedbyscroll={hireslider}/>
    </div>
    </section>);
}