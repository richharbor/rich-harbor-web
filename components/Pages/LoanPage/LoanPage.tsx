import { CTASection } from "./compnenets/CTA_Section";
import { EMICalculator } from "./compnenets/EMI_Calculator";
import { FeaturesSection } from "./compnenets/featureSection";
import { HeroSection } from "./compnenets/HeroSection";
import { ServicesSection } from "./compnenets/ServicesSection";
import { ProductsSection } from "./compnenets/ProductsSection";
import { HowItWorksSection } from "./compnenets/HowItWorks";
import { StatsSection } from "./compnenets/StatsSection";
import { TestimonialsSection } from "./compnenets/Testimonial";

export default function LoanPage() {
    return (
        <section className="mt-10 max-sm:mt-10 max-w-screen">
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <FeaturesSection />
            <EMICalculator />
            <HowItWorksSection />
            <StatsSection />
            <TestimonialsSection />
            <CTASection />

            {/* Disclosure */}
            <section className="py-12 bg-neutral-900 text-neutral-400">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-neutral-200 mb-3 flex items-center gap-2">
                            Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Loan approvals are subject to lender policies and credit assessment. Richharbor acts as a distribution partner and does not influence lending decisions.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}