import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import { Star, Zap, Shield, Users, BarChart, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Centralized Marketplace",
    description:
      "A unified platform for seamless trading with transparent pricing and efficient deal matching.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Comprehensive Research",
    description:
      "Access verified financial insights, standardized valuation models, and deep sector analytics.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Trust Framework",
    description:
      "Built on rigorous KYC/AML compliance with blockchain-secured transaction records.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Liquidity Enhancement",
    description:
      "Advanced matching algorithms, partial transaction support, and incentive-driven liquidity.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Intuitive User Experience",
    description:
      "Mobile-first design with a unified trading dashboard and frictionless onboarding.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "Regulatory Compliance Hub",
    description:
      "Automated checks, standardized documentation, and real-time reporting tools.",
    icon: <Star className="size-5" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Core Solution Components
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Designed to empower modern trading through innovation and trust
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Discover how Rich Harbor brings together markets, intelligence, trust, and compliance to power institutional-grade trading.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
