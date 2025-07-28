'use client';

import EmailForm from "@/components/EmailForm";
import FaqSection from "@/components/Homepage/faq";

export default function Contact()
{
    return(
        <>
            <section className="bg-black text-white p-16">
                <div className="container mx-auto lg:text-7xl text-2xl font-bold">
                    Contact Us
                </div>
            </section>
            <section>
                <div className="grid lg:grid-cols-2 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto py-12">
                    <div className="flex flex-col justify-around gap-4">
                        <h1 className="font-bold xl:text-7xl lg:text-5xl text-2xl">Get In Touch</h1>
                        <p className="font-bold xl:text-xl text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enimm minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black dark:bg-gray-700 text-white p-10 rounded-md shadow-md text-center flex gap-5 flex-col justify-center items-center">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-16 size-8">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="lg:text-2xl">Phone</h3>
                                <a href={'tel:+12028499199'} aria-label={"12028499199"}>(+1) 2028499199</a>
                            </div>
                            <div className="bg-black dark:bg-gray-700 text-white p-10 rounded-md shadow-md text-center flex gap-5 flex-col justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-16 size-8">
                                    <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                <h3 className="lg:text-2xl">E-Mail</h3>
                                <a className="2xl:text-lg text-xs" href={'mailto:enquiry@optimalvirtualemployee.com'} aria-label={"enquiry@optimalvirtualemployee.com"}>enquiry@optimalvirtualemployee.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:p-16 py-10 px-2 md:px-3">
                        <EmailForm/>
                    </div>
                </div>
            </section>
            <FaqSection/>
        </>
    );
}