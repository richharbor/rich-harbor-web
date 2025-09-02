"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BanknoteArrowDown, CircleCheckBig, CircleX, Handshake, Mail, Phone, Users, UserStar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  profile: string;
  shareName: string;
  otherShare?: string;
  quantity: string;
  price: string;
};

const features = [
  {
    icon: <UserStar className="w-8 h-8 text-rich-violet" />,
    title: "Shareholder",
    description:
      "Liquidate your stocks to unlock your true net worth.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-rich-violet" />,
    title: "Institutional Sellers",
    description:
      "Work with our dedicated team to gain unique insights and sell block inventory.",
  },
  {
    icon: <BanknoteArrowDown className="w-8 h-8 text-rich-violet" />,
    title: "Funds",
    description:
      "Liquidate your Unlisted Funds with Rich Harbor.",
  },
  {
    icon: <Users className="w-8 h-8 text-rich-violet" />,
    title: "Employees",
    description:
      "Join us to explore new options for selling your ESOP’s.",
  },
];

export default function SellSharesForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    profile: "",
    shareName: "",
    otherShare: "",
    quantity: "",
    price: "",
  });

  const [SuccOpen, setSuccOpen] = useState<boolean>(false);
  const [ErrOpen, setErrOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      profile: "",
      shareName: "",
      otherShare: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background px-2 py-5 mt-15 mx-auto "
    >
      <div className="py-20 mb-5 w-full rounded-2xl flex items-center justify-center relative px-10 max-sm:p-3 overflow-hidden  bg-black">
        <motion.img
          src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1500507449/image_1500507449.jpg?io=getty-c-w750"
          className="h-auto w-full object-center absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none -top-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <h1 style={{ fontFamily: "Batman, sans-serif" }} className="text-2xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-2">
          Liquidate Investments
        </h1>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 max-w-3xl mx-auto">
        We can assist you with the liquidation of Unlisted, Startup Shares and ESOPs
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto p-6 border rounded shadow-md">
        {/* Full Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Full Name *</label>
            <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
          </div>
        </div>

        {/* Phone + Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Mobile Number *</label>
            <Input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
              className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 font-medium">Profile *</label>
            <Select

              value={formData.profile}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, profile: value }))}

            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Your Profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="employee">Startup Employee</SelectItem>
                  <SelectItem value="founder">Founder</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Share Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Share Name *</label>
            <Select
              value={formData.shareName}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, shareName: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Share Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="bira91">Bira91</SelectItem>
                  <SelectItem value="boat">boAt</SelectItem>
                  <SelectItem value="oyo">OYO</SelectItem>
                  <SelectItem value="capgemini">Capgemini</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <div>
          <label className="block mb-1 font-medium">Share Name*</label>
          <Input name="shareName" value={formData.shareName} onChange={handleChange} placeholder="Enter Share Name" required />
        </div> */}
        </div>

        {/* Other Share */}
        {formData.shareName === "other" && (
          <div>
            <label className="block mb-1 font-medium">Please specify if your share is not listed</label>
            <Input
              name="otherShare"
              value={formData.otherShare}
              onChange={handleChange}
              placeholder="Enter Share Name"
            />
          </div>
        )}

        {/* Quantity + Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Quantity Available *</label>
            <Input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter Quantities"
              className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Selling Price (Per share) *</label>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Selling Price"
              className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>

      {/* Success Dialog */}
      <Dialog open={SuccOpen} onOpenChange={setSuccOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success 🎉</DialogTitle>
            <DialogDescription>Your form has been submitted successfully.</DialogDescription>
          </DialogHeader>
          <div className="my-5 text-green-500 w-full">
            <CircleCheckBig className="mx-auto" size={100} />
          </div>
          <Button onClick={() => setSuccOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      <Dialog open={ErrOpen} onOpenChange={setErrOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Error</DialogTitle>
            <DialogDescription>Unable to submit your form. Please try again later.</DialogDescription>
          </DialogHeader>
          <div className="my-5 text-red-500 w-full">
            <CircleX className="mx-auto" size={100} />
          </div>
          <Button onClick={() => setErrOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>



      <section className="relative  text-gray-100 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-rich-violet font-batman">
            Liquidate your Unlisted & Startup Investments
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-14">

            Whether you’re looking to diversify your portfolio or seeking liquidity from an Early Stage Investment, Rich Harbor can help you get the liquidity you deserve. Liquidate your Unlisted & Startup Investments through Rich Harbor.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex z-10 flex-col items-center bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </motion.div>
  );
}
