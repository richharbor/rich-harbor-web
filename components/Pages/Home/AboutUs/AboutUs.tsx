"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"
import AboutUsImg from "@/public/images/aboutUsImg.jpg"
import {motion} from 'framer-motion';



export default function WhoWeAre() {
  const route = useRouter();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <section id="aboutus" className="max-w-7xl z-10 mx-auto relative w-full text-foreground py-20 px-20 max-md:px-10 max-sm:px-4">
        <div className="container mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center">

          {/* Left Side - Images */}
          {/* <div className="relative grid grid-cols-12 [grid-template-rows:repeat(9,50px)] max-sm:[grid-template-rows:repeat(9,35px)] w-full h-full ">
          <div className="col-start-2 col-end-8 row-start-1 row-end-5">
            <img
              src="https://i.pinimg.com/736x/ae/e6/d4/aee6d45245609592339c8508ae27182d.jpg"
              alt="Team Member"
              width={50}
              height={50}
              className="rounded-4xl object-cover w-full h-full"
            />
            
          </div>
          <div className="col-start-1 col-end-8 row-start-6 row-end-10">
            <img
              src="https://i.pinimg.com/736x/46/14/02/46140271c41e3f6493d01d5c974e2e2a.jpg"
              alt="Team Member"
              width={50}
              height={50}
              className="rounded-4xl object-cover w-full h-full"
            />
            
          </div>
          <div className="col-start-9 col-end-13 row-start-2 row-end-8">
            <img
              src="https://i.pinimg.com/736x/7b/ae/d3/7baed3ee85756fa875a97db1b1c38f46.jpg"
              alt="Team Member"
              width={50}
              height={50}
              className="rounded-4xl object-cover w-full h-full"
            />
            
          </div>
        </div> */}
          <motion.div 
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.3, ease:'easeInOut'}}
          className="w-full h-full "
          >
            <Image src={AboutUsImg} alt="dashboard-img" width={819} height={819} className="w-full h-full rounded-2xl object-cover" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.3, ease:'easeInOut'}}
          
          className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-batman font-bold text-gradient bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">

              We are building a trusted, tech-driven marketplace where investors can seamlessly discover, buy, and sell Pre-IPOs, IPOs, and private equity opportunities. Our mission is to make alternative investments accessible, transparent, and secure for every investor—backed by technology, compliance, and trust.

            </p>
            <h2 className=" text-xl font-semibold max-md:text-xl max-sm:text-lg ">What Sets Us Apart
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><div><Check className="text-rich-violet" /></div> Exclusive Access to high-growth Pre-IPO and private market opportunities
              </li>
              <li className="flex gap-2"><div><Check className="text-rich-violet" /></div>Seamless & Secure end-to-end trading experience</li>
              <li className="flex gap-2"><div><Check className="text-rich-violet" /></div> Transparent & Compliant transactions with full investor confidence</li>
              <li className="flex gap-2"><div><Check className="text-rich-violet" /></div>Global Investor Network growing stronger every day
              </li>
              {/* <li className="flex gap-2"><div><Check className="text-rich-violet" /></div>At the heart of our platform is a vision to democratize private markets, empowering investors to enter early, grow smarter, and trade with trust.</li> */}
            </ul>

            <div>
              {/* <Button onClick={() => route.push("/contactus")}>Contact Us</Button> */}
              {/* <Button size="lg" className="mt-4 w-fit">
            Learn More
          </Button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
