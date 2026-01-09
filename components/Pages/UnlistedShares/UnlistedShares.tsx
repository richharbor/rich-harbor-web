"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, FileCheck, Users, Search, MessageCircle, FileSignature, ArrowRightLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HotSelling from "../Home/HotSelling/HotSelling";
import PromisingOnes from "../Home/PromissingOnes/PromissingOnes";
import Faq from "../Home/Faq/Faq";
import WhatAre from "@/components/Common/components/WhatAre";
import WhyInvest from "@/components/Common/components/WhyInvest";
import HowItWorks from "@/components/Common/components/HowItWorks";
import CommonCTA from "@/components/Common/components/CommonCTA";
import Disclosure from "@/components/Common/components/Disclosure";
import { useState } from "react";
import z from "zod";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { postStockEnquiry } from "@/services/shareServices";

const benefits = [
    {
        title: "Verified Sellers",
        description: "Verified sellers and deal screening.",
        icon: ShieldCheck,
    },
    {
        title: "Transparent Pricing",
        description: "Transparent, market-linked pricing.",
        icon: TrendingUp,
    },
    {
        title: "Secure Transfer",
        description: "Secure off-market transfer to demat account.",
        icon: ArrowRightLeft,
    },
    // {
    //     title: "Execution Support",
    //     description: "End-to-end execution support.",
    //     icon: FileCheck,
    // },
    {
        title: "Private Access",
        description: "No public solicitation or mass distribution.",
        icon: Users,
    },
];

const steps = [
    {
        id: 1,
        title: "Requirement Submission",
        description: "Share your interest in a specific company or category.",
        icon: Search,
    },
    {
        id: 2,
        title: "Price Discovery & Validation",
        description: "Pricing is evaluated based on demand, company fundamentals, and transaction feasibility.",
        icon: MessageCircle,
    },
    {
        id: 3,
        title: "Documentation & Transfer",
        description: "Shares are transferred via off-market transaction with proper documentation and demat credit.",
        icon: FileSignature,
    },
    {
        id: 4,
        title: "Confirmation & Closure",
        description: "Transaction completion is confirmed once shares reflect in your demat account.",
        icon: ArrowRightLeft,
    },
];

const faq = [
    {
        question: "Are unlisted shares safe?",
        answer: "They carry higher risk due to limited liquidity and information. Due diligence is essential."
    },
    {
        question: "Can I sell unlisted shares easily?",
        answer: "Liquidity is limited. Exit depends on market demand or future listing."
    },
    {
        question: "Are shares transferred to my demat account?",
        answer: "Yes. All transfers are executed through off-market demat transactions."
    },
    {
        question: "Does Richharbor recommend specific companies?",
        answer: "No. Richharbor facilitates execution and access, not investment advice."
    }
];

