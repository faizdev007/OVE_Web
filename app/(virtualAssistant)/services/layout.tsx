// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ✅ Custom Analytics */}
      <Analytics />

      {/* ✅ Custom Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* ✅ Page Content */}
      <main className="container mx-auto py-10">
        {children}
      </main>

      {/* ✅ Custom Footer */}
      <footer className="bg-blue-600 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Company - Services</p>
        </div>
      </footer>
    </>
  );
}
