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
        {children}
        <Footer/>
        {/* End page layout data */}
        <CookieBanner/>
      </>

  );
}
