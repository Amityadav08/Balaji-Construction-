"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"

const projects = [
  { title: "Modern Office Complex", category: "Commercial", image: "/placeholder.svg?height=300&width=400" },
  { title: "Luxury Apartment Building", category: "Residential", image: "/placeholder.svg?height=300&width=400" },
  { title: "Historic Building Restoration", category: "Restoration", image: "/placeholder.svg?height=300&width=400" },
  { title: "Eco-Friendly School", category: "Educational", image: "/placeholder.svg?height=300&width=400" },
  { title: "Shopping Mall Renovation", category: "Commercial", image: "/placeholder.svg?height=300&width=400" },
  { title: "Waterfront Hotel", category: "Hospitality", image: "/placeholder.svg?height=300&width=400" },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Work Speaks for Itself"
          subtitle="Explore our diverse portfolio of successful projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

