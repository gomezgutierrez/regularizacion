
"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";

type WaitingListForm = {
    name: string;
    email: string;
    phone: string;
};

interface WaitingListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function WaitingListModal({ isOpen, onClose }: WaitingListModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<WaitingListForm>();

    if (!isOpen) return null;

    const onSubmit = async (data: WaitingListForm) => {
        setIsSubmitting(true);
        setErrorMsg(null);

        try {
            // Reuse existing contact API but simplified
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    whatsApp: data.phone,
                    // Fill required fields with defaults to pass API validation
                    origin: "Lista de Espera (Estudio Viabilidad)",
                    status: "Interesado en Estudio Viabilidad",
                    yearsInSpain: "-",
                }),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || "Error al enviar los datos");
            }

            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setErrorMsg("Hubo un error al guardar tus datos. Inténtalo de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                    <div className="p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Estás en la Lista!</h3>
                        <p className="text-slate-600 mb-8">
                            Hemos registrado tu pre-solicitud. Te enviaremos el enlace de pago seguro en cuanto revisemos tus datos y validemos tu posición en la cola.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                ) : (
                    <div className="p-8">
                        <div className="mb-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-wide uppercase mb-3">
                                Alta Demanda / Plazas Limitadas
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                Gestión de Cola Prioritaria
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Debido al alto volumen de solicitudes para la Regularización 2026, estamos asignando los Estudios de Viabilidad por estricto orden de llegada. <strong>Regístrate ahora para asegurar tu posición.</strong> Te enviaremos el enlace de pago seguro en cuanto validemos tu pre-solicitud.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                <input
                                    {...register("name", { required: "El nombre es obligatorio" })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Tu nombre"
                                />
                                {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono Móvil / WhatsApp</label>
                                <input
                                    type="tel"
                                    {...register("phone", { required: "El teléfono es obligatorio" })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="+34 600..."
                                />
                                {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "El email es obligatorio",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email no válido"
                                        }
                                    })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="ejemplo@correo.com"
                                />
                                {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                            </div>

                            {errorMsg && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    {errorMsg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform active:scale-[0.98] flex items-center justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Procesando...
                                    </>
                                ) : (
                                    "Unirme a la Lista Prioritaria"
                                )}
                            </button>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                Tus datos se usarán exclusivamente para gestionar tu turno en la cola.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
