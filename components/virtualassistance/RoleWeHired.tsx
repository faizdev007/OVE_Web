'use client';
import React from 'react';

const steps = [
    'Accounting and Finance',
    'Education',
    'Information Technology',
    'Insurance',
    'Legal Services',
    'Logistic and Transport',
    'Professional Services',
    'Real Estate',
    'Retail and E-commerce',
];

export default function RoleWeHired(RoleBaseHired:any) {
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">
                    {RoleBaseHired?.RoleBaseHired?.title ?? "Industries We've Served"}
                </h2>
                <p>{RoleBaseHired?.RoleBaseHired?.description ?? "In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly."}</p>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                {RoleBaseHired?.RoleBaseHired?.cardText.map((step:any, idx:number) => (
                !step?.bgImage ? 
                    <div
                        key={idx}
                        className="va-card border border-black rounded-lg p-4 text-center relative"
                    >
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{step.title}</h2>
                        <style jsx>{`
                            .va-card:hover {
                                box-shadow: 0 8px 32px rgba(0,0,0,0.16);
                            }
                            .va-card:hover .va-card-number {
                                transform: translateX(-50%) scale(1.25);
                            }
                        `}</style>
                    </div>
                : 
                    <div key={idx} className="va-card text-center group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                        <div className='relative'>
                            {/* Image */}
                            <img
                                src={step.bgImage ?? "https://source.unsplash.com/random/400x400?nature"}
                                alt="Card Image"
                                className="h-full z-10 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className='absolute bottom-0 group-hover:hidden bg-black/20 w-full h-full'>
                                <h2 className='absolute z-20 bottom-0 py-8 px-2 text-lg text-white font-bold'>{step.title}</h2>
                            </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-oveblue/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Text Content */}
                        <div className="absolute inset-x-0 bottom-0 translate-y-full p-2 text-start text-white transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="text-xl mb-3 font-bold">{step.title ?? 'Beautiful Nature'}</h3>
                            <div className="text-sm">
                                <span dangerouslySetInnerHTML={{__html:step.description ?? "Experience the beauty of the outdoors."}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}