"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { specialities } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { CalendarDays, User } from "lucide-react"

export default function DoctorsPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  const allDoctors = specialities.flatMap((s) =>
    s.doctors.map((d) => ({ ...d, specialty: s.title }))
  )

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet Our Doctors
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Our team of highly qualified and experienced doctors are dedicated
              to providing the best possible care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allDoctors.map((d) => (
              <div
                key={d.name}
                className="flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {d.designation}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.qualification}
                </p>
                <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {d.specialty}
                </span>
                <Button
                  className="mt-4 w-full bg-primary text-primary-foreground"
                  size="sm"
                  onClick={() => setAppointmentOpen(true)}
                >
                  <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                  Book Appointment
                </Button>
              </div>
            ))}
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
