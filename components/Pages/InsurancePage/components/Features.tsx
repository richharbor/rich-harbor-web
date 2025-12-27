"use client"

import { Shield, Heart, Home, Car, Umbrella, Users, Building2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Heart,
    name: "Life Insurance",
    description: "Secure your family's financial future with comprehensive life coverage that adapts to your needs.",
  },
  {
    icon: Shield,
    name: "Health Insurance",
    description: "Access quality healthcare with flexible plans covering preventive care to major medical expenses.",
  },
  {
    icon: Car,
    name: "Motor Insurance",
    description: "Drive with confidence knowing you're protected against accidents, theft, and liability.",
  },
  {
    icon: Building2,
    name: "Business & Commercial Insurance",
    description: "Protect your business assets, employees, and operations with tailored commercial coverage.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="coverage" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-bold font-batman text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
            Insurance Categories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From protecting your health to securing your home, we offer comprehensive coverage options tailored to your
            unique needs.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-card border border-border p-8 hover:border-[#4AA651]/50 transition-colors"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary"
              >
                <feature.icon className="h-6 w-6 text-[#4AA651]" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
