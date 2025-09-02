import { CometCard } from "@/components/ui/comet-card";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Glipms from "../Home/TechPlatform/Glimps";









export default function PartnerWithUs() {

    return (
        <section className="container mt-20">

            <div className="w-full items-center flex flex-col gap-7 max-md:gap-5 py-10 px-20 max-md:px-10 max-sm:px-4">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-batman text-center">
                    Partner With <span className="bg-gradient-to-r from-rich-violet to-[#704bd2] bg-clip-text text-transparent">Rich Harbour</span>
                </h1>
                <p className="text-white/50 max-w-3xl text-center mx-auto">
                    Join hands with India’s leading Pre-IPO and unlisted shares platform. Together, we empower investors, grow businesses, and create seamless trading experiences.
                </p>
                <div className="flex justify-evenly w-full">
                    <button className="z-10 bg-gradient-to-r from-rich-violet to-[#704bd2] px-6 py-3 rounded-xl text-white font-medium hover:from-rich-violet/60 hover:to-[#704bd2]/60 transition ease-in-out duration-200 max-sm:px-3 max-sm:py-2 max-sm:text-sm max-sm:rounded-lg">
                        Become a Partner
                    </button>
                    <button className="z-10 bg-gradient-to-r from-rich-violet to-[#704bd2] px-6 py-3 rounded-xl text-white font-medium hover:from-rich-violet/60 hover:to-[#704bd2]/60 transition ease-in-out duration-200 max-sm:px-3 max-sm:py-2 max-sm:text-sm max-sm:rounded-lg">
                        Talk to Our Team
                    </button>
                </div>
            </div>
            <WhyChooseUs />

            <Glipms />



        </section>
    )
}