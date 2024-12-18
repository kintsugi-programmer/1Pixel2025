import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your custom font styles
import { Dock } from "@/components/Dock";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "1Pixel'25 3rd Edition",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Responsive Navbar */}
        <div className="w-full px-5 py-3 md:px-10 md:py-5 flex justify-between items-center">
          {/* Add more divbar content here */}
          <Nav />
        </div>
        {children}
        <div className="w-full fixed bottom-5 left-0 z-10"><Dock /></div>
      </body>
    </html>
  );
}
