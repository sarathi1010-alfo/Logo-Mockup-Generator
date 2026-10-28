import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mockbrand.alfo.online'),
  title: "Free Logo Mockup Generator | 3D Brand Mockups - MockupForge",
  description: "Generate photorealistic 3D logo mockups on t-shirts, signs, cards, and packaging in seconds. 100% free logo mockup generator with high-res export.",
  alternates: {
    canonical: "https://mockbrand.alfo.online/",
  },
  openGraph: {
    title: "Free Logo Mockup Generator | 3D Brand Mockups - MockupForge",
    description: "Generate photorealistic 3D logo mockups on t-shirts, signs, cards, and packaging in seconds. 100% free logo mockup generator with high-res export.",
    url: "https://mockbrand.alfo.online/",
    siteName: "MockupForge",
    type: "website",
    images: [
      {
        url: "https://mockbrand.alfo.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "MockupForge Logo Mockup Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Logo Mockup Generator | 3D Brand Mockups - MockupForge",
    description: "Generate photorealistic 3D logo mockups on t-shirts, signs, cards, and packaging in seconds. 100% free logo mockup generator with high-res export.",
    images: ["https://mockbrand.alfo.online/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZQ3QT11QC', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
