"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import {
  FileText,
  CreditCard,
  Clock,
  Shield,
  MapPin,
  Phone,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Admission Process",
    items: [
      "Bring a valid photo ID and insurance documents",
      "Complete registration at the admission desk",
      "Pre-admission assessment by nursing staff",
      "Room allocation based on availability and preference",
      "Consent forms and treatment plan discussion",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    items: [
      "Cashless treatment for insured patients",
      "Multiple payment methods accepted (Cash, Card, UPI)",
      "EMI options available for major procedures",
      "Transparent billing with detailed breakdowns",
      "Insurance claim assistance at our help desk",
    ],
  },
  {
    icon: Clock,
    title: "Visiting Hours",
    items: [
      "General Wards: 10:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
      "ICU: 11:00 AM - 11:30 AM, 5:00 PM - 5:30 PM",
      "Maternity Ward: 10:00 AM - 8:00 PM",
      "One attendant allowed per patient in general wards",
      "Two visitors at a time in ICU (limited duration)",
    ],
  },
  {
    icon: Shield,
    title: "Patient Rights",
    items: [
      "Right to receive respectful and dignified care",
      "Right to complete information about diagnosis and treatment",
      "Right to informed consent before procedures",
      "Right to privacy and confidentiality of health records",
      "Right to seek a second opinion",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Guidelines",
    items: [
      "24/7 emergency department with trained trauma team",
      "Call our emergency line for ambulance services",
      "Triage system ensures critical patients are seen first",
      "Advanced trauma care and resuscitation facilities",
      "Quick access to all diagnostic services round the clock",
    ],
  },
  {
    icon: MapPin,
    title: "Discharge Process",
    items: [
      "Discharge summary provided with treatment details",
      "Follow-up appointment scheduling before discharge",
      "Medication instructions and prescriptions",
      "Post-discharge care guidelines and diet plans",
      "24/7 helpline for post-discharge queries",
    ],
  },
]

export default function PatientInfoPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              For Patients
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Patient Information
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Everything you need to know about your visit, admission, billing,
              and discharge process.
            </p>
          </div>

          {/* Emergency callout */}
          <div className="mt-10 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-destructive" />
              <span className="text-lg font-bold text-destructive">
                Emergency? Call +91 9559551955
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Our emergency department is open 24/7 with fully equipped trauma care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
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
                <ul className="mt-4 flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
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
