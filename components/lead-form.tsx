"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    name: string;
    origin: string;
    yearsInSpain: string;
    status: string;
    whatsApp: string;
};

export function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMsg(null);

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
        const message = `Hola, quiero revisar mi caso de regularización:%0A%0A- Nombre: ${data.name}%0A- País: ${data.origin}%0A- Años en España: ${data.yearsInSpain}%0A- Situación: ${data.status}%0A- WhatsApp: ${data.whatsApp}`;
        window.open(`https://wa.me/34600000000?text=${message}`, '_blank');
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                    ¡Solicitud enviada!
                </h3>
                <p className="text-muted-foreground mb-8">
                    Hemos recibido tus datos correctamente. Una abogada revisará tu caso y te contactará pronto.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-blue-800 font-medium">
                        ¿Quieres agilizar el proceso?
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                        Puedes escribirnos directamente por WhatsApp ahora mismo.
                    </p>
                </div>

                <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Hablar por WhatsApp ahora
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                    Revisión de caso gratuita
                </h3>
                <p className="text-sm text-muted-foreground">
                    Completa el formulario y una abogada experta analizará tu situación.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Nombre completo
                    </label>
                    <input
                        {...register("name", { required: "El nombre es obligatorio" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20",
                            errors.name ? "border-error focus:ring-error/20" : "border-slate-200 focus:border-primary"
                        )}
                        placeholder="Tu nombre"
                    />
                    {errors.name && (
                        <p className="text-xs text-error mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        País de origen
                    </label>
                    <input
                        {...register("origin", { required: "El país es obligatorio" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20",
                            errors.origin ? "border-error focus:ring-error/20" : "border-slate-200 focus:border-primary"
                        )}
                        placeholder="Ej: Colombia, Marruecos, Perú..."
                    />
                    {errors.origin && (
                        <p className="text-xs text-error mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.origin.message}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Años en España
                        </label>
                        <select
                            {...register("yearsInSpain", { required: "Selecciona una opción" })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20",
                                errors.yearsInSpain ? "border-error focus:ring-error/20" : "border-slate-200 focus:border-primary"
                            )}
                        >
                            <option value="">Seleccionar</option>
                            <option value="Menos de 2 años">Menos de 2 años</option>
                            <option value="2-3 años">2-3 años</option>
                            <option value="Más de 3 años">Más de 3 años</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            WhatsApp
                        </label>
                        <input
                            type="tel"
                            {...register("whatsApp", { required: "Número obligatorio" })}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20",
                                errors.whatsApp ? "border-error focus:ring-error/20" : "border-slate-200 focus:border-primary"
                            )}
                            placeholder="+34 600..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Situación actual
                    </label>
                    <select
                        {...register("status", { required: "Selecciona tu situación" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20",
                            errors.status ? "border-error focus:ring-error/20" : "border-slate-200 focus:border-primary"
                        )}
                    >
                        <option value="">Selecciona tu situación</option>
                        <option value="Sin papeles / Irregular">Sin papeles / Irregular</option>
                        <option value="Solicitante de asilo">Solicitante de asilo (Tarjeta Roja/Blanca)</option>
                        <option value="Permiso caducado">Permiso caducado</option>
                        <option value="Turista">Turista (Estancia legal)</option>
                        <option value="Otro">Otro</option>
                    </select>
                    {errors.status && (
                        <p className="text-xs text-error mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.status.message}
                        </p>
                    )}
                </div>

                {errorMsg && (
                    <div className="bg-red-50 text-error text-sm p-3 rounded-lg flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        {errorMsg}
                    </div>
                )}

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-accent hover:bg-amber-600 text-accent-foreground font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center text-lg"
                >
                    {isSubmitting ? (
                        "Enviando..."
                    ) : (
                        <>
                            Un abogado revisará tu caso
                            <Send className="w-5 h-5 ml-2" />
                        </>
                    )}
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-success" />
                    Datos 100% confidenciales y seguros. Sin compromiso.
                </p>
            </form>
        </div>
    );
}
