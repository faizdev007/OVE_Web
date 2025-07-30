'use client';

import Image from "next/image";

export default function Hire()
{
    return(
        <>
            <section className="bg-black md:flex dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <div className="flex flex-col gap-8">
                    <h1 className="text-blue-700 xl:text-7xl md:text-3xl font-bold">Hire Full-Stack Developer</h1>
                    <p className="text-xl">Develop fast, dynamic user interfaces with vetted React developers. Scale your front-end team today.</p>
                    <button className="bg-blue-600 p-2 rounded w-max xl:text-3xl md:text-xl px-6 font-bold cursor-pointer">Hire Full-Stack Developer</button>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-md border border-white">
                            <h3 className="xl:text-4xl font-bold">1.5+</h3>
                            <p>Fully vetted Developer</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex relative justify-center">
                    <div className="aspect-[1/1] z-30">
                        <Image src={'/assets/hire/anjali.png'} alt="developer" width={500} height={500} className="h-auto w-auto"/>
                    </div>
                </div>
            </section>
        </>
    );
}