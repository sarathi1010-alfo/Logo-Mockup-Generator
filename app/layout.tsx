import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MockupForge — Free Logo Mockup Generator | alfo.online",
  description: "Turn any logo into premium real-world mockups in seconds. Free online logo mockup generator for presentations, branding, and portfolios.",
  keywords: "free logo mockup, online mockup generator, realistic logo mockup, 3d logo mockup, branding mockup",
  alternates: {
    canonical: "https://mockupforge.alfo.online",
  },
  openGraph: {
    title: "MockupForge — Free Logo Mockup Generator",
    description: "Turn any logo into premium real-world mockups in seconds. No software required.",
    url: "https://mockupforge.alfo.online",
    siteName: "MockupForge",
    images: [
      {
        url: "https://mockupforge.alfo.online/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MockupForge — Free Logo Mockup Generator",
    description: "Turn any logo into premium real-world mockups in seconds. No software required.",
    images: ["https://mockupforge.alfo.online/og-image.jpg"],
  },
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MockupForge",
  "url": "https://mockupforge.alfo.online",
  "description": "Turn any logo into premium real-world mockups in seconds. Free online logo mockup generator.",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
