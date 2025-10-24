import Blogs from "@/components/Pages/blog/Main";
import { fetchGraphQL } from "@/lib/GraphQL";

// Define Blog type (not as array, but as a single object type)
type Blog = {
    id: string; // GraphQL IDs are often strings, not numbers
    slug: string;
    title: string;
    postcategories?: {  
        name?: string;
        slug?: string;
    }[];
    category?: string;
    featuredImage?: {
        sourceUrl?: string;
        title?: string;
    };
    tags?: {
        name?: string;
        slug?: string;
    }[];
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
                postcategories{
                    nodes{
                        name
                        slug
                    }
                }
                featuredImage{
                    node{
                        sourceUrl
                        title
                    }
                }
                tags{
                    nodes{
                    name
                    slug
                    }
                }
                author{
                    node{
                    name
                        avatar{
                            url
                            height
                            width
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
        postcategories: item.postcategories?.nodes?.map((cat: any) => ({
            name: cat.name,
            slug: cat.slug,
        })) ?? [],
        category: item.postcategories?.nodes[0]?.slug ?? "",
        featuredImage: {
            sourceUrl: item.featuredImage?.node?.sourceUrl ?? undefined,
            title: item.featuredImage?.node?.title ?? undefined,
        },
        tags: item.tags?.nodes?.map((tag: any) => ({
            name: tag.name,
            slug: tag.slug,
        })) ?? [],
        author: {
            name: item.author?.node?.name ?? "",
            avatar: item.author?.node?.avatar?.url ?? "",
        }
    })) ?? [];

  return structured;
};

export default async function BlogPage() {

    const dataset = await datalist();
    
    return (
        <>
            <div className="">
                <h1 className="text-3xl py-10 pt-32 bg-headerblue text-white text-center font-bold">
                    Blog
                </h1>
                <Blogs blogdata={dataset}/>
            </div>
        </>
    );
}