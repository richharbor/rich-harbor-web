"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, FileCheck, Users, Search, MessageCircle, FileSignature, ArrowRightLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HotSelling from "../Home/HotSelling/HotSelling";
import PromisingOnes from "../Home/PromissingOnes/PromissingOnes";

const benefits = [
    {
        title: "Curated Opportunities",
        description: "Access to curated unlisted & pre IPO companies selected for their fundamental strength.",
        icon: ShieldCheck,
    },
    {
        title: "Transparent Pricing",
        description: "Market linked pricing with completely transparent processes and no hidden fees.",
        icon: TrendingUp,
    },
    {
        title: "Structured Support",
        description: "End-to-end support for structured transfer & settlement to ensure peace of mind.",
        icon: FileCheck,
    },
    {
        title: "Dedicated Relationship",
        description: "Dedicated relationship management to guide you through your investment journey.",
        icon: Users,
    },
];

const steps = [
    {
        id: 1,
        title: "Explore Opportunities",
        description: "Explore available unlisted opportunities on our platform.",
        icon: Search,
    },
    {
        id: 2,
        title: "Confirm Details",
        description: "Confirm pricing and quantity with our investment experts.",
        icon: MessageCircle,
    },
    {
        id: 3,
        title: "KYC & Documentation",
        description: "Complete your KYC and sign the necessary documentation seamlessly.",
        icon: FileSignature,
    },
    {
        id: 4,
        title: "Execution",
        description: "Execute transfer through compliant mechanisms and receive execution.",
        icon: ArrowRightLeft,
    },
];

export default function UnlistedShares() {
    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm scale-105 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-batman mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                        >
                            Unlisted Shares
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-md sm:text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed"
                        >
                            Richharbor enables investors to buy and sell NSE unlisted shares and pre-IPO shares of fundamentally strong companies. We offer transparent NSE share price unlisted data and structured execution.
                            We focus on quality opportunities, clear documentation, and end-to-end transaction support.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="#contact">
                                <Button size="lg" className="rounded-full h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                                    Start Investing <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 md:w-[99vw] bg-secondary/5">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">Key Benefits</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Why choose Richharbor for your unlisted share investments?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container max-w-7xl px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">How It Works</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Simple, transparent, and secure process to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -mt-10" />

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-background p-6 rounded-2xl border border-border shadow-sm text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-background border-4 border-secondary rounded-full flex items-center justify-center mb-6 text-primary relative z-10 shadow-sm">
                                    <step.icon className="w-7 h-7" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <HotSelling />


            <PromisingOnes />

            {/* Disclosure */}
            <section className="py-12 mt-5 bg-neutral-900 text-neutral-400">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-neutral-200 mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-yellow-500" /> Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Unlisted shares are illiquid and carry higher risk than listed securities. Richharbor does not provide investment advice or guarantee returns. Investors must evaluate suitability before transacting.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
