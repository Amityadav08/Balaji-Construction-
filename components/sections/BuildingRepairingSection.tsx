"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"

const subcategories = [
  {
    name: "Breaking",
    description: "Efficient and reliable demolition services for a fresh start to your projects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ery8rcatzr7TMRpQGzU2iEBeC2BN6j.png",
    icon: "🏚️",
  },
  {
    name: "Brick Works",
    description: "High-quality brick laying for durable and precise structures.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A2kWhSDUxs8AdhIICMClRo4hTrVvLU.png",
    icon: "🧱",
  },
  {
    name: "Block Works",
    description: "Strong and precise block masonry for long-lasting walls.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-91TtpUBkcljcyaaR5RM9J5HDSkcntK.png",
    icon: "🧊",
  },
  {
    name: "Plaster Works",
    description: "Smooth and professional plastering for a refined finish.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vHQPNgi6PZCh7wTgobdnPEnoTeU9Ur.png",
    icon: "🏗️",
  },
  {
    name: "RCC Works",
    description:
      "Reinforced concrete construction for solid foundations. Our RCC works guarantee strength and durability for your projects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-242PfzKWmeMxKNhnzMc9nTzZWvxB1I.png",
    icon: "🏢",
  },
  {
    name: "Tiles Fixing",
    description:
      "Expert tile fixing with precision and care. Whether it's flooring or walls, our team ensures a perfect finish for lasting durability.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-apzNhcBSKJvNOQBu0GPsBr29jIkCHI.png",
    icon: "🔨",
  },
  {
    name: "Bamboo (Franchi)",
    description:
      "We specialize in sustainable bamboo work for eco-friendly solutions, blending strength and aesthetics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RR8n7J98GJqHoue43YtRdEZzEXPKZE.png",
    icon: "🎋",
  },
  {
    name: "Scaffolding Safety",
    description: "Secure and safe scaffolding solutions for every project.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lDeilrtXnQrraAEiSbFACAq5Q5tjQg.png",
    icon: "🏗️",
  },
  {
    name: "Painting",
    description: "Creative and durable painting solutions for all surfaces.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGekAkDLYesW8Tz4mo9aXgFmufNvkL.png",
    icon: "🎨",
  },
]

export function BuildingRepairingSection() {
  return (
    <section id="building-repairing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Building Repairing and Construction"
          subtitle="We offer comprehensive solutions for all your construction needs."
        />

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our expert team ensures durability and high-quality results in every project, from minor repairs to major
          constructions. We pride ourselves on our attention to detail and commitment to excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={subcategory.image || "/placeholder.svg"}
                  alt={subcategory.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-3xl">{subcategory.icon}</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 font-poppins">{subcategory.name}</h3>
                <p className="text-gray-600 font-roboto">{subcategory.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

