// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";
import "@/components/main/Homepage/customstyle.css";
import "../blog/blogStyle.css";


export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ✅ Custom Analytics */}
      <Analytics />
      {/* ✅ Custom Header */}
      <ServiceHeader/>

      {/* ✅ Page Content */}
      <main className="mx-auto manrope">
        {children}
        <div className="blackgradiant text-white p-12 text-center">
          <h3 className="md:text-5xl sm:text-3xl text-2xl mb-8">Looking for Virtual Assistance ?</h3>
          <p className="pb-8">Let's embark on a journey to transform your requirment into a reality.</p>
          <button className="relative cursor-pointer px-6 py-3 font-semibold rounded-lg 
              text-white bg-gradient-to-r from-blue-400 to-blue-800 
              bg-[length:200%_100%] bg-[position:right_center] 
              transition-[background-position] duration-600 ease-out
              hover:bg-[position:left_center] hover:text-yellow-100">
            Talk to Our Experts
          </button>
        </div>
      </main>

      {/* ✅ Custom Footer */}
      <ServiceFooter/>
    </>
  );
}
