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
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>The Growth-Stage Founder</h3>
                    <p>This founder lives for the thrill of growth-turning challenges into victories and chasing big opportunities. But the weight of endless tasks is dragging them down. They’re buried in the day-to-day grind, handling work that someone else could easily manage, while their boldest ideas are put on hold. It’s time for them to step up, focus on their vision, and lead their business into its next chapter.</p>
                </div>
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>The Established CEO</h3>
                    <p>This CEO has built a business others admire-a strong foundation, reliable systems, and steady results. But instead of enjoying their success, they’re drowning in emails, meetings, and decisions. The constant demands of the day-to-day are leaving no time for growth or personal fulfillment. It’s time for them to reclaim their freedom & focus on what matters most.</p>
                </div>
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>The Multiple Ventures Leader</h3>
                    <p>This entrepreneur is the master of juggling multiple businesses, always chasing the next big win. From the outside, they’re unstoppable, but behind the scenes, the chaos of details and deadlines is eating away at their focus. They’re a visionary, wired for big-picture thinking, but the grind is holding them back. They need someone to handle the noise so they can keep driving their empire forward.</p>
                </div>
            </div>
        </section>
    );
}