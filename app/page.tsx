import { HeroSection } from "@/components/sections/HeroSection"
import { BuildingRepairingSection } from "@/components/sections/BuildingRepairingSection"
import { WaterproofingSection } from "@/components/sections/WaterproofingSection"
import { GradingWorksSection } from "@/components/sections/GradingWorksSection"
import { BuildingPilingSection } from "@/components/sections/BuildingPilingSection"
import { PlumbingSection } from "@/components/sections/PlumbingSection"
import { InteriorDesignSection } from "@/components/sections/InteriorDesignSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <BuildingRepairingSection />
      <WaterproofingSection />
      <GradingWorksSection />
      <BuildingPilingSection />
      <PlumbingSection />
      <InteriorDesignSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

