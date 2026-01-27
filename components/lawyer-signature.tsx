import Link from "next/link";
import Image from "next/image";
import { Linkedin, Scale } from "lucide-react";

export function LawyerSignature() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                {/* Placeholder for now, or use the logo if appropriate as avatar substitute */}
                <div className="w-full h-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                    IM
                </div>
            </div>

            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Inmaculada Moncho
                </h3>
                <p className="text-sm font-medium text-slate-600 mb-2 flex items-center justify-center md:justify-start gap-2">
                    <Scale className="w-4 h-4 text-accent" />
                    Abogada Colegiada nº 14318 (ICAV)
                </p>
                <p className="text-sm text-slate-500 max-w-md mb-4 leading-relaxed">
                    Especialista en Derecho de Extranjería y Nacionalidad.
                    Garantía jurídica para tu proceso de regularización.
                </p>

                <Link
                    href="https://es.linkedin.com/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                    <Linkedin className="w-4 h-4" />
                    Ver Perfil Profesional
                </Link>
            </div>
        </div>
    );
}
