import React from 'react'
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BadgeIndianRupee, BanknoteArrowDown, Handshake, PackageCheck } from 'lucide-react';
import { Highlight } from '@/components/ui/hero-highlight';

export default function OurProduct() {



    return (
        <section className=" h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20 py-20 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] rounded-lg"></div>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-3 max-md:gap-12'>
                <div>
                    <div className='flex flex-col gap-5 max-md:items-center'>
                        {/* <h1 className='text-3xl max-md:text-center md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400'>
                            Indian Private Markets At Your <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Fingertips</span>
                        </h1> */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: [20, -5, 0],
                            }}
                            viewport={{ once: true}}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="text-3xl max-md:text-center md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400 "
                        >
                           Indian Private Markets At Your{" "}
                            <Highlight className="text-black dark:text-white">
                                Fingertips.
                            </Highlight>
                        </motion.h1>
                        <p className='text-sm max-sm:text-center md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto'>
                            Biggest platform to invest in Startups, MSMEs, PreIPOs, Unicons and more.
                        </p>

                        <Button className='w-fit'>Get Started</Button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-[#191919] rounded-xl flex gap-3 justify-center items-center py-3 px-5 max-sm:px-2'>
                        <BadgeIndianRupee className='size-10' />
                        <h1 className='font-bold max-md:font-normal ' >Angel Investing</h1>
                    </div>
                    <div className='bg-[#191919] rounded-xl flex gap-3 justify-center items-center py-3 px-5 max-sm:px-2'>
                        <PackageCheck className='size-10' />
                        <h1 className='font-bold max-md:font-normal '>PreIPO | Unicons</h1>
                    </div>
                    <div className='bg-[#191919] rounded-xl flex gap-3 justify-center items-center py-3 px-5 max-sm:px-2'>
                        <BanknoteArrowDown className='size-10' />
                        <h1 className='font-bold max-md:font-normal '>Startup Funding</h1>
                    </div>
                    <div className='bg-[#191919] rounded-xl flex gap-3 justify-center items-center py-3 px-5 max-sm:px-2'>

                        <Handshake className='size-10 max-sm:size-8' />
                        <h1 className='font-bold max-md:font-normal '>Esops</h1>
                    </div>
                </div>

            </div>

        </section>
    )
}