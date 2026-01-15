import axios from "axios";

const baseURl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface EmailData {
    to: string;
    subject: string;
    content: string;
    isHtml: boolean;
}

export const sendEmail = async (emailData: EmailData) => {
    try {
        const response = await axios.post(`${baseURl}/email/send`, { ...emailData, to: "frontend@rhinontech.com" });
        return response;
    } catch (error) {
        throw error;
    }
};
