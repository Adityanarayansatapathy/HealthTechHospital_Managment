"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { Button } from "@/components/ui/button"
import {
  CalendarDays,
  Heart,
  Brain,
  Bone,
  Stethoscope,
  Shield,
  CheckCircle,
} from "lucide-react"

const surgeries = [
  {
    icon: Heart,
    title: "Cardiac Surgeries",
    items: [
      "Coronary Artery Bypass (CABG)",
      "Heart Valve Replacement",
      "Angioplasty & Stent Placement",
      "TAVI / TAVR Surgery",
      "Heart Transplant",
      "Open Heart Surgery",
    ],
  },
  {
    icon: Brain,
    title: "Neuro Surgeries",
    items: [
      "Brain Tumor Surgery",
      "Spinal Surgery",
      "Endoscopic Neurosurgery",
      "Deep Brain Stimulation",
      "Aneurysm Clipping",
      "Craniotomy",
    ],
  },
  {
    icon: Bone,
    title: "Orthopedic Surgeries",
    items: [
      "Total Knee Replacement",
      "Total Hip Replacement",
      "Arthroscopy",
      "Spine Surgery",
      "Ligament Reconstruction",
      "Fracture Fixation",
    ],
  },
  {
    icon: Stethoscope,
    title: "General Surgeries",
    items: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Removal",
      "Thyroid Surgery",
      "GI Surgery",
    ],
  },
  {
    icon: Shield,
    title: "Gynecological Surgeries",
    items: [
      "Cesarean Section",
      "Hysterectomy",
      "Laparoscopic Gynecological Surgery",
      "Fibroid Removal",
      "Ovarian Cyst Removal",
      "Tubal Ligation",
    ],
  },
  {
    icon: Stethoscope,
    title: "Urological Surgeries",
    items: [
      "Kidney Stone Removal",
      "Prostate Surgery",
      "Kidney Transplant",
      "Bladder Surgery",
      "Ureteroscopy",
      "TURP",
    ],
  },
]

export default function SurgeriesPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Expertise
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Surgical Procedures
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              State-of-the-art operation theatres equipped with the latest
              technology for minimally invasive and advanced surgical procedures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surgeries.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="mt-4 text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground"
              onClick={() => setAppointmentOpen(true)}
            >
              <CalendarDays className="h-5 w-5" />
              Schedule a Consultation
            </Button>
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
