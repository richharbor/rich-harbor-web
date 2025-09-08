import { CometCard } from "@/components/ui/comet-card";
import { Globe, Headset, IndianRupee, ShieldCheckIcon } from "lucide-react";



const cardContent = [
    {
        title:"Expand Your Reach",
        content:"Get access to a wide investor base actively looking for Pre-IPOs and unlisted opportunities.",
        icon: <Globe className="w-full h-full text-rich-violet" />
    },
    {
        title:"Trusted Platform",
        content:"Backed by transparent processes, secure transactions, and verified listings.",
        icon: <ShieldCheckIcon className="w-full h-full text-rich-violet" />
    },
    {
        title:"Revenue Opportunities",
        content:"Earn commissions, grow your network, and scale your business with us.",
        icon: <IndianRupee className="w-full h-full text-rich-violet"/>
    },
    {
        title:"Dedicated Support",
        content:"A partner-first approach with personalized onboarding and ongoing assistance.",
        icon: <Headset className="w-full h-full text-rich-violet"/>
    },
]

export default function WhyChooseUs(){
    return (
        <div className="flex flex-col items-center gap-10 py-10 max-md:py-5 ">
                <h2 className="font-batman text-4xl max-md:text-3xl max-sm:text-xl text-center">Why Partner With Us?</h2>
                <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                    {cardContent.map((item, index) => (
                        <CometCard rotateDepth={6} translateDepth={10} key={index} className="">
                        <div className="bg-card rounded-xl h-[16rem] max-sm:h-[14rem] max-lg:h-[20rem] flex flex-col items-center gap-3 px-2 py-5">
                            <div className="size-16">
                                {item.icon}
                            </div>
                            <h2 className="text-xl font-bold max-sm:text-normal text-center">{item.title}</h2>
                            <p className="text-center text-white/50 max-sm:text-sm">{item.content}</p>
                        </div>
                    </CometCard>
                    ))}
                </div>
            </div>
    )
}