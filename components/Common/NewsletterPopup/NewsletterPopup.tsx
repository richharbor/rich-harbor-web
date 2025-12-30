"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [timeOut, setTimeOut] = useState(false);

    useEffect(() => {
        // Check if user has already subscribed (via cookie)
        const existingEmail = Cookies.get("userEmail");

        if (existingEmail) {
            setIsSubscribed(true);
        } else {
            // If not subscribed, show popup after 10 seconds
            const timer = setTimeout(() => {
                // Double check cookie in case user subscribed in another tab/window
                if (!Cookies.get("userEmail")) {
                    setIsOpen(true);
                    setTimeOut(true);
                }
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            name,
            phone,
            email,
        });

        // Set cookie to prevent popup from showing again
        // Expires in 365 days
        Cookies.set("userEmail", email, { expires: 365 });
        setIsSubscribed(true);
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-[100] flex items-center">
                <AnimatePresence>
                    {!isOpen && !isSubscribed && timeOut && (
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={() => setIsOpen(true)}
                            className="bg-[#2a2a2a] text-white py-3 px-2 rounded-r-lg shadow-xl cursor-pointer flex flex-col items-center gap-2 border-r border-t border-b border-gray-700/50 backdrop-blur-md hover:bg-[#333] transition-colors"
                        >
                            <Bell size={20} className="text-white/70" />
                            <span className="text-xs font-medium [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest text-white/50">
                                Stay Updated
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
                    <DialogHeader>
                        <DialogTitle>Stay Updated!</DialogTitle>
                        <DialogDescription>
                            Subscribe to get latest updates on upcoming IPOs and exclusive unlisted shares offers.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91 98765 43210"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="flex justify-end mt-4 gap-2">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button type="submit">Subscribe Now</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
