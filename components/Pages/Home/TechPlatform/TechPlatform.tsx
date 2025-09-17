import { cn } from "@/lib/cn";
import AnimationContainer from "../Transfrom/AnimatedContainer/AnimatedContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import phoneImg from '@/public/images/phone.png'
import { WavyBackground } from "@/components/ui/wavy-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <section
      className={cn(
        "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default function TechPlatform(){
    return (
        <Wrapper className="relative py-10  backdrop-blur-md max-md:py-7 rounded-2xl overflow-hidden">
            {/* <div className=" absolute inset-0 z-0">
    Blue blur on the right side 
    <div className=" max-md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-[300px]"></div>
  </div> */}
  <WavyBackground className=" bg-transparent w-full mx-auto" waveOpacity={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <h2 className="text-2xl font-batman md:text-3xl lg:text-4xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
              Your Portal to Smarter Diversification

            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
                RichHarbor offers a curated gateway to leading private growth companies and global trade finance opportunities, helping you diversify with confidence and access markets beyond the ordinary.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <Button className="mt-4">Live soon</Button>
          </AnimationContainer>
        </div>

        {/* <div className=" flex justify-center">
            <Image src={phoneImg} alt="hoding phone" className="size-full max-md:size-52 max-lg:size-64 z-30"/>
        </div> */}
        <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="100" className="w-full">
          {/* <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          <Image src={phoneImg} alt="hoding phone" className="size-full max-md:size-52 max-lg:size-64 object-cover rounded-xl mx-auto "/>
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>

      </div>
      </WavyBackground>
    </Wrapper>
    )
}