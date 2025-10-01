import Blogs from "@/components/virtualassistance/blog/Main";
import { fetchGraphQL } from "@/lib/GraphQL";

// Define Blog type (not as array, but as a single object type)
type Blog = {
  id: string; // GraphQL IDs are often strings, not numbers
  slug: string;
  title: string;
  date: string;
  featuredImage?: {
    sourceUrl?: string;
    title?: string;
  };
  author?: {
    name?: string;
    avatar?: string;
  };
};

const datalist = async (): Promise<Blog[]> => {
    const query = `query GetVABlogPosts{
        posts(first:15){
            nodes{
                id
                slug
                title
                date
                featuredImage{
                    node{
                        sourceUrl
                        title
                    }
                }
                author{
                    node{
                    name
                        mediaItems{
                            nodes{
                            sourceUrl
                            }
                        }
                    }
                }
            }
        }
    }`;

    const dataset = await fetchGraphQL(query);

    const structured: Blog[] = dataset?.posts?.nodes?.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        date: new Date(item.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        }),
        featuredImage: {
            sourceUrl: item.featuredImage?.node?.sourceUrl ?? undefined,
            title: item.featuredImage?.node?.title ?? undefined,
        },
        author: {
            name: item.author?.node?.name ?? "",
            avatar: item.author?.node?.mediaItems?.nodes?.[0]?.sourceUrl ?? "",
        }
    })) ?? [];

  return structured;
};

export default async function BlogPage() {

    const dataset = await datalist();
    
    return (
        <>
            <Blogs blogdata={dataset}/>
        </>
    );
}