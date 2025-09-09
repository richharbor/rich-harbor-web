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

export type itemsType = typeof items;

export default function HotSelling() {
     const route = useRouter();
    return (
        <section className="max-w-7xl mx-auto py-20 overflow-hidden max-sm:py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:gap-10">
                    <div>
                        <h2 className="text-3xl font-batman md:text-4xl text-center lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Hot IPO’s on the Rise
                        </h2>

                        <p className="text-white/50 mt-4 text-lg text-center">
                            Explore the most in-demand equities and make informed trading decisions.
                        </p>
                    </div>
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
                    <div className="grid grid-cols-4 max-sm:px-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-5">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="z-10 bg-card group/items cursor-pointer ease-in-out hover:border-rich-violet transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0"
                                onClick={()=> route.push("/stockInfo/343") }
                            >
                                <div className="flex justify-center h-32 max-sm:h-28">
                                    <Image
                                        className="object-contain group-hover/items:scale-85 transition-all duration-500 ease-in-out"
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
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-center mt-10">
                    <Button variant={"outline"} className="z-10 cursor-pointer" onClick={()=> route.push("/allstocks")}>View more</Button>
                </div>
            </div>
        </section>
    );
}