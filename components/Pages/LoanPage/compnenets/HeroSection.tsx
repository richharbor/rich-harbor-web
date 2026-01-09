"use client"

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { useMemo, MouseEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { LoanFormDialog } from "./LoanFormDialog"
import { useState } from "react"


export function HeroSection() {
    const BOX_SIZE = 128; // w-32 = 128px
    const CONTAINER_WIDTH = 1200;
    const CONTAINER_HEIGHT = 700;
    const BOX_COUNT = 6;

    interface Box {
        x: number;
        y: number;
    }

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const translateX = useTransform(springX, [0, 1], [30, -30]);
    const translateY = useTransform(springY, [0, 1], [30, -30]);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width);
        mouseY.set((clientY - top) / height);
    }

    const boxes = useMemo(() => {
        const b: Box[] = [];
        // Collision checker
        function isOverlapping(x: number, y: number, existing: Box[]) {
            return existing.some((item) => {
                const dx = Math.abs(item.x - x);
                const dy = Math.abs(item.y - y);
                return dx < BOX_SIZE && dy < BOX_SIZE;
            });
        }

        // Generate non-overlapping positions
        for (let i = 0; i < BOX_COUNT; i++) {
            let x, y;
            // retry until safe spot found
            do {
                x = Math.floor(Math.random() * (CONTAINER_WIDTH - BOX_SIZE));
                y = Math.floor(Math.random() * (CONTAINER_HEIGHT - BOX_SIZE));
            } while (isOverlapping(x, y, b));

            b.push({ x, y });
        }
        return b;
    }, [BOX_SIZE, CONTAINER_WIDTH, CONTAINER_HEIGHT, BOX_COUNT]);

    const [open, setOpen] = useState(false);

    return (
        <section className="pt-12 relative mt-20 z-10  pb-20 px-6 ">
            <div className="absolute inset-0 -z-30 bg-transparent backdrop-blur-[4px]"></div>
            <div className="max-md:hidden absolute w-48 h-fit left-32 top-10 -z-40 ">
                <Image src='https://aicdn.picsart.com/d22f4d37-ddab-4bc8-aae5-b37197499e3f.png' alt='bg-img' width={240} height={700} />

            </div>
            <div className="max-md:hidden absolute w-60 h-fit left-72 top-72 -z-40 opacity-70">
                <Image src='https://aicdn.picsart.com/31471774-1fb4-49db-994e-f19e2d4fb2dd.png' alt='bg-img' width={240} height={700} />

            </div>
            <div className="max-md:hidden absolute w-40 h-fit right-40 top-10 -z-40 ">
                <Image src='https://aicdn.picsart.com/27446715-3b21-492a-9c45-d237b951974b.png' alt='bg-img' width={240} height={700} />

            </div>
            <div className="max-md:hidden absolute w-24 h-fit right-[360px] top-[350px] -z-40 ">
                <Image src='https://aicdn.picsart.com/fe9c5e1e-fd93-4c27-be86-7b34a995ca29.png' alt='bg-img' width={240} height={700} />

            </div>

            <div className="max-w-7xl z-10 mx-auto text-center">
                {/* Announcement Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#4AA651]" />
                    <span className="text-muted-foreground">Announcing $50M in funding</span>
                    <ChevronRight size={14} className="text-muted-foreground" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-batman tracking-tight text-balance max-w-4xl mx-auto leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Loans & Structured Credit Solutions
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
                >
                    Access retail, SME, and corporate loan products through a structured execution platform designed for speed, transparency, and scalability.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button onClick={() => setOpen(true)} size="lg" className="rounded-full h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                        Apply for a Loan <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            <LoanFormDialog open={open} onOpenChange={setOpen} />
        </section >
    )
}
