"use client";

import { User, Building, Briefcase, Users, Landmark } from "lucide-react";

export default function WhoWeServe() {
    const segments = [
        {
            icon: User,
            title: "Individual Investors & HNIs",
            description: "Exclusive access to high-yield assets."
        },
        {
            icon: Building,
            title: "Family Offices",
            description: "Tailored wealth structuring and deal flow."
        },
        {
            icon: Briefcase,
            title: "Founders & Corporates",
            description: "Capital raising and strategic advisory."
        },
        {
            icon: Users,
            title: "Bankers & Wealth Advisors",
            description: "Partner with us to monetize your network."
        },
        {
            icon: Landmark,
            title: "Institutional Investors & Funds",
            description: "Direct access to large ticket block deals."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Who We Serve</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-batman tracking-tight text-white mb-4">
                        Designed for Every Financial Stakeholder
                    </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {segments.map((segment, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-primary/50 transition-colors duration-300 h-[240px] flex flex-col items-center justify-center overflow-hidden ${
                                // Make the last item span 2 columns on mobile/tablet to center it
                                index === 4 ? "col-span-2 lg:col-span-1" : "col-span-1"
                                }`}
                        >
                            <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-6">
                                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                                    <segment.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>

                                <h4 className="text-base md:text-lg font-bold text-center text-white leading-tight mb-2">
                                    {segment.title}
                                </h4>
                            </div>

                            <div className="absolute bottom-8 px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                <p className="text-sm text-neutral-400 text-center leading-relaxed">
                                    {segment.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
