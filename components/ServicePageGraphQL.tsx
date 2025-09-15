import { fetchGraphQL } from "@/lib/graphqlClient";

export type ServicePageDataType = {
  seo?: {
    title?: string;
    metaDesc?: string;
    opengraphTitle?: string;
    opengraphDescription?: string;
  };
  title?: string;
  slug?: string;
  content?: string;
  featuredImage?: {
    uri?: string;
    sourceUrl?: string;
    title?: string;
  };
  categories?: string[];

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

  testimonial?: {
    title?: string;
    clients?: {
      title?: string;
      slug?: string;
      content?: string;
      rating?: number | string | null;
      featuredImage?: {
        sourceUrl?: string;
        title?: string;
      };
    }[];
  };
};


const ServicePageData = async ({ slug }: { slug: string }) => {
  const QUERY = `
    query GetServicePage($slug: ID!) {
      service(id: $slug, idType: SLUG) {
        categories {
          nodes {
            name
          }
        }
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
        }
        title
        slug
        content
        featuredImage {
          node {
            uri
            sourceUrl
            title
          }
        }
        cta {
          ctaOneContent {
            ctaTitle
            ctaSubtitle
            ctaButtonText
          }
          ctaTwoContent {
            ctaTitle
            ctaSubtitle
            ctaButtonText
          }
        }
        hiringProcess {
          hiring_process_title
          hiringProcessSteps {
            step1 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step2 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step3 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step4 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
          }
        }
        expertise {
          expertiseTitle
          expertiseDescription
          expertiseQna {
            question
            answer
          }
        }
        whyHireFormOve {
          whyHireTitle
          whyHireDiscription
          whyHireImage {
            node {
              sourceUrl
              title
            }
          }
          whyHireQna {
            question
            answer
          }
        }
        serviceFaq {
          faqList {
            faqQuestion
            faqAnswer
          }
        }
        priceTable {
          tableTitle
          tableSubtitle
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
        testimonial {
          testimonialTitle
        }
      }
      clients {
        nodes {
          title
          slug
          content
          clientRating {
            rating
          }
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
        }
      }
    }
  `;

  const raw = await fetchGraphQL(QUERY, { slug });
  const service = raw?.service;
  const clients = raw?.clients?.nodes || [];

  const structured:ServicePageDataType = {
    seo: service?.seo,
    title: service?.title,
    slug: service?.slug,
    content: service?.content,
    featuredImage: service?.featuredImage?.node,
    categories: service?.categories?.nodes?.map((c: any) => c.name),

    cta: {
      one: {
        title: service?.cta?.ctaOneContent?.ctaTitle,
        subtitle: service?.cta?.ctaOneContent?.ctaSubtitle,
        buttonText: service?.cta?.ctaOneContent?.ctaButtonText,
      },
      two: {
        title: service?.cta?.ctaTwoContent?.ctaTitle,
        subtitle: service?.cta?.ctaTwoContent?.ctaSubtitle,
        buttonText: service?.cta?.ctaTwoContent?.ctaButtonText,
      },
    },

    hiringProcess: {
      title: service?.hiringProcess?.hiring_process_title,
      steps: Object.values(service?.hiringProcess?.hiringProcessSteps || {}).map(
        (step: any) => ({
          title: step?.stepTitle,
          description: step?.stepDescribtion,
          image: step?.stepImage?.node,
        })
      ),
    },

    expertise: {
      title: service?.expertise?.expertiseTitle,
      description: service?.expertise?.expertiseDescription,
      qna: service?.expertise?.expertiseQna || [],
    },

    whyHire: {
      title: service?.whyHireFormOve?.whyHireTitle,
      description: service?.whyHireFormOve?.whyHireDiscription,
      image: service?.whyHireFormOve?.whyHireImage?.node,
      qna: service?.whyHireFormOve?.whyHireQna || [],
    },

    faq: service?.serviceFaq?.faqList?.map((f: any) => ({
      question: f.faqQuestion,
      answer: f.faqAnswer,
    })),

    priceTable: {
      title: service?.priceTable?.tableTitle,
      subtitle: service?.priceTable?.tableSubtitle,
      heading: Object.values(service?.priceTable?.tableHeading || {}),
      rows:
        service?.priceTable?.tableRow?.map((r: any) =>
          Object.values(r?.tableData || {})
        ) || [],
    },

    testimonial: {
      title: service?.testimonial?.testimonialTitle,
      clients: clients.map((c: any) => ({
        title: c.title,
        slug: c.slug,
        content: c.content,
        rating: c.clientRating?.rating,
        featuredImage: c.featuredImage?.node,
      })),
    },
  };
  return structured;
};

export default ServicePageData;
