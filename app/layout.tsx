import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppProvider } from "@/contexts/whatsapp-context";
import { TikTokEmbedHandler } from "@/components/tiktok-embed-handler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regularizacionmasiva.es"),
  title: "Regularización Extraordinaria España 2026 | Consigue tus Papeles",
  description: "Descubre los requisitos de la Regularización Extraordinaria en 2026, solicita el nuevo Arraigo y obtén tu permiso provisional de trabajo inmediato. Inicia tu trámite ahora.",
  keywords: ["regularización extraordinaria españa 2026", "arraigo extraordinario", "papeles españa", "permiso trabajo provisional", "nuevo arraigo asilo", "abogados extranjería"],
  openGraph: {
    title: "Regularización Extraordinaria España 2026 | Consigue tus Papeles",
    description: "El Gobierno aprueba el Arraigo Extraordinario. Comprueba requisitos, fechas y empieza a trabajar legalmente de inmediato.",
    type: "website",
    locale: "es_ES",
  }
};

// JSON-LD for ProfessionalService (Lawyer)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", // More specific than LocalBusiness
  "name": "Inmaculada Moncho - Abogado Extranjería Online",
  "image": "https://regularizacionmasiva.es/logo.png",
  "url": "https://regularizacionmasiva.es",
  "telephone": "+34614731773",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valencia",
    "addressCountry": "ES"
  },
  "priceRange": "$$",
  "description": "Despacho especializado en la Regularización Extraordinaria y Arraigo de Extranjeros 2026. Gestión telemática en toda España para conseguir tus papeles.",
  "legalName": "Inmaculada Moncho Giner",
  "employee": {
    "@type": "Person",
    "name": "Inmaculada Moncho",
    "jobTitle": "Abogada",
    "memberOf": {
      "@type": "Organization",
      "name": "Ilustre Colegio de Abogados de Valencia (ICAV)",
      "identifier": "14318"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCD77R7H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager - Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MCD77R7H');
          `}
        </Script>

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0HK2VVSV0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W0HK2VVSV0');
          `}
        </Script>





        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <WhatsAppProvider>
          <TikTokEmbedHandler />
          <SiteHeader />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </WhatsAppProvider>
        <Analytics />
      </body>
    </html>
  );
}
