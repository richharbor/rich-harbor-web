"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Clock, PiggyBank, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Approval",
    description:
      "Get approved in minutes with our AI-powered underwriting system that analyzes your business in real-time.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption protects your data. We never share your information without your consent.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Terms",
    description: "Choose repayment terms that work for your cash flow. From 3 months to 5 years, you're in control.",
  },
  {
    icon: Clock,
    title: "Fast Funding",
    description: "Receive funds within 24 hours of approval. No waiting weeks for traditional bank processes.",
  },
  {
    icon: PiggyBank,
    title: "Competitive Rates",
    description: "Our rates start as low as 5.9% APR. We reward strong businesses with better terms.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Get help when you need it with our dedicated loan advisors available 24/7.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">Why Choose LoanFlow</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've reimagined business lending from the ground up, making it faster, simpler, and more transparent.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="p-6 h-full bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
