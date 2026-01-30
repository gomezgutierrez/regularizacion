
import { InternationalLanding } from "@/components/international-landing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spain Regularization 2026: Official Amnesty & Residency Guide",
    description: "Legal assistance for the new Special Regularization Process approved by the Government. Check your eligibility.",
};

export default function EnglishPage() {
    return (
        <InternationalLanding
            language="en"
            title="Spain Regularization 2026: Official Amnesty & Residency Guide"
            subtitle="Legal assistance for the new Special Regularization Process approved by the Government."
            keyPoints={[
                "The new Immigration Law 2026 allows undocumented residents to obtain a Work Permit.",
                "Requirements: Arrival before 2026 and clean criminal record.",
                "Secure your application with a specialized Immigration Lawyer."
            ]}
            ctaText="Check Eligibility (Free)"
        />
    );
}
