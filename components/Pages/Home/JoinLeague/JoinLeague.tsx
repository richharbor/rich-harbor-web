import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BadgeIndianRupee, ChartBarBig, IndianRupee, LockKeyhole, Zap } from "lucide-react";



const features = [
    {
        title: "Low ticket size",
        icon: <BadgeIndianRupee className="size-10 max-sm:size-10" />, // Placeholder for icon path
        description: "A minimum of ₹10,000 is all it takes for you to start investing in private opportunities",
    },
    {
        title: "Bank-level security",
        icon: <LockKeyhole className="size-10 max-sm:size-10" />, // Placeholder for icon path
        description: "Strict policies are enforced to prevent unauthorized revelation of your sensitive personal information",
    },
    {
        title: "Research-driven",
        icon: <ChartBarBig className="size-10 max-sm:size-10" />,
        description: "Access curated financial reports by analyst for informed investment decisions",
    },
    {
        title: "Fast & Simple",
        icon: <Zap className="size-10 max-sm:size-10" />, // Placeholder for icon path
        description: "Hassle-free investment experience. Invest in just three steps - confirm, order, and pay",
    },
];


interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}


const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none bg-[#191919] rounded-3xl ${area}`}>
            <div className="relative h-full rounded-2xl border border-[#191919] p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default function JoinLeague() {
    return (
        <div className="flex rounded-2xl flex-col gap-20 h-full mx-auto w-full lg:max-w-screen-xl px-2 lg:px-20 py-20 max-md:py-10">
            <h1 className="text-3xl mx-20 max-sm:mx-5 md:text-5xl text-center lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">User into a new era of private investments</h1>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 px-3 gap-5">
                {features.map((feature, index) => (
                    <GridItem
                        area=""
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        key={index}
                    />
                ))}

            </div>
        </div>
    )
}