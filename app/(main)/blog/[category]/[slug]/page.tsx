import { fetchGraphQL } from "@/lib/GraphQL";
import SingleBlog from "@/components/Pages/blog/Single";

// Define Blog type
type Blog = {
  id: string;
  slug: string;
  title: string;
  content?: string;
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

// Fetch single blog by slug
const getSingleBlog = async (slug: string): Promise<Blog | null> => {
  const query = `
    query GetSingleBlogPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        slug
        title
        content
        tags {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL(query, { slug });

  const post = response?.post;

  if (!post) return null;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    content: post.content,
    featuredImage: post.featuredImage?.node,
    tags: post.tags?.nodes,
    author: {
      name: post.author?.node?.name,
      avatar: post.author?.node?.avatar?.url,
    }
  };
};

// Example Next.js Page
export default async function Page({ params }: any) {

    const awaitedParams = await params;

    const currentslug = awaitedParams.slug;

    const blog = await getSingleBlog(currentslug);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <SingleBlog {...blog} />
    );
}
