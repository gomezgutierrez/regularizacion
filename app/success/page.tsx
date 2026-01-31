
import Link from "next/link";
import { CheckCircle, Home } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg text-center border-t-8 border-green-500 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                    ¡Pago recibido correctamente!
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Gracias por tu confianza. En menos de <strong>24 horas laborables</strong> me pondré en contacto contigo para iniciar tu estudio de viabilidad.
                </p>

                <div className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center hover:scale-105 shadow-xl"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Volver a la Home
                    </Link>
                </div>

                <div className="mt-8 text-xs text-slate-400">
                    ID Transacción: Seguro · Stripe Payments
                </div>
            </div>
        </main>
    );
}
