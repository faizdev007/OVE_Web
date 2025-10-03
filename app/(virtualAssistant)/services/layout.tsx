// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";
import "@/components/main/Homepage/customstyle.css";
import "../services/VAStyle.css";
import { Metadata } from "next";
import { generateMetadataFromSeo } from "@/app/(main)/utils/seo";

// Default SEO data (fallback if a page doesn’t override)
const defaultSeo = {
  index:false,
  follow:false,
};

export const metadata: Metadata = generateMetadataFromSeo(defaultSeo);


export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ✅ Custom Header */}
      <ServiceHeader/>

      {/* ✅ Page Content */}
      <main className="mx-auto manrope">
        {children}
      </main>

      {/* ✅ Custom Footer */}
      <ServiceFooter/>
    </>
  );
}
