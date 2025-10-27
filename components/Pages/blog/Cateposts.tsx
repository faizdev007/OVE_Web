'use client';
import React from "react";
import {Button, Card, CardBody, CardFooter, Form, Image} from "@heroui/react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const list = [
    {
        title: "Getting Started with Next.js",
        img: "/assets/blog/blog-bg.webp",
        price: "$5.50",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Improving Web Performance",
        img: "/assets/blog/blog-bg.webp",
        price: "$3.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Raspberry",
        img: "/assets/blog/blog-bg.webp",
        price: "$10.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Lemon",
        img: "/assets/blog/blog-bg.webp",
        price: "$5.30",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Avocado",
        img: "/assets/blog/blog-bg.webp",
        price: "$15.70",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Lemon 2",
        img: "/assets/blog/blog-bg.webp",
        price: "$8.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Banana",
        img: "/assets/blog/blog-bg.webp",
        price: "$7.50",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Watermelon",
        img: "/assets/blog/blog-bg.webp",
        price: "$12.20",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
];

const list2 = [
    {
        title: "Getting Started with Next.js",
        img: "/assets/blog/blog-bg.webp",
        price: "$5.50",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Improving Web Performance",
        img: "/assets/blog/blog-bg.webp",
        price: "$3.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Raspberry",
        img: "/assets/blog/blog-bg.webp",
        price: "$10.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
    {
        title: "Raspberry",
        img: "/assets/blog/blog-bg.webp",
        price: "$10.00",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    }
];

const Cateposts = (blogdata:any)=>{
    const router = useRouter();
    const listdata= blogdata?.listdata?.posts?.nodes ?? list;
    
    const [searchQuery, setSearchQuery] = React.useState("");
  
    const handleSearch = () => {
        // Implement actual search functionality here
    };

    return (
        <main className="mx-auto py-10 px-4">
            <div className="mb-6 rounded-lg">
                <div className="">
                    <h2 className="2xl:text-5xl md:text-3xl text-2xl font-bold">All our articles</h2>
                    <strong className="md:text-3xl text-2xl font-bold text-gray-400">Let's read</strong>
                    <hr className="border-gray-200 my-3"/>
                    <div className="">
                        {blogdata?.listdata?.categories && blogdata?.listdata?.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                <a
                                    href={`/blog`}
                                    className="px-3 py-1 border bg-oveblue/20 text-black dark:text-white hover:bg-oveblue/90 hover:text-white rounded-full text-sm"
                                >
                                    All
                                </a>
                                {blogdata?.listdata?.categories.map((cat:any) => (
                                    cat.name !== blogdata?.listdata?.name && 
                                    <a
                                        key={cat.slug}
                                        href={`/blog/${cat.slug}`}
                                        className="px-3 py-1 border bg-oveblue/20 text-black dark:text-white hover:bg-oveblue/90 hover:text-white rounded-full text-sm"
                                    >
                                        {cat.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden">
                    <div className="lg:flex justify-between w-full">
                        <h2 className="text-3xl font-bold">{blogdata?.listdata?.name}</h2>
                    </div>
                    <hr className="border-gray-400 my-3"/>
                </div>
            </div>
            <div className="mb-6">
                <Breadcrumb/>
            </div>
            <div className="mb-12">
                <div className="gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {listdata.length !== 0 ? listdata.map((item:any) => (
                        /* eslint-disable no-console */
                        <Card key={item.id} className="border cursor-auto rounded-lg shadow-lg hover:shadow-2xl" isPressable shadow="sm">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    alt={item.featuredImage.title}
                                    className="w-full aspect-video border-b object-cover opacity-90"
                                    radius="lg"
                                    shadow="sm"
                                    src={item.featuredImage.sourceUrl}
                                    width="100%"
                                />
                            </CardBody>
                            <CardFooter className="text-small h-full">
                                <div className="text-start h-full flex flex-col justify-between overflow-hidden">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2 mb-4">
                                            <img className="rounded-full aspect-[1/1] h-7 w-7" src={item.author.avatar} alt=""/>
                                            <span className="capitalize text-black/50 dark:text-white">by {item.author.name}</span>
                                        </div>
                                    </div> 
                                    <a href={`/blog/${blogdata?.listdata?.slug}/${item.slug}`} className="mb-4 hover:text-oveblue/80 font-bold" title={item.title}>{item.title}</a>
                                    <hr className="border-gray-300"/>
                                    <div className="mt-3 flex overflow-x-auto items-center gap-2 ovescrollhide">
                                        {blogdata?.listdata?.name}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    )) : (
                        <p className="text-center col-span-5 underline mt-10 font-bold w-full">No posts found in this category.</p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Cateposts;