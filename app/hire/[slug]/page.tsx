// app/hire/[slug]/page.tsx
import FaqSection from "@/components/Homepage/faq";
import Image from "next/image";
import HireBy from "@/components/Homepage/hireby";
import DevelopersSlider from "@/components/Homepage/developer";
import HeroSection from "@/components/Hire/Hero";
import HireThroughOVE from "@/components/Hire/HireThroughOVE";
import Expertise from "@/components/Hire/Expertise";
import CTA from "@/components/Hire/CTA";
import WSF from "@/components/Hire/WhySearchFor";
import CTable from "@/components/Hire/CompairTable";
import Client from "@/components/Hire/Client";
import ServicePageData from "@/components/ServicePageGraphQL";
import { generateMetadataFromSeo } from "@/app/utils/seo";

type PageProps = {
  params: { slug: string };
};

export default async function Hire({ params }: PageProps) {
  const slug = params.slug; // ✅ no await here
  const data = await ServicePageData({ slug });

  if (!data?.service) {
    return (
      <section className="flex items-center justify-center min-h-[60vh] bg-gray-100 text-white px-4">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-red-500 tracking-widest">404</h1>
          <p className="mt-4 text-xl text-black">Page not found</p>
          <a
            href="/"
            className="mt-8 inline-block bg-oveblue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  const hire = data.service;
  const clients = data.clients;
  const seo = data.service.seo;
  
  generateMetadataFromSeo(seo);

  return (
    <>
      <div className="relative 2xl:top-0">
        <HeroSection hire={hire} />
        <DevelopersSlider hire={hire} />
        <HireThroughOVE hire={hire.hiringProcess} />

        <div className="relative">
          <div className="bg-lightblack dark:hidden">
            <Image src="/assets/white.png" alt="bg" width={1000} height={1000} className="w-full" />
          </div>
          <Expertise hire={hire.expertise} />
        </div>

        <div className="relative h-full bg-oveblue w-full">
          <div className="bg-white dark:hidden">
            <Image src="/assets/oveblue.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <CTA hire={hire.cta?.ctaOneContent} />
        </div>

        <div className="relative">
          <div className="bg-oveblue dark:hidden">
            <Image src="/assets/white.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <WSF hire={hire.whyHireFormOve} />
        </div>

        <div className="relative blackgradiant">
          <div className="bg-white dark:hidden">
            <Image src="/assets/black.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <CTable hire={hire.priceTable} />
        </div>

        <div className="relative">
          <div className="bg-lightblack dark:hidden">
            <Image src="/assets/black.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <Client hire={hire.testimonial} cData={clients} />
        </div>

        <HireBy />

        <div className="relative h-full bg-oveblue w-full">
          <div className="bg-black dark:hidden">
            <Image src="/assets/oveblue.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <CTA hire={hire.cta?.ctaTwoContent} />
        </div>

        <div className="relative">
          <div className="bg-oveblue dark:hidden">
            <Image src="/assets/offWhite.png" alt="compare" width={1000} height={1000} className="w-full" />
          </div>
          <FaqSection hire={hire.serviceFaq?.faqList} />
        </div>
      </div>
    </>
  );
}
