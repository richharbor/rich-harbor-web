import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import ColourfulText from "@/components/ui/colourful-text";
 
export default function Tagline() {
  return (
    <div className="relative flex  w-[99vw] overflow-hidden antialiased md:items-center md:justify-center md:-mt-20 py-10 mb-10 max-md:mb-5">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2024/03/15/204306-923909642_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
 
      <div className="relative z-10 mx-auto py-20 max-md:pb-10 w-full max-w-7xl ">
        <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-2">
                  Your Gateway to Tomorrow’s{" "}<ColourfulText text="Unicorns" />.
                </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-white/50 max-sm:text-sm">
          Discover and invest in the visionaries of today who are building the market leaders of tomorrow. Unlock opportunities early and be part of the next big success story.
        </p>
      </div>
    </div>
  );
}