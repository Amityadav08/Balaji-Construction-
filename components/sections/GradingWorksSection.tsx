"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Site Analysis",
    description: "Comprehensive evaluation of terrain and soil conditions",
  },
  {
    title: "Land Leveling",
    description: "Precise grading for optimal surface preparation",
  },
  {
    title: "Drainage Solutions",
    description: "Expert water management system implementation",
  },
  {
    title: "Soil Stabilization",
    description: "Advanced techniques for ground reinforcement",
  },
]

export function GradingWorksSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} id="grading-works" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ESOu5W3CrKybqMU2bgQ4lHfvNAR6ZO.png"
          alt="Construction Site Grading"
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
              Expert Grading Works:
              <br />
              <span className="text-yellow-400">Preparing Perfect Foundations</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Professional land preparation services for construction excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
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
                className="bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Project Today
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
            <h3 className="text-2xl font-semibold mb-6">Why Choose Our Grading Services?</h3>
            <div className="space-y-6">
              <p className="text-gray-200">
                Our expert team ensures precise land preparation, creating the perfect foundation for your construction
                projects. We combine advanced technology with years of experience to deliver superior results.
              </p>
              <ul className="space-y-4">
                {[
                  "State-of-the-art grading equipment",
                  "Experienced operators and engineers",
                  "Comprehensive site analysis",
                  "Efficient project completion",
                  "Quality assurance at every step",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <ArrowRight className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

