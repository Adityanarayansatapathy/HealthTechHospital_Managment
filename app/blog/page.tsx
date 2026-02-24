"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { Calendar, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Treatments for Osteoarthritis of the Knee",
    excerpt:
      "Explore the latest treatment options for knee osteoarthritis, from physical therapy to surgical interventions.",
    date: "Feb 15, 2026",
    category: "Orthopedics",
  },
  {
    id: 2,
    title: "Emergency Management of Foreign Body Airway",
    excerpt:
      "Learn the critical steps for managing foreign body airway obstruction in emergency situations.",
    date: "Feb 10, 2026",
    category: "Emergency",
  },
  {
    id: 3,
    title: "Signs and Symptoms of Tuberculosis",
    excerpt:
      "Understanding the early signs and symptoms of tuberculosis for timely diagnosis and treatment.",
    date: "Feb 5, 2026",
    category: "Pulmonology",
  },
  {
    id: 4,
    title: "5 Signs You Have a Lung Infection Unknowingly",
    excerpt:
      "Many lung infections go undetected. Here are five warning signs you should never ignore.",
    date: "Jan 28, 2026",
    category: "Pulmonology",
  },
  {
    id: 5,
    title: "First Aid Instructions for Poisoning",
    excerpt:
      "Quick and effective first aid measures to take when someone has been exposed to poison.",
    date: "Jan 20, 2026",
    category: "Emergency",
  },
  {
    id: 6,
    title: "When to Screen for Diabetes",
    excerpt:
      "Learn when and why diabetes screening is important, especially for those at higher risk.",
    date: "Jan 15, 2026",
    category: "Internal Medicine",
  },
  {
    id: 7,
    title: "Understanding Heart Blockages and Their Treatment",
    excerpt:
      "A comprehensive guide to understanding heart blockages, risk factors, and modern treatment options.",
    date: "Jan 10, 2026",
    category: "Cardiology",
  },
  {
    id: 8,
    title: "Importance of Regular Health Checkups",
    excerpt:
      "Regular health checkups can help detect potential health issues before they become serious problems.",
    date: "Jan 5, 2026",
    category: "General",
  },
]

export default function BlogPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Knowledge Center
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Health Articles & Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Stay informed with the latest health tips, medical insights, and
              news from our expert team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center rounded-t-2xl bg-primary/[0.05]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Tag className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read More{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
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
