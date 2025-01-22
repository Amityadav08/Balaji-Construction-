"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import { MapPin, Phone, Mail } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeader title="Get in Touch" subtitle="We're here to answer your questions and discuss your project" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-poppins">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <p className="font-roboto">123 Construction St, City, State 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <p className="font-roboto">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <p className="font-roboto">info@balajiconstruction.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#075E54] text-white rounded-full shadow-lg font-poppins font-bold text-lg transition-all duration-300 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#075E54]"
              style={{ width: "300px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <WhatsappLogo size={24} weight="fill" className="mr-2" />
              Chat with Us on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

