'use client';
import React from "react";
import {Button, Card, CardBody, CardFooter, Form, Image} from "@heroui/react";
import { useRouter } from "next/navigation";

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

const Blogs = (blogdata:any)=>{
    const router = useRouter();
    const listdata= blogdata?.blogdata ?? list;
    
    const [searchQuery, setSearchQuery] = React.useState("");
  
    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        // Implement actual search functionality here
    };

    return (
        <main className="mx-auto py-10 px-4">
            <div className="mb-12">
                <h1 className="2xl:text-5xl md:text-3xl text-2xl font-bold mb-8">Software Innovation Starts Here</h1>
                <p>Tap into the power of our top 1% software engineers and 675+ digital transformation experts. Get insights to drive your business forward in today’s competitive landscape.</p>
            </div>
            <div className="mb-12">
                <div className="flex justify-between w-full">
                    <h1 className="text-3xl font-bold mb-8">Popular Posts</h1>
                    <div className="flex flex-wrap md:flex-nowrap gap-4">
                        <Form>
                            <div className="flex w-full max-w-md gap-2">
                                <input
                                    placeholder="Enter your search query"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearch();
                                        }
                                    }}
                                    className="flex-1 border border-black p-1 rounded-lg"
                                />
                                <Button  
                                    onPress={handleSearch}
                                    className="self-end border bg-oveblue/90 text-white hover:bg-oveblue/70 rounded-lg"
                                >
                                    Search
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="basis-1/2">
                        {list2.map((item,index) => (
                            /* eslint-disable no-console */
                            index === 0 &&
                            /* eslint-disable no-console */
                            <Card key={index} className="border rounded-lg shadow-lg hover:shadow-2xl" isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                    alt={item.title}
                                    className="w-full object-cover opacity-90"
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
                    <div className="basis-1/2">
                        <div className="gap-5 grid sm:grid-cols-2">
                            {list2.map((item,index) => (
                                /* eslint-disable no-console */
                                <Card key={index} className="border rounded-lg shadow-lg hover:shadow-2xl" isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                        alt={item.title}
                                        className="w-full object-cover opacity-90"
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
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
                <div className="gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {listdata.map((item:any) => (
                        /* eslint-disable no-console */
                        <Card key={item.id} className="border rounded-lg shadow-lg hover:shadow-2xl" isPressable shadow="sm">
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
                                    <div className="mb-2 flex overflow-x-auto gap-2 ovescrollhide">
                                        {item.tags.map((tag:any,index:number)=>(
                                            <span onClick={() => router.push(`/blog/${tag.slug}`)} key={index} className="border text-nowrap rounded-full bg-oveblue text-white hover:text-yellow-50 hover:bg-oveblue/70 p-1 px-2 text-xs">
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    <b onClick={() => router.push(`/blog/${item.slug}`)} className="mb-4" title={item.title}>{item.title}</b>
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="rounded-full aspect-[1/1] h-10 w-10" src={item.author.avatar} alt=""/>
                                            <span className="capitalize text-black/50">by {item.author.name}</span>
                                        </div>
                                    </div>
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