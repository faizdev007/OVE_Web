// app/roles/[slug]/page.tsx (no "use client")
const WP = 'https://staging.optimalvirtualemployee.com.au';

export default async function RolePage({ params }: { params: { slug: string } }) {
  const url = `${WP}/wp-json/wp/v2/role?slug=${encodeURIComponent(params.slug)}&_embed&_fields=id,slug,title,content,_embedded`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(await res.text());
  const items = await res.json();
  const role = items[0] ?? null;

  if (!role) return <h1>Not found</h1>;
console.log(role);
  return (
    <>
    
      <h1 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: role.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: role.content?.rendered ?? '' }} />
    </>
  );
}
