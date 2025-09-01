'use client'
import Image from "next/image";
import biraIcon from '@/public/images/bira91.webp'
import boatIcon from '@/public/images/boat.webp'
import capgeminiIcon from '@/public/images/capgemini.webp'
import mseIcon from '@/public/images/mse.png'
import nseIcon from '@/public/images/NSE.png'
import oyoIcon from '@/public/images/oyo.png'
import peIcon from '@/public/images/pe.webp'
import tapariaIcon from '@/public/images/taparia.webp'
import { useRouter } from "next/navigation";




const items = [
    {
        name: "B9 Beverages (BIRA 91)",
        icon: biraIcon,
        sector: "FMCG",
    },
    {
        name: "Imagine Marketing (boAt)",
        icon: boatIcon,
        sector: "Consumer Durables",
    },
    {
        name: "API Holdings (Pharmeasy)",
        icon: peIcon,
        sector: "Healthcare",
    },
    {
        name: "Taparia Tools",
        icon: tapariaIcon,
        sector: "Manufacturing",
    },
    {
        name: "Oravel Stays (OYO Rooms)",
        icon: oyoIcon,
        sector: "Design",
    },
    {
        name: "Capgemini",
        icon: capgeminiIcon,
        sector: "Information Technology",
    },
    {
        name: "National Stock Exchange (NSE)",
        icon: nseIcon,
        sector: "Stock Exchange",
    },
    {
        name: "Metropolitan Stock Exchange (MSE)",
        icon: mseIcon,
        sector: "Stock Exchange",
    },
];

export default function AllStocks() {
    const route = useRouter();

    return (
        <div className="mt-20 min-h-screen py-10 flex flex-col gap-10 max-md:gap-5">
            <div className="w-full items-center flex flex-col gap-10 max-md:gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-batman text-center">
                    Where Your Wealth Takes Shape
                </h1>
                <p className="text-white/50 max-w-3xl text-center mx-auto">
                    See all your stocks come together in one powerful view, giving you the clarity, confidence, and control to navigate your financial future.
                </p>
            </div>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="z-10 bg-card group/items cursor-pointer ease-in-out hover:border-rich-violet transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0"
                        onClick={() => route.push("/stockInfo/343")}
                    >
                        <div className="flex justify-center h-32 max-sm:h-28">
                            <Image
                                className="object-contain group-hover/items:scale-85 transition-all duration-500 ease-in-out"
                                src={item.icon}
                                alt={`${item.name}-icon`}
                            />
                        </div>
                        <h3 className="text-xl max-md:text-lg mt-6 ">
                            {item.name}
                        </h3>
                        <p className=" text-white/30 mt-3 ">Sector</p>
                        <p className=" text-white/50 mt-1 ">
                            {item.sector}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}