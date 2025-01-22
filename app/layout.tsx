import "./globals.css"
import { Montserrat, Poppins, Roboto } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { cn } from "@/lib/utils"
import WhatsAppButton from "@/components/WhatsAppButton"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Shree Balaji Construction - Building Dreams, Strengthening Foundations",
  description:
    "Your trusted partner in construction and beyond. We specialize in building repairs, waterproofing, interior design, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(montserrat.variable, poppins.variable, roboto.variable, "font-sans min-h-screen bg-white")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

