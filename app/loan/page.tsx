import LoanPage from "@/components/Pages/LoanPage/LoanPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/loan",
    },
};

export default function page() {

    return <LoanPage />
}