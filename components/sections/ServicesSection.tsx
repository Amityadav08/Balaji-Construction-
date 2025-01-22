"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "Building Repairing/Construction",
    icon: "🏗️",
    subcategories: [
      { name: "Breaking", description: "Professional demolition and breaking services" },
      { name: "Brick Works", description: "Expert bricklaying and masonry" },
      { name: "Block Works", description: "Quality concrete block construction" },
      { name: "Plaster Works", description: "Smooth and durable plastering" },
      { name: "RCC Works", description: "Reinforced concrete construction" },
      { name: "Tiles Fixing", description: "Professional tile installation" },
      { name: "Bamboo/Franchi", description: "Sustainable bamboo construction" },
      { name: "Scaffolding Safety", description: "Secure scaffolding solutions" },
      { name: "Painting", description: "Professional painting services" },
    ],
  },
  {
    title: "Waterproofing",
    icon: "💧",
    subcategories: [
      { name: "Terrace Waterproofing", description: "Complete terrace protection" },
      { name: "Toilet", description: "Bathroom waterproofing solutions" },
      { name: "Water Tank", description: "Tank sealing and protection" },
      { name: "Gutters", description: "Gutter waterproofing services" },
      { name: "Swimming Pool", description: "Pool waterproofing expertise" },
    ],
  },
  {
    title: "Interior Design",
    icon: "🎨",
    subcategories: [
      { name: "Residential", description: "Home interior design" },
      { name: "Commercial", description: "Office and retail spaces" },
      { name: "Hospitality", description: "Hotels and restaurants" },
    ],
  },
  {
    title: "Building Piling Works",
    icon: "🏗️",
    subcategories: [
      { name: "Foundation Work", description: "Strong foundation solutions" },
      { name: "Piling Equipment", description: "Modern piling machinery" },
    ],
  },
  {
    title: "Plumbing",
    icon: "🔧",
    subcategories: [
      { name: "Installation", description: "New plumbing installation" },
      { name: "Repairing", description: "Plumbing repair services" },
      { name: "Upgrades", description: "System modernization" },
    ],
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-montserrat">Our Expertise</h2>
          <p className="text-xl text-gray-600">Comprehensive construction solutions for every need</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeService === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                <div
                  className={`grid gap-4 transition-all duration-300 ${
                    activeService === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    {service.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h4 className="font-semibold text-blue-600">{sub.name}</h4>
                        <p className="text-gray-600 text-sm">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

