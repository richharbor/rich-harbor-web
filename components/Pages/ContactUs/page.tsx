"use client";

import { Button } from "@/components/ui/button";
import { CircleX, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion'
import { CircleCheckBig } from 'lucide-react';
import axios from 'axios';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    source: string;
    message: string;
};

const baseURl = process.env.NEXT_PUBLIC_API_BASE_URL;

function convertToHtmlForm(data: Record<string, string>): string {
  let html = `<div style="font-family: Arial, sans-serif; line-height: 1.6;">`;
  html += `<h2>New Form Submission</h2>`;
  html += `<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">`;

  for (const [key, value] of Object.entries(data)) {
    html += `
      <tr>
        <td style="font-weight: bold; text-transform: capitalize;">${key}</td>
        <td>${value}</td>
      </tr>
    `;
  }

  html += `</table></div>`;
  return html;
}


export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        source: "",
        message: "",
    });
    const [SuccOpen, setSuccOpen] = useState<boolean>(false);
    const [ErrOpen, setErrOpen] = useState<boolean>(false);

    // Handle input & select changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle submit
    const  handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("Form Data Submitted:", formData);

        // TODO: send data to API

        const emailHTML = convertToHtmlForm(formData);
        // console.log(emailHTML)

        const email = {
            to: formData.email,
            subject:formData.subject + " - " + formData.name,
            content: emailHTML,
            isHtml: true,
        }

        const response = await axios.post(`${baseURl}/email/send`, email);

        // console.log(response.data);
        try{
            const response = await axios.post(`${baseURl}/email/send`, email);
            if(response.status === 200){
                setSuccOpen(true);
            }
        }catch(error){
            setErrOpen(true);
        }


        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            source: "",
            message: "",
        })
        
    };

    return (
        //     <div className="fixed inset-0 z-10 flex justify-center items-center bg-black/30 backdrop-blur-sm">
        // <div className="max-h-screen overflow-y-auto scrollbar-hide bg-background rounded-xl p-6">


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background px-2 py-5 mt-15 mx-auto max-w-2xl"
        >
            <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-2xl md:text-3xl lg:text-4xl  font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center mb-6 text-muted-foreground
      ">We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <form
                onSubmit={handleSubmit}

                className="space-y-4 p-6 border rounded mx-auto"
            >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="border p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border p-2 w-full rounded"
                            required
                        />
                    </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="border p-2 w-full rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-inner-spin-button]:appearance-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Subject</label>
                        <Select
                        name="subject"
                        value={formData.subject}
                        onValueChange={(value: string) =>
                            setFormData((prev) => ({ ...prev, subject: value }))
                        }
                    >
                        <SelectTrigger className="w-full border rounded p-2 bg-background">
                            <SelectValue placeholder="Select an Option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="buy">Buy</SelectItem>
                                <SelectItem value="sell">Sell</SelectItem>
                                <SelectItem value="partner">Want to be a partner</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                {/* Source */}
                <div>
                    <label className="block font-medium">Where did you find us?</label>
                    <Select
                        name="source"
                        value={formData.source}
                        onValueChange={(value: string) =>
                            setFormData((prev) => ({ ...prev, source: value }))
                        }
                    >
                        <SelectTrigger className="w-full border rounded p-2 bg-background">
                            <SelectValue placeholder="Select an Option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="friend">Friend/Referral</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Message */}
                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={4}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                >
                    Submit

                </Button>

            </form>

            {/*Success Dialog */}

            <Dialog open={SuccOpen} onOpenChange={setSuccOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Success 🎉</DialogTitle>
                        <DialogDescription>
                            Your data has been sent successfully.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-5 text-green-500 w-full ">
                        <CircleCheckBig className="mx-auto font-light" size={100} />
                    </div>
                    <Button onClick={() => setSuccOpen(false)}>Close</Button>
                </DialogContent>
            </Dialog>

            {/* Error Dialog */}

            <Dialog open={ErrOpen} onOpenChange={setErrOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Error</DialogTitle>
                        <DialogDescription>
                            Unable to sent data.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-5 text-red-500 w-full ">
                        <CircleX className="mx-auto font-light" size={100} />
                    </div>
                    <Button onClick={() => setErrOpen(false)}>Close</Button>
                </DialogContent>
            </Dialog>

            <div className="flex justify-center max-sm:flex-col py-10 max-sm:py-5 gap-10 max-sm:gap-3 mt-5 border-t">
                <a href="mailto:info@richharbor.com" className="flex gap-2 items-center">
                    <Mail size={15} />
                    <p>info@richharbor.com</p>
                </a>
                <a href="tel:+91345345453" className="flex gap-2 items-center">
                    <Phone size={15} />
                    <p>+91-345345453</p>
                </a>
            </div>
        </motion.div>
        // </div >
        // </div >


    );
}