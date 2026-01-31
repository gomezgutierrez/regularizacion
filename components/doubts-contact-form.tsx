"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle, MessageCircle, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    name: string;
    origin: string;
    status: string;
    whatsApp: string;
};

interface DoubtsContactFormProps {
    className?: string;
    language?: "es" | "en" | "fr";
}

const translations = {
    es: {
        title: "¿Tienes dudas?",
        subtitle: "Deja tus datos y te contactamos para resolverlas.",
        nameLabel: "Nombre Completo",
        originLabel: "País de Origen",
        whatsappLabel: "WhatsApp (con prefijo)",
        statusLabel: "Situación Actual",
        statusSelect: "Selecciona...",
        statusIrregular: "Situación Irregular",
        statusAsylum: "Solicitante de Asilo / Denegado",
        statusTourist: "Turista",
        statusOther: "Otro",
        submitProcessing: "Enviando...",
        submitButton: "Solicitar Información",
        successTitle: "¡Recibido!",
        successText: "Te contactaremos en breve para resolver tus dudas.",
        privacyNote: "Datos protegidos por secreto profesional."
    },
    en: {
        title: "Have questions?",
        subtitle: "Leave your details and we'll contact you.",
        nameLabel: "Full Name",
        originLabel: "Country of Origin",
        whatsappLabel: "WhatsApp (with code)",
        statusLabel: "Current Status",
        statusSelect: "Select...",
        statusIrregular: "Undocumented / Irregular",
        statusAsylum: "Asylum Seeker / Denied",
        statusTourist: "Tourist",
        statusOther: "Other",
        submitProcessing: "Sending...",
        submitButton: "Request Information",
        successTitle: "Received!",
        successText: "We will contact you shortly to answer your questions.",
        privacyNote: "Data protected by professional secrecy."
    },
    fr: {
        title: "Vous avez des questions ?",
        subtitle: "Laissez vos coordonnées, nous vous recontacterons.",
        nameLabel: "Nom Complet",
        originLabel: "Pays d'Origine",
        whatsappLabel: "WhatsApp (avec indicatif)",
        statusLabel: "Statut Actuel",
        statusSelect: "Sélectionnez...",
        statusIrregular: "Sans Papiers / Irrégulier",
        statusAsylum: "Demandeur d'Asile / Refusé",
        statusTourist: "Touriste",
        statusOther: "Autre",
        submitProcessing: "Envoi...",
        submitButton: "Demander des Informations",
        successTitle: "Reçu !",
        successText: "Nous vous contacterons bientôt pour répondre à vos questions.",
        privacyNote: "Données protégées par le secret professionnel."
    }
};

export function DoubtsContactForm({ className, language = "es" }: DoubtsContactFormProps) {
    const t = translations[language];
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMsg(null);

        const payload = {
            ...data,
            language: language,
            type: 'doubts' // Special flag for backend
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || "Error al enviar el formulario");
            }

            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setErrorMsg("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={cn("w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-300", className)}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t.successTitle}
                </h3>
                <p className="text-slate-600 mb-8">
                    {t.successText}
                </p>
                <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm">
                    Revisaremos tu caso y te escribiremos por WhatsApp.
                </div>
            </div>
        );
    }

    return (
        <div className={cn("w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden", className)} id="formulario-dudas">
            <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {t.title}
                </h3>
                <p className="text-sm text-slate-500">
                    {t.subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        {t.nameLabel}
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                            {...register("name", { required: true })}
                            className={cn("w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all", errors.name ? "border-red-300" : "")}
                            placeholder="Ej: Juan Pérez"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        {t.originLabel}
                    </label>
                    <select
                        {...register("origin", { required: true })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white"
                    >
                        <option value="">{t.statusSelect}</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Perú">Perú</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Marruecos">Marruecos</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        {t.whatsappLabel}
                    </label>
                    <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-green-600" />
                        <input
                            {...register("whatsApp", { required: true })}
                            type="tel"
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-green-50/50"
                            placeholder="+34 600 000 000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        {t.statusLabel}
                    </label>
                    <select
                        {...register("status", { required: true })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white"
                    >
                        <option value="">{t.statusSelect}</option>
                        <option value="Irregular">{t.statusIrregular}</option>
                        <option value="Asilo">{t.statusAsylum}</option>
                        <option value="Turista">{t.statusTourist}</option>
                        <option value="Otro">{t.statusOther}</option>
                    </select>
                </div>

                {errorMsg && (
                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        {errorMsg}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            {t.submitProcessing}
                        </>
                    ) : (
                        t.submitButton
                    )}
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4 pb-2">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />
                    {t.privacyNote}
                </p>
            </form>
        </div>
    );
}
