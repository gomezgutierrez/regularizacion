"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, MessageCircle, Calendar, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    // Step 1: Qualification
    entryDate: string; // "before-2026" | "after-2026"
    hasCriminalRecord: string; // "yes" | "no" | "cancelled"

    // Step 2: Contact
    name: string;
    origin: string;
    yearsInSpain: string; // legacy field kept for consistency/email template
    status: string;
    whatsApp: string;
};

export function LeadForm() {
    const [step, setStep] = useState<1 | 2>(1);
    const [isQualified, setIsQualified] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors },
    } = useForm<FormData>();

    const onStep1Submit = async () => {
        const valid = await trigger(["entryDate", "hasCriminalRecord"]);
        if (!valid) return;

        const values = getValues();

        // Disqualification Logic
        if (values.entryDate === "after-2026") {
            setIsQualified(false);
            return;
        }

        setStep(2);
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMsg(null);

        // Sync legacy/template fields
        data.yearsInSpain = data.entryDate === "before-2026" ? "Más de 3 años" : "Menos de 2 años"; // Just mapping for backend template compatibility if needed

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || "Error al enviar el formulario");
            }

            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setErrorMsg("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsAppRedirect = () => {
        const data = getValues();
        const message = `REVISIÓN 2026:%0A%0A- Nombre: ${data.name}%0A- País: ${data.origin}%0A- WhatsApp: ${data.whatsApp}%0A- Entrada antes de 2026: SÍ`;
        window.open(`https://wa.me/34624945297?text=${message}`, '_blank');
    };

    // --- Success View ---
    if (isSuccess) {
        return (
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                    ¡Perfil Apto para Regularización!
                </h3>
                <p className="text-muted-foreground mb-8">
                    Tus respuestas indican que CUMPLES los requisitos básicos. Hemos recibido tus datos y una abogada te contactará.
                </p>

                <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Priorizar mi caso por WhatsApp
                </button>
            </div>
        );
    }

    // --- Disqualified View ---
    if (!isQualified) {
        return (
            <div className="w-full max-w-md mx-auto bg-red-50 p-8 rounded-2xl shadow-xl border border-red-100 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-4">
                    Lo sentimos, no cumples los requisitos
                </h3>
                <p className="text-red-800 mb-6 text-sm">
                    El Real Decreto exige haber entrado en España <strong>antes del 31 de diciembre de 2025</strong>. Si llegaste después, esta vía no es válida para ti.
                </p>
                <button
                    onClick={() => { setIsQualified(true); setStep(1); }}
                    className="text-sm text-red-700 underline hover:text-red-900"
                >
                    Volver a empezar
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                <div className={cn("h-full bg-accent transition-all duration-500", step === 1 ? "w-1/2" : "w-full")}></div>
            </div>

            <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-primary mb-1">
                    {step === 1 ? "Paso 1: Análisis de Viabilidad" : "Paso 2: Datos de Contacto"}
                </h3>
                <p className="text-xs text-muted-foreground">
                    {step === 1 ? "Responde honestamente para saber si calificas." : "Tus datos son 100% confidenciales."}
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* --- STEP 1: QUALIFICATION --- */}
                {step === 1 && (
                    <div className="space-y-4 animate-in slide-in-from-right duration-300">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                ¿Cuándo llegaste a España?
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                    <input
                                        type="radio"
                                        value="before-2026"
                                        {...register("entryDate", { required: true })}
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary"
                                    />
                                    <span className="ml-3 text-sm text-slate-700">Antes del 31 de diciembre de 2025</span>
                                </label>
                                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                    <input
                                        type="radio"
                                        value="after-2026"
                                        {...register("entryDate", { required: true })}
                                        className="w-4 h-4 text-primary border-slate-300 focus:ring-primary"
                                    />
                                    <span className="ml-3 text-sm text-slate-700">En 2026 (Después del 31/12/2025)</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                ¿Tienes antecedentes penales/policiales?
                            </label>
                            <select
                                {...register("hasCriminalRecord", { required: true })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 outline-none"
                            >
                                <option value="">Seleccionar...</option>
                                <option value="no">No, estoy limpio</option>
                                <option value="cancelled">Sí, pero están cancelados</option>
                                <option value="yes">Sí, están vigentes</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={onStep1Submit}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center mt-6"
                        >
                            Siguiente Paso <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                )}

                {/* --- STEP 2: CONTACT --- */}
                {step === 2 && (
                    <div className="space-y-4 animate-in slide-in-from-right duration-300">

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                            <input
                                {...register("name", { required: "Obligatorio" })}
                                className={cn("w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-primary/20", errors.name ? "border-error" : "border-slate-200")}
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">País de origen</label>
                            <input
                                {...register("origin", { required: "Obligatorio" })}
                                className={cn("w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-primary/20", errors.origin ? "border-error" : "border-slate-200")}
                                placeholder="Tu país"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono (WhatsApp)</label>
                            <input
                                type="tel"
                                {...register("whatsApp", { required: "Obligatorio" })}
                                className={cn("w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-primary/20", errors.whatsApp ? "border-error" : "border-slate-200")}
                                placeholder="+34 600..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Situación actual</label>
                            <select
                                {...register("status", { required: "Obligatorio" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 outline-none"
                            >
                                <option value="">Selecciona...</option>
                                <option value="Sin papeles">Sin papeles / Irregular</option>
                                <option value="Asilo">Solicitante de Asilo / Denegado</option>
                                <option value="Turista">Turista</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        {errorMsg && (
                            <div className="bg-red-50 text-error text-sm p-3 rounded-lg flex items-start">
                                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                {errorMsg}
                            </div>
                        )}

                        <div className="flex gap-2 pt-2">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                            </button>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center"
                            >
                                {isSubmitting ? "Enviando..." : "Solicitar Revisión Gratuita"}
                            </button>
                        </div>
                    </div>
                )}

                <p className="text-xs text-center text-muted-foreground mt-4 pb-2">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-success" />
                    Datos protegidos por secreto profesional.
                </p>
            </form>
        </div>
    );
}
