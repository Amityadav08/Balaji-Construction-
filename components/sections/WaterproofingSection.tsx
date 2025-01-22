"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"
import { useRef } from "react"

const services = [
  {
    title: "Terrace Waterproofing",
    description:
      "Professional terrace waterproofing solutions that ensure complete protection against water damage. Our advanced techniques and materials provide long-lasting results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WUJLDSWfKqKImHwj5sd75WAqF6mCkD.png",
  },
  {
    title: "Toilet Waterproofing",
    description:
      "Comprehensive bathroom waterproofing services to prevent leaks and water seepage. We ensure your bathrooms remain moisture-free and durable.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2KZskW07Rh7gyuqcZklpJdJrwR4foO.png",
  },
  {
    title: "Water Tank",
    description:
      "Specialized waterproofing solutions for water tanks to maintain water quality and prevent leakage. Our treatments ensure the longevity of your water storage systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bMAntkqHJkPxyMev4CBQhULLicizm7.png",
  },
  {
    title: "Gutters",
    description:
      "Expert gutter waterproofing services to ensure proper water drainage and prevent overflow. We protect your property from water-related damages.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxNCuLl1YLRURC2OdoTvLJvKjan7Wi.png",
  },
  {
    title: "Swimming Pool",
    description:
      "Professional swimming pool waterproofing to prevent leaks and maintain water quality. Our solutions ensure your pool remains in perfect condition.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iV5p4duepgVVRlYWgkUB7zrsi7JoMT.png",
  },
]

export function WaterproofingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9xvNXkAIKIDBZpVlAJl4Mg7oUtI70h.png"
            alt="Waterproofing Background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/50 to-blue-900/80" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Waterproofing Solutions"
          className="text-white"
        />

        <motion.p
          className="text-lg text-blue-50 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We provide comprehensive waterproofing solutions using cutting-edge technology and premium materials to ensure
          lasting protection for your property.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-900 font-poppins">{service.title}</h3>
                <p className="text-gray-600 font-roboto leading-relaxed">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

