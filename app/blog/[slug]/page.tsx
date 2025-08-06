// app/blog/[slug]/page.tsx

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/posts?slug=${params.slug}`);
  const data = await res.json();
  console.log(data);
    if (!data || data.length === 0) {
        return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
        };
    }   
  const post = data[0];

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ''), // strip HTML tags
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/posts?slug=${params.slug}`, { next: { revalidate: 60 } });
  const data = await res.json();
  const post = data[0];

  return (
    <main className="prose mx-auto p-4">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
