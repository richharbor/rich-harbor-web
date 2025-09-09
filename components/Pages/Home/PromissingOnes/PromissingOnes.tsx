import biraIcon from '@/public/images/bira91.webp'
import boatIcon from '@/public/images/boat.webp'
import capgeminiIcon from '@/public/images/capgemini.webp'
import peIcon from '@/public/images/pe.webp'
import tapariaIcon from '@/public/images/taparia.webp'
import oyoIcon from '@/public/images/oyo.png'
import Image from "next/image";
import { useRouter } from "next/navigation";

const promisingCompanies = [
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
        sector: "Hospitality",
    },
    {
        name: "Capgemini",
        icon: capgeminiIcon,
        sector: "Information Technology",
    }
];

export default function PromisingOnes() {
    const route = useRouter();

    return (
        <div className="relative h-full w-full overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/c2/dc/13/c2dc13c4bab177b318dfd8f1e960f81b.jpg"
                alt="Background"
                className="absolute left-1/2 -translate-x-1/2 -bottom-16  size-[25rem] w-full"
              />
              {/* <div className="absolute inset-0 bg-transparent backdrop-blur-3xl"></div> */}
        <section id='promising-ones' className="max-w-7xl z-10 w-full  text-white rounded-2xl pt-20 max-sm:pt-10 shadow-lg overflow-hidden">
            <div className="flex flex-col items-center justify-between">
                
                <div className="grid grid-cols-2 relative max-md:grid-cols-1 gap-5 lg:px-20 px-4 pb-10">
                    <div className="absolute inset-0 bg-transparent backdrop-blur-sm"></div>
                    {/* Left Content */}
                    <div className="flex-1 z-10 ">
                        <h2 className="font-bold text-rich-violet font-batman text-2xl md:text-3xl lg:text-4xl tracking-wide">
                            The Promising Ones
                        </h2>
                        {/* <p className="text-gray-400 text-lg mt-5 max-w-md">
                            Discover high-potential companies and upcoming IPOs that are shaping the future of 
                            India’s market. Backed by strong growth, innovation, and investor confidence, 
                            these are the <span className="text-white font-semibold">ones to watch.</span>
                        </p> */}
                        <ul className="space-y-3 text-gray-300 text-lg flex flex-col gap-3 mt-10">
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Fast-growing companies with strong business potential
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Early-stage investments with high future value
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Unique opportunities often missed by mainstream markets
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Backed by innovative products or services
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rich-violet mr-2">✔</span>
                                Trusted analysis to identify rising market leaders
                            </li>
                        </ul>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 grid grid-cols-3 max-sm:grid-cols-2 gap-5">
                        {promisingCompanies.map((company, i) => (
                            <div
                                key={i}
                                className="bg-card rounded-xl border border-gray-800 flex flex-col p-2 hover:border-rich-violet hover:shadow-lg hover:shadow-rich-violet/30 transition z-10 cursor-pointer"
                                onClick={() => route.push("/promisingOnesInfo")}
                            >
                                <div className='h-24 max-sm:h-16 w-full flex justify-center items-center'>
                                    <Image src={company.icon} alt={company.name} className="h-full w-auto object-contain" />
                                </div>
                                <p className="mt-3 text-white/40 text-center text-sm font-medium">
                                    {company.name}
                                </p>
                                <span className="text-xs text-gray-500 text-center">{company.sector}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex w-full z-10 justify-between gap-5 bg-transparent items-center py-10 lg:px-20 px-4">
                    <p className="text-xl text-gray-400">
                        Curated list of <span className="font-semibold text-white">fast-growing businesses</span>
                    </p>
                    <button className="z-10 bg-gradient-to-r from-rich-violet to-[#704bd2] px-6 py-3 rounded-xl text-white font-medium hover:from-rich-violet/60 hover:to-[#704bd2]/60 transition ease-in-out duration-200">
                        Explore <span className="max-sm:hidden">Promising Ones</span>
                    </button>
                </div>
            </div>
        </section>
        </div>
    );
}
