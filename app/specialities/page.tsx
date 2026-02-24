"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import {
  specialityCards,
  specialityCategories,
} from "@/lib/site-config"
import {
  Heart,
  Brain,
  BrainCircuit,
  Bone,
  Stethoscope,
  Baby,
  Ambulance,
  Wind,
  Droplets,
  Droplet,
  Smile,
  Syringe,
  Dna,
  ScanLine,
  FlaskConical,
  HeartPulse,
  Bug,
  Activity,
  Spline,
  HeartHandshake,
  ShieldAlert,
  Monitor,
  Pill,
  Dumbbell,
  Apple,
  Sparkles,
  ClipboardPlus,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Brain,
  BrainCircuit,
  Bone,
  Stethoscope,
  Baby,
  Ambulance,
  Wind,
  Droplets,
  Droplet,
  Smile,
  Syringe,
  Dna,
  ScanLine,
  FlaskConical,
  HeartPulse,
  Bug,
  Activity,
  Spline,
  HeartHandshake,
  ShieldAlert,
  Monitor,
  Pill,
  Dumbbell,
  Apple,
  Sparkles,
  ClipboardPlus,
}

export default function SpecialitiesPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("core")

  const filtered = specialityCards.filter((c) => c.category === activeTab)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Departments
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our{" "}
              <span className="text-primary">Specialities</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Comprehensive medical care spanning over 40 specialities with
              expert doctors and state-of-the-art facilities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {specialityCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground shadow-sm hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => {
              const Icon = iconMap[s.icon] || Stethoscope
              return (
                <Link
                  key={s.slug}
                  href={`/specialities/${s.slug}`}
                  className="group flex flex-col rounded-xl border border-transparent bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: "var(--primary)",
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mt-4 text-lg font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn More{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
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
