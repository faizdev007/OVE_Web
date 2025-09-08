// app/components/SeoMeta.tsx
"use client";

import Head from "next/head";

interface SeoProps {
  title?: string;
  metaDesc?: string;
  metaKeywords?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphUrl?: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

export default function SeoMeta({ seo }: { seo: SeoProps }) {
  if (!seo) return null;

  console.log("Rendering SEO Meta with data:", seo); // Debugging line
  
  return (
    <Head>
      {/* Standard SEO */}
      {seo.title && <title>{seo.title ?? 'Find and Hire Developers for Startups — Optimal Virtual Employee — Top 3% Remote Talent'}</title>}
      {seo.metaDesc && <meta name="description" content={seo.metaDesc ?? 'Find and hire pre-vetted remote developers from the top 3% global talent pool. Optimal Virtual Employee helps startups build reliable tech teams fast — affordable, flexible & scalable.'} />}
      {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}

      {/* OpenGraph */}
      {seo.opengraphTitle && (
        <meta property="og:title" content={seo.opengraphTitle} />
      )}
      {seo.opengraphDescription && (
        <meta property="og:description" content={seo.opengraphDescription} />
      )}
      {seo.opengraphUrl && <meta property="og:url" content={seo.opengraphUrl} />}
      {seo.opengraphImage?.sourceUrl && (
        <meta property="og:image" content={seo.opengraphImage.sourceUrl} />
      )}

      {/* Twitter (Optional) */}
      {seo.opengraphTitle && (
        <meta name="twitter:title" content={seo.opengraphTitle} />
      )}
      {seo.opengraphDescription && (
        <meta name="twitter:description" content={seo.opengraphDescription} />
      )}
      {seo.opengraphImage?.sourceUrl && (
        <meta name="twitter:image" content={seo.opengraphImage.sourceUrl} />
      )}
    </Head>
  );
}
