import Client from "@/components/main/Hire/Client";
import CTable from "@/components/main/Hire/CompairTable";
import CTA from "@/components/main/Hire/CTA";
import HeroForHire from "@/components/main/Hire/HeroForHire";
import Hiredeveloper from "@/components/main/Hire/Hiredeveloper";
import OurClientSay from "@/components/main/Hire/OurClientSay";
import AIBlock from "@/components/main/Homepage/AIBlock";
import "@/app/(main)/hire/custome.css";

import DevelopersSlider from "@/components/main/Homepage/developer";
import FaqSection from "@/components/main/Homepage/faq";
import HireBy from "@/components/main/Homepage/hireby";
import HiringProcess from "@/components/main/Homepage/hiringprocess";
import TrustedBySection from "@/components/main/Homepage/trustedby2";
import { fetchGraphQL } from "@/lib/graphqlClient";
import Image from "next/image";
import WSF from "@/components/main/Hire/WhySearchFor";

// ----------------------
// ✅ Type Definitions
// ----------------------
type StaffAugmentPageDataType = {
  title: string;
  content: string;
  seo: {
    opengraphUrl: string;
    opengraphTitle: string;
    metaDesc: string;
    title: string;
    opengraphDescription: string;
  };
  cta: {
    ctaOneContent: {
      buttonText: string;
      subtitle: string;
      title: string;
    };
    ctaTwoContent: {
      buttonText: string;
      subtitle: string;
      title: string;
    };
  };
  hirePage: {
    whatOurClientHaveToSay: {
      wochtsClients: {
        clientVideo: { url: string; title: string };
        clientRatting: string;
        clientThumbnail: { sourceUrl: string };
        clientDescription: string;
        clientDesignation: string;
      }[];
    };
    whyHireDeveloperSection: {
      whdsTitle: string;
      whdsList: {
        topicTitle: string;
        topicDescription: string;
      }[];
    };
  };
  priceTable: {
    tableSubtitle: string;
    tableTitle: string;
    tableHeading: {
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
      heading5: string;
      heading6: string;
    };
    tableRow: {
      tableData: {
        data1: string;
        data2: string;
        data3: string;
        data4: string;
        data5: string;
        data6: string;
      };
    }[];
  };
  serviceFaq: {
    faqList: { question: string; answer: string }[];
  };
  WhyHire:{
    title:string;
    description:string;
    image:{
        node:{
            sourceUrl:string;
            title:string;
        }
    }
    qna:{
        question:string;
        answer:string;
    }
    }
};

