"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Deep Foundation Expertise",
    description: "Specialized in various piling techniques including driven piles, bored piles, and CFA piles",
  },
  {
    title: "Advanced Equipment",
    description: "State-of-the-art piling machinery and tools for precise execution",
  },
  {
    title: "Safety Standards",
    description: "Strict adherence to safety protocols and industry regulations",
  },
  {
    title: "Expert Team",
    description: "Highly skilled professionals with years of piling experience",
  },
]

export function BuildingPilingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} id="building-piling" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wzwY13hci4O1HhVbCVIipJyricEm3f.png"
          alt="Building Piling Works"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </motion.div>

      {/* Content Container */}
      <motion.div className="container relative z-10 mx-auto px-4" style={{ opacity: contentOpacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Building Piling Works:
              <br />
              <span className="text-blue-400">Strong Foundations for Stability</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">Expert piling solutions for secure and lasting foundations</p>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ready to Start? Contact Our Experts
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Piling Process</h3>
            <div className="space-y-6">
              <p className="text-gray-200">
                Our comprehensive piling services ensure your structure stands on the strongest possible foundation. We
                utilize cutting-edge technology and proven methodologies to deliver exceptional results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Site investigation and soil analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Custom piling solution design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Advanced equipment deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Quality control and testing</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

