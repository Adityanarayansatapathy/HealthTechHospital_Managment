"use client"

import { useState } from "react"
import Link from "next/link"
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
} from "lucide-react"
import {
  specialityCards,
  specialityCategories,
  type SpecialityCard,
} from "@/lib/site-config"

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

function CardItem({ card }: { card: SpecialityCard }) {
  const Icon = iconMap[card.icon] || Stethoscope
  return (
    <Link
      href={`/specialities/${card.slug}`}
      className="group flex flex-col items-center rounded-xl border border-transparent bg-card px-4 py-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
      style={{ borderLeftWidth: "3px", borderLeftColor: "var(--primary)" }}
    >
      <div className="flex h-14 w-14 items-center justify-center">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
      <h3
        className="mt-4 text-sm font-semibold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {card.title}
      </h3>
    </Link>
  )
}

export function SpecialitiesSection() {
  const [activeTab, setActiveTab] = useState<string>("core")

  const filtered = specialityCards.filter((c) => c.category === activeTab)

  return (
    <section className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="text-primary">Specialities</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Comprehensive healthcare services across multiple specialties.
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((card) => (
            <CardItem key={card.slug} card={card} />
          ))}
        </div>

        {/* View All link */}
        <div className="mt-10 text-center">
          <Link
            href="/specialities"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90"
          >
            View All Specialities
          </Link>
        </div>
      </div>
    </section>
  )
}
