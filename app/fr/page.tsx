
import { InternationalLanding } from "@/components/international-landing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Régularisation Massive Espagne 2026 : Guide Officiel | Avocate Inmaculada",
    description: "Obtenez votre Titre de Séjour et permis de travail avec la nouvelle loi. Vérifiez votre éligibilité.",
};

export default function FrenchPage() {
    return (
        <InternationalLanding
            language="fr"
            title="Régularisation Massive Espagne 2026 : Guide Officiel"
            subtitle="Obtenez votre Titre de Séjour et permis de travail avec la nouvelle loi."
            keyPoints={[
                "La Nouvelle Loi Immigration ouvre la voie à la régularisation.",
                "Conditions: Preuve de présence avant 2026 et casier judiciaire vierge.",
                "Confiez votre dossier à une Avocate Spécialisée."
            ]}
            ctaText="Vérifier mon Dossier"
        />
    );
}
