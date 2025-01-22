"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"

const subcategories = [
  {
    name: "Residential",
    description: "Transform your home into a masterpiece.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Commercial",
    description: "Professional design for commercial spaces.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hospitality",
    description: "Elegant interior design for hotels and restaurants.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function InteriorDesignSection() {
  return (
    <section id="interior-design" className="py-20 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Interior Design"
          subtitle="Creating aesthetic spaces that blend style and functionality."
        />

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our interior design services enhance living and working spaces, creating environments that are both beautiful
          and functional. We work closely with our clients to bring their vision to life.
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
              <div className="relative h-48">
                <Image
                  src={subcategory.image || "/placeholder.svg"}
                  alt={subcategory.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
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

