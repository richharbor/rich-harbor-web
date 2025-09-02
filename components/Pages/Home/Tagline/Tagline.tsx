import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import ColourfulText from "@/components/ui/colourful-text";
 
export default function Tagline() {
  return (
    <div className="relative flex  w-full overflow-hidden rounded-2xl antialiased md:items-center md:justify-center">
      <div
        className={cn(
          
        )}
      />
 
      <div className="relative z-10 mx-auto pb-20 max-md:pb-10 w-full max-w-7xl ">
        <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-2xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-2">
                  Your Gateway to Tomorrow’s{" "}<ColourfulText text="Unicorns" />.
                </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-white/50 max-sm:text-sm">
          Discover and invest in the visionaries of today who are building the market leaders of tomorrow. Unlock opportunities early and be part of the next big success story.
        </p>
      </div>
    </div>
  );
}