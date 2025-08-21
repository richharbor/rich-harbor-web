import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import AnimationContainer from "@/components/global/animation-container";
import Icons from "@/components/global/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      {/* <p className="p-5 ">Stay Tuned — Big Things Ahead</p> */}
      <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 pb-3 text-center">
        Stay Tuned <br /> Big Things Ahead
      </h1>
      <AnimationContainer delay={0.6}>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rich Harbor Pvt Ltd. All rights
          reserved.
        </p>
      </AnimationContainer>

      <div className="h-[10rem] hidden md:flex items-center justify-center w-full">
        <TextHoverEffect text="Rich Harbor" />
      </div>
    </footer>
  );
};

export default Footer;
