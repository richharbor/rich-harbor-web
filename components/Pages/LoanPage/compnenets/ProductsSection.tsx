"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Clock, Coins, Code, TrendingUp, Home, User, Factory } from "lucide-react";
import Link from "next/link";

export function ProductsSection() {
    const products = [
        {
            name: "Startup Term Loan",
            badge: "Popular for Startups",
            description: "Unlock immediate cash on your future cash flow. Instant credit lines designed specifically for new-age startups.",
            features: [
                "Collateral Free Funding",
                "Up to ₹5 Crores Limit",
                "Disbursal in 48 Hours",
                "Connect via Banking/GST"
            ],
            icon: Zap,
            link: "#",
            color: "bg-purple-500/10 text-purple-600 border-purple-200"
        },
        // {
        //     name: "Embedded Finance",
        //     badge: "For Platforms",
        //     description: "Seamlessly integrate lending solutions into your platform. Empower your users with instant, data-driven capital access.",
        //     features: [
        //         "Full API/SDK Integration",
        //         "Non-Dilutive Capital",
        //         "AI-Driven Underwriting",
        //         "Revenue-Based Repayment"
        //     ],
        //     icon: Code,
        //     link: "#",
        // },
        {
            name: "Working Capital",
            badge: "For SME/MSME",
            description: "Manage your day-to-day operations with ease. Cash credit and overdraft facilities tailored for your business.",
            features: [
                "ROI from 8.5% p.a.",
                "Unsecured Limit up to ₹5 Cr",
                "Cash Credit & Overdraft",
                "Stock & Debtor Financing"
            ],
            icon: Factory,
            link: "#",
            color: "bg-teal-500/10 text-teal-600 border-teal-200"
        },
        
        {
            name: "Home Loan",
            badge: "Best for Individuals",
            description: "Own your dream home with easy financing options. Competitive interest rates and flexible tenures.",
            features: [
                "ROI from 8.4% p.a.",
                "Tenure up to 30 Years",
                "Quick 10-15 Day Disbursal",
                "Minimal Documentation"
            ],
            icon: Home,
            link: "#",
            color: "bg-orange-500/10 text-orange-600 border-orange-200"
        },
        {
            name: "Personal Loan",
            badge: "Quick Disbursal",
            description: "Fast-track your dreams or restructure debts. Unsecured loans with minimal documentation.",
            features: [
                "Disbursal in 24 Hours",
                "ROI from 10.50% p.a.",
                "Min Salary ₹12,500/mo",
                "21-60 Years Age Limit"
            ],
            icon: User,
            link: "#",
            color: "bg-pink-500/10 text-pink-600 border-pink-200"
        },
        
        {
            name: "Growth Capital",
            badge: "Flexible",
            description: "Scale your inventory and marketing without equity dilution. Repay based on a percentage of your revenue.",
            features: [
                "100% Digital Process",
                "No Fixed EMIs",
                "Data-Driven Offers",
                "Flat Fee Structure"
            ],
            icon: TrendingUp,
            link: "#",
            color: "bg-green-500/10 text-green-600 border-green-200"
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
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
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

                            {product.badge && (
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6">
                                    {product.badge}
                                </span>
                            )}

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