// ----------------------
// ✅ GraphQL Query Function
// ----------------------
async function getStaffAugmentPageData(): Promise<StaffAugmentPageDataType | null> {
    const QUERY = `
    query staffaugmentPageData {
        page(id: "staff-augmentation",idType:URI){
            title
            content
            seo {
            opengraphUrl
            opengraphTitle
            metaDesc
            title
            opengraphDescription
            }
            cta {
            ctaOneContent {
                ctaButtonText
                ctaSubtitle
                ctaTitle
            }
            ctaTwoContent {
                ctaButtonText
                ctaSubtitle
                ctaTitle
            }
            }
            hirePage{
            whatOurClientHaveToSay{
                wochtsClients{
                clientVideo{
                    url
                    title
                }
                clientRatting
                clientThumbnail{
                    node{sourceUrl}
                }
                clientDescription
                clientDesignation
                }
            }
            whyHireDeveloperSection{
                whdsTitle
                whdsList{
                topicTitle
                topicDescription
                }
            }
            }
            priceTable {
            tableSubtitle
            tableTitle
            tableHeading {
                heading1
                heading2
                heading3
                heading4
                heading5
                heading6
            }
            tableRow {
                tableData {
                data1
                data2
                data3
                data4
                data5
                data6
                }
            }
            }
            serviceFaq {
            faqList {
                faqAnswer
                faqQuestion
            }
            }
            whyHireFormOve{
            whyHireTitle
            whyHireDiscription
            whyHireImage{
                node{
                sourceUrl
              title
                }
            }
            whyHireQna{
                question
                answer
            }
            }
        }
    }
  `;

    const data = await fetchGraphQL(QUERY);
    const page = data?.page;

    if (!page) return null;

    return {
        title: page.title,
        content: page.content,
        seo: page.seo,
        cta: {
        ctaOneContent: {
            buttonText: page.cta?.ctaOneContent?.ctaButtonText ?? "",
            subtitle: page.cta?.ctaOneContent?.ctaSubtitle ?? "",
            title: page.cta?.ctaOneContent?.ctaTitle ?? "",
        },
        ctaTwoContent: {
            buttonText: page.cta?.ctaTwoContent?.ctaButtonText ?? "",
            subtitle: page.cta?.ctaTwoContent?.ctaSubtitle ?? "",
            title: page.cta?.ctaTwoContent?.ctaTitle ?? "",
        },
        },
        hirePage: {
            whatOurClientHaveToSay: {
                wochtsClients:
                page.hirePage?.whatOurClientHaveToSay?.wochtsClients?.map((c: any) => ({
                    clientVideo: c.clientVideo,
                    clientRatting: c.clientRatting,
                    clientThumbnail: { sourceUrl: c.clientThumbnail?.node?.sourceUrl },
                    clientDescription: c.clientDescription,
                    clientDesignation: c.clientDesignation,
                })) || [],
            },
            whyHireDeveloperSection: {
                whdsTitle: page.hirePage?.whyHireDeveloperSection?.whdsTitle ?? "",
                whdsList:
                page.hirePage?.whyHireDeveloperSection?.whdsList?.map((item: any) => ({
                    topicTitle: item.topicTitle,
                    topicDescription: item.topicDescription,
                })) || [],
            },
        },
        priceTable: {
        tableSubtitle: page.priceTable?.tableSubtitle ?? "",
        tableTitle: page.priceTable?.tableTitle ?? "",
        tableHeading: page.priceTable?.tableHeading,
        tableRow:
            page.priceTable?.tableRow?.map((row: any) => ({
            tableData: row.tableData,
            })) || [],
        },
        serviceFaq: {
        faqList:
            page.serviceFaq?.faqList?.map((faq: any) => ({
            question: faq.faqQuestion,
            answer: faq.faqAnswer,
            })) || [],
        },
        WhyHire: {
            title:page.whyHireFormOve.whyHireTitle,
            description:page.whyHireFormOve.whyHireDiscription,
            image:page.whyHireFormOve.whyHireImage,
            qna:page.whyHireFormOve?.whyHireQna ?? [],
        }
    };
}

// ----------------------
// ✅ Main Page Component (Server)
// ----------------------
export default async function StaffAugment() {
    const { data } = await getStaffAugmentPageData().then((res) => ({ data: res }));

    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500">Failed to load page data.</p>
            </div>
        );
    }

    return (
        <div className="">
            {/* Hero Section */}
            <HeroForHire hire={data}/>

            <section className="relative py-20 AiBlockBg">
                <div className="absolute top-0 bottom-0 start-0 end-0 bg-black opacity-50 z-10"></div>
                <AIBlock />
            </section>

            {/* Developers Section */}
            <DevelopersSlider />

            <div className="relative">
                <WSF WhyHire={data.WhyHire}/>
            </div>

            <section className="relative bgb2rLG py-12">
                <CTA CTA={data.cta.ctaOneContent}/>
            </section>

            <div className="relative bglbLG py-12">
                <CTable />
            </div>

            <div className="relative">
                <Client/>
            </div>

            <section className="relative bg-gray-700 py-12">
                <CTA CTA={data.cta.ctaTwoContent}/>
            </section>

            {/* Trusted By Section */}
            <section className="relative py-20 bg-headerblue">
                <TrustedBySection trustedbysection={{title: "Trusted by", subtitle: "Trusted by Companies That Shape the Future From Fortune 500 leaders to next-gen disruptors, our developers power innovation across industries — with speed, skill, and accountability at the core",logos: [], keyMetrics:[]}} />
            </section>

            <section className="relative bglbLG py-20">
                <OurClientSay />
            </section>

            <section className="relative py-12">
                <HireBy />
            </section>

            <section className="bglbLG relative py-20">
                <Hiredeveloper hireDev={data.hirePage.whyHireDeveloperSection}/>
            </section>

            {/* FAQ */}
            <section className="relative py-20">
                <FaqSection FAQ={data.serviceFaq.faqList} />
            </section>
        </div>
    );
}
