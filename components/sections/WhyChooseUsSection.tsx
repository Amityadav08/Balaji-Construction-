"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const reasons = [
  { title: "Experienced Professionals", description: "Our team brings years of industry expertise to every project." },
  { title: "On-time Delivery", description: "We pride ourselves on completing projects within the agreed timeframe." },
  {
    title: "High-Quality Materials",
    description: "We use only the best materials to ensure lasting quality in our work.",
  },
  {
    title: "Customer Satisfaction",
    description: "Our clients' happiness is our top priority, and we strive to exceed expectations.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Why Choose Balaji Construction?" subtitle="Discover the advantages of working with us" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

