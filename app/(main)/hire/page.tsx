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
};

// ----------------------
// ✅ GraphQL Query Function
// ----------------------
async function getHomePageData(): Promise<HirePageDataType | null> {
  const QUERY = `
    query HirePageData {
      page(id: "hire", idType: URI) {
        content
        seo {
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
      }
    }
  `;

  const data  = await fetchGraphQL(QUERY);
  const hire = data?.page;
  if (!hire) return null;

  return hire;
}

export default async function HirePage() {
  const hirePageData = await getHomePageData();
  return (
    <HirePageComponent hireData={hirePageData}/>
  )
}
