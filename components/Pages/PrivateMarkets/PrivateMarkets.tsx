"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, Users, Lock, PieChart, ArrowRight, CheckCircle, XCircle, FileText, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WhatAre from "@/components/Common/components/WhatAre";
import Disclosure from "@/components/Common/components/Disclosure";
import Faq from "../Home/Faq/Faq";
import CommonCTA from "@/components/Common/components/CommonCTA";

const suitability = [
    {
        title: "Appropriate for Companies That:",
        icon: CheckCircle,
        iconColor: "text-emerald-500",
        items: [
            "Seek ₹50–100+ crore of growth or pre-IPO capital",
            "Demonstrate strong operating fundamentals",
            "Maintain professional governance and audit readiness",
            "Are open to institutional partnerships"
        ]
    },
    {
        title: "Not Intended For:",
        icon: XCircle,
        iconColor: "text-red-500",
        items: [
            "Seed or early-stage ventures",
            "Retail fundraising or public solicitation",
            "Crowdfunding or mass distribution initiatives"
        ]
    }
];

const process = [
    {
        id: 1,
        title: "Mandate & Readiness Review",
        description: "Non-exclusive mandate and preliminary evaluation.",
        icon: FileText
    },
    {
        id: 2,
        title: "Confidential Positioning",
        description: "Preparation of a confidential teaser without public disclosure.",
        icon: Lock
    },
    {
        id: 3,
        title: "Targeted Institutional Outreach",
        description: "Selective sharing with relevant investors.",
        icon: Globe
    },
    {
        id: 4,
        title: "Transaction Coordination",
        description: "Support through diligence and execution.",
        icon: Handshake
    }
];

const faq = [
    {
        question: "Does Richharbor raise capital directly?",
        answer: "No. Richharbor facilitates introductions only."
    },
    {
        question: "Are outcomes guaranteed?",
        answer: "No. Capital raising outcomes depend on investor discretion."
    },
    {
        question: "Is information kept confidential?",
        answer: "Yes. All discussions are strictly confidential."
    }
];

const network = [
    "Category II AIFs",
    "Growth and pre-IPO focused PE funds",
    "Family offices and strategic investors"
];

export default function PrivateMarkets() {
    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden w-[99vw] py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm scale-105 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold font-batman mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                        >
                            Private Markets & Institutional Capital Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-md md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
                        >
                            Confidential, mandate-led capital introduction for growth-stage and pre-IPO companies seeking institutional investment from private equity India, venture capital India, and growth equity firms.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="#contact">
                                <Button size="lg" className="rounded-full h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                                    Request a Confidential Discussion <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <WhatAre
                title="Connecting Businesses with Institutional Capital"
                description="Richharbor partners with select growth-stage and pre-IPO companies to facilitate capital introductions to institutional investors, including Alternative Investment Funds (AIFs), private equity firms, family offices, and strategic capital providers."
            />

            {/* Suitability Criteria */}
            <section className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">Who This Is For</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {suitability.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background border border-border p-8 rounded-2xl shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <section.icon className={cn("w-6 h-6", section.iconColor)} />
                                    <h3 className="text-2xl font-bold">{section.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-foreground/40")} />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mandate */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 p-8 md:p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold font-batman mb-6">Our Mandate & Scope</h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Richharbor operates as a capital introduction and deal sourcing partner.
                                <br className="hidden md:block" />
                                We do not act as an investment advisor, fund manager, or portfolio manager.
                            </p>

                            <div className="pt-2">
                                <p className="font-medium text-foreground mb-4">Our role includes:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto text-base text-left">
                                    {[
                                        "Investment readiness evaluation",
                                        "Opportunity positioning",
                                        "Targeted institutional introductions",
                                        "Transaction coordination support"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Process */}
            <section className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">How the Engagement Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-background p-6 rounded-2xl border border-border shadow-sm text-center group hover:border-primary/50 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <div className="absolute top-6 right-6 text-4xl font-bold text-foreground/5 select-none">
                                    0{step.id}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional Capital Network */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-8">Institutional Capital Network</h2>
                        <p className="text-muted-foreground mb-12">
                            Opportunities are shared selectively in line with institutional mandates.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {network.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-secondary/10 border border-border/50 p-6 rounded-xl flex items-center justify-center text-center font-medium"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form / Discussion Request */}
            <section id="contact" className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto bg-background border border-border p-8 md:p-12 rounded-3xl shadow-lg">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold font-batman mb-4">Request a Confidential Discussion</h2>
                            <p className="text-muted-foreground">
                                Companies seeking growth or pre-IPO capital may submit their details for an initial, confidential review. All information is treated with strict confidentiality.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter company name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Promoter / Key Contact</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Name & Designation" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="corporate@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 98765 43210" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Capital Requirement (₹)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="e.g. 50 Cr" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Stage</label>
                                    <select className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50">
                                        <option>Growth</option>
                                        <option>Pre-IPO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Brief Business Overview</label>
                                <textarea className="w-full px-4 py-3 rounded-lg bg-secondary/10 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px]" placeholder="Brief description of the business..." />
                            </div>
                            <Button size="lg" className="w-full py-6 text-lg rounded-xl font-semibold">
                                Submit for Review
                            </Button>
                        </form>
                    </div>
                </div>
            </section>



            {/* FAQ */}
            <Faq items={faq} />

            <CommonCTA
                title={<span>Exploring <span className="text-primary">Institutional Capital?</span></span>}
                description="Request a confidential discussion to evaluate suitability."
                buttonText="Request Confidential Discussion"
                buttonLink="#contact"
            />


            {/* Disclosure */}
            <Disclosure
                title="Important Disclosure"
                description="Richharbor does not solicit public investments, does not guarantee capital raises, and does not provide investment advice. All investment decisions are made independently by investors and companies."
            />


        </div>
    );
}
