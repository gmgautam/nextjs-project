import React, { ReactNode } from "react";
import "@/globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Luxuria | Premium Experiences",
  description: "Discover the epitome of luxury living", // Fixed typo in 'description'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        {/* Fixed Navbar with backdrop blur */}
        <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
          <Navbar />
        </nav>

        {/* Main content with padding to account for fixed navbar */}
        <main className="flex-1 pt-20"> {/* Added padding-top to prevent content hiding under navbar */}
          {children}
        </main>

        {/* Footer at bottom */}
        <footer className="border-t border-slate-800">
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;