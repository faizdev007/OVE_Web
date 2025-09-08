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

export default function SeoMeta({ seo }: { seo?: SeoProps }) {
  if (!seo) return null;

  const title =
    seo.title ??
    "Find and Hire Developers for Startups — Optimal Virtual Employee — Top 3% Remote Talent";
  const description =
    seo.metaDesc ??
    "Find and hire pre-vetted remote developers from the top 3% global talent pool. Optimal Virtual Employee helps startups build reliable tech teams fast — affordable, flexible & scalable.";
  const keywords = seo.metaKeywords ?? "remote developers, hire developers, optimal virtual employee";

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      {seo.opengraphTitle && <meta property="og:title" content={seo.opengraphTitle} />}
      {seo.opengraphDescription && (
        <meta property="og:description" content={seo.opengraphDescription} />
      )}
      {seo.opengraphUrl && <meta property="og:url" content={seo.opengraphUrl} />}
      {seo.opengraphImage?.sourceUrl && (
        <meta property="og:image" content={seo.opengraphImage.sourceUrl} />
      )}

      {/* Twitter Cards (optional) */}
      {seo.opengraphTitle && <meta name="twitter:title" content={seo.opengraphTitle} />}
      {seo.opengraphDescription && (
        <meta name="twitter:description" content={seo.opengraphDescription} />
      )}
      {seo.opengraphImage?.sourceUrl && (
        <meta name="twitter:image" content={seo.opengraphImage.sourceUrl} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
