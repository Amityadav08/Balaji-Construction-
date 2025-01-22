"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "1234567890"
    const message = "Hi! I'm interested in learning more about Balaji Construction services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}

