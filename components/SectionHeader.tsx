"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-4xl font-bold mb-4 font-montserrat">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </motion.div>
  )
}

