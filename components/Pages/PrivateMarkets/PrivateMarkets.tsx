"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, Users, Lock, PieChart, ArrowRight, CheckCircle, XCircle, FileText, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const suitability = [
    {
        title: "Appropriate For",
        icon: CheckCircle,
        iconColor: "text-emerald-500",
        items: [
            "Companies seeking ₹50–100+ Crore of growth or pre-IPO capital",
            "Strong operating fundamentals supported by audited financials",
            "Professional governance and institutional readiness",
            "Open to partnering with institutional and strategic investors"
        ]
    },
    {
        title: "Not Intended For",
        icon: XCircle,
        iconColor: "text-red-500",
        items: [
            "Seed or early-stage ventures",
            "Retail or publicly solicited fundraises",
            "Crowdfunding or mass-distribution initiatives"
        ]
    }
];

const process = [
    {
        id: 1,
        title: "Mandate & Readiness Review",
        description: "Assessment of capital structure, governance, and scalability under a non-exclusive mandate.",
        icon: FileText
    },
    {
        id: 2,
        title: "Confidential Positioning",
        description: "Preparation of confidential investment teaser articulating growth drivers and strategic rationale.",
        icon: Lock
    },
    {
        id: 3,
        title: "Targeted Outreach",
        description: "Selective introduction to relevant AIFs, PE funds, and family offices based on investment profile.",
        icon: Globe
    },
    {
        id: 4,
        title: "Transaction Coordination",
        description: "Support through diligence and execution. Capital flows directly between investors and company.",
        icon: Handshake
    }
];

const network = [
    "Category II Alternative Investment Funds (AIFs)",
    "Growth-oriented and pre-IPO focused private equity firms",
    "Family offices and strategic investment platforms"
];

export default function PrivateMarkets() {
    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden w-[99vw] py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-batman mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                        >
                            Private Markets & Institutional Capital Solutions
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl font-semibold mb-6 text-foreground/80"
                        >
                            Connecting Exceptional Businesses with Institutional Capital
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
                        >
                            Richharbor partners with a select group of growth-stage and pre-IPO companies to facilitate confidential capital introductions to institutional investors, including AIFs, private equity firms, and family offices.
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

            {/* Suitability Criteria */}
            <section className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">Company Profile — Suitability Criteria</h2>
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
                        <h2 className="text-3xl font-bold font-batman mb-6">Our Mandate</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Richharbor operates as a capital introduction and deal sourcing partner. We do not act as an investment advisor, portfolio manager, or fund sponsor. Our mandate is limited to evaluating investment readiness, positioning opportunities appropriately, and facilitating introductions to relevant institutional capital providers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Engagement Process */}
            <section className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-batman mb-4">Engagement Process</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A structured, update-driven approach.
                        </p>
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
                            Richharbor maintains active relationships across the private capital ecosystem.
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

            {/* Disclosure */}
            <section className="py-12 bg-neutral-900 text-neutral-400">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950/50 p-8 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-neutral-200 mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-yellow-500" /> Important Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Richharbor does not solicit capital from the public, does not provide investment advice, and does not assure or guarantee capital raise outcomes. All engagements are conducted on a private, mandate-based basis. Investment decisions, due diligence, valuation assessments, and capital deployment are solely at the discretion of the respective investors and companies, in accordance with applicable laws and regulations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
