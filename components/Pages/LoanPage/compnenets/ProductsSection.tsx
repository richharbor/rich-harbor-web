"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Clock, Coins, Code, TrendingUp, Home, User, Factory, Building2, ArrowRightLeft } from "lucide-react";
import Link from "next/link";

export function ProductsSection() {
    const products = [
        {
            name: "Personal Loans",
            description: "Quick access to funds for your personal needs with flexible repayment tenure.",
            features: ["Disbursal in 24 Hours", "Minimal Documentation", "No Collateral Required"],
            icon: User,
            link: "#",
            color: "bg-pink-500/10 text-pink-600 border-pink-200"
        },
        {
            name: "Home Loans",
            description: "Realize your dream home with low-interest rates and extended repayment options.",
            features: ["Doorstep Service", "Simplified Processing", "Flexible Tenure"],
            icon: Home,
            link: "#",
            color: "bg-orange-500/10 text-orange-600 border-orange-200"
        },
        {
            name: "Business Loans",
            description: "Fuel your business growth with capital for expansion, inventory, or working capital.",
            features: ["Unsecured Options", "Competitive Rates", "Quick Approval"],
            icon: Factory,
            link: "#",
            color: "bg-teal-500/10 text-teal-600 border-teal-200"
        },
        {
            name: "Loan Against Property",
            description: "Unlock the value of your property to fund your personal or business needs.",
            features: ["High Loan Amount", "Long Tenure", "Low Interest Rates"],
            icon: Building2,
            link: "#",
            color: "bg-purple-500/10 text-purple-600 border-purple-200"
        },
        {
            name: "Balance Transfer Solutions",
            description: "Transfer your existing high-cost loans to enjoy lower interest rates and reduced EMIs.",
            features: ["Lower Interest Rates", "Top-up Loan Facility", "Simplified Process"],
            icon: ArrowRightLeft,
            link: "#",
            color: "bg-blue-500/10 text-blue-600 border-blue-200"
        },
    ];

    return (
        <section className="py-24 px-6 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold font-batman tracking-tight mb-4"
                    >
                        Featured Loan Products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Handpicked financial products tailored to accelerate your business growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <product.icon size={80} className="text-secondary opacity-20 -rotate-12" />
                            </div>



                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${product.color}`}>
                                    <product.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground">Flexible Financing</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                        <span className="text-sm font-medium opacity-80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="w-full rounded-full group-hover:bg-primary/90">
                                <Link href={product.link} target="_blank">
                                    Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
