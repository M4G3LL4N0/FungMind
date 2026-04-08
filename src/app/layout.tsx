import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FungMind | Fungi-Powered Biotech",
  description: "Pioneering the fungal revolution in health, performance, and sustainable innovation.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "FungMind | Fungi-Powered Biotech",
    description: "Pioneering the fungal revolution in health, performance, and sustainable innovation.",
    url: "https://fungmind.com",
    siteName: "FungMind",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://fungmind.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FungMind Logo"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
