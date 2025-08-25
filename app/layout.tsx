import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import Footer from "../components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";
import Whatsapp from "@/components/Common/Whatsapp/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich Harbor",
  description: "Your Harbor for Financial Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-7xl mx-auto items-center flex flex-col px-5 relative">
          {children}
          <div className="fixed bottom-4 right-4">
            <Whatsapp />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
