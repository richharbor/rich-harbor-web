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
        </section>
    )
}