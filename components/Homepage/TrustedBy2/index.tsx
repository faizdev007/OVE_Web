'use client';

import Image from 'next/image';

const companies = [
  { name: 'Spotify', logo: '/assets/trustedby/spotify.webp'},
  { name: 'Disney', logo: '/assets/trustedby/disney.webp'},
  { name: 'Uber', logo: '/assets/trustedby/uber.webp'},
  { name: 'Disney', logo: '/assets/trustedby/disney.webp'},
  { name: 'Spotify', logo: '/assets/trustedby/spotify.webp'},
];

const stats = [
  { count: '3000+', label: 'Apps and Digital Projects Delivered' },
  { count: '3000+', label: 'Apps and Digital Projects Delivered' },
  { count: '3000+', label: 'Apps and Digital Projects Delivered' },
  { count: '3000+', label: 'Apps and Digital Projects Delivered' },
];

export default function TrustedBySection() {
  return (
    <section className="bg-black dark:bg-gray-800 text-white py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-orange-400">Trusted by</span>
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, seed eiusmod tempor incididunt labore
        et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris.
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-10 items-center mb-16">
        {companies.map((company, i) => (
          <div key={i} className="flex items-center gap-2">
            <Image src={company.logo} alt={company.name} width={150} height={150} className="grayscale object-container" />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="md:border-l-3 pl-4 border-blue-500 text-center md:text-start">
            <h3 className="text-3xl font-bold text-white">{stat.count}</h3>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
