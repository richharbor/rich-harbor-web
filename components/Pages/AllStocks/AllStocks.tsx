'use client'
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { postStockEnquiry } from "@/services/shareServices";
import z from "zod";




type Stock = {
    scriptName: string;
    faceValue: string | number;
    landingPrice: string | number;
};

export const stocket: Stock[] = [
    { scriptName: "APOLLOGREEN", faceValue: 10, landingPrice: 76 },
    { scriptName: "BIRA(89)", faceValue: 10, landingPrice: 280 },
    { scriptName: "BOAT", faceValue: "-", landingPrice: 1500 },
    { scriptName: "CAPGEMIMITECH.", faceValue: 10, landingPrice: 12000 },
    { scriptName: "CARE HEALTH", faceValue: 10, landingPrice: 147 },
    { scriptName: "CARRIER AIRCON", faceValue: 10, landingPrice: "NA" },
    { scriptName: "CIAL", faceValue: 10, landingPrice: 465 },
    { scriptName: "CSK", faceValue: 0.1, landingPrice: 185 },
    { scriptName: "ESDS", faceValue: 10, landingPrice: "DISCUSS" },
    { scriptName: "FINO", faceValue: 10, landingPrice: 102 },
    { scriptName: "TRANSLINE TECHNOLOGIES", faceValue: 2, landingPrice: 166 },
    { scriptName: "FRICK INDIA", faceValue: 10, landingPrice: 2080 },
    { scriptName: "GOODLUCK DEFENCE", faceValue: 10, landingPrice: "DISCUSS" },
    { scriptName: "GREENZO", faceValue: 10, landingPrice: 615 },
    { scriptName: "HDFC SEC.", faceValue: 10, landingPrice: 10200 },
    { scriptName: "HERO FINCORP", faceValue: 10, landingPrice: 1400 },
    { scriptName: "HINDON", faceValue: 10, landingPrice: "DISCUSS" },
    { scriptName: "HINDUJALAND FINANCE", faceValue: 10, landingPrice: 270 },
    { scriptName: "ICEX", faceValue: 1, landingPrice: 4.1 },
    { scriptName: "INCRED HOLDING", faceValue: 10, landingPrice: 160 },
    { scriptName: "INDIAN CARBON", faceValue: 10, landingPrice: 850 },
    { scriptName: "INDIAN POTASH", faceValue: 10, landingPrice: 3250 },
    { scriptName: "INDOFIL", faceValue: 10, landingPrice: "NA" },
    { scriptName: "INKEL INDIA", faceValue: 10, landingPrice: 19 },
    { scriptName: "INNOV8 COWORKING", faceValue: 2, landingPrice: 50 },
    { scriptName: "KIAL", faceValue: 100, landingPrice: 125 },
    { scriptName: "LAVA", faceValue: 5, landingPrice: 42 },
    { scriptName: "LORDSMARK INDUSTRIES", faceValue: 10, landingPrice: 96 },
    { scriptName: "MANUSHREE TECHNOPACK", faceValue: 10, landingPrice: 1020 },
    { scriptName: "MATRIX", faceValue: 10, landingPrice: 20 },
    { scriptName: "MERINO", faceValue: 10, landingPrice: 3500 },
    { scriptName: "MOHAMEAKIN", faceValue: 5, landingPrice: 2150 },
    { scriptName: "MOHFL", faceValue: 1, landingPrice: 14.2 },
    { scriptName: "MSEI", faceValue: 1, landingPrice: 3.18 },
    { scriptName: "NAYARA ENERGY", faceValue: 10, landingPrice: 1255 },
    { scriptName: "NCDEX", faceValue: 2, landingPrice: 455 },
    { scriptName: "NeRL LTD", faceValue: 2, landingPrice: 65 },
    { scriptName: "NSE", faceValue: 1, landingPrice: 1900 },
    { scriptName: "ONIX RENEWABLE", faceValue: 1, landingPrice: "NA" },
    { scriptName: "ORAVEL TRAVEL LTD (OYO)", faceValue: 1, landingPrice: 25 },
    { scriptName: "ORBIS FINANCIALS", faceValue: 10, landingPrice: 500 },
    { scriptName: "GROWW", faceValue: 2, landingPrice: 125 },
    { scriptName: "PARAG PARIKH", faceValue: 1, landingPrice: "NA" },
    { scriptName: "PHARM EASY", faceValue: 1, landingPrice: 5.9 },
    { scriptName: "PINE LABS", faceValue: 1, landingPrice: 320 },
    { scriptName: "POLYMATECH ELECTRONICS", faceValue: 10, landingPrice: 66 },
    { scriptName: "PXIL", faceValue: 10, landingPrice: 600 },
    { scriptName: "RRP S4E INNOVATIONS", faceValue: 10, landingPrice: 335 },
    { scriptName: "SBI ASSET MANAGEMENT", faceValue: 1, landingPrice: 2700 },
    { scriptName: "SIGNIFY INNOVATIONS", faceValue: 10, landingPrice: "NA" },
    { scriptName: "SPRAY ENGINEERING DEVICES", faceValue: 10, landingPrice: 245 },
    { scriptName: "STERLITE GRID", faceValue: 10, landingPrice: "NA" },
    { scriptName: "STERLITE ELECTRIC", faceValue: 2, landingPrice: "NA" },
    { scriptName: "STUDDS", faceValue: 5, landingPrice: 630 },
    { scriptName: "TRANSLINE", faceValue: 2, landingPrice: 162 },
    { scriptName: "TICKER", faceValue: 1, landingPrice: 32 },
    { scriptName: "URBAN TOTS", faceValue: 1, landingPrice: 69 },
    { scriptName: "UTKARSH CORE", faceValue: 10, landingPrice: 185 },
    { scriptName: "VEEDA CLINIC", faceValue: 2, landingPrice: 465 },
    { scriptName: "VIRIDI CAPITAL", faceValue: 11, landingPrice: 1000 },
];
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

