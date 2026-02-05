"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle, MessageCircle, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    // Step 1: Qualification
    entryDate: string; // "before-2026" | "after-2026"
    hasCriminalRecord: string; // "yes" | "no" | "cancelled"

    // Step 2: Contact
    name: string;
    origin: string;
    yearsInSpain: string; // legacy field
    status: string;
    whatsApp: string;
};

interface LeadFormProps {
    className?: string;
    language?: "es" | "en" | "fr";
}

const translations = {
    es: {
        step1: "Paso 1: Análisis de Viabilidad",
        step1Subtitle: "Responde honestamente para saber si calificas.",
        step2: "Paso 2: Datos de Contacto",
        step2Subtitle: "Tus datos son 100% confidenciales.",
        entryDateLabel: "¿Cuándo entraste en España?",
        before2026: "Antes del 31 Dic 2025",
        after2026: "Después (2026)",
        criminalRecordLabel: "¿Tienes antecedentes penales?",
        yes: "Sí",
        no: "No",
        cancelled: "Cancelados",
        checkEligibility: "Comprobar Viabilidad",
        nameLabel: "Nombre Completo",
        originLabel: "País de Origen",
        whatsappLabel: "WhatsApp (con prefijo)",
        statusLabel: "Situación Actual",
        statusSelect: "Selecciona...",
        statusIrregular: "Situación Irregular",
        statusAsylum: "Solicitante de Asilo / Denegado",
        statusTourist: "Turista",
        statusOther: "Otro",
        submitProcessing: "Procesando...",
        submitButton: "Solicitar Estudio Gratuito",
        disqualifiedTitle: "Lo sentimos, no cumples los requisitos",
        disqualifiedText: "El Real Decreto exige haber entrado en España <strong>antes del 31 de diciembre de 2025</strong>. Si llegaste después, esta vía no es válida para ti.",
        restart: "Volver a empezar",
        successTitle: "¡Perfil Apto!",
        successText: "Tus respuestas indican que CUMPLES los requisitos básicos. Hemos recibido tus datos.",
        priorityWhatsapp: "Priorizar mi caso por WhatsApp",
        privacyNote: "Datos protegidos por secreto profesional."
    },
    en: {
        step1: "Step 1: Eligibility Check",
        step1Subtitle: "Answer honestly to check if you qualify.",
        step2: "Step 2: Contact Details",
        step2Subtitle: "Your data is 100% confidential.",
        entryDateLabel: "When did you arrive in Spain?",
        before2026: "Before Dec 31, 2025",
        after2026: "After (2026)",
        criminalRecordLabel: "Criminal Record?",
        yes: "Yes",
        no: "No",
        cancelled: "Expunged",
        checkEligibility: "Check Eligibility",
        nameLabel: "Full Name",
        originLabel: "Country of Origin",
        whatsappLabel: "WhatsApp (with code)",
        statusLabel: "Current Status",
        statusSelect: "Select...",
        statusIrregular: "Undocumented / Irregular",
        statusAsylum: "Asylum Seeker / Denied",
        statusTourist: "Tourist",
        statusOther: "Other",
        submitProcessing: "Processing...",
        submitButton: "Request Free Assessment",
        disqualifiedTitle: "Sorry, you do not meet the requirements",
        disqualifiedText: "The Royal Decree requires arrival in Spain <strong>before December 31, 2025</strong>. If you arrived later, this path is not valid for you.",
        restart: "Start Over",
        successTitle: "Eligible Profile!",
        successText: "Your answers indicate you MEET the basic requirements. We have received your details.",
        priorityWhatsapp: "Prioritize via WhatsApp",
        privacyNote: "Data protected by professional secrecy."
    },
    fr: {
        step1: "Étape 1 : Vérification d'Éligibilité",
        step1Subtitle: "Répondez honnêtement pour vérifier votre éligibilité.",
        step2: "Étape 2 : Coordonnées",
        step2Subtitle: "Vos données sont 100% confidentielles.",
        entryDateLabel: "Quand êtes-vous arrivé en Espagne ?",
        before2026: "Avant le 31 déc. 2025",
        after2026: "Après (2026)",
        criminalRecordLabel: "Casier Judiciaire ?",
        yes: "Oui",
        no: "Non",
        cancelled: "Effacé",
        checkEligibility: "Vérifier mon Dossier",
        nameLabel: "Nom Complet",
        originLabel: "Pays d'Origine",
        whatsappLabel: "WhatsApp (avec indicatif)",
        statusLabel: "Statut Actuel",
        statusSelect: "Sélectionnez...",
        statusIrregular: "Sans Papiers / Irrégulier",
        statusAsylum: "Demandeur d'Asile / Refusé",
        statusTourist: "Touriste",
        statusOther: "Autre",
        submitProcessing: "Traitement...",
        submitButton: "Demander Étude Gratuite",
        disqualifiedTitle: "Désolé, vous ne remplissez pas les conditions",
        disqualifiedText: "Le Décret Royal exige une arrivée en Espagne <strong>avant le 31 décembre 2025</strong>. Si vous êtes arrivé plus tard, cette voie n'est pas valable pour vous.",
        restart: "Recommencer",
        successTitle: "Profil Éligible !",
        successText: "Vos réponses indiquent que vous REMPLISSEZ les conditions de base. Nous avons reçu vos coordonnées.",
        priorityWhatsapp: "PCas Prioritaire via WhatsApp",
        privacyNote: "Données protégées par le secret professionnel."
    }
};

