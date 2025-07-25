'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer full-cycle development services including UI/UX design, backend, frontend, and cloud infrastructure setup.',
  },
  {
    question: 'How does billing work?',
    answer: 'We offer flat monthly billing or per-project pricing with no hidden charges.',
  },
  {
    question: 'Do you support after delivery?',
    answer: 'Yes! We offer post-launch support, including maintenance, feature upgrades, and bug fixes.',
  },
  {
    question: 'How can I get started?',
    answer: 'Just fill out the contact form or book a free consultation to get started.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='py-10 dark:bg-gray-700'>
        <section className="text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
            <Image
            src="/assets/faqvector.webp"
            alt="FAQ Character"
            width={400}
            height={400}
            className="object-contain"
            />
        </div>

        {/* Right FAQ */}
        <div className="w-full lg:w-2/3">
            <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold mb-6 text-center lg:text-end">
            Frequently Asked <br /> Questions
            </h2>

            <div className="space-y-4">
            {faqs.map((item, index) => (
                <div
                key={index}
                className={`border border-gray-300 px-10 py-4 shadow-sm transition-all duration-20 cursor-pointer ${
                    activeIndex === index ? 'rounded-2xl' : 'rounded-full'
                }`}
                onClick={() => toggle(index)}
                >
                <div className="flex justify-between items-center">
                    <p className="font-bold md:text-xl">{item.question}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 transition-transform duration-300 ${
                            activeIndex === index ? 'rotate-180' : ''
                        }`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
                
                <div
                    className={`overflow-hidden transition-all border-t border-gray-400 duration-500 ease-in-out ${
                        activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <p className="text-gray-600 dark:text-white pt-2 md:text-lg text-sm">{item.answer}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}
