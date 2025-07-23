'use client';

import Image from 'next/image';

const companies = [
  { name: 'Spotify', logo: '/assets/trustedby/spotify.webp'},
  { name: 'Disney', logo: '/assets/trustedby/disney.webp'},
  { name: 'Uber', logo: '/assets/trustedby/uber.webp'},
  { name: 'Disney', logo: '/assets/trustedby/disney.webp'},
  { name: 'Spotify', logo: '/assets/trustedby/spotify.webp'},
];

export default function HireBy() {
  return (
    <section className="bg-black py-10 dark:bg-gray-800 text-white py-16 px-4 flex flex-col gap-10">
        <div className='container mx-auto'> 
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">
                <span>Hire Developers by role</span>
            </h2>
            {/* Logos */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 space-2 gap-2">
                {companies.map((company, i) => (
                    <div key={i} className="bg-gray-600 rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <div className='aspect-[3/1]'>
                                <Image src={company.logo} alt={company.name} width={60} height={60} className="grayscale object-container h-auto w-auto" />
                            </div>
                            <h4>{company.name}</h4>
                        </div>
                    </div>
                ))}
                <div key='action1' className="bg-gray-600 rounded shadow-md">
                    <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                        <h4>Looking for Other role?</h4>
                        <button className='border border-green-600 text-green-600 font-bold md:text-lg text-sm rounded p-2 cursor-pointer'>Pleace Request</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='container mx-auto'> 
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">
                <span>Hire Developers by skill</span>
            </h2>
            {/* Logos */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 space-2 gap-2">
                {companies.map((company, i) => (
                    <div key={i} className="bg-gray-600 rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <div className='aspect-[3/1]'>
                                <Image src={company.logo} alt={company.name} width={60} height={60} className="grayscale object-container h-auto w-auto" />
                            </div>
                            <h4>{company.name}</h4>
                        </div>
                    </div>
                ))}
                <div key='action2' className="bg-gray-600 rounded shadow-md">
                    <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                        <h4>Looking for Other Skill?</h4>
                        <button className='border border-green-600 text-green-600 font-bold md:text-lg text-sm rounded p-2 cursor-pointer'>Pleace Request</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
