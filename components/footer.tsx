import Link from "next/link";
import { LawyerSignature } from "./lawyer-signature";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 mt-20">
            <div className="container mx-auto px-4">

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">
                            RegularizaciónYa.es
                        </h2>
                        <p className="text-lg mb-6 leading-relaxed text-slate-400">
                            La primera plataforma de gestión telemática masiva para la regularización de extranjeros en España 2026.
                            Sin citas previas. Sin desplazamientos. 100% Online.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/guia-regularizacion-2026" className="text-white hover:text-accent font-medium">Guía Definitiva</Link>
                            <Link href="#contacto" className="text-white hover:text-accent font-medium">Contacto</Link>
                        </div>
                    </div>

                    <div className="bg-white/5 p-1 rounded-2xl">
                        <LawyerSignature />
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
                    <div className="mb-4 p-4 bg-slate-950 rounded-lg border border-slate-800">
                        <strong className="text-slate-400 block mb-2 uppercase tracking-wider text-xs">Exención de Responsabilidad (Disclaimer)</strong>
                        <p>
                            Esta web es una plataforma de servicios jurídicos telemáticos gestionada por la Letrada Inmaculada Moncho.
                            No ofrecemos atención presencial en despacho físico para este servicio específico de regularización masiva.
                            Toda la contratación y gestión documental se realiza exclusivamente online para garantizar la agilidad del proceso.
                            La información aquí contenida es meramente informativa y no constituye una relación abogado-cliente hasta la formalización del encargo.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© 2026 RegularizaciónYa. Titular: Inmaculada Moncho Giner - N.I.F.: 24376978Z</p>
                        <div className="flex gap-6">
                            <Link href="/condiciones-contratacion" className="hover:text-white">Términos y Condiciones</Link>
                            <Link href="#" className="hover:text-white">Política de Privacidad</Link>
                            <Link href="#" className="hover:text-white">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
