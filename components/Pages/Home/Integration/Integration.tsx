'use client'
import Tag from "@/components/ui/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationColumn from "./IntegrationColumn/IntegrationColumn"
import Image from "next/image";
import { useRouter } from "next/navigation";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
const items = [
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
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
        const route = useRouter();
    return (
        <section className="py-24 overflow-hidden max-sm:px-4 max-sm:mb-5 h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20 max-md:py-10">
            <div className="container">
                <div className="flex flex-col items-center lg:gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl text-center lg:text-5xl font-bold !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400 max-sm:text-center">
                            Connect Rich Harbor with the apps you use
                        </h2>

                        <p className="text-white/50 text-center mt-4 text-lg max-sm:text-center ">
                            Seamless integration with finance tools, CRMs, and data feeds to fit your workflow.
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 max-sm:px-4 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="z-10 bg-neutral-900 group/items cursor-pointer ease-in-out hover:border-blue-600 transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0"
                                onClick={() => route.push("/infoStock")}
                            >
                                <div className="flex justify-center">
                                    <Image
                                        className="size-24 max-sm:size-15 group-hover/items:scale-85 transition-all duration-500 ease-in-out"
                                        src={item.icon}
                                        alt={`${item.name}-icon`}
                                    />
                                </div>
                                <h3 className="text-3xl max-sm:text-xl mt-6 ">
                                    {item.name}
                                </h3>
                                <p className=" text-white/30 mt-3">Sector</p>
                                <p className=" text-white/50 mt-1 ">
                                    {item.sector}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}
