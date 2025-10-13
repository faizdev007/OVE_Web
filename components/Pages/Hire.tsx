import Image from "next/image";
import HeroSection from "../main/Hire/Hero";
import HireBySec from "../main/Hire/HireBySec";
import Hiredeveloper from "../main/Hire/Hiredeveloper";
import OurClientSay from "../main/Hire/OurClientSay";

export default function HirePageComponent({hireData}:any) {
    return (
        <>
            <HeroSection />
            <section className="relative">
                <div className="bg-black">
                    <Image
                    src="/assets/gray.webp"
                    alt="compare"
                    width={1000}
                    height={1000}
                    className="w-full dark:hidden"
                    />
                </div>
                <Hiredeveloper hireDev={hireData?.hirePage?.whyHireDeveloperSection}/>
            </section>
            <section className="relative">
                <div className="bg-gray-100">
                    <Image
                    src="/assets/black.png"
                    alt="compare"
                    width={1000}
                    height={1000}
                    className="w-full dark:hidden"
                    />
                </div>
                <HireBySec />
            </section>
            <section className="relative">
                <div className="bg-black">
                    <Image
                    src="/assets/gray.webp"
                    alt="compare"
                    width={1000}
                    height={1000}
                    className="w-full dark:hidden"
                    />
                </div>
                <OurClientSay wochts={hireData?.hirePage?.whatOurClientHaveToSay}/>
            </section>
        </>
    )
}