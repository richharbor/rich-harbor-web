"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function WhatsAppBanner() {
    return (
        <div className="w-full px-4 md:px-6 mb-16">
            <Link href="/whatsapp-community" className="block w-full relative z-10">
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg cursor-pointer group"
                >
                    <MessageCircle className="w-6 h-6 animate-bounce" />
                    <span className="font-semibold text-lg">Join our exclusive WhatsApp Community for real-time deal flow</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
            </Link>
        </div>
    );
}
