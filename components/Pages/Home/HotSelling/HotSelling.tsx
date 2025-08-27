import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationRows from "./IntegrationRows/IntegrationRows";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


const testimonials = [
    {
        name: "Figma",
        icon: figmaIcon,
        sector: "Design",
    },
    {
        name: "Notion",
        icon: notionIcon,
        sector: "Productivity",
    },
    {
        name: "Slack",
        icon: slackIcon,
        sector: "Communication",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        sector: "Design",
    },
    {
        name: "Framer",
        icon: framerIcon,
        sector: "Design",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        sector: "Development",
    },
];

export type itemsType = typeof testimonials;

export default function HotSelling() {
    return (
        <section className="py-24 overflow-hidden max-sm:py-10 ">
            <div className="container">
                <div className="flex flex-col items-center lg:gap-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl text-center lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Hot Stocks on the Rise
                        </h2>

                        <p className="text-white/50 mt-4 text-lg text-center">
                            Explore the most in-demand equities and make informed trading decisions.
                        </p>
                    </div>
                    <div className="z-30 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
                        <div className="h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden min-w-[99vw]">
                            {/* <IntegrationRows integrations={items} />
                            <IntegrationRows
                                integrations={items.slice().reverse()}
                                className=" "
                                reverse={true}
                            /> */}
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
                    </div>
                </div>
            </div>
        </section>
    );
}