export default function AllStocks() {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState<string>("");
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null)
    const route = useRouter();
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
        setFormData((prev) => ({ ...prev, shareName: item.scriptName }))
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
        try {
            console.log(formData);
            const result = enquirySchema.safeParse(formData);
            if (!result.success) {
                const firstError = result.error.issues[0]?.message;
                setError(firstError);
                console.error(firstError);
                return;
            }



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
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="mt-20 max-w-7xl min-h-screen py-10 flex flex-col gap-10 max-md:gap-5">
            <div className="w-full items-center flex flex-col gap-10 max-md:gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-batman text-center">
                    Where Your Wealth Takes Shape
                </h1>
                <p className="text-white/50 max-w-3xl text-center mx-auto">
                    See all your stocks come together in one powerful view, giving you the clarity, confidence, and control to navigate your financial future.
                </p>
            </div>
            <div className="p-6 max-sm:p-2">
                <h2 className="text-2xl font-bold mb-4 max-sm:text-center">Unlisted Shares Price List</h2>

                <div className="hidden md:block overflow-x-auto">
                    <Table className="w-full text-sm">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="px-2 py-2 md:px-4">Script Name</TableHead>
                                <TableHead className="px-2 py-2 md:px-4">Face Value</TableHead>
                                <TableHead className="px-2 py-2 md:px-4">Tentative Price</TableHead>
                                <TableHead className="px-2 py-2 md:px-4 text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stocket.map((stock, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium px-2 py-2 md:px-4">{stock.scriptName}</TableCell>
                                    <TableCell className="px-2 py-2 md:px-4">{stock.faceValue}</TableCell>
                                    <TableCell className="px-2 py-2 md:px-4">{stock.landingPrice}</TableCell>
                                    <TableCell className="px-2 py-2 md:px-4 text-center">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer bg-transparent"
                                            onClick={() => handleOpenDialog(stock)}
                                        >
                                            Enquiry
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="md:hidden space-y-3">
                    {stocket.map((stock, index) => (
                        <div key={index} className="border border-border rounded-lg p-2 bg-card">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <p className="text-xs text-muted-foreground">Script Name</p>
                                    <p className="font-semibold text-base">{stock.scriptName}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Tentative Price</p>
                                    <p className="font-semibold text-base">{stock.landingPrice}</p>
                                </div>
                            </div>
                            <div className="mb-2 pb-1 border-b border-border">
                                <p className="text-xs text-muted-foreground">Face Value</p>
                                <p className="text-sm">{stock.faceValue}</p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full cursor-pointer bg-transparent"
                                onClick={() => handleOpenDialog(stock)}
                            >
                                Send Enquiry
                            </Button>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-center -mt-5">
                <Button variant={"outline"} onClick={() => setOpen(true)}>
                    Others
                </Button>
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
                                    value={selectedStock.scriptName}
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
                                <Button disabled={loading} type="submit">{loading ? 'Sending...' : 'Send Enquiry'}</Button>

                            </DialogFooter>
                        </form>
                    )}
                    {!selectedStock && (
                        <form onSubmit={handleEnquirySubmit} className="grid gap-4">
                            {/* Share Name (readonly) */}
                            <div className="grid gap-3">
                                <Label htmlFor="shareName">Share Name</Label>
                                <Input
                                    id="shareName"
                                    name="shareName"
                                    onChange={handleChange}
                                    placeholder="Enter share name"
                                    className="bg-gray-100"
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
                                <Button disabled={loading} type="submit">{loading ? 'Sending...' : 'Send Enquiry'}</Button>

                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    )
}