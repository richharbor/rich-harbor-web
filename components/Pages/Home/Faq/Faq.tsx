"use client";

import Tag from "@/components/ui/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "What makes Rich Harbor different?",
    answer:
      "Rich Harbor unifies trading, research, compliance, and AI into one platform—bringing transparency, liquidity, and intelligence together.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use encryption for trading history and secure data handling across devices, with rigorous KYC/AML controls.",
  },
  {
    question: "Who benefits from Rich Harbor?",
    answer:
      "Investors get trusted access and liquidity; companies gain visibility and fair valuation; intermediaries expand reach and efficiency.",
  },
  {
    question: "How does the AI assistant help?",
    answer:
      "It analyzes trends, summarizes reports, and highlights signals so you can act faster with more confidence.",
  },
  {
    question: "What is the pricing?",
    answer:
      "One plan at $10/month. Full access to the platform, AI tools, compliance suite, and digital marketing add‑ons.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 max-md:py-10 ">
      <div className="container">
        <h2 className="text-6xl max-md:text-4xl max-sm:text-3xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-[#FFFFFF]">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0">{faq.question}</h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus text-[#FFFFFF] flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
