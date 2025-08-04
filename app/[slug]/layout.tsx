// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/footer";
// import { Robots } from "next/dist/lib/metadata/types/metadata-types";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`opensans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
