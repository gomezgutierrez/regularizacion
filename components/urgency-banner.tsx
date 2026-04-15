import { AlertTriangle } from "lucide-react";

export function UrgencySection() {
    return (
        <section className="bg-[#9735d6] text-white py-4 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left text-black font-bold">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <p className="text-base md:text-lg">
                    <strong>¡BOE PUBLICADO EL 15 DE ABRIL!</strong> Fecha límite innegociable el 30 de Junio de 2026. ¡Inicia tu expediente con nuestros abogados YA!
                </p>
            </div>
        </section>
    );
}
