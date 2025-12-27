import UnlistedShares from "@/components/Pages/UnlistedShares/UnlistedShares";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unlisted Shares | Rich Harbor",
    description: "Invest in NSE unlisted shares and pre-IPO shares of fundamentally strong companies. Check NSE share price unlisted with Rich Harbor. Secure, transparent, and structured execution.",
    keywords: ["NSE share price unlisted", "NSE unlisted shares", "unlisted shares", "pre-IPO", "Rich Harbor"],
};

export default function Page() {
    return <UnlistedShares />;
}
