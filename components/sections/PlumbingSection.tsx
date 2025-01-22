"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import { Wrench, Hammer, ArrowUpCircle } from "lucide-react"

const subcategories = [
  { name: "Installation", description: "Expert installation of plumbing systems.", icon: Wrench },
  { name: "Repairing", description: "Efficient repair services for plumbing issues.", icon: Hammer },
  { name: "Upgrades", description: "Upgrade your plumbing system for better efficiency.", icon: ArrowUpCircle },
]

export function PlumbingSection() {
  return (
    <section id="plumbing" className="py-20 bg-blue-50 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Plumbing" subtitle="Reliable plumbing services for your home and business." />

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our expert plumbing services ensure the smooth operation of your water systems. From installation to repairs
          and upgrades, we provide comprehensive solutions for all your plumbing needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subcategories.map((subcategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <motion.div
                  className="text-blue-500 mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <subcategory.icon size={48} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 font-poppins">{subcategory.name}</h3>
                <p className="text-gray-600 font-roboto">{subcategory.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