export function LeadForm({ className, language = "es" }: LeadFormProps) {
    const t = translations[language];
    const [step, setStep] = useState<1 | 2>(1);
    const [isQualified, setIsQualified] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        getValues,
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
        data.yearsInSpain = data.entryDate === "before-2026" ? "Más de 3 años" : "Menos de 2 años";

        // Add language to the payload
        const payload = {
            ...data,
            language: language
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
            setErrorMsg("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsAppRedirect = () => {
        const data = getValues();
        const message = `REVISIÓN 2026 [${language.toUpperCase()}]:%0A%0A- Nombre: ${data.name}%0A- País: ${data.origin}%0A- WhatsApp: ${data.whatsApp}%0A- Entrada antes de 2026: SÍ`;

        window.open(`https://wa.me/34642717109?text=${message}`, '_blank');
    };

    // --- Success View ---
    if (isSuccess) {
        return (
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                    {t.successTitle}
                </h3>
                <p className="text-muted-foreground mb-8">
                    {t.successText}
                </p>

                <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t.priorityWhatsapp}
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
                    {t.disqualifiedTitle}
                </h3>
                <p className="text-red-800 mb-6 text-sm" dangerouslySetInnerHTML={{ __html: t.disqualifiedText }} />
                <button
                    onClick={() => { setIsQualified(true); setStep(1); }}
                    className="text-sm text-red-700 underline hover:text-red-900"
                >
                    {t.restart}
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
                    {step === 1 ? t.step1 : t.step2}
                </h3>
                <p className="text-xs text-muted-foreground">
                    {step === 1 ? t.step1Subtitle : t.step2Subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* --- STEP 1: QUALIFICATION --- */}
                {step === 1 && (
                    <div className="space-y-4 animate-in slide-in-from-right duration-300">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                {t.entryDateLabel}
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                                <label className={cn(
                                    "flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5",
                                    getValues("entryDate") === "before-2026" ? "border-accent bg-accent/10 ring-1 ring-accent" : "border-slate-200"
                                )}>
                                    <input
                                        {...register("entryDate", { required: true })}
                                        type="radio"
                                        value="before-2026"
                                        className="w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                                    />
                                    <span className="ml-3 text-sm text-slate-700 font-medium">
                                        {t.before2026}
                                    </span>
                                </label>

                                <label className={cn(
                                    "flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5",
                                    getValues("entryDate") === "after-2026" ? "border-accent bg-accent/10 ring-1 ring-accent" : "border-slate-200"
                                )}>
                                    <input
                                        {...register("entryDate", { required: true })}
                                        type="radio"
                                        value="after-2026"
                                        className="w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                                    />
                                    <span className="ml-3 text-sm text-slate-700">
                                        {t.after2026}
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                {t.criminalRecordLabel}
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input {...register("hasCriminalRecord", { required: true })} type="radio" value="yes" className="mr-2" />
                                    <span className="text-sm">{t.yes}</span>
                                </label>
                                <label className="flex items-center">
                                    <input {...register("hasCriminalRecord", { required: true })} type="radio" value="no" className="mr-2" />
                                    <span className="text-sm">{t.no}</span>
                                </label>
                                <label className="flex items-center">
                                    <input {...register("hasCriminalRecord", { required: true })} type="radio" value="cancelled" className="mr-2" />
                                    <span className="text-sm">{t.cancelled}</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onStep1Submit}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center mt-6"
                        >
                            {t.checkEligibility} <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                )}

                {/* --- STEP 2: CONTACT --- */}
                {step === 2 && (
                    <div className="space-y-4 animate-in slide-in-from-right duration-300">
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

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
                        </div>
                    </div>
                )}

                <p className="text-xs text-center text-muted-foreground mt-4 pb-2">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-success" />
                    {t.privacyNote}
                </p>
            </form>
        </div>
    );
}
