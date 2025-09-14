// app/hire/[slug]/page.tsx
import ServicePageData from "@/components/ServicePageGraphQL";
import { generateMetadataFromSeo } from "@/app/utils/seo";
import type { Metadata } from "next";
import RolePage from "@/components/Pages/RolePage";
import SkillPage from "@/components/Pages/SkillPage";

// Define a shared type for clarity
type PageProps = {
  params: { slug: string };
};

// ✅ Metadata only
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params; // ❌ no await
  const data = await ServicePageData({ slug });
  const seo = data?.seo;
  return generateMetadataFromSeo(seo || {});
}

// ✅ Page component fetches its own data
export default async function HirePage({ params }: PageProps) {
  const { slug } = params; // ❌ no await
  const data = await ServicePageData({ slug });

  const category = data?.categories || [];

  if (category[0]?.toLowerCase() === "role") {
    return <RolePage PageData={data} />;
  } else if (category[0]?.toLowerCase() === "skill") {
    return <SkillPage PageData={data} />;
  }

  // fallback (optional)
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gray-100 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-red-500 tracking-widest">404</h1>
        <p className="mt-4 text-xl text-black">Page not found</p>
        <a
          href="/"
          className="mt-8 inline-block bg-oveblue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
