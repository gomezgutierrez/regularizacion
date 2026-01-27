import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

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
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
