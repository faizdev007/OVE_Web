'use client';

import Image from "next/image";
import { useState } from 'react';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hire()
{
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section:any) => {
        setActiveSection(activeSection === section ? null : section);
    }

    const listinfos = [
            {
            "title": "Data Science",
            "description": "Data science with Python includes data analysis, data processing, machine learning, and more."
            },
            {
            "title": "Custom Python Web Application Development",
            "description": "Building scalable and high-performance web apps using Python web frameworks such as Django or Flask."
            },
            {
            "title": "Enterprise Python Applications",
            "description": "Development of enterprise-level applications for business processes and workflow automation."
            },
            {
            "title": "Python Support and Maintenance",
            "description": "Ongoing support, optimization, and maintenance for existing Python applications."
            },
            {
            "title": "Machine Learning with Python",
            "description": "Building machine learning models and deploying them in production using Python."
            },
            {
            "title": "Python Migration & Integration",
            "description": "Migrating applications to Python and integrating with other systems and platforms."
            }
        ];
    return(
        <>
            <section className="blackgradiant pt-16 md:flex dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex w-full flex-col gap-8 items-center md:items-start py-6">
                    <h1 className="text-blue-700 xl:text-7xl text-3xl font-bold">Hire Full-Stack Developer</h1>
                    <p className="md:text-xl text-sm">Develop fast, dynamic user interfaces with vetted React developers. Scale your front-end team today. Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                    <button className="bg-blue-600 p-2 rounded w-max xl:text-3xl md:text-xl px-6 font-bold cursor-pointer">Hire Full-Stack Developer</button>
                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex relative justify-center">
                    <div className="absolute z-20 bottom-0">
                        <Image src={'/assets/hire/Pbg.webp'} alt="PBG" width={500} height={500} className=""/>
                    </div>
                    <div className="aspect-[1/1] bottom-0 absolute z-30">
                        <Image src={'/assets/hire/anjali.png'} alt="developer" width={500} height={500} className=""/>
                    </div>
                    <div className="absolute text-center bottom-0 z-40 bg-gray-800 p-4 rounded-t-xl shadow-sm drop-shadow">
                        <h3 className="md:text-3xl font-bold">AnJali</h3>
                        <span>Senior Full-Stack Developer</span>
                    </div>
                </div>
            </section>
            <section className="py-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-blue-700 mb-18 capitalize text-center font-bold text-4xl">How to Hire Python developer through OVE</h2>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 mb-6">
                    <div className="flex flex-col items-center gap-3">
                        <Image alt="imge" src={'/assets/hire/step1.webp'} width={300} height={300}/>
                        <h3 className="md:text-2xl text-center text-xl font-bold">Place a free Request</h3>
                        <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image alt="imge" src={'/assets/hire/step2.webp'} width={300} height={300}/>
                        <h3 className="md:text-2xl text-center text-xl font-bold">Tell us about your needs</h3>
                        <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image alt="imge" src={'/assets/hire/step3.webp'} width={300} height={300}/>
                        <h3 className="md:text-2xl text-center text-xl font-bold">Interview the best</h3>
                        <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image alt="imge" src={'/assets/hire/step4.webp'} width={300} height={300}/>
                        <h3 className="md:text-2xl text-center text-xl font-bold">Onboard the choosen one</h3>
                        <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                    </div>
                </div>
                <button className="bg-blue-600 p-2 rounded w-max xl:text-3xl md:text-xl text-white px-6 font-bold cursor-pointer">Hire With Confidence</button>
            </section>

            <section className="py-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                {/* Main Header */}
                <div className="lg:flex gap-2 justify-between items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold">Expertise Of Our Python Web Developers</h2>
                        <p className="mt-4 text-lg">
                            Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped
                            different types and sizes of businesses in diverse industries. You can have an overview of the broad
                            range of expertise our Python developers in India possess.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full blackgradiant p-6 rounded-lg shadow-md">
                        <ul>
                            {listinfos.map((item,key)=>(
                                <li
                                    key={key}
                                    className="cursor-pointer p-3 border-b border-gray-400 hover:text-blue-500"
                                    onClick={() => toggleSection(item.title)}
                                    >
                                    <div className="flex justify-between text-white items-center">
                                        <span>{item.title}</span>
                                        <span>{activeSection === item.title ? '-' : '+'}</span>
                                    </div>
                                    {activeSection === item.title && (
                                        <div className="mt-2 pl-6 text-sm text-gray-400 animate-flip-down animate-ease-in-out">
                                        {item.description}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blackgradiant text-white py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-3xl font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                <p>Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                <div className="flex gap-3 items-center">
                    <a href={'/contact'} aria-label="contact" className="rounded-full border px-4 py-2 hover:bg-blue-700">Contact Us</a>
                    /
                    <a href="">Book A Call</a>
                </div>
            </section>

            <section className="py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <div className="md:flex gap-4 items-center">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-blue-700 mb-8 capitalize font-bold text-4xl">Why search for Python programmers for hir through Lemon.io ?</h4>
                        <p>If you’ve ever tried to hire remote developers you know the struggle. You can’t meet them in person, which makes assessing their real talents almost impossible. So, you end up with a churn rate that’s through the roof. Now, you’re spending all your time policing contractors or finding devs to hire.</p>
                    </div>
                    <Image src={'/assets/hire/choose.webp'} alt="choose" width={300} height={300}/>
                </div>
                <div className="">
                    <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                        <div className="text-3xl font-bold">Prime your hiring pipeline</div>
                        <div className="">Access a pool of 1300+ vetted, senior engineers so you can hire remote developers easier. Our always-on hiring pipeline means you never have to wait. Tell us your needs and we respond with a list of devs that meet your needs within 48 hours.</div>
                    </div>
                    <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                        <div className="text-3xl font-bold">Save time on screening</div>
                        <div className="">Skip interviews with unfit devs with our pre-screened engineers. No matter what skill you need on your team, we have a dev who has proven their skills and ability to get things done to our trained vetting team, so you can hire with confidence.</div>
                    </div>
                    <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                        <div className="text-3xl font-bold">Greatness guaranteed</div>
                        <div className="">You spend months to find the ‘right’ dev. And when they’re a bad fit, you have to start over. Our zero-risk replacement guarantee allows you to switch your dev for any reason. You ask, we deliver a new dev free of charge. It’s that easy.</div>
                    </div>
                </div>
            </section>

            <section className="blackgradiant text-white py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-[42px] font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                <p className="text-[16px]">Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                <div className="gap-3 items-center">
                    <div className="shadow-lg shadow-gray-800 drop-shadow  overflow-hidden rounded-md">
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-900">
                                <tr className="text-center">
                                    <th className="p-8 px-12 text-left text-white">Factor</th>
                                    <th className="p-8 px-12 border-x border-gray-300  text-white">OVE</th>
                                    <th className="p-8 px-12 border-x border-gray-300 text-white">IN-house</th>
                                    <th className="p-8 px-12 text-white">Freelancer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-600">
                                    <td className="p-6 px-8 border-b text-no-warp">Time to get right developer</td>
                                    <td className="p-6 px-8 border-b text-no-warp bg-blue-600/50 font-bold shadow drop-shadow border-x">1 day - 2 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp border-x">4 - 12 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp">1 - 12 weeks</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="p-6 px-8 border-b text-no-warp">Time to start a project</td>
                                    <td className="p-6 px-8 border-b text-no-warp bg-blue-700/50 font-bold shadow drop-shadow border-x">1 day - 2 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp border-x">2 - 10 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp">1 - 10 weeks</td>
                                </tr>
                                <tr className="bg-gray-600">
                                    <td className="p-6 px-8 border-b text-no-warp">Recurring cost of training</td>
                                    <td className="p-6 px-8 border-b text-no-warp bg-blue-600/50 font-bold shadow drop-shadow border-x">0</td>
                                    <td className="p-6 px-8 border-b text-no-warp border-x">$10,000 - $30,000</td>
                                    <td className="p-6 px-8 border-b text-no-warp">0</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="p-6 px-8 border-b text-no-warp">Time to scale size of the team</td>
                                    <td className="p-6 px-8 border-b text-no-warp bg-blue-700/50 font-bold shadow drop-shadow border-x">48 Hours - 1 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp border-x">4 weeks - 16 weeks</td>
                                    <td className="p-6 px-8 border-b text-no-warp">1 weeks - 12 weeks</td>
                                </tr>
                                <tr className="bg-gray-600">
                                    <td className="p-6 px-8">Pricing (Weekly average)</td>
                                    <td className="p-6 px-8 bg-blue-600/50 font-bold shadow drop-shadow border-x">1.5x</td>
                                    <td className="p-6 px-8 border-x">2x</td>
                                    <td className="p-6 px-8">2x</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}