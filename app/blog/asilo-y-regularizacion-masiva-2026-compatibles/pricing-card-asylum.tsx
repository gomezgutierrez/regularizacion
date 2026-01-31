
"use client";

import { ArrowRight, Check } from "lucide-react";

interface PricingCardAsylumProps {
    buttonOnly?: boolean;
}

export function PricingCardAsylum({ buttonOnly = false }: PricingCardAsylumProps) {

    if (buttonOnly) {
        return (
            <a
                href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-accent/20 transition-transform hover:scale-105"
            >
                PAGAR ESTUDIO DE VIABILIDAD - 39€ <ArrowRight className="w-5 h-5 ml-2" />
            </a>
        );
    }

    return (
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">

            <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                    ¿Tu caso de asilo está estancado?
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                    No arriesgues tu estancia. Validamos si puedes pasar a la Regularización sin perder derechos.
                </p>

                <div className="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 w-fit px-3 py-1 rounded-full mb-2">
                    <Check className="w-4 h-4" /> Análisis 100% Confidencial
                </div>
            </div>

            <div className="bg-slate-900 p-6 md:w-2/5 flex flex-col justify-center items-center text-center relative border-l border-slate-800">
                <div className="text-3xl font-bold text-white mb-1">39€</div>
                <div className="text-slate-400 text-xs mb-4 uppercase tracking-wider">Estudio Viabilidad</div>

                <a
                    href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center text-sm"
                >
                    PAGAR ESTUDIO DE VIABILIDAD - 39€
                </a>
            </div>
        </div>
    );
}
