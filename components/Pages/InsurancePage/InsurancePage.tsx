import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";

import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function InsurancePage() {
    return (
        <section className="mt-10 max-sm:mt-10 max-w-screen">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <CTA />

            {/* Disclosure */}
            <section className="py-12 bg-neutral-900 text-neutral-400">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-neutral-200 mb-3 flex items-center gap-2">
                            Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Insurance is subject to policy terms, conditions, and insurer underwriting. Richharbor acts as an insurance intermediary and does not underwrite risk.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}