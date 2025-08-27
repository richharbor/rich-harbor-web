import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import MagicBadge from "@/components/ui/magic-badge";

export default function Glipms() {
    return (
        <MaxWidthWrapper className="pt-10 grid grid-cols-2 max-lg:grid-cols-1 gap-10 py-20 max-md:py-10">
            <AnimationContainer delay={0.1} className="my-auto">
                <div className="flex flex-col w-full justify-center max-lg:items-center py-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400 max-sm:text-center">
                        Less platform, more portal
                    </h2>
                    <p className="mt-4 max-lg:text-center text-lg text-muted-foreground max-w-lg">
                        We envision a future where accessing private assets is as
                        seamless as navigating the public markets—an open
                        environment that transcends traditional investing in India.
                        Precize is your portal to elevate your financial ventures,
                        transporting you to the forefront of exclusive opportunities that
                        were once reserved for a privileged few.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2}>
                <BentoGrid className=" ">
                    {CARDS.map((feature: any, idx: any) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </AnimationContainer>
        </MaxWidthWrapper>
    )
}