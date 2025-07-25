'use client';

import Image from "next/image";
import Footerlinks from "./Homepage/footerlinks";

export default function Footer()
{
    const officelocation = [
                {
                    name:'Australia',
                    image:'assets/offices/AUSTRALIA.webp',
                    address: 'Level 15, 333 Collins St, Melbourne 3000, Victoria, Australia'
                },
                {
                    name:'USA',
                    image:'assets/offices/USA.webp',
                    address: '109 Mojonera Court, Los Gatos, CA, USA 95032'
                },
                {
                    name:'UK',
                    image:'assets/offices/UK.webp',
                    address: '4TH Floor, Rex House, 4-12 Regent Street, London SW1Y 4PE(UK)'
                },
                {
                    name:'India',
                    image:'assets/offices/INDIA.webp',
                    address: 'B27, Sector 132, Noida, Uttar Pradesh 201301.'
                }
            ];
    return(
        <>
            <Footerlinks/>
            <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto pt-10">
                <h3 className="text-center text-2xl md:text-3xl lg:text-4xl xl-text-5xl 2xl:text-6xl font-bold mb-8">OUR OFFICE LOCATIONS</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 divide-y-2 md:divide-y-0 px-4">
                    {officelocation.map((location,key)=>(
                        <div key={key} className="flex flex-col px-4 py-6" aria-labelledby={location.name}>
                            <div className="flex gap-2 mb-4 items-center">
                                <Image loading="lazy" src={location.image} alt={location.name} className="aspect-[2/1] w-12 object-cover"/>
                                <h2 className="xl:text-xl font-bold">{location.name}</h2>
                            </div>
                            <p className="text-sm">{location.address}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className="">
                        @ Copywrite
                    </div>
                    <div className="">
                        social linke
                    </div>
                </div>
            </section>
        </>
    );
}