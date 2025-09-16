'use client';
import React from 'react';

const steps = [
    { title: 'Confirm Scope', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Select Talent', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Go Live', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
];

export default function VAWork() {
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Why Do Our Virtual Executive Assistants Work With?
                </h2>
                <p>OVE's commitment to excellence begins with its meticulous selection process. Unlike some providers who simply hire anyone with basic skills, OVE employs a multi-stage screening process to identify the most talented and qualified candidates. </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <img src={''} alt={'story1'}/>
                <img src={''} alt={'story2'}/>
                <img src={''} alt={'story3'}/>
            </div>
        </section>
    );
}