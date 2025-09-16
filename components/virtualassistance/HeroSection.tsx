'use client';
import React from "react";
import Rating from "../Rating";

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 oveVA">
            {/* Text Content */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0 text-white">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-5 font-bold">FULLY MANAGED</div>
                    <h1 className="text-4xl font-bold mb-4">
                        OVE Virtual Assistance to Help You Get Things Done
                    </h1>
                    <p className="text-lg mb-6">
                        Get expert help for your business needs. Fill out the form to get started with our virtual assistance services.
                    </p>
                    <ul className="list-disc hidden pl-5">
                        <li>Professional support</li>
                        <li>Flexible plans</li>
                        <li>24/7 availability</li>
                    </ul>
                    <div className="">
                        <h2 className="flex gap-1 items-center font-bold text-md"><span>RATED </span><Rating rating={5}/><span> ON</span></h2>
                        <div className="flex gap-2">
                            <img src={'/assets/virtualassistance/brandlogo/googlelogo.webp'} width={70} height={50} alt="Google"/>
                            <img src={'/assets/virtualassistance/brandlogo/goodfirmslogo.webp'} width={70} height={50} alt="GoodFirms"/>
                            <img src={'/assets/virtualassistance/brandlogo/clutchlogo.webp'} width={70} height={50} alt="Clutch"/>
                            <img src={'/assets/virtualassistance/brandlogo/productlogo.webp'} width={70} height={50} alt="Product Hunt"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="md:w-1/2 w-full bg-white rounded-lg shadow-lg p-8">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;