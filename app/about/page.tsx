"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { siteConfig } from "@/lib/site-config"
import {
  Eye,
  Target,
  Heart,
  Award,
  Shield,
  Users,
  Building2,
  Clock,
} from "lucide-react"

const highlights = [
  { icon: Building2, label: "16 Well-Equipped OTs" },
  { icon: Shield, label: "Advanced CT/MRI" },
  { icon: Heart, label: "Cardiac Cath Lab" },
  { icon: Users, label: "500 Commissioned Beds" },
  { icon: Award, label: "State-of-the-Art Radiology" },
  { icon: Clock, label: "24/7 Emergencies & Critical Care" },
]

export default function AboutPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main>
        {/* Hero */}
        <section className="bg-primary/[0.05] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Welcome to {siteConfig.name}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
              At {siteConfig.name}, our teams tackle the toughest cases - not
              only to provide the best healthcare but to push medical innovation
              further. From treating rare diseases to conducting major surgeries,
              we have expertise in all conditions.
            </p>
          </div>
        </section>

        {/* Image + text */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/hospital-building.jpg"
                    alt="HealthTech Hospital"
                    width={600}
                    height={450}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2
                  className="text-balance text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Story
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {siteConfig.name} provides the full spectrum of clinical
                  healthcare for patients of all ages. Our world-class services
                  include Cardiology, Neurology, Orthopedics, General Medicine
                  and much more.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To provide outstanding care every time and enhance the health
                  of the communities we serve is our mission. We educate current
                  and future generations of healthcare professionals and bring to
                  light innovations in the medical industry through research and
                  exploration.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our primary focus is on the complete care of every patient in a
                  healing and compassionate environment and a collaborative team
                  approach to ensure the best possible outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2
                className="text-balance text-3xl font-bold text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Vision, Mission & Values
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Eye,
                  title: "Vision",
                  text: "To be the best provider of healthcare services and the best environment for medical innovation in Eastern India.",
                },
                {
                  icon: Target,
                  title: "Mission",
                  text: "To care, heal, teach and discover. Providing outstanding care to enhance the health of the communities we serve.",
                },
                {
                  icon: Heart,
                  title: "Values",
                  text: "We strive to be the trusted leader in delivering quality healthcare through uncompromising service excellence.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/50 bg-background p-8 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3
                    className="mt-4 text-xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2
              className="text-center text-3xl font-bold text-primary-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Facilities
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold text-primary-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
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