interface FormData {
    shareName: string
    quantity: string
    name: string
    email: string
    phone: string
}
const enquirySchema = z.object({
    shareName: z.string().min(1, "Share name is required"),
    quantity: z
        .string()
        .regex(/^\d+$/, "Quantity must be a number"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
});

export default function UnlistedShares() {

    const [open, setOpen] = useState(false)
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        shareName: "",
        quantity: "",
        name: "",
        email: "",
        phone: "",
    })




    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(formData);
            const result = enquirySchema.safeParse(formData);
            if (!result.success) {
                const firstError = result.error.issues[0]?.message;
                setError(firstError);
                console.error(firstError);
                return;
            }



            setError("");
            const response = await postStockEnquiry(result.data);
            console.log(response);
            setOpen(false);
            const whatsappUrl = `https://wa.me/919211265558`;
            window.open(whatsappUrl, "_blank");
            setFormData({
                shareName: "",
                quantity: "",
                name: "",
                email: "",
                phone: "",
            })

        } catch (error) {
            console.error("Form submission error:", error);
            setError("Form submission error")
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm scale-105 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-5xl font-bold font-batman mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                        >
                            Unlisted Shares & Pre-IPO Investment Opportunities
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-md sm:text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed"
                        >
                            Access verified unlisted shares and pre-IPO opportunities with transparent pricing, compliant execution, and secure off-market transfers.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="#contact">
                                <Button onClick={() => setOpen(true)} size="lg" className="rounded-full h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                                    Submit Request <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Are Unlisted Shares */}
            <WhatAre
                title="What Are Unlisted Shares?"
                description="Richharbor is a trusted unlisted shares platform that simplifies access to unlisted shares India. We provide a transparent unlisted shares price list and facilitate secure transactions. Unlisted shares are equity shares of companies not listed on stock exchanges such as NSE or BSE. These may include fast-growing private companies, mature businesses, or companies preparing for an IPO."
            />

            {/* Why Invest */}
            <WhyInvest
                title="Why Investors Consider Unlisted Shares"
                description="Unlisted investing is suitable for investors with a long-term perspective and higher risk tolerance looking to capture value early in a company's lifecycle."
                reasons={[
                    "Early access to high-quality companies",
                    "Potential upside before public listing",
                    "Portfolio diversification beyond listed equities",
                    "Participation in growth and pre-IPO stages"
                ]}
            />

            {/* Key Benefits */}
            <section className="py-20 md:w-[99vw] bg-secondary/5">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold font-batman mb-4">Why Invest Through Richharbor</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm hover:shadow-md h-full"
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
            <HowItWorks
                title="How the Unlisted Share Process Works"
                description="Simple, transparent, and secure process to get started."
                steps={steps}
            />


            <HotSelling />


            <PromisingOnes />

            {/* Taxation & Regulatory Disclosure */}
            <Disclosure
                title="Taxation & Important Disclosure"
                description="Richharbor does not provide investment advice or guarantee outcomes. All investment decisions rest solely with the investor."
            >
                <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    <div>
                        <span className="block font-semibold text-neutral-900 text-sm">Holding period &lt; 24 months</span>
                        <span className="text-neutral-600 text-sm">Short-Term Capital Gains</span>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
                    <div>
                        <span className="block font-semibold text-neutral-900 text-sm">Holding period ≥ 24 months</span>
                        <span className="text-neutral-600 text-sm">Long-Term Capital Gains with indexation</span>
                    </div>
                </div>
            </Disclosure>

            {/* FAQ */}
            <Faq items={faq} />

            <CommonCTA
                title={<span>Interested in <span className="text-primary">Unlisted Shares?</span></span>}
                description="Submit your requirement for a confidential review and pricing discussion."
                buttonText="Submit Requirement"
                buttonLink="#contact"
                onClick={() => setOpen(true)}
            />



            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Send Enquiry</DialogTitle>
                        <DialogDescription>
                            Please fill in the details below to send an enquiry for this share.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleEnquirySubmit} className="grid gap-4">
                        {/* Share Name (readonly) */}
                        <div className="grid gap-3">
                            <Label htmlFor="shareName">Share Name</Label>
                            <Input
                                id="shareName"
                                name="shareName"
                                onChange={handleChange}
                                placeholder="Enter share name"
                                className="bg-gray-100"
                            />
                        </div>

                        {/* Quantity */}
                        <div className="grid gap-3">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input onChange={handleChange} id="quantity" name="quantity" type="number" placeholder="Enter quantity" />
                        </div>

                        {/* Name */}
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input onChange={handleChange} id="name" name="name" placeholder="Enter your name" />
                        </div>

                        {/* Email */}
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={handleChange} id="email" name="email" type="email" placeholder="Enter your email" />
                        </div>

                        {/* Phone */}
                        <div className="grid gap-3">
                            <Label htmlFor="phone">Phone</Label>
                            <Input onChange={handleChange} id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <p className='text-red-500 text-sm'>{error}</p>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button disabled={loading} type="submit">{loading ? 'Sending...' : 'Send Enquiry'}</Button>

                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
