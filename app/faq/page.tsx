"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        q: "What are the visiting hours?",
        a: "General visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are limited to specific time slots.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book through our website, call +91 9559551955, or visit the hospital reception directly.",
      },
      {
        q: "What insurance plans do you accept?",
        a: "We accept most major insurance providers and offer cashless treatment facilities for patients with valid insurance coverage.",
      },
      {
        q: "Do you have parking facilities?",
        a: "Yes, we have ample parking space for patients and visitors with both covered and open parking options.",
      },
    ],
  },
  {
    category: "Medical",
    faqs: [
      {
        q: "What specialities does HealthTech Hospital offer?",
        a: "We offer over 20 specialities including Cardiology, Neurology, Orthopedics, General Surgery, Gynecology, Internal Medicine, Emergency Care, and more.",
      },
      {
        q: "Do you provide 24/7 emergency services?",
        a: "Yes, our Emergency & Trauma department operates around the clock with a fully equipped team.",
      },
      {
        q: "Can I get a second opinion?",
        a: "Absolutely. We encourage patients to seek second opinions. Our specialists provide honest assessments and recommendations.",
      },
      {
        q: "What diagnostic facilities are available?",
        a: "We have advanced CT/MRI, echocardiography, color Doppler, Holter monitor, cardiac cath lab, and comprehensive pathology services.",
      },
    ],
  },
  {
    category: "Billing & Insurance",
    faqs: [
      {
        q: "How can I get an estimate for treatment?",
        a: "Contact our billing department or visit the reception. Estimates are provided based on the treatment plan recommended by your doctor.",
      },
      {
        q: "Do you offer EMI or payment plans?",
        a: "Yes, we partner with several financial institutions to offer flexible payment options for patients.",
      },
      {
        q: "How do I claim insurance?",
        a: "Our insurance desk assists with all claim processes. Bring your insurance card and ID for cashless treatment processing.",
      },
    ],
  },
]

export default function FaqPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Help Center
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Find answers to common questions about our services, facilities,
              and policies.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-10">
            {faqCategories.map(({ category, faqs }) => (
              <div key={category}>
                <h2
                  className="mb-4 text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {category}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="rounded-2xl border border-border/50 bg-card"
                >
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category}-${i}`}
                      className="border-border/50 px-6"
                    >
                      <AccordionTrigger className="py-4 text-left font-semibold text-foreground hover:text-primary [&[data-state=open]]:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
