import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import Script from "next/script";

import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Letrada Inmaculada Moncho: Especialista en Regularización de Extranjeros 2026",
  description: "Abogada Colegiada (ICAV 14318) experta en la Regularización Masiva 2026. Analizamos GRATIS tu caso de arraigo, asilo o papeles. Gestión 100% online.",
  keywords: ["regularización masiva", "regularización extranjeros 2026", "ILP regularización", "papeles españa", "arraigo 2026", "abogados extranjería", "real decreto regularización", "inmaculada moncho"],
  openGraph: {
    title: "Regularización Masiva 2026: ¿Tienes derecho a papeles? - Abogada Inmaculada Moncho",
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
  "image": "https://regularizacionya.es/logo.png",
  "url": "https://regularizacionya.es",
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
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
