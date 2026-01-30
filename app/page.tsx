import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-accent/30">
      <UrgencySection />
      <Hero />
      <VideoCtaSection />
      <InfoSection />
      <PricingSection />
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
