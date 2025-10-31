'use client';

// import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const listinfos = [
  { question: "Data Science", answer: "Data analysis, processing, ML, and more." },
  { question: "Custom Python Web Application Development", answer: "Scalable apps using Django/Flask." },
  { question: "Enterprise Python Applications", answer: "Workflow automation & business processes." },
  { question: "Python Support and Maintenance", answer: "Ongoing support, optimization, maintenance." },
  { question: "Machine Learning with Python", answer: "Build & deploy ML models in production." },
  { question: "Python Migration & Integration", answer: "Migrate to Python and integrate systems." },
];

export default function Expertise( {Expertise} : any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const roleTitleHTML = Expertise?.title ? Expertise?.title : "Expertise Of Our Full-Stack Developer";

  const description = Expertise?.description ? Expertise?.description : 'Our full-stack developers excel at building complete web applications from conception to deployment. They seamlessly integrate frontend user interfaces with robust backend systems, handle database design, API development, and ensure optimal performance across the entire technology stack for maximum business impact.';

  const qnalist = Expertise?.qna.length > 0 ? Expertise?.qna : listinfos;

  return (
    <section className="bg-gradient pb-12 dark:py-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
        {/* Main Header */}
        <div className="lg:flex relative z-20 gap-2 justify-between">
            <div className="lg:w-1/2">
              <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="text-3xl headingtext font-bold mb-4">
                  <span dangerouslySetInnerHTML={{ __html: roleTitleHTML }} />
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }} className="mt-4 text-lg mb-4 page-content">
                  <span dangerouslySetInnerHTML={{ __html: description  as string }} />
              </motion.div>
              <motion.div className="aspect-[2/0.5] mt-6">
                <img src={'../assets/hire/expertise.webp'} width={500} className="w-full" height={200} alt={'Coder'}/>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full cardLG text-white md:p-6 p-2 rounded-lg shadow-md">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="w-full space-y-4">
                {qnalist.map((item:any, index:number) => {
                const open = activeIndex === index;
                return (
                      <div
                        key={index}
                        className={`border-oveblue bg-gray-800 rounded py-2 px-4 shadow-sm shadow-oveblue transition-all cursor-pointer ${open ? "border-b-4" : ""}`}
                        onClick={() => toggle(index)}
                        aria-expanded={open}
                        >
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-bold md:text-xl">{item?.question}</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className={`size-6 text-oveblue transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>

                        <div className={`overflow-hidden transition-all border-t border-white duration-500 ease-in-out ${open ? "max-h-100 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                            <p className="text-gray-300 dark:text-white pt-2 md:text-lg text-sm page-content">
                              <span dangerouslySetInnerHTML={{__html: item?.answer || ""}}/>
                            </p>
                        </div>
                      </div>
                    );
                })}
            </motion.div>
            </div>
        </div>
    </section>
  );
}
