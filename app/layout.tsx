import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

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
  title: "Regularización Masiva 2026: Abogados Extranjería y Requisitos BOE",
  description: "Guía oficial de la Regularización de Extranjeros 2026. Te ayudamos a tramitar tus papeles si llegaste a España antes de finales de 2025. Consulta viabilidad hoy.",
  keywords: ["regularización masiva", "regularización extranjeros 2026", "regularización extraordinaria", "permiso residencia españa", "arraigo 2026", "abogados extranjería", "real decreto regularización", "inmaculada moncho"],
  openGraph: {
    title: "Regularización Masiva 2026: ¿Tienes derecho a Residencia? - Abogada Inmaculada Moncho",
    description: "El Gobierno aprueba la regularización extraordinaria. Comprueba requisitos, fechas y documentos necesarios con una abogada experta.",
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
  "telephone": "+34624945297",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valencia",
    "addressCountry": "ES"
  },
  "priceRange": "$$",
  "description": "Despacho especializado en la Regularización Masiva de Extranjeros 2026. Gestión 100% telemática en toda España.",
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
        <SiteHeader />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
