import Image from "next/image";
import HeroSection from "../main/Hire/Hero";
import HireBySec from "../main/Hire/HireBySec";
import Hiredeveloper from "../main/Hire/Hiredeveloper";
import OurClientSay from "../main/Hire/OurClientSay";
import DevelopersSlider from "../main/Homepage/developer";
import CTA from "../main/Hire/CTA";
import HireThroughOVE from "../main/Hire/HireThroughOVE";
import Expertise from "../main/Hire/Expertise";
import CTable from "../main/Hire/CompairTable";
import FaqSection from "../main/Homepage/faq";
import WSF from "../main/Hire/WhySearchFor";

export default function HirePageComponent({hireData}:any) {
    return (
        <>
            <HeroSection />
            <DevelopersSlider/>
            <HireThroughOVE hiringProcess={hireData?.hiringProcess}/>
            <div className="relative">
                <div className="bg-lightblack dark:hidden">
                    <Image src="/assets/white.png" alt="bg" width={1000} height={1000} className="w-full" />
                </div>
                <Expertise Expertise={hireData?.expertise}/>
            </div>
            <section className="relative bg-oveblue">
                <div className="bg-white">
                    <Image
                    src="/assets/oveblue.png"
                    alt="compare"
                    width={1000}
                    height={1000}
                    className="w-full dark:hidden"
                    />
                </div>
                <CTA CTA={hireData.cta.one}/>
            </section>
            <div className="relative">
                <div className="bg-oveblue dark:hidden">
                <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <WSF WhyHire={hireData?.whyHire}/>
            </div>
            <div className="relative blackgradiant">
                <div className="bg-white dark:hidden">
                    <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <CTable PriceTable={hireData?.priceTable ?? []} />
            </div>
            <section className="relative">
                <div className="bg-[#404040]">
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
            <div className="relative hidden">
                <div className="bg-lightblack dark:hidden">
                    <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
            </div>
            <section className="relative bg-gray-100">
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

            <div className="relative h-full bg-oveblue w-full">
                <div className="bg-gray-100 dark:hidden">
                <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <CTA CTA={hireData.cta.two}/>
            </div>
            <section className="relative bg-gray-100">
                <div className="bg-oveblue">
                    <Image
                    src="/assets/gray.webp"
                    alt="compare"
                    width={1000}
                    height={1000}
                    className="w-full dark:hidden"
                    />
                </div>
                <Hiredeveloper hireDev={hireData?.hirePage?.whyHireDeveloperSection}/>
                <FaqSection FAQ={hireData?.faq ?? []} />
            </section>
        </>
    )
}