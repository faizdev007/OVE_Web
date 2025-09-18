// app/hire/[slug]/page.tsx
import HirePageData from "@/components/HirePageGraphQL";
import ServicePage from "@/components/Pages/ServicePage";

// ✅ Page component fetches its own data
export default async function ServicesPage({ params }: any) {
  const { slug } = params;
  const data = await HirePageData({ slug });

  const category = data?.categories || "";

  return <ServicePage/>

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
