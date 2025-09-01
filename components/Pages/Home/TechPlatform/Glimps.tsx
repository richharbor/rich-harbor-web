import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import MagicBadge from "@/components/ui/magic-badge";
import sampleImg from '@/public/images/S.png'
import sampleImg2 from '@/public/images/S2.png'

import Image from "next/image";

export default function Glipms() {
    return (
        <MaxWidthWrapper className="pt-10 grid grid-cols-2 max-lg:grid-cols-1 gap-10 py-20 max-md:py-10">
            <AnimationContainer delay={0.1} className="my-auto">
                <div className="flex flex-col w-full justify-center max-lg:items-center py-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400 max-sm:text-center">
                        Less platform, more portal
                    </h2>
                    <p className="mt-4 max-lg:text-center text-lg text-muted-foreground max-w-lg">
                        We envision a future where entering the world of private assets is as seamless as stepping into public markets—an open gateway that moves beyond traditional investing in India. Precize is your portal to new financial horizons, connecting you with exclusive opportunities once reserved for only a privileged few.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="flex justify-center">
                {/* <BentoGrid className=" ">
                    {CARDS.map((feature: any, idx: any) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid> */}
                <div className="ml-5">
                    <Image src={sampleImg} alt="Sample-image" className="w-96 h-auto mx-auto"  />
                </div>
                {/* <div className="relative w-96 h-[35rem] group">
                    
                    <Image src={sampleImg2}
                        alt="No Color"
                        className="w-full h-auto absolute top-0 left-0 transition-opacity duration-700 opacity-100 group-hover:opacity-0" />

                    
                    <Image src={sampleImg}
                        alt="Color"
                        className="w-full h-auto absolute top-0 left-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                </div> */}
            </AnimationContainer>
        </MaxWidthWrapper>
    )
}