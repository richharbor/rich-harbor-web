import biraIcon from '@/public/images/bira91.webp'
import boatIcon from '@/public/images/boat.webp'
import capgeminiIcon from '@/public/images/capgemini.webp'
import mseIcon from '@/public/images/mse.png'
import nseIcon from '@/public/images/NSE.png'
import oyoIcon from '@/public/images/oyo.png'
import peIcon from '@/public/images/pe.webp'
import tapariaIcon from '@/public/images/taparia.webp'

import IntegrationRows from "./IntegrationRows/IntegrationRows";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import UnlistedShareEnquiryDialog from "@/components/Common/components/UnlistedShareEnquiryDialog";
import { motion } from 'framer-motion';


const items = [
    {
        name: "National Stock Exchange (NSE)",
        icon: "https://assets.incredmoney.com/images/v2/webp/NSE.webp",
        sector: "Exchange",
    },
    {
        name: "NCDEX Ltd",
        icon: "https://assets.incredmoney.com/images/v2/webp/NCDEX.webp",
        sector: "agricultural commodity exchange",
    },
    {
        name: "Metropolitan Stock Exchange (MSE)",
        icon: "https://assets.incredmoney.com/images/v3/Xmse.webp",
        sector: "Exchange",
    },
    {
        name: "Oravel Stays (OYO Rooms)",
        icon: "https://assets.incredmoney.com/images/v2/webp/OYO.webp",
        sector: "Hospitality",
    },
    {
        name: "Chennai Super Kings (CSK)",
        icon: "https://assets.incredmoney.com/images/v2/webp/CSK.webp",
        sector: "Sports",
    },

    {
        name: "Apollo Green Energy Ltd",
        icon: "https://assets.incredmoney.com/images/v2/webp/Apollo.webp",
        sector: "EPC & Renewable energy",
    },
];

export type itemsType = typeof items;
type Stock = {
    name: string
    sector: string
    icon: string
}

export default function HotSelling() {
    const route = useRouter();
    const [open, setOpen] = useState(false)
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null)

    const handleOpenDialog = (item: Stock) => {
        setSelectedStock(item)
        setOpen(true)
    }
    return (
        <section id='hot-ipo' className="max-w-7xl mx-auto py-20 overflow-hidden max-sm:py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 className="text-3xl font-batman md:text-4xl text-center lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Hot IPO’s on the Rise
                        </h2>

                        <p className="text-white/50 mt-4 text-lg text-center">
                            Explore the most in-demand equities and make informed trading decisions.
                        </p>
                    </motion.div>
                    {/* <div className="z-30 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
                        <div className="h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden min-w-[99vw]">
                            <IntegrationRows integrations={items} />
                            <IntegrationRows
                                integrations={items.slice().reverse()}
                                className=" "
                                reverse={true}
                            />
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="right"
                                speed="fast"
                            />
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="left"
                                speed="fast"
                            />
                            
                        </div>
                    </div> */}
                    <div
                        className="grid grid-cols-3 max-sm:px-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-5"
                    >
                        {items.slice(0, 5).map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                key={index}
                                className="z-10 bg-card group/items cursor-pointer ease-in-out hover:border-rich-violet transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0"
                                onClick={() => handleOpenDialog(item)}
                            >
                                <div className="flex justify-center h-32 max-sm:h-28">
                                    <img
                                        className="object-contain rounded-3xl group-hover/items:scale-85 transition-all duration-500 ease-in-out"
                                        src={item.icon}
                                        alt={`${item.name}-icon`}
                                    />
                                </div>
                                <h3 className="text-2xl max-sm:text-xl mt-6 ">
                                    {item.name}
                                </h3>
                                <p className=" text-white/30 mt-3 ">Sector</p>
                                <p className=" text-white/50 mt-1 ">
                                    {item.sector}
                                </p>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="z-10 bg-card group/items cursor-pointer ease-in-out hover:border-rich-violet transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0 flex flex-col justify-center items-center min-h-[300px]"
                            onClick={() => route.push("/allstocks")}
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover/items:bg-rich-violet/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover/items:text-rich-violet transition-all duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <h3 className="text-2xl max-sm:text-xl mt-6 font-medium">
                                View All
                            </h3>
                            <p className="text-white/50 mt-2 text-center text-sm">
                                Explore all available stocks
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
            <UnlistedShareEnquiryDialog
                open={open}
                onOpenChange={setOpen}
                defaultShareName={selectedStock?.name}
            />
        </section>
    );
}