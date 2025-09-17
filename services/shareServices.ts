import { PrivateAxios, PublicAxios } from "@/helpers/PrivateAxios";

export interface LiquidateShare {
    email: string;
    fullName: string;
    phone: string;
    price: string;
    profile: string;
    quantity: string;
    shareName: string;
}


export const postLiquidateShares = async (requestBody: LiquidateShare) => {
    try {
        const response = await PublicAxios.post(`/liquidate-shares`, requestBody);

        return response.data.data;
    } catch (error) {
        console.error("Login failed", error);
        throw error;
    }
};