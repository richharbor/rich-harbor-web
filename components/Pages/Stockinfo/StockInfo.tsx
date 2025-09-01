'use client'

import nseIcon from '@/public/images/NSE.png'
import Finance from "@/components/Pages/Stockinfo/Finance/Finance";
import News from "@/components/Pages/Stockinfo/News/News";
import Research from "@/components/Pages/Stockinfo/Research/Research";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";



export default function StockInfoPage({id}:  {id: string}) {
    
     const [window, setWindow] = useState<string>("research")
     
    return (

        <div className="min-h-screen py-10 mt-20 w-full">
            <div className="w-full flex">
                <div className="flex flex-1 flex-col gap-10 border-b">
                    <div className="flex gap-5 max-md:flex-col relative w-full ">
                        <div className="h-20 w-20 ">
                            <Image src={nseIcon} alt="company-icon" className="h-full w-auto object-contain" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h1 className="text-2xl max-md:text-lg flex-1 flex items-center">National Stock Exchange (NSE)</h1>
                            <div className="flex gap-5">
                                <p>INE721I01023</p>
                                <p>Stock Exchange</p>
                                <p>New Delhi</p>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0">
                            <button className="bg-gradient-to-r from-rich-violet to-[#704bd2] px-6 py-3 max-md:px-3 max-md:py-2 rounded-l-xl text-white font-medium hover:from-rich-violet/60 hover:to-[#704bd2]/60 transition ease-in-out duration-200">
                                Available now
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <p className="text-white/50">Price per share</p>
                            <h2>$1.00{" ("}Face Value{")"}</h2>
                        </div>
                        <div>
                            <p className="text-white/50">Available on</p>
                            <div>
                                Grow, Angle One
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 z-10">
                        <button onClick={() => setWindow('research')} className={`px-3 py-2 ${window === 'research' ? 'border-b-2 border-rich-violet' : 'cursor-pointer'} transition-all duration-200 ease-in-out`}>Research Report</button>
                        <button onClick={() => setWindow('finance')} className={`px-3 py-2 ${window === 'finance' ? 'border-b-2 border-rich-violet' : 'cursor-pointer'} transition-all duration-200 ease-in-out`}>Finance</button>
                        <button onClick={() => setWindow('news')} className={`px-3 py-2 ${window === 'news' ? 'border-b-2 border-rich-violet' : 'cursor-pointer'} transition-all duration-200 ease-in-out`}>News</button>
                    </div>
                </div>
                <div className="flex w-[35%] max-md:hidden flex-col justify-center gap-5 py-10 px-5 border-l border-b border-r">
                    <p className="text-center">Register to see prices and unloack exclusive investment opportunities</p>

                    <Button className="px-5 py-2">Reserve Access</Button>
                </div>
            </div>
            <div className="">
                {window === 'research' && <Research />}
                {window === 'finance' && <Finance />}
                {window === 'news' && <News />}
            </div>
            <div className="space-y-6 px-20 max-md:px-5">
                {/* Industry Analysis */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Industry Analysis</h2>
                    <p className="text-white/50 leading-relaxed">
                        The National Stock Exchange (NSE) is the largest stock exchange in India and has been recognized as the world's largest derivatives exchange for four consecutive years. The global capital markets, which include equities, corporate bonds, and sovereign bonds, were valued at USD 153 trillion in 2014 and are projected to reach USD 515 trillion by 2030. By 2050, emerging markets (EMs) are expected to hold 47% of the global market capitalization, increasing to 55% by 2075. India’s share in the global market capitalization is projected to rise from just under 3% in 2022 to 8% by 2050.
                        <br />
                        <span className="text-sm text-gray-400">(Source: Industry Research Report and Annual Report)</span>
                    </p>
                </div>

                {/* Overview of NSE */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Overview of NSE</h2>
                    <p className="text-white/50 leading-relaxed">
                        In FY24, the NSE reported revenues of ₹16,433.61 crore, marking a year-on-year growth of 28% and a compound annual growth rate (CAGR) of 33.35% over the past five years. This growth can be attributed to increased investor participation post-COVID, with the trading segment contributing approximately 91.93% of the total revenue. In CY23, the exchange witnessed a remarkable increase in trading volume, with 38,114 million derivative contracts traded compared to just 3,790.09 million contracts before the pandemic. Regulatory fees, representing 27% of total costs, have risen at a CAGR of 78% over the last five years.
                    </p>
                </div>
            </div>
        </div>

    );
}