import Footer from "@/components/footer";
import Header from "@/components/header";
import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // page root — sets palette base colors and font for all pages
    <div className="min-h-screen relative overflow-x-hidden bg-rose-bg text-rose-ink font-body">
      
      {/* paper grain overlay */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-1 bg-noise opacity-55 mix-blend-multiply"/>
      
      {/* soft vignette */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-1 bg-vignette"/>
      
      {/* fixed cosmic header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-rose-bg/75 bg-stardust backdrop-blur-md">
        <div className="max-w-300 mx-auto px-6 md:px-14">
          <Header/>
        </div>
      </div>

      {/* page content */}
      <div className="relative z-2 max-w-300 mx-auto px-6 md:px-14 pt-[76px] pb-20">
        {children}
        <Footer/>
      </div>
    </div>
  );
}
