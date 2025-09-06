"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WhoWeAre() {
  const route = useRouter();

  return (
    <section id="aboutus" className="relative w-full bg-background text-foreground py-20 px-20 max-md:px-10 max-sm:px-4">
      <div className="container mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center">
        
        {/* Left Side - Images */}
        <div className="relative grid grid-cols-12 [grid-template-rows:repeat(9,50px)] max-sm:[grid-template-rows:repeat(9,35px)] w-full h-full ">
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
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-batman font-bold text-gradient bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are building a trusted marketplace where investors can discover,
            buy, and sell Pre-IPOs, IPOs, and private equity opportunities. 
            Our mission is to make alternative investments more accessible, 
            secure, and transparent for everyone.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><Check className="text-rich-violet" /> Exclusive access to high-growth Pre-IPOs</li>
            <li className="flex gap-2"><Check className="text-rich-violet" /> Seamless & secure buy/sell process</li>
            <li className="flex gap-2"><Check className="text-rich-violet" /> Transparent and compliant transactions</li>
            <li className="flex gap-2"><Check className="text-rich-violet" /> Growing global investor community</li>
          </ul>
          
          <div>
            <Button onClick={() => route.push("/contactus")}>Contact Us</Button>
            {/* <Button size="lg" className="mt-4 w-fit">
            Learn More
          </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
