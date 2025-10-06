'use client';
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@heroui/react";

type BlogPost = {
    id: number;
    title: string;
    summary: string;
    date: string;
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Welcome to Our Blog",
        summary: "Discover the latest updates, tips, and stories from our team.",
        date: "2024-06-01",
    },
    {
        id: 2,
        title: "Getting Started with Next.js",
        summary: "A beginner's guide to building fast web apps with Next.js.",
        date: "2024-06-05",
    },
    {
        id: 3,
        title: "Improving Web Performance",
        summary: "Best practices for optimizing your website's speed and UX.",
        date: "2024-06-10",
    },
];

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

const Blogs = ()=>{
    return (
        <main className="mx-auto py-10 px-4">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-8">Software Innovation Starts Here</h1>
            </div>
            <div className="mb-12">
                <div className="gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {list.map((item, index) => (
                        /* eslint-disable no-console */
                        <Card key={index} className="border rounded-lg shadow-lg hover:shadow-2xl" isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                alt={item.title}
                                className="w-full object-cover h-[140px] opacity-90"
                                radius="lg"
                                shadow="sm"
                                src={item.img}
                                width="100%"
                                />
                            </CardBody>
                            <CardFooter className="text-small">
                                <div className="text-start">
                                    <b>{item.title}</b>
                                    <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                                    <p className="text-gray-800">{item.summary}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Blogs;