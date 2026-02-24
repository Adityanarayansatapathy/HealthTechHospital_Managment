"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  User,
  HelpCircle,
} from "lucide-react"

interface Speciality {
  slug: string
  title: string
  icon: string
  description: string
  treatments: string[]
  doctors: { name: string; designation: string; qualification: string }[]
  symptoms: string[]
  faqs: { q: string; a: string }[]
}

export function SpecialityPageClient({
  speciality,
}: {
  speciality: Speciality
}) {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main>
        {/* Hero */}
        <section className="bg-primary/[0.05] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1
              className="text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {speciality.title}
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {speciality.description}
            </p>
            <Button
              className="mt-6 gap-2 bg-primary text-primary-foreground"
              onClick={() => setAppointmentOpen(true)}
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-1 bg-muted/50 p-1">
                {[
                  { value: "overview", label: "Overview", icon: Stethoscope },
                  { value: "symptoms", label: "Symptoms", icon: AlertCircle },
                  { value: "treatments", label: "Treatments", icon: CheckCircle },
                  { value: "doctors", label: "Our Doctors", icon: User },
                  { value: "faqs", label: "FAQs", icon: HelpCircle },
                ].map(({ value, label, icon: Icon }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview">
                <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Overview
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {speciality.description}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Our team of highly skilled specialists utilizes the latest
                    technology and evidence-based practices to provide
                    comprehensive care. From accurate diagnosis to effective
                    treatment and rehabilitation, we are committed to the best
                    possible outcomes for every patient.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {speciality.treatments.slice(0, 4).map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="symptoms">
                <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Symptoms That Need Consultation
                  </h2>
                  <div className="mt-6 flex flex-col gap-3">
                    {speciality.symptoms.map((s) => (
                      <div
                        key={s}
                        className="flex items-start gap-3 rounded-xl border border-border/50 bg-background p-4"
                      >
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                        <span className="text-foreground">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="treatments">
                <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Treatments & Procedures
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {speciality.treatments.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-4 transition-shadow hover:shadow-sm"
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                        <span className="font-medium text-foreground">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="doctors">
                <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Our Expert Team
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {speciality.doctors.map((d) => (
                      <div
                        key={d.name}
                        className="flex flex-col items-center rounded-2xl border border-border/50 bg-background p-6 text-center"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <User className="h-10 w-10" />
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
                        <Button
                          className="mt-4 bg-primary text-primary-foreground"
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
              </TabsContent>

              <TabsContent value="faqs">
                <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="mt-6">
                    {speciality.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left font-semibold text-foreground">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
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
