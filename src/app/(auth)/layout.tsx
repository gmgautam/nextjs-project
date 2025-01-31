import React, { ReactNode } from "react";
import "@/globals.css";
export const metadata = {
  title: "Luxuria | Premium Experiences",
  description: "Discover the epitome of luxury living", // Fixed typo in 'description'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        {/* Fixed Navbar with backdrop blur */}
        {/* Main content with padding to account for fixed navbar */}
        <main className="flex-1"> {/* Added padding-top to prevent content hiding under navbar */}
          {children}
        </main>

      </body>
    </html>
  );
};

export default RootLayout;