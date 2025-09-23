'use client';
import { useState } from "react";

const steps = [
  {
    title: "Principle 1: Transparency",
    description: `Achieve transparency in your team's productivity — without compromising privacy. That’s why Hubstaff offers the option to blur apps, URLs, and screenshots. Plus:
- No keystroke logging
- No email monitoring
- No access to cameras and webcams`,
    image: "/images/step1.png",
  },
  {
    title: "Principle 2: Access",
    description: "Description for Principle 2...",
    image: "/images/step2.png",
  },
  {
    title: "Principle 3: Control",
    description: "Description for Principle 3...",
    image: "/images/step3.png",
  },
];

export default function ImageSteps(StepsBlock:any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-oveblue/10 py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl">
                {StepsBlock?.StepsBlock?.title ?? 'Hire Virtual Assistant in'}
            </h2>
            <div className="mt-4 text-3xl font-bold mb-4">
                {StepsBlock?.StepsBlock?.subtitle ?? '3 Simple Steps'}
            </div>
        </div>
        <div className="md:flex gap-2 mt-8">
            {/* Left Side - Steps */}
            <div className="md:w-1/2">
                {StepsBlock?.StepsBlock?.cards.map((step:any, index:number) => (
                <div key={index} className="border-b border-gray-400 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                    >
                    <span className="font-semibold">
                        <strong className="flex gap-2">
                            <span className="text-oveblue" dangerouslySetInnerHTML={{__html:step.svg ?? ''}}/>
                            Step {index+1} : {step.title}
                        </strong>
                    </span>
                    <span>{openIndex === index ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                            </svg>
                        : 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                               <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        }</span>
                    </button>

                    {/* Description */}
                    {openIndex === index && (
                    <div className=" text-gray-700 md:block">
                        <div className="whitespace-pre-line">
                            <span dangerouslySetInnerHTML={{__html:step.info ?? "Share Your Requirement"}}/>
                        </div>

                        {/* Image inside tab on small screens */}
                        <div className="mt-4 md:hidden">
                        <img
                            src={step.image}
                            alt={step.title}
                            className="rounded-lg w-full object-cover"
                        />
                        </div>
                    </div>
                    )}
                </div>
                ))}
            </div>

            {/* Right Side - Image for large screens */}
            <div className="hidden md:block md:w-1/2 relative">
                {openIndex !== null && (
                    <img
                    key={openIndex} // 👈 important: forces React to remount the image on index change
                    src={StepsBlock?.StepsBlock?.cards[openIndex].image}
                    alt={StepsBlock?.StepsBlock?.cards[openIndex].title}
                    className="rounded-lg w-full object-contain aspect-video opacity-0 animate-fadeIn"
                    />
                )}
            </div>
        </div>
    </section>
  );
}
