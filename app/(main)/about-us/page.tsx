
// ----------------------
// ✅ Type Definitions

import AboutPageComponent from "@/components/Pages/AboutUs";
import { fetchGraphQL } from "@/lib/GraphQL";
import '../about-us/custome.css';

// ----------------------
type AboutPageDataType = {
    hero: {
        description: string;
        featuredImage?: {
            sourceUrl?: string;
            title?: string;
        };
    };
        howWeWork: {
        hwwImage?: {
            sourceUrl?: string;
            title?: string;
        };
        hwwDescription: string;
    }[];
        executiveTeam: {
        etName: string;
        etDesignation: string;
        etLinkedin: string;
        etImage?: string;
    }[];
    seo: {
        title?: string;
        metaDesc?: string;
        opengraphTitle?: string;
        opengraphDescription?: string;
    };
};

// ----------------------
// ✅ GraphQL Query Function
// ----------------------
async function getAboutPageData(): Promise<AboutPageDataType | null> {
  const QUERY = `
    query AboutPageData {
        pageBy(uri: "about-us") {
            seo{
                title
                metaDesc
                opengraphTitle
                opengraphDescription
            }
            content
            featuredImage{
                node{
                    sourceUrl
                    title
                }
            }
            aboutUs{
                aboutusHowWeWork{
                hwwImage{
                node{
                    sourceUrl
                    title
                }
                }
                hwwDescription
            }
            aboutusExecutiveTeam{
                etName
                etDesignation
                etLinkedin
                etImage{
                    node{
                        sourceUrl
                    }
                }
            }
            }
        }
    }
  `;

  const data  = await fetchGraphQL(QUERY);

  const aboutUs = data?.pageBy?.aboutUs;

  if (!aboutUs) return null;

  return {
    hero: {
        description: data?.pageBy?.content || "",
        featuredImage: data?.pageBy?.featuredImage?.node || {},
    },
    howWeWork: data?.pageBy?.aboutUs?.aboutusHowWeWork || [],
    executiveTeam: aboutUs.aboutusExecutiveTeam?.map((member: any) =>{
        return {
            etName: member.etName,
            etDesignation: member.etDesignation,
            etLinkedin: member.etLinkedin,
            etImage: member.etImage?.node?.sourceUrl || "",
        };
    } )|| [],
    seo: data?.pageBy?.seo || {},
  };
}
export default async function AboutPage()
{
    const data = await getAboutPageData();

    if (!data) return null; 

    return <AboutPageComponent data={data} />;
}