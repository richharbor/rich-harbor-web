"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

const profiles = [
    "Wealth Manager",
    "Investment Advisor",
    "Insurance Advisor / POSP",
    "Banker / Relationship Manager",
    "CA / CS / Tax Consultant",
    "Real Estate Consultant",
    "Entrepreneur / Professional",
    "Other"
];

const products = [
    "Unlisted Shares",
    "Pre-IPO Opportunities",
    "Private Equity & Structured Deals",
    "Insurance",
    "Loans",
    "Real Estate",
    "Corporate Finance",
];

export function PartnerForm() {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);

    const toggleProduct = (product: string) => {
        setSelectedProducts((current) =>
            current.includes(product)
                ? current.filter((p) => p !== product)
                : [...current, product]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate submit
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitting(false);
        // Handle actual submission logic here
        alert("Thanks for your interest! Our team will contact you shortly.");
    };

    return (
        <section id="partner-form" className="py-20 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative z-10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold font-batman mb-3">Start Your Partner Journey</h2>
                        <p className="text-muted-foreground text-sm">Fill in your details to get free partner access.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <Input id="mobile" placeholder="+91 98765 43210" required className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email ID</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Mumbai, Delhi, etc." required className="bg-background/50" />
                        </div>

                        <div className="space-y-2">
                            <Label>Current Profile</Label>
                            <Select required>
                                <SelectTrigger className="bg-background/50">
                                    <SelectValue placeholder="Select your profile" />
                                </SelectTrigger>
                                <SelectContent>
                                    {profiles.map((profile) => (
                                        <SelectItem key={profile} value={profile}>
                                            {profile}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <Label>Interested Products</Label>
                            <div className="grid grid-cols-2 gap-3">
                                {products.map((product) => (
                                    <div key={product} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={product}
                                            checked={selectedProducts.includes(product)}
                                            onCheckedChange={() => toggleProduct(product)}
                                        />
                                        <label
                                            htmlFor={product}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                                        >
                                            {product}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full h-12 text-base rounded-xl font-semibold relative overflow-hidden group" disabled={submitting}>
                            <span className="relative z-10 transition-colors group-hover:text-white">
                                {submitting ? "Submitting..." : "Get Free Partner Access"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-rich-violet to-[#704bd2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Our team will connect with you for a quick walkthrough.
                        </p>
                    </form>
                </motion.div>

                {/* Decorative background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 blur-3xl -z-10 rounded-full" />
            </div>
        </section>
    );
}
