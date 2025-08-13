'use client';
import Image from "next/image";
import React ,{ useEffect, useState } from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

const demodata = [
  {
    "testimonial": "\"OVE has been a game-changer for our development process. The quality of developers is top-notch!\"",
    "date": "13/08/2025",
    "author": {
      "name": "Aisha Khan",
      "role": "Senior Python Developer",
      "image": "/assets/developer/Aisha.webp"
    },
    "company": {
      "name": "OVE",
      "logo": "/assets/companies/company1.webp"
    }
  },
  {
    "testimonial": "\"OVE's platform helped us speed up our project delivery. The developers are extremely skilled and professional.\"",
    "date": "12/08/2025",
    "author": {
      "name": "John Doe",
      "role": "Lead Java Developer",
      "image": "/assets/developer/Alexander.webp"
    },
    "company": {
      "name": "Tech Innovations",
      "logo": "/assets/companies/company2.webp"
    }
  },
  {
    "testimonial": "\"We've been able to scale our teams efficiently with OVE. Their expertise in building scalable solutions is unmatched.\"",
    "date": "10/08/2025",
    "author": {
      "name": "Maria Singh",
      "role": "Software Architect",
      "image": "/assets/developer/Miguel.webp"
    },
    "company": {
      "name": "Cloud Solutions",
      "logo": "/assets/companies/company3.webp"
    }
  }
  ,
  {
    "testimonial": "\"We've been able to scale our teams efficiently with OVE. Their expertise in building scalable solutions is unmatched.\"",
    "date": "10/08/2025",
    "author": {
      "name": "Maria Singh",
      "role": "Software Architect",
      "image": "/assets/developer/Miguel.webp"
    },
    "company": {
      "name": "Cloud Solutions",
      "logo": "/assets/companies/company3.webp"
    }
  },
  {
    "testimonial": "\"We've been able to scale our teams efficiently with OVE. Their expertise in building scalable solutions is unmatched.\"",
    "date": "10/08/2025",
    "author": {
      "name": "Maria Singh",
      "role": "Software Architect",
      "image": "/assets/developer/Miguel.webp"
    },
    "company": {
      "name": "Cloud Solutions",
      "logo": "/assets/companies/company3.webp"
    }
  },
  {
    "testimonial": "\"We've been able to scale our teams efficiently with OVE. Their expertise in building scalable solutions is unmatched.\"",
    "date": "10/08/2025",
    "author": {
      "name": "Maria Singh",
      "role": "Software Architect",
      "image": "/assets/developer/Miguel.webp"
    },
    "company": {
      "name": "Cloud Solutions",
      "logo": "/assets/companies/company3.webp"
    }
  }
];

export default function TestimonialDev() {
    const [settings, setSettings] = useState({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,  // Default value for larger screens
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        arrows: false,
        centerMode: true,
        pauseOnHover: true,
        waitForAnimate: false,
        dots: true
    });

    useEffect(() => {
       const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1080) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 4 }));
            } else if (width >= 769) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 3 }));
            } else if (width >= 426) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 2 }));
            } else {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 1, centerMode: false }));
            }
       };
   
       window.addEventListener('resize', handleResize);
       handleResize(); // Initial resize to set correct state
   
       return () => window.removeEventListener('resize', handleResize);
    }, []);

  return ( 
    <>
        <div className="relative text-white">
            {settings ? 
            <Slider {...settings}>
            {demodata.map((item, index) => ( 
                <div key={index} className="p-2">
                    <div className="bg-boxFill p-4 rounded border border-oveblue drop-shadow-sm shadow-white">
                        <p className="text-lg">{item.testimonial}</p>
                        <div className="flex items-center gap-2  mt-4 mb-4">
                            <span>{item.date}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-4">
                            <div className="flex items-center gap-4">
                                <div className="relative aspect-[1/1] w-12 h-12 overflow-hidden">
                                    <Image src={item.author.image} alt={item.author.name} width={50} height={50} className="rounded-full"/>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold">{item.author.name}</h3>
                                    <span className="text-sm">{item.author.role}</span>
                                </div>
                            </div>
                            <div className="bg-white rounded p-1">
                                <Image src={item.company.logo} alt={item.company.name} width={100} height={100} className=""/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
            : <p>Loading...</p>
            }
        </div>
    </>
  );
}