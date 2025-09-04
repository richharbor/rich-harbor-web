'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";



type FormData = {
  authorizedPerson: string;
  businessName:string;
  email: string;
  phone: string;
  profile: string;
  shareName: string;
  otherShare?: string;
  quantity: string;
  price: string;
};

export default function BusinessDetailForm() {

    const [formData, setFormData] = useState<FormData>({
        authorizedPerson: "",
        businessName:"",
        email: "",
        phone: "",
        profile: "",
        shareName: "",
        otherShare: "",
        quantity: "",
        price: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    setFormData({
      authorizedPerson: "",
      businessName:"",
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
        <div className="container">
            <div>
                <h2>Business Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto p-6 border rounded shadow-md">
                    {/* Full Name + Email */}
                    
                        <div>
                            <label className="block mb-1 font-medium mb-2">Authorized Person</label>
                            <Input name="authorizedPerson" value={formData.authorizedPerson} onChange={handleChange} placeholder="Enter Full Name" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium mb-2">Partner Business Name</label>
                            <Input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Enter Business Name" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium mb-2">Email *</label>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
                        </div>
                    

                    {/* Phone + Profile */}
                    
                        <div>
                            <label className="block mb-1 font-medium mb-2">Mobile Number *</label>
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
                            <label className="block mb-1 font-medium mb-2">Business Type</label>
                            <Select

                                value={formData.profile}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, profile: value }))}

                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Your Profession" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="partnership-firm">Partnership Firm</SelectItem>
                                        <SelectItem value="proprietorship-firm">Proprietorship Firm</SelectItem>
                                        <SelectItem value="company">Company</SelectItem>
                                        <SelectItem value="huf">HUF</SelectItem>
                                        <SelectItem value="llp">LLP</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    

                    {/* Share Name */}
                    
                        <div>
                            <label className="block mb-1 font-medium mb-2">Share Name *</label>
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
                    

                    {/* Other Share */}
                    {formData.shareName === "other" && (
                        <div>
                            <label className="block mb-1 font-medium mb-2">Please specify if your share is not listed</label>
                            <Input
                                name="otherShare"
                                value={formData.otherShare}
                                onChange={handleChange}
                                placeholder="Enter Share Name"
                            />
                        </div>
                    )}

                    {/* Quantity + Price */}
                   
                        <div>
                            <label className="block mb-1 font-medium mb-2">Quantity Available *</label>
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
                            <label className="block mb-1 font-medium mb-2">Selling Price (Per share) *</label>
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
                    

                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </div>
        </div>
    )
}