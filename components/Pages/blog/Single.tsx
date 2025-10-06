'use client';
import ModalForm from '@/components/virtualassistance/ModalForm';
import Modal from '@/components/virtualassistance/VAModal';
import React, { useState } from 'react';
import '@/app/(main)/blog/style.css';

const urlreplacer = (url:string) => {
    return url.replace('https://admin.optimalvirtualemployee.com', '')
}

const Breadcrumb = ({ items }: { items: { url: string, text:string }[] }) => {
    return (
        <nav aria-label="breadcrumb" className="flex items-center">
            <ol className="flex overflow-auto text-sm">
                {items.map((item:any, idx:number) => (
                    <li key={idx} className="flex items-center text-nowrap">
                        {item.url && idx+1 !== items.length ? (
                            <a href={item.text === "Home" ? '/blog' :urlreplacer(item?.url)} className="text-black hover:underline font-bold capitalize">
                                {item.text === "Home" ? 
                                    'blog'
                                    : item.text}
                            </a>
                        ) : (
                            <span className="text-gray-500">{item.text}</span>
                        )}
                        {idx < items.length - 1 && (
                            <span className="mx-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

const SingleBlog = (post:any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <main className="mx-auto py-10 px-4">
            <div className='lg:flex items-center justify-between mb-4 flex-col sm:flex-row gap-4 bg-oveblue p-10 rounded-lg text-white'>
                <div className=''>
                    <h3 className='text-2xl'>Looking to Turn AI Challenges into Competitive Strengths?</h3>
                    <p className='font-bold'>From ethics to cost planning, we help businesses overcome AI roadblocks and achieve measurable success.</p>
                </div>
                <div className=''>
                    <button type='button' onClick={() => setIsOpen(true)} className="block text-center  cursor-pointer border-2 hover:bg-black/50 hover:dark:bg-gray-700 text-white hover:text-white hover:border-black/50 dark:text-white px-4 py-2 rounded-md transition">
                        Book a Free Consultation
                    </button>
                </div>
            </div>
            <div className='my-4 gap-2 flex items-center justify-between'>    
                <Breadcrumb items={post?.seo?.breadcrumbs} />
            </div>
            <div className="mb-12 mx-auto blog-content">
                <h1>{post.title}</h1>
                <div className="text-gray-600 mb-6 flex items-center gap-4">
                    <span><img className='w-12 h-12' src={post?.author?.avatar} alt={post.author?.name}/></span>
                    <span>Write By {post.author?.name}</span>
                </div>
                <div className='lg:flex gap-2'>
                    <div className='lg:w-3/4'>
                        <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                    <div className='lg:w-1/4'>
                        <div className='sticky text-white top-20 p-4 border bg-oveblue rounded-lg shadow-lg'>
                            <span className='font-bold text-2xl'>Get Started With ValueCoders</span>
                            <ul className='text-white list-white'>
                                <li className='!text-white flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>20+ years of experience</li>
                                <li className='!text-white flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>2500+ happy customers</li>
                                <li className='!text-white flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>5000+ projects delivered</li>
                                <li className='!text-white flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>Flexible engagement models</li>
                            </ul>
                            <div className='flex justify-center'>
                                <button type='button' onClick={() => setIsOpen(true)} className="block text-center  cursor-pointer border-2 hover:bg-black/50 hover:dark:bg-gray-700 text-white hover:text-white hover:border-black/50 dark:text-white px-4 py-2 rounded-md transition">
                                    Book a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalForm/>
        </Modal>
    </>
    );
}

export default SingleBlog;