'use client';

import Image from 'next/image';

const items = [
  {
    title: 'DEDICATED MANAGER',
    color: '#FFCB61',
    img: '/assets/whyus/vector1.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
  {
    title: 'FLAT FEES',
    subtitle: 'NO HIDDEN COST',
    color: '#FF894F',
    img: '/assets/whyus/vector2.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
  {
    title: 'CLEAR BILLING',
    color: '#EA5B6F',
    img: '/assets/whyus/vector3.webp',
    text: 'Lorem ipsum dolo amet consectetur adipiscing sed odo eiusmod tempor incididunt labore dolore magna.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8 mx-auto text-center bg-white dark:bg-gray-700 dark:text-white">
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-5">Why choose us</h2>
      <p className="text-gray-600 dark:text-white max-w-3xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit seed eiusmod tempor incididunt labore
        dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded-t-full w-full border-2 border-b-0 p-3 border-dashed border-black dark:border-white overflow-hidden">
              <div className={`bg-[${item.color}] pt-6 flex flex-col pb-28 justify-center items-center relative aspect-[1/1] pb-2 px-4 rounded-t-full`}>
                <h3 className="text-white/50 font-bold text-2xl lg:text-4xl">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-white text-sm tracking-widest mt-1">{item.subtitle}</p>
                )}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="mx-auto object-container w-1/2 absolute -bottom-10 start-0 end-0 mt-4"
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
