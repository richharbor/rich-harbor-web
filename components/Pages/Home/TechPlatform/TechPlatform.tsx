import { cn } from "@/lib/cn";
import AnimationContainer from "../Transfrom/AnimatedContainer/AnimatedContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import phoneImg from '@/public/images/phone.png'


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
        <Wrapper className="relative bg-gray-900/40 backdrop-blur-md py-10 max-md:py-7 rounded-xl overflow-hidden">
            <div className=" absolute inset-0 z-0">
    {/* Blue blur on the right side  */}
    <div className=" max-md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-[300px]"></div>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
              Your portal for 
              <br />
              diversification
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Precize brings you a curated selection of leading private growth companies & global trade finance opportunities
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <Button className="mt-4">Reserve access</Button>
          </AnimationContainer>
        </div>

        <div className=" flex justify-center">
            <Image src={phoneImg} alt="hoding phone" className="size-full max-md:size-52 max-lg:size-64 z-30"/>
        </div>

      </div>
    </Wrapper>
    )
}