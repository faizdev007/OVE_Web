'use client';

import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@/components/Rating";
import {motion} from 'framer-motion';

function OurClientSay({ wochts }: any) {
  wochts = wochts ?? {
      "wochtsTitle": "What Our Clients Have to Say About Us",
      "wochtsSubtitle": "We are grateful for our clients’ trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us.",
      "wochtsClients": [
          {
              "clientName": "Jenny Junkeer",
              "clientDesignation": "CEO, Intent",
              "clientDescription": "<p>OVE had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give OVE ten out of ten!</p>\n",
              "clientRatting": 5,
              "clientThumbnail": {
                  "node": {
                      "sourceUrl": "https://staging.optimalvirtualemployee.com.au/wp-content/uploads/2025/10/jenny.webp",
                      "title": "jenny"
                  }
              },
              "clientVideo": {
                  "title": "Jenny Junkeer",
                  "url": "https://hire-ove.s3.ap-south-1.amazonaws.com/Jenny+Junkeer.mp4"
              }
          },
          {
              "clientName": "Mark Reisinger",
              "clientDesignation": "MD, Web Zulu",
              "clientDescription": "<p>The team at OVE has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.</p>\n",
              "clientRatting": 5,
              "clientThumbnail": {
                  "node": {
                      "sourceUrl": "https://staging.optimalvirtualemployee.com.au/wp-content/uploads/2025/10/mark.webp",
                      "title": "mark"
                  }
              },
              "clientVideo": {
                  "title": "Mark Reisinger",
                  "url": "https://hire-ove.s3.ap-south-1.amazonaws.com/Mark+Reisinger.mp4"
              }
          },
          {
              "clientName": "Matt Lonergan",
              "clientDesignation": "CEO, PMO PRO",
              "clientDescription": "<p>Huge thank you to OVE; they have been a massive help in enabling us to start developing our project within a few weeks, so it&#8217;s been great! There have been two small bumps in the road, but overall, It&#8217;s been a fantastic service. I have already recommended it to one of my friends.</p>\n",
              "clientRatting": 5,
              "clientThumbnail": {
                  "node": {
                      "sourceUrl": "https://staging.optimalvirtualemployee.com.au/wp-content/uploads/2025/10/matt.webp",
                      "title": "matt"
                  }
              },
              "clientVideo": {
                  "title": "Matt Lonergan",
                  "url": "https://hire-ove.s3.ap-south-1.amazonaws.com/Matt+Lonergan.mp4"
              }
          },
          {
              "clientName": "Matthew Clews",
              "clientDesignation": "MD, Sea Side Media",
              "clientDescription": "<p>The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that&#8217;s why we chose OVE.</p>\n",
              "clientRatting": 5,
              "clientThumbnail": {
                  "node": {
                      "sourceUrl": "https://staging.optimalvirtualemployee.com.au/wp-content/uploads/2025/10/matthew.webp",
                      "title": "matthew"
                  }
              },
              "clientVideo": {
                  "title": "Matthew Clews",
                  "url": "https://hire-ove.s3.ap-south-1.amazonaws.com/Matthew+Clews.mp4"
              }
          }
      ]
  };
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayDuration = 5000; // 5 seconds

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  // === Main slider settings (only this one autoplay) ===
  const baseSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: autoplayDuration,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    waitForAnimate: false,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
      setProgress(0);
    },
  };

  // === Progress bar timer ===
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const step = 100 / (autoplayDuration / 100); // 100 steps per 5s

    const startProgress = () => {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + step;
        });
      }, 100);
    };

    startProgress();
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="px-4 pb-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-6 slider-container dark:bg-black">
      <div className="text-center">
        <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center headingtext mb-12 headingtext">{wochts?.wochtsTitle ?? "What Our Clients Have to Say About Us"}</h2>
        <h4 className="text-lg font-medium mb-2">
          <span
            dangerouslySetInnerHTML={{
              __html:
                wochts?.wochtsSubtitle ??
                "We are grateful for our clients’ trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us",
            }}
          />
        </h4>
      </div>

      {/* === Main Slider === */}
      <Slider {...baseSettings} asNavFor={nav2 ?? undefined} ref={sliderRef1}>
        {wochts?.wochtsClients?.map((client: any, index: number) => (
          <div key={index} className="p-4">
            <div className="bg-white dark:bg-gray-800 grid border rounded-lg lg:divide-x lg:grid-cols-2 shadow-lg">
              {client.clientVideo && (
                <div className="p-2">
                  <video controls muted className="rounded-lg aspect-video w-full h-auto">
                    <source src={client.clientVideo.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="flex flex-col justify-between gap-6 p-6">
                <div
                  dangerouslySetInnerHTML={{ __html: client.clientDescription ?? "" }}
                  className="text-gray-700 dark:text-gray-300"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {client.clientName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {client.clientDesignation}
                  </p>
                  <Rating rating={client.clientRatting} />
                </div>
              </div>
            </div>
          </div>
        )) || <div className="p-4">Loading...</div>}
      </Slider>

      {/* === Thumbnail Slider (NO autoplay) === */}
      <Slider
        asNavFor={nav1 ?? undefined}
        ref={sliderRef2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true}
        autoplay={false}
        beforeChange={()=>{
            setProgress(0)
          }
        }
      >
        {wochts?.wochtsClients?.map((client: any, index: number) => (
          <div key={index}>
            <div
              className={`mx-2 bg-white items-center cursor-pointer border rounded-md shadow ${
                index === currentSlide
                  ? "border-oveblue bg-oveblue/10"
                  : "border-gray-200"
              }`}
            >
              <div className="p-2 lg:flex hidden gap-4">
                <div>
                  <img
                    src={
                      client.clientThumbnail?.node?.sourceUrl ||
                      "https://via.placeholder.com/150"
                    }
                    alt={client.clientThumbnail?.node?.title || client.clientName}
                    className="mx-auto rounded-full object-cover h-14 w-14 border-2 border-oveblue"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold capitalize text-gray-900 dark:text-white">
                    {client.clientName}
                  </span>
                  <span className="text-sm text-gray-500">
                    {client.clientDesignation}
                  </span>
                </div>
              </div>

              {/* === Progress Bar === */}
              <div className="relative w-11/12 mx-auto h-2 bg-gray-200 rounded-full overflow-hidden my-2">
                <div
                  className="absolute left-0 top-0 h-2 bg-oveblue transition-all duration-100 linear"
                  style={{
                    width: index === currentSlide ? `${progress}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )) || <div className="p-2">Loading...</div>}
      </Slider>
    </motion.div>
  );
}

export default OurClientSay;
