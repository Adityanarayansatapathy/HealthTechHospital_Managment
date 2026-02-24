"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What specialities does HealthTech Hospital offer?",
    a: "We offer over 20 specialities including Cardiology, Neurology, Neurosurgery, Orthopedics, General Surgery, Gynecology, Internal Medicine, Emergency & Trauma Care, Pulmonology, Nephrology, and more.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment through our website by clicking the 'Book Appointment' button, calling our helpline at +91 9559551955, or visiting the hospital directly.",
  },
  {
    q: "Does the hospital provide 24/7 emergency services?",
    a: "Yes, our Emergency & Trauma Care department operates 24 hours a day, 7 days a week. Our emergency team is always ready to handle critical cases with state-of-the-art facilities.",
  },
  {
    q: "What insurance plans are accepted?",
    a: "HealthTech Hospital is empanelled with most major insurance providers. We also offer cashless treatment facilities for patients with valid insurance coverage.",
  },
  {
    q: "Can I get a second opinion from your doctors?",
    a: "Absolutely. We encourage patients to seek second opinions. Our specialists are available for consultations and will provide honest assessments and recommendations.",
  },
  {
    q: "What makes HealthTech Hospital different from other hospitals?",
    a: "Our multi-disciplinary approach, patient-first philosophy, global standard services, instant doctor-staff attention, and state-of-the-art medical technology set us apart.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2
            className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
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
    </section>
  )
}
