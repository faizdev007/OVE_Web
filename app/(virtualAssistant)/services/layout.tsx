// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ✅ Custom Analytics */}
      <Analytics />

      {/* ✅ Custom Header */}
      <ServiceHeader/>

      {/* ✅ Page Content */}
      <main className="container mx-auto py-10">
        {children}
      </main>

      {/* ✅ Custom Footer */}
      <ServiceFooter/>
    </>
  );
}
