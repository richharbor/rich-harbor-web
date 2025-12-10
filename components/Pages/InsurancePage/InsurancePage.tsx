import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function InsurancePage() {
    return (
        <section className="mt-10 max-sm:mt-10 max-w-screen">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <Plans />
            <CTA />
        </section>
    )
}