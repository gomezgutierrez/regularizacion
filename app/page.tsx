import { Hero } from "@/components/hero";
import { VideoCtaSection } from "@/components/video-cta-section";
import { InfoSection } from "@/components/info-section";
import { AuthoritySection } from "@/components/authority-section";
import { UrgencySection } from "@/components/urgency-banner";
import { FinalCta } from "@/components/final-cta";
import { IntegralServiceSection } from "@/components/integral-service-section";
import { BlogGrid } from "@/components/blog-grid";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-accent/30">
      <UrgencySection />
      <Hero />
      <VideoCtaSection />
      <BlogGrid />
      <InfoSection />
      <IntegralServiceSection />
      <AuthoritySection />
      <FinalCta />

      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Despacho Legal Extranjería. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Aviso Legal</span>
            <span className="hover:text-slate-300 cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
