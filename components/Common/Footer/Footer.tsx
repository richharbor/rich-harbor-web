"use client";

import Link from "next/link";
import Icons from "../../global/icons";
import { Button } from "../../ui/button";
import { Particles } from "../../ui/particles";
import RichHarbor from "@/assets/logo/Rich Harbor R.png";




import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    simple?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse, simple }: Props) => {
    return (
        <motion.div
            className={cn("w-full h-full", className)}
            initial={{ opacity: 0, y: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: delay, duration: simple ? 0.2 : 0.4, type: simple ? "keyframes" : "spring" }}
        >
            {children}
        </motion.div>
    )
};



interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                "size-full mx-auto max-w-6xl px-4 md:px-12",
                className
            )}
        >
            {children}
        </div>
    )
};





export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Download", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help-center" },
            { name: "Community", href: "/community" },
            { name: "Guides", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "API Docs", href: "/api-docs" },
            { name: "SDKs", href: "/sdks" },
            { name: "Tools", href: "/tools" },
            { name: "Open Source", href: "/open-source" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-20 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src={RichHarbor}
                                    alt="Rich Harbor Logo"
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                        <p className="text-base max-w mt-4">
                            Invest smart, grow steady, secure your future.
                        </p>
                        {/* <Button className="mt-8">
                            <Link href="/app">
                                About Us
                            </Link>
                        </Button> */}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-sm mt-10 md:mt-0">
                        <Button className="mt-8">
                            <Link href="/#aboutus">
                                About Us
                            </Link>
                        </Button>
                        <Button className="mt-8">
                            <Link href="/contactus">
                                Contact Us
                            </Link>
                        </Button>
                        {/* {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))} */}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} RH. All rights reserved.
                    </p>
                    {/* <div className="flex items-center gap-4">
                        <Link href="#" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                    </div> */}
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer

