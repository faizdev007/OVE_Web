// app/[slug]/page.tsx
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const res = await fetch('https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/pages');
  const pages = await res.json();
  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/pages?slug=${params.slug}`);
  const [page] = await res.json();

  console.log(page);

  if (!page) return <h1>404 Page Not Found</h1>;

  return (
    <div className="relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}
