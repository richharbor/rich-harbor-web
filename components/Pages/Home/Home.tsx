"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import ProductShowcase from "./ProductShowcase/ProductShowcase";
import PromisingOnes from "./PromissingOnes/PromissingOnes";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Testimonials2 } from "./Testimonials2/Testimonials2";
import ProductSlider from "./ProductSlider/ProductSlider";
import WhatsAppBanner from "./WhatsAppBanner/WhatsAppBanner";




export default function HomePage() {

  const { authUser, checkAuth } = useAuthStore();


  // useEffect(()=>{
  //   checkAuth();
  // },[])



  return (

    <div className="flex flex-col pt-5 sm:pt-20">
      <ShootingStars />
      <StarsBackground />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-5 overflow-hidden">
          <div className="container px-2 md:px-6 relative mx-auto">
            <div

              className="text-center max-w-5xl mx-auto  pt-10"
            >
              <h1

                className="text-2xl font-batman sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              >
                Access Alternative Investments & Financial Solutions — All in One Place
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Unlisted Shares | Listed Bulk Deals | Private Markets | Loans | Insurance | Growth Capital
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-8">
                <Link href="#invest-trade">
                  <Button size="lg" className="rounded-full font-semibold h-12 px-8">
                    Explore Investment Products
                  </Button>
                </Link>
                <Link href="#financial-solutions">
                  <Button size="lg" variant="outline" className="rounded-full font-semibold h-12 px-8 bg-transparent border-white/20 hover:bg-white/10 text-white backdrop-blur-sm">
                    Explore Financial Services
                  </Button>
                </Link>
              </div>
            </div>

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








        <ProductSlider />
        <WhatsAppBanner />
        {/* <Tagline /> */}
        <OurProduct />
        <AboutUs />
        <ProductShowcase />
        {/* <Features2 /> */}
        {/* <ReadyToBoost /> */}
        {/* <EliteClub /> */}

        {/* <Integration2 /> */}
        {/* <Transform /> */}
        <TechPlatform />
        

        <Testimonials2 />
        {/* <TomorrowBigBets /> */}
        <JoinLeague />
        {/* <Integrations /> */}




        <Faq />


      </main>

    </div>
  );
}
