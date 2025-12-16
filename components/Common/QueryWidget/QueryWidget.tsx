"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function QueryWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic here (console.log mostly for now)
        console.log({ email, category, description });
        // Reset and close
        setEmail("");
        setCategory("");
        setDescription("");
        setIsOpen(false);
        alert("Query Sent! We'll get back to you soon.");
    };

    return (
        <>
            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex items-center">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            whileHover={{ x: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={() => setIsOpen(true)}
                            className="bg-[#2a2a2a] text-white py-3 px-2 rounded-l-lg shadow-xl cursor-pointer flex flex-col items-center gap-2 border-l border-t border-b border-gray-700/50 backdrop-blur-md hover:bg-[#333] transition-colors"
                        >
                            <HelpCircle size={20} className="text-white/70" />
                            <span className="text-xs font-medium [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest text-white/50">
                                Have a Query?
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            />

                            {/* Drawer/Dialog */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0.5 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0, transition: { duration: 0.3 } }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="fixed right-0 -top-64 h-[590px] w-full sm:w-[400px] bg-background border-l border-border shadow-2xl z-50 flex flex-col"
                            >
                                <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/5">
                                    <div>
                                        <h3 className="text-xl font-bold font-batman">Ask Us Anything</h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Our experts are here to help you.
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                        className="hover:bg-destructive/10 hover:text-destructive rounded-full"
                                    >
                                        <X size={20} />
                                    </Button>
                                </div>

                                <div className="flex-1 p-6 overflow-y-auto">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="bg-secondary/20 border-border focus:ring-1 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                                            <Select value={category} onValueChange={setCategory} required>
                                                <SelectTrigger className="bg-secondary/20 border-border">
                                                    <SelectValue placeholder="Select a topic" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="loan">Loans</SelectItem>
                                                    <SelectItem value="insurance">Insurance</SelectItem>
                                                    <SelectItem value="unlisted_shares">Unlisted Shares</SelectItem>
                                                    <SelectItem value="startup_funding">Startup Funding</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="description" className="text-sm font-medium">Your Query</Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Type your question detail here..."
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required
                                                className="min-h-[150px] bg-secondary/20 border-border focus:ring-1 transition-all resize-none"
                                            />
                                        </div>

                                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                                            Submit Query <Send size={18} className="ml-2" />
                                        </Button>
                                    </form>
                                </div>

                                <div className="p-4 border-t border-border bg-secondary/5 text-center">
                                    <p className="text-xs text-muted-foreground">
                                        We typically reply within 2-4 hours during business days.
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
