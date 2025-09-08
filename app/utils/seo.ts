// app/utils/seo.ts

import type { Metadata } from "next";

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

export function generateMetadataFromSeo(seoData: SeoProps): Metadata {
  return {
    title:
      seoData.title ??
      seoData.opengraphTitle ??
      "Find and Hire Developers for Startups — Optimal Virtual Employee — Top 3% Remote Talent",
    description:
      seoData.metaDesc ??
      "Find and hire pre-vetted remote developers from the top 3% global talent pool. Optimal Virtual Employee helps startups build reliable tech teams fast — affordable, flexible & scalable.",
    keywords: seoData.metaKeywords,
    openGraph: {
      title: seoData.opengraphTitle,
      description: seoData.opengraphDescription,
      url: seoData.opengraphUrl,
      images: seoData.opengraphImage
        ? [seoData.opengraphImage.sourceUrl]
        : [],
    },
    robots: {
      index: true, // ✅ set true if you want indexing
      follow: true,
    },
    other: {
      "google-site-verification":
        "xqpfQdsNQE8sN0vLhE3D-UOWjlDCbyl36rzarrerKZ",
    },
  };
}
