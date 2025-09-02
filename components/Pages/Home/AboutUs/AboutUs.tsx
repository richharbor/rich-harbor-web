// components/AboutUs.tsx
import { TrendingUp, DollarSign, ShieldCheck, Globe } from "lucide-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function AboutUs() {

    const features = [
        {
            icon: <TrendingUp className="w-8 h-8 text-rich-violet" />,
            title: "Exclusive Pre-IPO Access",
            description:
                "Gain early access to high-potential companies before they hit the public markets and unlock new growth opportunities.",
        },
        {
            icon: <DollarSign className="w-8 h-8 text-rich-violet" />,
            title: "Buy & Sell with Ease",
            description:
                "Seamlessly trade Pre-IPOs, IPOs, and private market shares in a secure, transparent, and efficient marketplace.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-rich-violet" />,
            title: "Secure & Transparent",
            description:
                "Every transaction is built on trust. We ensure compliance, transparency, and the highest standards of security.",
        },
        {
            icon: <Globe className="w-8 h-8 text-rich-violet" />,
            title: "Global Marketplace",
            description:
                "Connect with a growing community of investors and sellers worldwide, expanding opportunities across borders.",
        },
    ];

    return (
        <section id="aboutus" className="relative  text-gray-100 py-20 px-4 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-rich-violet font-batman">
                    Who we are?
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-14">
                    We are building a trusted marketplace where investors can discover,
                    buy, and sell Pre-IPOs, IPOs, and other private equity opportunities.
                    Our mission is to make alternative investments accessible, secure, and
                    transparent for everyone.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex z-10 flex-col items-center bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* <div className="w-full py-4">
                    <StickyScroll content={content} />
                </div> */}
            </div>
        </section>
    );
}
