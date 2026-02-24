"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { SpecialitiesSection } from "@/components/home/specialities-section"
import { StatsSection } from "@/components/home/stats-section"
import { GapsSection } from "@/components/home/gaps-section"
import { WhySection } from "@/components/home/why-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main>
        <HeroSection onOpenAppointment={() => setAppointmentOpen(true)} />
        <AboutSection />
        <GapsSection />
        <SpecialitiesSection />
        <StatsSection />
        <WhySection />
        <FaqSection />
        <CtaSection onOpenAppointment={() => setAppointmentOpen(true)} />
      </main>

      <Footer />
      <FloatingButtons />
      <AppointmentModal
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
      />
    </div>
  )
}
