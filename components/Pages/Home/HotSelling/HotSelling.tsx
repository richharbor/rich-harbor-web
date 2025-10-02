import biraIcon from '@/public/images/bira91.webp'
import boatIcon from '@/public/images/boat.webp'
import capgeminiIcon from '@/public/images/capgemini.webp'
import mseIcon from '@/public/images/mse.png'
import nseIcon from '@/public/images/NSE.png'
import oyoIcon from '@/public/images/oyo.png'
import peIcon from '@/public/images/pe.webp'
import tapariaIcon from '@/public/images/taparia.webp'

import IntegrationRows from "./IntegrationRows/IntegrationRows";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { postStockEnquiry } from '@/services/shareServices'
import { z } from "zod";


const items = [
    {
        name: "National Stock Exchange (NSE)",
        icon: "https://assets.incredmoney.com/images/v2/webp/NSE.webp",
        sector: "Exchange",
    },
    {
        name: "NCDEX Ltd",
        icon: "https://assets.incredmoney.com/images/v2/webp/NCDEX.webp",
        sector: "agricultural commodity exchange",
    },
    {
        name: "Metropolitan Stock Exchange (MSE)",
        icon: "https://assets.incredmoney.com/images/v3/Xmse.webp",
        sector: "Exchange",
    },
    {
        name: "Oravel Stays (OYO Rooms)",
        icon: "https://assets.incredmoney.com/images/v2/webp/OYO.webp",
        sector: "Hospitality",
    },
    {
        name: "Chennai Super Kings (CSK)",
        icon: "https://assets.incredmoney.com/images/v2/webp/CSK.webp",
        sector: "Sports",
    },

    {
        name: "Apollo Green Energy Ltd",
        icon: "https://assets.incredmoney.com/images/v2/webp/Apollo.webp",
        sector: "EPC & Renewable energy",
    },
];

export type itemsType = typeof items;
type Stock = {
    name: string
    sector: string
    icon: string
}
interface FormData {
    shareName: string
    quantity: string
    name: string
    email: string
    phone: string
}
const enquirySchema = z.object({
    shareName: z.string().min(1, "Share name is required"),
    quantity: z
        .string()
        .regex(/^\d+$/, "Quantity must be a number"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
});

// Infer type
type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function HotSelling() {
    const route = useRouter();
    const [open, setOpen] = useState(false)
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null)
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        shareName: "",
        quantity: "",
        name: "",
        email: "",
        phone: "",
    })

    const handleOpenDialog = (item: Stock) => {
        setSelectedStock(item)
        setFormData((prev) => ({ ...prev, shareName: item.name }))
        setOpen(true)
    }
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);
        const result = enquirySchema.safeParse(formData);
        if (!result.success) {
            const firstError = result.error.issues[0]?.message;
            setError(firstError);
            console.error(firstError);
            return;
        }


        try {
            setError("");
            const response = await postStockEnquiry(result.data);
            console.log(response);
            setOpen(false);
            const whatsappUrl = `https://wa.me/919211265558`;
            window.open(whatsappUrl, "_blank");
            setFormData({
                shareName: "",
                quantity: "",
                name: "",
                email: "",
                phone: "",
            })

        } catch (error) {
            console.error("Form submission error:", error);
            setError("Form submission error")
        }finally{
            setLoading(false);
        }

    }
    return (
        <section id='hot-ipo' className="max-w-7xl mx-auto py-20 overflow-hidden max-sm:py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:gap-10">
                    <div>
                        <h2 className="text-3xl font-batman md:text-4xl text-center lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Hot IPO’s on the Rise
                        </h2>

                        <p className="text-white/50 mt-4 text-lg text-center">
                            Explore the most in-demand equities and make informed trading decisions.
                        </p>
                    </div>
                    {/* <div className="z-30 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
                        <div className="h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden min-w-[99vw]">
                            <IntegrationRows integrations={items} />
                            <IntegrationRows
                                integrations={items.slice().reverse()}
                                className=" "
                                reverse={true}
                            />
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="right"
                                speed="fast"
                            />
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="left"
                                speed="fast"
                            />
                            
                        </div>
                    </div> */}
                    <div className="grid grid-cols-3 max-sm:px-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-5">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="z-10 bg-card group/items cursor-pointer ease-in-out hover:border-rich-violet transition-all duration-200 border border-white/10 rounded-3xl p-6 min-w-[250px] flex-shrink-0"
                                onClick={() => handleOpenDialog(item)}
                            >
                                <div className="flex justify-center h-32 max-sm:h-28">
                                    <img
                                        className="object-contain rounded-3xl group-hover/items:scale-85 transition-all duration-500 ease-in-out"
                                        src={item.icon}
                                        alt={`${item.name}-icon`}
                                    />
                                </div>
                                <h3 className="text-2xl max-sm:text-xl mt-6 ">
                                    {item.name}
                                </h3>
                                <p className=" text-white/30 mt-3 ">Sector</p>
                                <p className=" text-white/50 mt-1 ">
                                    {item.sector}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-center mt-10">
                    <Button variant={"outline"} className="z-10 cursor-pointer" onClick={()=> route.push("/allstocks")}>View more</Button>
                </div>

            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Send Enquiry</DialogTitle>
                        <DialogDescription>
                            Please fill in the details below to send an enquiry for this share.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedStock && (
                        <form onSubmit={handleEnquirySubmit} className="grid gap-4">
                            {/* Share Name (readonly) */}
                            <div className="grid gap-3">
                                <Label htmlFor="shareName">Share Name</Label>
                                <Input
                                    id="shareName"
                                    name="shareName"
                                    value={selectedStock.name}
                                    readOnly
                                    className="bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            {/* Quantity */}
                            <div className="grid gap-3">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input onChange={handleChange} id="quantity" name="quantity" type="number" placeholder="Enter quantity" />
                            </div>

                            {/* Name */}
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input onChange={handleChange} id="name" name="name" placeholder="Enter your name" />
                            </div>

                            {/* Email */}
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input onChange={handleChange} id="email" name="email" type="email" placeholder="Enter your email" />
                            </div>

                            {/* Phone */}
                            <div className="grid gap-3">
                                <Label htmlFor="phone">Phone</Label>
                                <Input onChange={handleChange} id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                            </div>
                            <p className='text-red-500 text-sm'>{error}</p>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button disabled={loading} type="submit">{loading?'Sending...':'Send Enquiry'}</Button>
                                
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}