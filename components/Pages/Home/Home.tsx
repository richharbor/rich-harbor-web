"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import Faq from "./Faq/Faq";
import TrustedBy from "./TrustedBy/TrustedBy";
import GlobeComponent from "./Globe/Globe";
import SamplePage from "./SamplePage/SamplePage";

import ExtraFeatures from "./ExtraFeatures/ExtraFeatures";
import ReadyToBoost from "./ReadyToBoost/ReadyToBoost";
import Integration2 from "./Integration2/integration";
import Features2 from "./Features2/Features2";
import Transform from "./Transfrom/Transform";
import OurProduct from "./OurProduct/OurProduct";
import TechPlatform from "./TechPlatform/TechPlatform";
import HotSelling from "./HotSelling/HotSelling";
import JoinLeague from "./JoinLeague/JoinLeague";
import Glipms from "./TechPlatform/Glimps";
import EliteClub from "./EliteClub/EliteClub";
import Tagline from "./Tagline/Tagline";
import TomorrowBigBets from "./TomorrowBigBets/TomorrowBigBets";
import AboutUs from "./AboutUs/AboutUs";
import PromisingOnes from "./PromissingOnes/PromissingOnes";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Testimonials2 } from "./Testimonials2/Testimonials2";

export default function HomePage() {

  const {authUser, checkAuth} = useAuthStore();


  // useEffect(()=>{
  //   checkAuth();
  // },[])



  return (
    
    <div className="flex flex-col pt-5 sm:pt-20">
      {/* <ShootingStars /> */}
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

       
        
        
        
        
        
        {/* <Tagline /> */}
        <OurProduct />
        <AboutUs />
        {/* <Features2 /> */}
        {/* <ReadyToBoost /> */}
        {/* <EliteClub /> */}

        {/* <Integration2 /> */}
        {/* <Transform /> */}
        <TechPlatform />
        <HotSelling />
        
        {/* <ExtraFeatures /> */}
        <PromisingOnes />

        <Testimonials2 />
        {/* <TomorrowBigBets /> */}
        <JoinLeague />
        {/* <Integrations /> */}
        
        
        
        
        <Faq /> 

        
      </main>
      
    </div>
  );
}
