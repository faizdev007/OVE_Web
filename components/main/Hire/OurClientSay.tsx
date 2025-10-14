'use client';

import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@/components/Rating";

function OurClientSay({ wochts }: any) {
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
    arrows: true,
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

    console.log(step);

    const startProgress = () => {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          console.log(prev);
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
    <div className="px-4 pb-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-6 slider-container">
      <div className="text-center page-content">
        <h2>{wochts?.wochtsTitle ?? "What Our Clients Have to Say About Us"}</h2>
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
            <div className="dark:bg-gray-800 grid border rounded-lg divide-x lg:grid-cols-2 shadow-lg">
              {client.clientVideo && (
                <div className="aspect-video p-2">
                  <video controls muted className="rounded-lg aspect-video w-full h-auto">
                    <source src={client.clientVideo.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="flex flex-col justify-center gap-6 p-2">
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
        swipeToSlide
        focusOnSelect
        centerMode
        autoplay={false}
        beforeChange={()=>{
            setProgress(0)
          }
        }
      >
        {wochts?.wochtsClients?.map((client: any, index: number) => (
          <div key={index}>
            <div
              className={`mx-2 items-center cursor-pointer border rounded-md shadow ${
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
    </div>
  );
}

export default OurClientSay;
