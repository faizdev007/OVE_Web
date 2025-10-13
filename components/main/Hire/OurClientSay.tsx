'use client';

import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@/components/Rating";

function OurClientSay({wochts}:any) {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const baseSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    centerPadding: '60px',
    pauseOnHover: true,
    waitForAnimate: false,
};

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="px-4 pb-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-6 slider-container">
        <div className="text-center page-content">
            <h2 className="">{wochts?.wochtsTitle ?? 'What Our Clients Have to Say About Us'}</h2>

            <h4 className="text-lg font-medium mb-2">
                <span dangerouslySetInnerHTML={{__html:wochts?.wochtsSubtitle ?? 'We are grateful for our clients’ trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us'}}/>
            </h4>
        </div>
      <Slider {...baseSettings} asNavFor={nav2 ?? undefined} ref={sliderRef1}>
        {
            wochts?.wochtsClients?.map((client: any, index: number) => (
                <div key={index} className="p-4">
                    <div className=" dark:bg-gray-800 p-2 rounded-lg bg-oveblue/20 grid lg:grid-cols-2 gap-2">
                        {client.clientVideo ? (
                            <div className="aspect-video">
                                <video controls muted className="rounded-lg aspect-video w-full h-auto">
                                    <source src={client.clientVideo.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>  
                        ) : null} 
                        <div className="flex flex-col justify-center gap-6">
                            <div dangerouslySetInnerHTML={{__html:client.clientDescription ?? ''}} className="text-gray-700 dark:text-gray-300"/>
                            <div className="">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{client.clientName}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{client.clientDesignation}</p>
                                <Rating rating={client.clientRatting} />
                            </div>
                        </div>
                    </div>
                </div>
            )) || (<div className="p-4">Loading...</div>)
        }
        </Slider>
        <div>
            <Slider
                asNavFor={nav1 ?? undefined}
                ref={sliderRef2}
                slidesToShow={4}
                swipeToSlide
                focusOnSelect
                centerMode
            >
                {wochts?.wochtsClients?.map((client: any, index: number) => (
                    <div key={index} className="">
                        <div className="p-2 lg:flex hidden mx-2 items-center gap-4 cursor-pointer border rounded-md">
                            <div className="">
                                <img src={client.clientThumbnail?.node?.sourceUrl || 'https://via.placeholder.com/150'} alt={client.clientThumbnail?.node?.title || client.clientName} className="mx-auto rounded-full object-cover h-14 w-14 border-2 border-oveblue" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold capitalize text-gray-900 dark:text-white">{client.clientName}</span>
                                <span className="text-sm font-gray-500">{client.clientDesignation}</span>
                            </div>
                        </div>
                    </div>
                )) || (<div className="p-2">Loading...</div>)}
            </Slider>
        </div>
    </div>
  );
}

export default OurClientSay;
