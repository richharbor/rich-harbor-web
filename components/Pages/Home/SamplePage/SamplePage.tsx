import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SamplePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full  max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
        <Image
          src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
          width={1280}
          height={720}
          alt="SaaSify dashboard"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
      </div>

      {/* Gradient Blurs */}
      <div className="absolute -bottom-4 -right-4 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
      <div className="absolute -top-4 -left-4 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
    </motion.div>
  );
}
