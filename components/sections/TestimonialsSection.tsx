"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Homeowner",
    content:
      "Balaji Construction transformed our house into a dream home. Their attention to detail and professionalism were outstanding.",
  },
  {
    name: "Jane Smith",
    role: "Business Owner",
    content:
      "We hired Balaji for our office renovation, and they delivered beyond our expectations. The project was completed on time and within budget.",
  },
  {
    name: "Mike Johnson",
    role: "Property Developer",
    content:
      "I've worked with many construction companies, but Balaji stands out for their quality and reliability. They're my go-to for all projects now.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from those who have experienced our service firsthand"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

