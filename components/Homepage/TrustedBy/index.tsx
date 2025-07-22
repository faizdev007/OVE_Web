'use client';

import Image from 'next/image';
import './trustby.css';

const logos = [
  '/assets/trustedby/spotify.webp',
  '/assets/trustedby/disney.webp',
  '/assets/trustedby/uber.webp',
  '/assets/trustedby/spotify.webp',
  '/assets/trustedby/disney.webp',
];

export default function TrustedBy() {
// if (
//     window.top === window.self || // not in an iframe
//     document.hasFocus()          // iframe is active
// ) {
//     navigator.vibrate?.(200);
// }
  return (
    <div className="py-10 px-2">
      <div className="container mx-auto flex items-center overflow-hidden">
        {/* Left Static Text */}
        <div className="min-w-[150px] text-white text-sm border-r border-gray-700 dark:border-black">
          <h3 className='text-xl font-bold'>Trusted by</h3>
          <p className="text-xs text-gray-400">Top companies</p>
        </div>

        {/* Marquee Section */}
        <div className="flex-1 px-4 overflow-hidden relative">
          <div className="flex animate-marquee gap-10 w-max">
            {[...logos, ...logos, ...logos, ...logos].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="logo"
                width={150}
                height={150}
                className="object-contain grayscale opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
