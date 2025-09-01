import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import ColourfulText from "@/components/ui/colourful-text";
 
export default function Tagline() {
  return (
    <div className="relative flex h-[35rem] max-md:h-[20rem] w-full overflow-hidden rounded-2xl antialiased md:items-center md:justify-center">
      <div
        className={cn(
          
        )}
      />
 
      <Spotlight
        className="-top-80 -left-30"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-2xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-2">
                  Your Gateway to Tomorrow’s{" "}<ColourfulText text="Unicorns" />.
                </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Discover and invest in the visionaries of today who are building the market leaders of tomorrow. Unlock opportunities early and be part of the next big success story.
        </p>
      </div>
    </div>
  );
}