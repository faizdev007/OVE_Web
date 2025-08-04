import { Metadata } from "next";

// `params` is directly passed as an object — no need to wrap it in a `PostProps` interface unless you define it correctly.

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/posts?slug=${params.slug}`,
    { next: { revalidate: 60 } } // optional revalidation for ISR
  );

  const data = await res.json();
  const post = data[0];

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}