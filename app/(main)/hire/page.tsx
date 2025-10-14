import HirePageComponent from "@/components/Pages/Hire";
import { fetchGraphQL } from "@/lib/GraphQL";
import './custome.css';

// ----------------------
// ✅ Type Definitions
// ----------------------
type HirePageDataType = {
  hirePage: {
    content: string;
    whyHireDeveloperSection: {
      whdsTitle: string;
      whdsList: { topicTitle: string; topicDescription: string }[];
    };
    whatOurClientHaveToSay: {
      wochtsTitle: string;
      wochtsSubtitle: string;
      wochtsClients: {
        clientName: string;
        clientDesignation: string;
        clientDescription: string;
        clientRatting: number;
        clientThumbnail: { node: { sourceUrl: string; title: string } } | null;
        clientVideo: { title: string; url: string } | null;
      }[];
    };
  } | null;
  seo: {  
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
  } | null;

  cta?: {
    one?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
    };
    two?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
    };
  };
  
  hiringProcess?: {
    title?: string;
    steps?: {
      title?: string;
      description?: string;
      image?: {
        title?: string;
        sourceUrl?: string;
      };
    }[];
  };

  expertise?: {
    title?: string;
    description?: string;
    qna?: {
      question: string;
      answer: string;
    }[];
  };

  whyHire?: {
    title?: string;
    description?: string;
    image?: {
      sourceUrl?: string;
      title?: string;
    };
    qna?: {
      question: string;
      answer: string;
    }[];
  };

  faq?: {
    question: string;
    answer: string;
  }[];

  priceTable?: {
    title?: string;
    subtitle?: string;
    heading: string[];
    rows: string[][];
  };

  // Testimonials from clients
  testimonial?: {
    title?: string;
    clients?: {
      title?: string;
      content?: string;
      designation?:string;
      rating?: number | string | null;
      featuredImage?: {
        sourceUrl?: string;
        title?: string;
      };
    }[];
  };
};

// ----------------------
// ✅ GraphQL Query Function
// ----------------------
async function getHomePageData(): Promise<HirePageDataType | null> {
  const QUERY = `
    query HirePageData {
        page(id: "hire", idType: URI) {
          title
          content
          seo{
            title
            metaDesc
            opengraphTitle
            opengraphDescription
          }
          hirePage {
            whyHireDeveloperSection {
              whdsTitle
              whdsList {
                topicTitle
                topicDescription
              }
            }
            whatOurClientHaveToSay{
              wochtsTitle
              wochtsSubtitle
              wochtsClients{
                clientName
                clientDesignation
                clientDescription
                clientRatting
                clientThumbnail{
                  node{
                    sourceUrl
                    title
                  }
                }
                clientVideo{
                  title
                  url
                }
              }
            }
          }    
          hiringProcess{
            hiring_process_title
            hiringProcessSteps{
              step1{
                stepTitle
                stepImage{
                  node{
                    sourceUrl
                    title
                  }
                }
                stepDescribtion
              }
              step2{
                stepTitle
                stepImage{
                  node{
                    sourceUrl
                    title
                  }
                }
                stepDescribtion
              }
              step3{
                stepTitle
                stepImage{
                  node{
                    sourceUrl
                    title
                  }
                }
                stepDescribtion
              }
              step4{
                stepTitle
                stepImage{
                  node{
                    sourceUrl
                    title
                  }
                }
                stepDescribtion
              }
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
          cta{
            ctaOneContent{
              ctaTitle
              ctaSubtitle
              ctaButtonText
            }
            ctaTwoContent{
              ctaTitle
              ctaSubtitle
              ctaButtonText
            }
          }
          expertise{
            expertiseTitle
            expertiseDescription
            expertiseQna{
              question
              answer
            }
          }
          priceTable{
            tableTitle
            tableSubtitle
            tableHeading{
              heading1
              heading2
              heading3
              heading4
              heading5
              heading6
            }
            tableRow{
              tableData{
                data1
                data2
                data3
                data4
                data5
                data6
              }
            }
          }
        }
      }
  `;

  const data = await fetchGraphQL(QUERY);
  const hire = data?.page;

  if (!hire) return null;

  // ----------------------
  // ✅ Restructure data exactly to type HirePageDataType
  // ----------------------
  const structured: HirePageDataType = {
    hirePage: {
      content: hire?.content || "",
      whyHireDeveloperSection: {
        whdsTitle: hire?.hirePage?.whyHireDeveloperSection?.whdsTitle || "",
        whdsList:
          hire?.hirePage?.whyHireDeveloperSection?.whdsList?.map(
            (item: any) => ({
              topicTitle: item?.topicTitle || "",
              topicDescription: item?.topicDescription || "",
            })
          ) || [],
      },
      whatOurClientHaveToSay: {
        wochtsTitle: hire?.hirePage?.whatOurClientHaveToSay?.wochtsTitle || "",
        wochtsSubtitle:
          hire?.hirePage?.whatOurClientHaveToSay?.wochtsSubtitle || "",
        wochtsClients:
          hire?.hirePage?.whatOurClientHaveToSay?.wochtsClients?.map(
            (client: any) => ({
              clientName: client?.clientName || "",
              clientDesignation: client?.clientDesignation || "",
              clientDescription: client?.clientDescription || "",
              clientRatting: Number(client?.clientRatting) || 0,
              clientThumbnail: client?.clientThumbnail || null,
              clientVideo: client?.clientVideo || null,
            })
          ) || [],
      },
    },
    seo: hire?.seo || null,

    cta: {
      one: {
        title: hire?.cta?.ctaOneContent?.ctaTitle,
        subtitle: hire?.cta?.ctaOneContent?.ctaSubtitle,
        buttonText: hire?.cta?.ctaOneContent?.ctaButtonText,
      },
      two: {
        title: hire?.cta?.ctaTwoContent?.ctaTitle,
        subtitle: hire?.cta?.ctaTwoContent?.ctaSubtitle,
        buttonText: hire?.cta?.ctaTwoContent?.ctaButtonText,
      },
    },

    hiringProcess: {
      title: hire?.hiringProcess?.hiring_process_title || "",
      steps: Object.values(hire?.hiringProcess?.hiringProcessSteps || {}).map(
        (step: any) => ({
          title: step?.stepTitle || "",
          description: step?.stepDescribtion || "",
          image: step?.stepImage?.node || undefined,
        })
      ),
    },

    expertise: {
      title: hire?.expertise?.expertiseTitle || "",
      description: hire?.expertise?.expertiseDescription || "",
      qna: hire?.expertise?.expertiseQna || [],
    },

    whyHire: {
      title: hire?.whyHireFormOve?.whyHireTitle || "",
      description: hire?.whyHireFormOve?.whyHireDiscription || "",
      image: hire?.whyHireFormOve?.whyHireImage?.node || undefined,
      qna: hire?.whyHireFormOve?.whyHireQna || [],
    },

    faq: [], // currently not in query but defined in type

    priceTable: {
      title: hire?.priceTable?.tableTitle || "",
      subtitle: hire?.priceTable?.tableSubtitle || "",
      heading: Object.values(hire?.priceTable?.tableHeading || {}),
      rows:
        hire?.priceTable?.tableRow?.map((r: any) =>
          Object.values(r?.tableData || {})
        ) || [],
    },

    testimonial: {
      title: "",
      clients: [],
    },
  };

  return structured;
}

export default async function HirePage() {
  const hirePageData = await getHomePageData();
  return (
    <HirePageComponent hireData={hirePageData}/>
  )
}
