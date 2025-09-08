import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/CookieConsentBanner";
import Analytics from "@/components/CookieConcentcheck";
import { generateMetadataFromSeo } from "./utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const seoData = {
    title: "Custom Page Title",
    metaDesc: "Custom description from WP",
    opengraphTitle: "OG Title",
    opengraphDescription: "OG Description",
    opengraphUrl: "https://example.com/custom-page",
    opengraphImage: { sourceUrl: "https://example.com/og-image.jpg" },
    metaKeywords: "nextjs, wordpress, seo",
  };

  return generateMetadataFromSeo(seoData);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script for the head */}
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} opensans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5K42N2M2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header/>
        {children}
        <CookieBanner/>
        <Footer/>
      </body>
    </html>
  );
}
