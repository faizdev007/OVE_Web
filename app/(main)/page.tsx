import OurClientSay from "@/components/main/Hire/OurClientSay";
import AIBlock from "@/components/main/Homepage/AIBlock";
import "@/components/main/Homepage/customstyle.css";

import DevelopersSlider from "@/components/main/Homepage/developer";
import FaqSection from "@/components/main/Homepage/faq";
import Herosection from "@/components/main/Homepage/hero";
import HireBy from "@/components/main/Homepage/hireby";
import HiringProcess from "@/components/main/Homepage/hiringprocess";
import OurProjectsSlider from "@/components/main/Homepage/projects";
import StaffAugment from "@/components/main/Homepage/StaffAugmentation";
import TrustedBadges from "@/components/main/Homepage/TrustedBadges";
import TrustedBySection from "@/components/main/Homepage/trustedby2";
import WhyChooseUs from "@/components/main/Homepage/whyChooseUs";
import { fetchGraphQL } from "@/lib/graphqlClient";
import Image from "next/image";

// ----------------------
// ✅ Type Definitions
// ----------------------
type HomePageDataType = {
  aiBlock:{
      titleOne:string;
      titleTwo:string;
      mainBlock:{
      aiBlockImage:{
          node:{
          sourceUrl:string;
          title:string;
          }
      }
      aiBlockTextarea:string;
      }
      aiBlockBtnText:string;
  };
  hero: {
    title: string;
    description: string;
    buttons: {
      action1?: { title: string; url: string };
      action2?: { title: string; url: string };
    };
    videoLink?: { url: string };
  };
  trustedByScroll: { logos: string[] };
  hiringProcess: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    ctaTitle: string;
  };
  trustedBy: {
    title: string;
    subtitle: string;
    logos: {url:string; title:string}[];
    keyMetrics: { number: string; title: string }[];
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      span: string;
      image: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    list: {
      label: string;
      details: string;
      image: string;
    }[];
  };
  faq: {
    title: string;
    list: { question: string; answer: string }[];
  };
};

// ----------------------
// ✅ GraphQL Query Function
// ----------------------
async function getHomePageData(): Promise<HomePageDataType | null> {
  const QUERY = `
    query HomePageData {
      home {
        aiBlock{
          titleOne
          titleTwo
          mainBlock{
            aiBlockImage{
              node{
                sourceUrl
                title
              }
            }
            aiBlockTextarea
          }
          aiBlockBtnText
        }
        homePage {
          homehero {
            heroTitle
            heroDescription
            heroButtonAction {
              action1 { title url }
              action2 { title url }
            }
            videoLink { url }
          }
          hometrustedbyscroll {
            companiesLogos {
              companyLogo {
                node { sourceUrl }
              }
            }
          }
          homeHiringProcess {
            hiringProcessTitle
            hiringProcessSubtitle
            hiringProcessSteps {
              hpsTitle
              hspDiscription
            }
            hiringProcessCtaTitle
          }
          homeTrustedBy {
            trustedByTitle
            trustedBySubtitle
            trustedByCompaniesLogo {
              tbcLogo { node { sourceUrl title } }
            }
            trustedByKeymetrics {
              tbkmNumber
              tbkmTitle
            }
          }
          homeWhyChooseUs {
            whyChooseUsTitle
            whyChooseUsSubtitle
            whyChooseUsSteps {
              wcusTitle
              wcusSpan
              wcusImage { node { sourceUrl } }
              wcusDiscription
            }
          }
          homeProjects {
            projectsTitle
            projectsSubtitle
            singleProject {
              spLable
              spDetails
              spImage { node { sourceUrl } }
            }
          }
          homeFaq {
            faqTitle
            faqs {
              sfaqQuestion
              sfaqAnswer
            }
          }
        }
      }
    }
  `;

  const data  = await fetchGraphQL(QUERY);
  const home = data?.home?.homePage;
  if (!home) return null;

  return {
    aiBlock: home.aiBlock,
    hero: {
      title: home.homehero?.heroTitle,
      description: home.homehero?.heroDescription,
      buttons: home.homehero?.heroButtonAction,
      videoLink: home.homehero?.videoLink,
    },
    trustedByScroll: {
      logos:
        home.hometrustedbyscroll?.companiesLogos?.map(
          (c: any) => c?.companyLogo?.node?.sourceUrl
        ) || [],
    },
    hiringProcess: {
      title: home.homeHiringProcess?.hiringProcessTitle,
      subtitle: home.homeHiringProcess?.hiringProcessSubtitle,
      steps:
        home.homeHiringProcess?.hiringProcessSteps?.map((s: any) => ({
          title: s.hpsTitle,
          description: s.hspDiscription,
        })) || [],
      ctaTitle: home.homeHiringProcess?.hiringProcessCtaTitle,
    },
    trustedBy: {
      title: home.homeTrustedBy?.trustedByTitle,
      subtitle: home.homeTrustedBy?.trustedBySubtitle,
      logos:
        home.homeTrustedBy?.trustedByCompaniesLogo?.map(
          (l: any) => { return {url: l?.tbcLogo?.node?.sourceUrl, title: l?.tbcLogo?.node?.title} }
        ) || [],
      keyMetrics:
        home.homeTrustedBy?.trustedByKeymetrics?.map((m: any) => ({
          number: m.tbkmNumber,
          title: m.tbkmTitle,
        })) || [],
    },
    whyChooseUs: {
      title: home.homeWhyChooseUs?.whyChooseUsTitle,
      subtitle: home.homeWhyChooseUs?.whyChooseUsSubtitle,
      steps:
        home.homeWhyChooseUs?.whyChooseUsSteps?.map((s: any) => ({
          title: s.wcusTitle,
          span: s.wcusSpan,
          image: s?.wcusImage?.node?.sourceUrl,
          description: s.wcusDiscription,
        })) || [],
    },
    projects: {
      title: home.homeProjects?.projectsTitle,
      subtitle: home.homeProjects?.projectsSubtitle,
      list:
        home.homeProjects?.singleProject?.map((p: any) => ({
          label: p.spLable,
          details: p.spDetails,
          image: p.spImage?.node?.sourceUrl,
        })) || [],
    },
    faq: {
      title: home.homeFaq?.faqTitle,
      list:
        home.homeFaq?.faqs?.map((f: any) => ({
          question: f.sfaqQuestion,
          answer: f.sfaqAnswer,
        })) || [],
    },
  };
}

