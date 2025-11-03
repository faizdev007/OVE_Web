import "../globals.css";
import CookieBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {/* page layout data */}
        <div className="fixed z-90 w-full">
          <Header/>
        </div>
        <main id="main-content">
          {children}
        </main>
        <Footer/>
        {/* End page layout data */}
        <CookieBanner/>
      </>
  );
}
