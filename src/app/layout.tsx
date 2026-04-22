import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { satoshi, clashGrotesk } from "@/app/fonts";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cywarden",
  description: "Cybersecurity platform and managed services firm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en" 
      className={`${satoshi.variable} ${clashGrotesk.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans flex min-h-screen flex-col bg-transparent antialiased">
        <header className="fixed inset-x-0 top-0 z-50 md:pt-6">
          <Navbar />
        </header>

        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="relative z-10 mt-auto w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}