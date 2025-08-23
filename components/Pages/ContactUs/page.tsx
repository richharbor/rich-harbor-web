"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion'

type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    source: string;
    message: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        source: "",
        message: "",
    });

    // Handle input & select changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

        // TODO: send data to API
    };

    return (
    //     <div className="fixed inset-0 z-10 flex justify-center items-center bg-black/30 backdrop-blur-sm">
    // <div className="max-h-screen overflow-y-auto scrollbar-hide bg-background rounded-xl p-6">
      
    
            <motion.div 
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className="bg-background px-2 py-5 mt-15 mx-auto max-w-2xl"
        >
            <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-2xl md:text-3xl lg:text-4xl  font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center mb-6 text-muted-foreground
      ">We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <form
                onSubmit={handleSubmit}
                
                className="space-y-4 p-6 border rounded mx-auto"
            >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="border p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border p-2 w-full rounded"
                            required
                        />
                    </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="border p-2 w-full rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-inner-spin-button]:appearance-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Subject</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border p-2 w-full rounded bg-background max-w-full"
                            required
                        >
                            <option value="">Select an Option</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                            <option value="partner">Want to be a partner</option>
                        </select>
                    </div>
                </div>

                {/* Source */}
                <div>
                    <label className="block font-medium">Where did you find us?</label>
                    <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-background"
                    >
                        <option value="">Select an Option</option>
                        <option value="google">Google</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend/Referral</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={4}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"

                >
                    Submit
                </Button>
            </form>

            <div className="flex justify-center gap-10 max-sm:gap-3 mt-5 border-t">
                <a href="mailto:info@richharbor.com" className="flex gap-2 items-center">
                    <Mail size={15} />
                    <p>info@richharbor.com</p>
                </a>
                <a href="tel:+91345345453" className="flex gap-2 items-center">
                    <Phone size={15} />
                    <p>+91-345345453</p>
                </a>
            </div>
        </motion.div>
        // </div >
        // </div >
        

    );
}