'use client';
import React from "react";

const cards = [
    {
        svgicon: '',
        title: "Innovate",
        description: "Bring your ideas to life with creative solutions.",
    },
    {
        svgicon: '',
        title: "Support",
        description: "Get friendly assistance whenever you need it.",
    },
    {
        svgicon: '',
        title: "Communicate",
        description: "Connect and collaborate seamlessly.",
    },
];

const ImagineTask = (Information:any) => {
    return(
        <section className="text-white bg-oveblue/10 py-12 dark:py-12 flex flex-col items-center gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="mx-auto p-2 py-3 text-black text-center w-full">
                <h2 className="text-3xl font-bold mb-2">
                    {Information?.Information?.title ?? 'Imagine Your Remote Assistant Doing All These Tasks for You...'}
                </h2>
                <div className="">
                    <span dangerouslySetInnerHTML={{__html:Information?.Information?.description ?? "In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly."}}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {Information?.Information?.cards.map((card:any, idx:number) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-6 border border-black flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                    >
                        <div className="mb-4 text-oveblue w-10">
                            <span dangerouslySetInnerHTML={{__html:card.svgicon}}/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">{card.title}</h3>
                        <div className="text-gray-600">
                            <span dangerouslySetInnerHTML={{__html:card.description}}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ImagineTask;