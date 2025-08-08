"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import ReadyToTransform from "./ReadyToTransform/ReadyToTransform";
import Faq from "./Faq/Faq";
import Pricing from "./Pricing/Pricing";
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

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Stooting Stars  */}
      <ShootingStars />
      <StarsBackground />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-5 pb-20 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto  pt-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Your Harbor for Financial Growth
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rich Harbor is your anchor in the sea of opportunities – steady,
                reliable, and built for growth.
              </p>
            </motion.div>

            <div className="w-full mb-[100px] sm:mb-[250px] md:mb-[250px]">

              <div className="relative -top-20 w-full">
                <GlobeComponent />

                <div className="absolute top-5/6 left-0 w-full z-10 transform -translate-y-1/2">
                  <SamplePage />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedBy />
        <Features />

        <GlowingEffectDemo />
        <GlowingStarsBackgroundCardPreview /> 

        <HowItWorks />
        <Testimonials />

        <Pricing />

        <Faq />

        {/* <ReadyToTransform /> */}
      </main>
    </div>
  );
}
