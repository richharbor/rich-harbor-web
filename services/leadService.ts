import { PublicAxios } from "@/helpers/PrivateAxios";
import axios from "axios";

export interface LeadData {
    product_type: string;
    lead_type: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    product_details: Record<string, any>;
}

const baseURl = "http://localhost:5003/v1";

export const postLead = async (requestBody: LeadData) => {
    try {
        const response = await axios.post(`${baseURl}/web/leads`, requestBody);
        return response.data;
    } catch (error) {
        console.error("Lead submission failed", error);
        throw error;
    }
};
