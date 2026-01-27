import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

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
  title: "Regularización Masiva 2025: Requisitos y Plazos (ILP y Real Decreto)",
  description: "Guía completa sobre la Regularización Extraordinaria de Extranjeros en España 2025. Todo sobre la ILP, el nuevo Reglamento y cómo solicitar papeles por arraigo. Revisa tu caso.",
  keywords: ["regularización masiva", "regularización extranjeros 2025", "ILP regularización", "papeles españa", "arraigo 2025", "abogados extranjería", "real decreto regularización"],
  openGraph: {
    title: "Regularización Masiva 2025: ¿Tienes derecho a papeles?",
    description: "El Gobierno aprueba la regularización extraordinaria. Comprueba requisitos, fechas y documentos necesarios.",
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