// ----------------------
// ✅ Main Page Component (Server)
// ----------------------
export default async function Home() {
  const { data } = await getHomePageData().then((res) => ({ data: res }));

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Failed to load homepage data.</p>
      </div>
    );
  }

  return (
    <div className="">
      {/* Hero Section */}
      <Herosection herodata={data} />

      {/* Developers Section */}
      <DevelopersSlider />

      <section className="relative py-20 AiBlockBg">
        <div className="absolute top-0 bottom-0 start-0 end-0 bg-black opacity-50 z-10"></div>
        <AIBlock aiBlock={data.aiBlock}/>
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
        <HiringProcess hiringprocessdata={data.hiringProcess}/>
      </section>

      <section className="relative bglbLG py-20">
        <StaffAugment/>
      </section>

      <section className="relative bglbLG py-20">
        <TrustedBadges/>
      </section>

      <section className="relative bglbLG py-20">
          <div className="bg-black hidden">
              <Image
              src="/assets/gray.webp"
              alt="compare"
              width={1000}
              height={1000}
              className="w-full dark:hidden"
              />
          </div>
          <OurClientSay/>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-20 bg-headerblue">
        <div className="bg-gray-100 hidden">
          <Image
            src="/assets/black.png"
            alt="compare"
            width={1000}
            height={1000}
            className="w-full dark:hidden"
          />
        </div>
        <TrustedBySection trustedbysection={data.trustedBy}/>
      </section>

      {/* Why Choose Us */}
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
        <WhyChooseUs whychooseus={data.whyChooseUs}/>
      </section>

      {/* Projects */}
      <section className="relative py-20 bgb2LG">
        <div className="bg-gray-100 hidden">
          <Image
            src="/assets/black.png"
            alt="compare"
            width={1000}
            height={1000}
            className="w-full dark:hidden"
          />
        </div>
        <OurProjectsSlider projectslist={data.projects}/>
      </section>

      {/* FAQ */}
      <section className="relative bglbLG py-20">
        <div className="bg-black hidden">
          <Image
            src="/assets/gray.webp"
            alt="compare"
            width={1000}
            height={1000}
            className="w-full dark:hidden"
          />
        </div>
        <FaqSection FAQ={data.faq.list} />
      </section>
    </div>
  );
}
