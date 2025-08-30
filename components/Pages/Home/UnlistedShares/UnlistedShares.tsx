import biraIcon from '@/public/images/bira91.webp'
import boatIcon from '@/public/images/boat.webp'
import capgeminiIcon from '@/public/images/capgemini.webp'
import mseIcon from '@/public/images/mse.png'
import nseIcon from '@/public/images/NSE.png'
import oyoIcon from '@/public/images/oyo.png'
import peIcon from '@/public/images/pe.webp'
import tapariaIcon from '@/public/images/taparia.webp'
import Image from "next/image";
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
    }
];



export default function UnlistedShares() {
    const route = useRouter();

    return (
        <section className="w-full bg-[#0B0E19] text-white rounded-2xl pt-20 max-sm:py-10 shadow-lg overflow-hidden">
            <div className="flex flex-col items-center justify-between gap-10">

                <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5 lg:px-20 px-4">
                    {/* Left Content */}
                    <div className="flex-1 space-y-5">
                        <h2 className=" font-bold text-rich-violet font-batman text-2xl md:text-3xl lg:text-4xl tracking-wide">
                            Unlisted Shares
                        </h2>
                        <ul className="space-y-3 text-gray-300 text-lg flex flex-col gap-3 mt-10">
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Start investing with just <span className="font-semibold text-white">1 share</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                No commissions, complete transparency
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Invest in top unlisted companies
                            </li>
                        </ul>

                    </div>

                    {/* Right Content */}
                    <div className="flex-1 grid grid-cols-3 max-sm:grid-cols-2 gap-5">
                        {items.map((company, i) => (
                            <div
                                key={i}
                                className="bg-[#141A2D] rounded-xl border border-gray-800 flex flex-col p-2 hover:border-rich-violet hover:shadow-lg hover:shadow-rich-violet/30 transition z-10 cursor-pointer"
                                onClick={()=> route.push("/unlistedSharesInfo")}
                            >
                                <div className='h-24 max-sm:h-16 w-full flex justify-center items-center'>
                                    <Image src={company.icon} alt={company.name} className="h-full w-auto object-contain" />
                                </div>
                                <p className="mt-3 text-white/40 text-center">{company.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-between gap-5 items-center py-10 backdrop-blur-3xl bg-white/5 lg:px-20 px-4 mt-5">
                    <p className="text-xl text-gray-400">
                        Trusted by <span className="font-semibold text-white">150,000+ users</span>
                    </p>
                    <button className="z-10 bg-gradient-to-r from-rich-violet to-[#704bd2] px-6 py-3 rounded-xl text-white font-medium hover:from-rich-violet/60 hover:to-[#704bd2]/60 transition ease-in-out duration-200">
                        Explore <span className="max-sm:hidden">Unlisted Shares</span>
                    </button>
                </div>
            </div>
        </section>
    );
}