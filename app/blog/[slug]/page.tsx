interface PostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: PostProps) {
    const res = await fetch(`https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/posts?slug=${params.slug}`);
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