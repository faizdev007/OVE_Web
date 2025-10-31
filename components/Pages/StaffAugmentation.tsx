import Image from "next/image";
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
import HeroForHire from "../main/Hire/HeroForHire";
import AIBlock from "../main/Homepage/AIBlock";
import HiringProcess from "../main/Homepage/hiringprocess";
import TrustedBy from "../main/Homepage/trustedby";

export default function StaffAugmentPage({hireData}:any) {
    return (
        <>
            <HeroForHire hire={hireData?.hirePage}/>
            <DevelopersSlider/>
            <section className="relative py-20 AiBlockBg">
                <div className="absolute top-0 bottom-0 start-0 end-0 bg-black opacity-50 z-10"></div>
                <AIBlock/>
            </section>
            {/* Hiring Process */}
                  <section className="relative py-20">
                    <div className="bg-black hidden">
                      <Image
                        src="/assets/gray.webp"
                        alt="compare"
                        width={1000}
                        height={1000}
                        className="w-full dark:hidden"
                      />
                    </div>
                    <HiringProcess hiringprocessdata={hireData?.hiringProcess}/>
            </section>
            <section className="relative bgb2rLG py-12">
                <div className="bg-white hidden">
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
            <div className="relative bglbLG py-12">
                <div className="bg-white dark:hidden hidden">
                    <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <CTable PriceTable={hireData?.priceTable ?? []} />
            </div>
            <div className=''>
                <TrustedBy/>
            </div>
            <div className="relative py-12">
                <div className="bg-black dark:hidden hidden">
                    <Image src="/assets/white.png" alt="bg" width={1000} height={1000} className="w-full" />
                </div>
                <Expertise Expertise={hireData?.expertise}/>
            </div>
            <div className="relative">
                <div className="bg-oveblue dark:hidden hidden">
                <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <WSF WhyHire={hireData?.whyHire}/>
            </div>
            <section className="relative py-12">
                <div className="bg-black hidden">
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
            <section className="relative bglbLG py-12">
                <div className="bg-black hidden">
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

            <div className="relative h-full bgb2rLG py-12 w-full">
                <div className="bg-gray-100 dark:hidden hidden">
                <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full" />
                </div>
                <CTA CTA={hireData.cta.two}/>
            </div>
            <section className="bglbLG relative py-20">
                <div className="bg-oveblue hidden">
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
            <div className="py-20 relative">
                <FaqSection FAQ={hireData?.faq ?? []} />
            </div>
        </>
    )
}