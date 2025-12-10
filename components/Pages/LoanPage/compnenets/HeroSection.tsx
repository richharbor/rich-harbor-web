"use client"

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { useMemo, MouseEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

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
    return (
        <section className="pt-12 relative mt-20 z-10  pb-20 px-6 " onMouseMove={handleMouseMove}>
             <div className="absolute inset-0 -z-30 bg-transparent backdrop-blur-[4px]"></div>
             <div className="max-md:hidden absolute w-48 h-fit left-32 top-10 -z-40 ">
                <Image src='https://aicdn.picsart.com/d22f4d37-ddab-4bc8-aae5-b37197499e3f.png' alt='bg-img'  width={240} height={700} />

             </div>
             <div className="max-md:hidden absolute w-60 h-fit left-72 top-72 -z-40 opacity-70">
                <Image src='https://aicdn.picsart.com/31471774-1fb4-49db-994e-f19e2d4fb2dd.png' alt='bg-img'  width={240} height={700} />

             </div>
             <div className="max-md:hidden absolute w-40 h-fit right-40 top-10 -z-40 ">
                <Image src='https://aicdn.picsart.com/27446715-3b21-492a-9c45-d237b951974b.png' alt='bg-img'  width={240} height={700} />

             </div>
             <div className="max-md:hidden absolute w-24 h-fit right-[360px] top-[350px] -z-40 ">
                <Image src='https://aicdn.picsart.com/fe9c5e1e-fd93-4c27-be86-7b34a995ca29.png' alt='bg-img'  width={240} height={700} />

             </div>
             
            {/* {boxes.map((box, i) => (
                <motion.div
                    key={i}
                    className="absolute w-32 h-32 -z-40 bg-red-300 rounded-lg"
                    style={{
                        left: box.x + 100,
                        top: box.y,
                        x: translateX,
                        y: translateY,
                    }}
                />
            ))}  */}

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
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-balance max-w-4xl mx-auto leading-[1.1]"
                >
                    Smart Lending for
                    <br />
                    Modern Businesses
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
                >
                    Get fast, flexible financing with competitive rates. Our platform helps businesses access the capital they
                    need to grow, powered by intelligent underwriting.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="rounded-full px-8 gap-2">
                        Apply Now
                        <ArrowRight size={16} />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                        Calculate Rate
                    </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-border"
                >
                    <p className="text-sm text-muted-foreground mb-6">Trusted by over 10,000+ businesses worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                        {["Stripe", "Shopify", "Square", "Notion", "Linear"].map((company, index) => (
                            <motion.span
                                key={company}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="text-lg font-semibold text-muted-foreground/60"
                            >
                                {company}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
