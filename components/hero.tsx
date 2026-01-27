import { LeadForm } from "@/components/lead-form";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-wide mb-8 border border-amber-200 animate-pulse shadow-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                            </span>
                            Plazo estimado de apertura: Abril 2026
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
                            Regularización 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                La Oportunidad de tu Vida para conseguir Papeles
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            El Real Decreto abrirá una ventana única de 3 meses.
                            <strong>Miles de solicitudes serán rechazadas por errores simples.</strong>
                            No arriesgues tu futuro: prepárate con abogados colegiados.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-600">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Alta demanda de solicitudes
                            </div>
                            <div className="hidden sm:block text-slate-300">•</div>
                            <div>Más de 500 casos revisados hoy</div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md lg:max-w-md relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl -z-10" />
                        <LeadForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
