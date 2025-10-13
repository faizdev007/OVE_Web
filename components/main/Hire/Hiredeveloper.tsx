"use client";
import { useState } from "react";

export default function Hiredeveloper({hireDev}:any) {
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    return (
        <div className="relative pb-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
            <h1 className="text-3xl font-bold mb-4 text-center">{hireDev?.whdsTitle ?? "User Guide To Hire Backend Developer"}</h1>
            <div className="prose prose-lg prose-invert max-w-none flex gap-2 relative">
                <div className="sticky top-20 self-start hidden lg:block w-1/4 pr-8">
                    <h2 className="text-2xl font-bold mb-8 text-gray-700">Guide Topics</h2>
                    <div className="list-disc list-inside">
                        {hireDev?.whdsList?.map((item: any, index: number) => (
                            <p className={`p-2 ${currentTopicIndex === index ? "bg-oveblue/20 rounded font-bold" : ''}`} key={index}><a onClick={()=>setCurrentTopicIndex(index)} href={`#${item.topicTitle.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600">{item.topicTitle}</a></p>
                        )) || (<li>Loading topics...</li>)}
                    </div>
                </div>
                <div className="flex-1 page-content">
                    {hireDev?.whdsList?.map((item: any, index: number) => (
                        <div key={index}>
                            <h2 className="scroll-mt-18 scroll-smooth" id={`${item.topicTitle.toLowerCase().replace(/\s+/g, '-')}`}>{item.topicTitle}</h2>
                            <div className="page-content" dangerouslySetInnerHTML={{__html:item.topicDescription}} />
                        </div>
                    )) || (<p>Loading content...</p>)}
                </div>
            </div>
        </div>
    )
}