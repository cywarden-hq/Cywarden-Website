import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cywarden",
  description: "",
  icons: {
    icon: [
      { url: "/CywardenGlobe.png", type: "image/png" },
      { url: "/CywardenGlobe.png", sizes: "32x32", type: "image/png" },
      { url: "/CywardenGlobe.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/CywardenGlobe.png",
    apple: "/CywardenGlobe.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/CywardenGlobe.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/CywardenGlobe.png?v=1" />
        <link rel="shortcut icon" href="/CywardenGlobe.png?v=1" />
        <link rel="apple-touch-icon" href="/CywardenGlobe.png?v=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
