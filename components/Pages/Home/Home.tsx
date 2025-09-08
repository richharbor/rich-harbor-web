"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import Faq from "./Faq/Faq";
import Testimonials from "./Testimonials/Testimonials";
import HowItWorks from "./HowItWorks/HowItWorks";
import TrustedBy from "./TrustedBy/TrustedBy";
import Features from "./Features/Features";
import GlobeComponent from "./Globe/Globe";
import SamplePage from "./SamplePage/SamplePage";
import {
  GlowingEffect,
  GlowingEffectDemo,
} from "./GlowingEffect/Glowing-effect";
import { GlowingStarsBackgroundCardPreview } from "./GlowingStarsCard/glowing-stars";
import Integrations from "./Integration/Integration";
import ExtraFeatures from "./ExtraFeatures/ExtraFeatures";
import ReadyToBoost from "./ReadyToBoost/ReadyToBoost";
import Integration2 from "./Integration2/integration";
import Features2 from "./Features2/Features2";
import Companies from "./Companies/companies";
import Perks from "./Perks/Perks";
import Transform from "./Transfrom/Transform";
import OurProduct from "./OurProduct/OurProduct";
import TechPlatform from "./TechPlatform/TechPlatform";
import HotSelling from "./HotSelling/HotSelling";
import JoinLeague from "./JoinLeague/JoinLeague";
import Glipms from "./TechPlatform/Glimps";
import EliteClub from "./EliteClub/EliteClub";
import UnlistedShares from "./UnlistedShares/UnlistedShares";
import Tagline from "./Tagline/Tagline";
import TomorrowBigBets from "./TomorrowBigBets/TomorrowBigBets";
import AboutUs from "./AboutUs/AboutUs";
import PromisingOnes from "./PromissingOnes/PromissingOnes";

export default function HomePage() {
  return (
    
    <div className="flex flex-col pt-5 sm:pt-20">
      <ShootingStars />
      <StarsBackground />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-5 overflow-hidden">
          <div className="container px-4 md:px-6 relative mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto  pt-10"
            >
              <h1
                style={{ fontFamily: "Batman, sans-serif" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              >
                Smarter Tech Better Deals
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Welcome to Rich Harbor – Where Intelligence Meets Profit
              </p>
            </motion.div>

            <div className="w-full">
              <div className="relative -top:5 sm:-top-20 w-full">
                <GlobeComponent />

                {/* <div className="absolute top-5/6 left-0 w-full z-10 transform -translate-y-1/2">
                  <SamplePage />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* <Companies /> */}
        {/* <Perks /> */}
        {/* <Features /> */}
        {/* <Features2 /> */}
        {/* <GlowingEffectDemo /> */}
        {/* <GlowingStarsBackgroundCardPreview /> */}
        <Tagline />
        <OurProduct />
        <AboutUs />
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        {/* <Integration2 /> */}
        {/* <Transform /> */}
        <TechPlatform />
        {/* <Glipms /> */}
        <HotSelling />
        
        {/* <ExtraFeatures /> */}
        {/* <UnlistedShares /> */}
        <PromisingOnes />
        <TomorrowBigBets />
        <JoinLeague />
        {/* <Integrations /> */}
        
        
        <EliteClub />
        {/* <ReadyToBoost /> */}
        <Faq /> 

        {/* <ReadyToTransform /> */}
      </main>
      
    </div>
  );
}
