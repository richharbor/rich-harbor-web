'use client'

import nseIcon from '@/public/images/NSE.png'
import Finance from "@/components/Pages/Stockinfo/Finance/Finance";
import News from "@/components/Pages/Stockinfo/News/News";
import Research from "@/components/Pages/Stockinfo/Research/Research";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import step1Img from '@/public/images/step1.png'
import step2Img from '@/public/images/step2.png'
import step3Img from '@/public/images/step3.png'
import step4Img from '@/public/images/step4.png'
import step5Img from '@/public/images/step5.png'
import step6Img from '@/public/images/step6.png'
import { TracingBeam } from "@/components/ui/tracing-beam";


const content = [
    {
        title: "Steps 1",
        description:
            "A deal is established through WhatsApp or phone conversation between an investment specialist of UnlistedGuru LLP and the buyer on the quantity and price of identified script(s).",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step1Img} alt='step1-img' />
            </div>
        ),
    },
    {
        title: "Steps 2",
        description:
            "UnlistedGuru LLP will send a detailed offer email of the deal (including KYC), which must be accepted by the buyer on the same day in order for us to block the quantity and rate. Payment and delivery takes place on the same day or the following day, as agreed in Step 1.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step2Img} alt='step2-img' />
            </div>
        ),
    },
    {
        title: "Steps 3",
        description:
            "Post acceptance, the buyer will provide their KYC [including a copy of PAN, Cancelled Cheque, Client Master List (CML) and Aadhar card]. The deal gets confirmed once the documents provided are in order.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step3Img} alt='step3-img' />
            </div>
        ),
    },
    {
        title: "Steps 4",
        description:
            "The buyer adds UnlistedGuru LLP as a beneficiary in their bank account, transfers the deal amount (as per the agreed rate) and will share the payment reference ID with us.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step4Img} alt='step4-img' />
            </div>
        ),
    },
    {
        title: "Steps 5",
        description:
            "We ensure a smooth and timely transfer process for every transaction. Once the deal is confirmed, the shares will be transferred to the buyer’s demat account on the very same day, before 8 PM. To keep the buyer fully informed, we also send notifications across multiple channels, including email, WhatsApp, and a direct phone call, confirming the successful transfer.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step5Img} alt='step5-img' />
            </div>
        ),
    },
    {
        title: "Steps 6",
        description:
            "UnlistedGuru LLP will issue an official invoice for the transaction. This invoice will be prepared and shared with the buyer.The buyer can expect to receive it on the following business day after the deal is finalized.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image src={step6Img} alt='step6-img' />
            </div>
        ),
    },
];



export default function StockInfoPage({ id }: { id: string }) {

    const [window, setWindow] = useState<string>("research")

    return (

        <div className="max-w-7xl  min-h-screen py-10 mt-20 w-full">
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
            
            <div className="w-full py-4">
                <h1 className='text-center text-2xl md:text-4xl lg:text-5xl my-5 mt-10'>Steps to Buy Unlisted Shares</h1>
                <StickyScroll content={content} />
            </div>
            
        </div>

    );
}