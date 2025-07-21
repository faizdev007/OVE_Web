'use client';

import Image from 'next/image';

const items = [
  {
    title: 'DEDICATED MANAGER',
    color: 'bg-yellow-400',
    img: '/assets/whyus/vector1.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
  {
    title: 'FLAT FEES',
    subtitle: 'NO HIDDEN COST',
    color: 'bg-orange-400',
    img: '/assets/whyus/vector2.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
  {
    title: 'CLEAR BILLING',
    color: 'bg-rose-400',
    img: '/assets/whyus/vector3.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-4xl font-bold mb-4 text-black">Why choose us</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit seed eiusmod tempor incididunt labore
        dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded-t-full w-full border-2 border-b-0 p-3 border-dashed border-black overflow-hidden">
              <div className={`${item.color} pt-6 relative aspect-[1/1] pb-2 px-4 rounded-t-full`}>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-white text-sm tracking-widest mt-1">{item.subtitle}</p>
                )}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto object-container w-1/2 absolute -bottom-3 start-0 end-0 mt-4"
                />
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
