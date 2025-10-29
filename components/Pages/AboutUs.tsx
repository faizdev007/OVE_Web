'use client';

import Image from "next/image";
import FaqSection from "@/components/main/Homepage/faq";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AboutPageComponent({data}: any)
{
    const [loading, setLoading] = useState(true);
    
    const scrollRef = useRef<HTMLDivElement>(null);

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

    const staticteam = [
        {etName: 'Dharmesh Shah', etLinkedin:'https://www.linkedin.com/in/otsdharmeshshah/', etDesignation: 'Joint Managing Director', etImage: '/assets/ove/ds.jpg'},
        {etName: 'Shantanu Dublish', etLinkedin:'https://www.linkedin.com/in/shantanu-dublish-55819233/', etDesignation: 'Joint Managing Director', etImage: '/assets/ove/sd.jpg'},
        {etName: 'Kartik Sharma', etLinkedin:'https://www.linkedin.com/in/kartiksharmaiit/', etDesignation: 'Non-Executive Director - IT', etImage: '/assets/ove/cto.png'},
        {etName: 'Ragbhendra Kumar Jha', etLinkedin:'https://www.linkedin.com/in/ca-raghbendra-kumar-jha-013741127/', etDesignation: 'CFO', etImage: '/assets/ove/cfo.webp'},
        {etName: 'Ronnie R Arora', etLinkedin:'https://www.linkedin.com/in/ronnie-rahul-arora-ba12b26/', etDesignation: 'VP-Growth', etImage: '/assets/ove/ronnie.jpg'},
        {etName: 'Samta Sharma', etLinkedin:'https://www.linkedin.com/in/samtasharma/', etDesignation: 'VP-Technology', etImage: '/assets/ove/samta.webp'},
    ];

    const team = data?.executiveTeam && data?.executiveTeam.length > 0 ? data?.executiveTeam : staticteam;

    useEffect(() => {
        if(logos.length > 0 && team.length > 0) {
            setLoading(false);
            return;
        }

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollInterval: NodeJS.Timeout | null = null;

        const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            if (scrollContainer) {
            // Auto-scroll down slowly
            scrollContainer.scrollTop += 1;
            // Reset scroll when it reaches the bottom
            if (
                scrollContainer.scrollTop + scrollContainer.clientHeight >=
                scrollContainer.scrollHeight
            ) {
                scrollContainer.scrollTop = 0;
            }
            }
        }, 30); // adjust speed (lower = faster)
        };

        startAutoScroll();

        // cleanup
        return () => {
            if (scrollInterval) clearInterval(scrollInterval);
        };
    },[]);
    

    if (loading) return (
        <>
            <section className="bg-black p-12 pt-18 justify-between relative flex lg:flex-row flex-col dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Left side */}
                <div className="relative block lg:w-[30%]">
                    <div className="md:p-10 w-full h-1/2 lg:absolute p-4 -end-40 md:top-10 md:rounded-md rounded-t bg-stone-800">
                        <div className="h-8 bg-gray-700 rounded w-3/4 mb-6 animate-pulse"></div>
                        <div className="space-y-3 max-h-48 overflow-y-hidden">
                            <div className="h-3 bg-gray-700 rounded w-full animate-pulse"></div>
                            <div className="h-3 bg-gray-700 rounded w-5/6 animate-pulse"></div>
                            <div className="h-3 bg-gray-700 rounded w-4/6 animate-pulse"></div>
                            <div className="h-3 bg-gray-700 rounded w-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="lg:w-[70%] md:rounded-md rounded-b-md">
                    <div className="w-full h-[600px] bg-gray-700 rounded"></div>
                </div>
            </section>
            <div className="bg-black py-12">
                <div className="container mx-auto">
                    {/* Repeatable section */}
                    {[...Array(3)].map((_, idx) => (
                    <section
                        key={idx}
                        className="relative py-4 md:flex md:flex-rows flex-col-reverse text-white px-4 sm:px-6 lg:px-8 mx-auto"
                    >
                        <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4 animate-pulse">
                        {/* Left / Right alternating */}
                        {idx % 2 === 0 ? (
                            <>
                            {/* Text Placeholder */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-10 space-y-4">
                                <div className="h-8 w-3/4 bg-gray-700 rounded"></div>
                                <div className="h-4 w-full bg-gray-600 rounded"></div>
                                <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                {[...Array(4)].map((__, i) => (
                                    <div key={i} className="h-4 w-2/3 bg-gray-700 rounded"></div>
                                ))}
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex aspect-[2/1] w-full justify-end items-center">
                                <div className="w-full h-full bg-gray-800 rounded-md shadow-xl"></div>
                            </div>
                            </>
                        ) : (
                            <>
                            {/* Image Placeholder */}
                            <div className="flex aspect-[2/1] w-full justify-start items-center">
                                <div className="w-full h-full bg-gray-800 rounded-md shadow-xl"></div>
                            </div>

                            {/* Text Placeholder */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-10 space-y-4">
                                <div className="h-8 w-3/4 bg-gray-700 rounded"></div>
                                <div className="h-4 w-full bg-gray-600 rounded"></div>
                                <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                {[...Array(3)].map((__, i) => (
                                    <div key={i} className="h-4 w-2/3 bg-gray-700 rounded"></div>
                                ))}
                                </div>
                            </div>
                            </>
                        )}
                        </div>
                    </section>
                    ))}
                </div>
                </div>
        </> 
    );

    return(
        <>
            <section className="bg-black p-12 pt-18 justify-between relative flex lg:flex-row flex-col dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative lg:w-[30%]">
                    <div className="max-h-full overflow-auto md:py-10 p-4 lg:absolute page-content -end-40 md:top-10 md:rounded-md rounded-t bg-stone-800">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                            {
                                data?.hero?.description ? 
                                <span dangerouslySetInnerHTML={{__html:data?.hero?.description}}/>
                                : <>
                                    <h1 className="xl:text-4xl md:text-2xl text-xl md:mb-10 mb-4">Empowering Global Businesses with Elite Tech Talent</h1>
                                    <div className="md:max-h-48 2xl:max-h-full overflow-y-auto">
                                        <p className="lg:text-lg text-xs mb-2">At Optimal Virtual Employee, we believe great technology begins with great people. Since our founding in 2008, we’ve been on a mission to bridge the talent gap for startups, growing businesses, and enterprise brands across the globe by offering flexible, reliable, and scalable staff augmentation solutions.</p>
                                        <p className="lg:text-lg text-xs mb-2">Whether you're a founder building your first MVP or an enterprise scaling your development team, we help you find highly skilled full-time developers who are committed to your success—just like in-house team members.</p>
                                        <p className="lg:text-lg text-xs mb-2">We don’t just fill positions. We help you build the right team, faster—with our unique combination of human vetting and AI-assisted shortlisting to match you with professionals who deliver from day one.</p>
                                    </div>
                                </>
                            }
                        </motion.div>
                    </div>
                </div>
                <div className="lg:w-[70%] md:rounded-md rounded-b-md">
                    <img
                    src={data?.hero?.featuredImage?.sourceUrl ?? "/assets/about/1.jpg"}
                    alt={data?.hero?.featuredImage?.title ?? "aboutimg1"}
                    width={1000}
                    height={500}
                    fetchPriority="high" // 👈 improves LCP discovery
                    decoding="async"
                    className="object-cover w-full"
                    />
                </div>
            </section>
            <div className="py-12">
                <div className="container mx-auto">
                    {data?.howWeWork ?
                        data?.howWeWork.map((value:any, idx:number) => (
                        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} key={idx} className="relative py-4 md:flex md:flex-rows flex-col-reverse px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                            {/* Left / Right alternating */}
                            {idx % 2 === 0 ? (
                                <>
                                    {/* Text Placeholder */}
                                    <div className="flex flex-col justify-center">
                                        {value?.hwwDescription ?
                                            <div className="page-content" dangerouslySetInnerHTML={{__html:value?.hwwDescription}}/>
                                            :
                                            <>
                                                <div className="mb-10">
                                                    <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Hiring Shouldn’t Slow You Down</h2>
                                                    <p className="md:text-lg text-xs">We simplify the hiring process so you can focus on building. With our fast onboarding and deep vetting, we help you hire confident, capable developers—without the wait.</p>
                                                </div>
                                                <div  className="flex flex-col gap-6">
                                                    <ul className="md:text-lg text-xs">
                                                        <li className="list-disc list-inside">Full-time, not freelance</li>
                                                        <li className="list-disc list-inside">Vetted through AI + human screening</li>
                                                        <li className="list-disc list-inside">Time zone and workflow alignment</li>
                                                        <li className="list-disc list-inside">No lock-in contracts</li>
                                                    </ul>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="flex aspect-[2/1] w-full justify-end items-center">
                                        <img src={value?.hwwImage?.node?.sourceUrl ?? '/assets/about/4.webp'} alt={value?.hwwImage?.node?.title ?? "slide1"} width={500} height={200} className="w-auto h-auto object-cover rounded-md shadow-xl drop-shadow shadow-gray-900"/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center aspect-[2/1] w-full md:justify-start items-center">
                                        <img src={value?.hwwImage?.node?.sourceUrl ?? '/assets/about/4.webp'} alt={value?.hwwImage?.node?.title ?? "slide1"} width={500} height={200} className="w-auto h-auto object-cover rounded-md shadow-xl drop-shadow shadow-gray-900"/>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {value?.hwwDescription ?
                                            <div className="page-content" dangerouslySetInnerHTML={{__html:value?.hwwDescription}}/>
                                            :
                                            <>
                                                <div className="mb-10">
                                                    <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">We Work Like an Extension of Your Team</h2>
                                                    <p className="md:text-lg text-xs">We don’t just support your business—we become part of it. Our developers collaborate with your internal team, take ownership of delivery, and commit long-term.</p>
                                                </div>
                                                <div  className="flex flex-col gap-6">
                                                    <ul className="md:text-lg text-xs">
                                                        <li className="list-disc list-inside">Hands-on support from day one</li>
                                                        <li className="list-disc list-inside">Shared tools, tasks, and timelines</li>
                                                        <li className="list-disc list-inside">Flexible scaling—up or down</li>
                                                    </ul>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </>
                            )}
                            </div>
                        </motion.section>
                        )
                    )
                    :
                    <>
                        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative py-4 md:flex md:flex-rows flex-col-reverse text-white px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col justify-center">
                                    <div className="mb-10">
                                        <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Hiring Shouldn’t Slow You Down</h2>
                                        <p className="md:text-lg text-xs">We simplify the hiring process so you can focus on building. With our fast onboarding and deep vetting, we help you hire confident, capable developers—without the wait.</p>
                                    </div>
                                    <div  className="flex flex-col gap-6">
                                        <ul className="md:text-lg text-xs">
                                            <li className="list-disc list-inside">Full-time, not freelance</li>
                                            <li className="list-disc list-inside">Vetted through AI + human screening</li>
                                            <li className="list-disc list-inside">Time zone and workflow alignment</li>
                                            <li className="list-disc list-inside">No lock-in contracts</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex aspect-[2/1] w-full justify-end items-center">
                                    <Image src={'/assets/about/4.webp'} alt="slide1" width={500} height={200} className="w-auto h-auto object-cover rounded-md shadow-xl drop-shadow shadow-gray-900"/>
                                </div>
                            </div>
                        </motion.section>
                        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative py-4 md:flex md:flex-rows flex-col-reverse text-white px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="md:grid flex flex-col items-center md:grid-cols-2 gap-4 mb-4">
                                <div className="flex justify-center aspect-[2/1] w-full md:justify-start items-center">
                                    <Image src={'/assets/about/2.webp'} alt="slide2" width={500} height={200} className="w-auto h-auto object-cover rounded-md shadow-xl drop-shadow shadow-gray-900"/>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="mb-10">
                                        <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">We Work Like an Extension of Your Team</h2>
                                        <p className="md:text-lg text-xs">We don’t just support your business—we become part of it. Our developers collaborate with your internal team, take ownership of delivery, and commit long-term.</p>
                                    </div>
                                    <div  className="flex flex-col gap-6">
                                        <ul className="md:text-lg text-xs">
                                            <li className="list-disc list-inside">Hands-on support from day one</li>
                                            <li className="list-disc list-inside">Shared tools, tasks, and timelines</li>
                                            <li className="list-disc list-inside">Flexible scaling—up or down</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative py-4 md:flex md:flex-rows flex-col-reverse text-white px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col justify-center">
                                    <div className="mb-10">
                                        <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">A Culture That Powers Results</h2>
                                        <p className="md:text-lg text-xs">Great developers thrive in great environments. That’s why we’ve built a workplace that values learning, stability, and long-term commitment.</p>
                                    </div>
                                    <div  className="flex flex-col gap-6">
                                        <ul className="md:text-lg text-xs">
                                            <li className="list-disc list-inside">Strong employee retention</li>
                                            <li className="list-disc list-inside">Regular skill upgrades</li>
                                            <li className="list-disc list-inside">Focus on team happiness</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex aspect-[2/1] w-full justify-end items-center">
                                    <Image src={'/assets/about/3.webp'} alt="slide3" width={500} height={333} className="w-auto h-auto object-cover rounded-md shadow-xl drop-shadow shadow-gray-900"/>
                                </div>
                            </div>
                        </motion.section>
                    </>
                }
                </div>
            </div>
            <div className="relative bglbLG py-12">
                <div className='bg-black hidden'>
                    <Image src={'/assets/darkbrown.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative px-4 pb-12 sm:px-6 lg:px-8 mx-auto">
                    <h2 className="xl:text-6xl md:text-4xl text-3xl headingtext font-bold text-center mb-8">Our Executive Team</h2>
                    <div className="container mx-auto grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {team.map((member:any, index:number) => (
                            <div key={index} className="flex flex-col text-white w-full p-6 bg-stone-800 rounded-lg">
                                <div className="mb-4 flex gap-2">
                                    <div className="relative">
                                        <div className="aspect-[1/1] flex w-20 h-20 rounded-full overflow-hidden ">
                                            <img src={member.etImage} alt={member.etName} width={300} height={300} className="w-auto h-auto object-container"/>
                                        </div>
                                        <a href={member.etLinkedin} aria-label="LinkedIn" className="absolute -bottom-3 -left-3 p-1 overflow-hidden rounded-full">
                                            <Image src={'/assets/sociallinks/linkedin2.png'} width={30} height={30} className="object-cover" alt="LinkedIn"/>
                                        </a>
                                    </div>
                                    <div className="text-start flex flex-col">
                                        <h3 className="xl:text-lg text-md font-bold">{member.etName}</h3>
                                        <p className="text-sm text-gray-300">{member.etDesignation}</p>
                                    </div>
                                </div>
                                <p></p>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </>
    );
}