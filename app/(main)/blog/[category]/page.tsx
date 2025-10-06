import Cateposts from "@/components/Pages/blog/Cateposts";
import { fetchGraphQL } from "@/lib/GraphQL";

// Define Blog type (not as array, but as a single object type)
type Blog = {
  id: string; // GraphQL IDs are often strings, not numbers
  slug: string;
  title: string;
  featuredImage?: {
    sourceUrl?: string;
    title?: string;
  };
  author?: {
    name?: string;
    avatar?: string;
  };
};

type CategoryBlog = {
    id: string;
    slug: string;
    name: string;
    seo?: {
        breadcrumbs?: {
            url?: string;
            text?: string;
        }[];
    };
    posts?: {
        nodes?: Blog[];
    };
};

const datalist = async (slug: string): Promise<CategoryBlog | null> => {
    const query = `query GetCategoryBlogPosts($slug: ID!) {
    postcategories(id: $slug, idType: SLUG) {
            id
            slug
            name
            seo {
                breadcrumbs {
                    url
                    text
                }
            }
            posts{
            nodes{
                id
                slug
                title
                author {
                        node {
                            name
                            avatar {
                                url
                                foundAvatar
                            }
                        }
                }
                featuredImage {
                    node {
                        title
                        sourceUrl
                        }
                    }
                }
            }
        }
    }`;

    const response = await fetchGraphQL(query, { slug });

    if (!response?.postcategories) return null;

  return {
    id: response?.postcategories.id,
    slug: response?.postcategories.slug,
    name: response?.postcategories.name,
    seo: response?.postcategories.seo ?? undefined,
    posts: {
      nodes:
        response?.postcategories.posts?.nodes?.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          title: item.title,
          featuredImage: {
            sourceUrl: item.featuredImage?.node?.sourceUrl ?? undefined,
            title: item.featuredImage?.node?.title ?? undefined,
          },
          author: {
            name: item.author?.node?.name ?? "",
            avatar: item.author?.node?.avatar?.url ?? "",
          },
        })) ?? [],
    },
  };
};

export default async function BlogPage({ params }: any) {

    const awaitedParams = await params;

    const currentslug = awaitedParams.category;

    const dataset = await datalist(currentslug);

    return (
        <Cateposts listdata={dataset}/>
    );
}