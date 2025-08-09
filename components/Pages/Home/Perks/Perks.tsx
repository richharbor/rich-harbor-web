import { cn } from "@/lib/cn";
import Image from 'next/image';
import AnimationContainer from './AnimatedContainer/AnimatedContainer';


interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20",
            className,
        )}>
            {children}
        </section>
    )
};



interface SectionBadgeProps {
  title: string;
}

const SectionBadge = ({ title }: SectionBadgeProps) => {
  return (
    <div className="px-2.5 py-1 rounded-full bg-neutral-800 flex items-center justify-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex items-center justify-center relative">
        <div className="w-2 h-2 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
          <div className="w-2 h-2 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
        {title}
      </span>
    </div>
  );
};


const Perks = () => {

    const PERKS = [
    {
        title: "Property Sync",
        description: "Sync listings across platforms instantly.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "Smart Analytics",
        description: "Track performance with realtime insights.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "Doc Manager",
        description: "Handle documents and esigns easily.",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "Lead Connect",
        description: "Manage all property inquiries centrally.",
        icon: "/icons/perk-four.svg"
    }
]; 

    return (
        <Wrapper className="py-20 lg:py-32 relative">
            <div className="flex flex-col items-center text-center gap-4">

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Use our platform
                        <br />
                        with powerful tools
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Seamlessly integrated tools for effortless property management.
                    </p>
                </AnimationContainer>
            </div>

            <div className="relative pt-10">
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
                    <AnimationContainer animation="scaleUp" delay={0.5}>
                        <Image
                            src="/images/grid-lines.svg"
                            alt="Plus"
                            width={32}
                            height={32}
                            className="size-full"
                        />
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-2 relative z-20">
                    {PERKS.map((perk, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center p-2 md:p-16",
                                index % 2 === 0 ? "justify-end" : "justify-start"
                            )}
                        >
                            <AnimationContainer
                                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                                delay={0.2 * (index + 1)}
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="size-12 lg:size-16 rounded-lg lg:rounded-2xl bg-neutral-900 flex items-center justify-center">
                                        <Image
                                            src={perk.icon}
                                            alt={perk.title}
                                            width={1024}
                                            height={1024}
                                            className="size-8 lg:size-10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg md:text-xl font-medium">
                                            {perk.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground max-w-[250px]">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks; 