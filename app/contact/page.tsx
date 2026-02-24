"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AppointmentModal } from "@/components/appointment-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  // const onSubmit = (data: ContactForm) => {
  //   toast.success("Message sent successfully! We will get back to you soon.")
  //   reset()
  // }
  const onSubmit = async (data: ContactForm) => {
  try {
    await emailjs.send(
      // "YOUR_SERVICE_ID",
      "service_n9rc8qi",
      // "YOUR_TEMPLATE_ID",
      "template_nw8d8me",
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
      // "YOUR_PUBLIC_KEY"
      "ZuAqTDTlfKmXPav11"
    )

    toast.success("Message sent successfully!")
    reset()
  } catch (error) {
    toast.error("Failed to send message")
  }
}

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      text: siteConfig.address,
    },
    {
      icon: Phone,
      title: "Phone",
      text: `+91 ${siteConfig.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      text: siteConfig.email,
    },
    {
      icon: Clock,
      title: "Hours",
      text: "24/7 Emergency Services",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAppointment={() => setAppointmentOpen(true)} />

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h1
              className="mt-2 text-balance text-4xl font-extrabold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              We are here to help. Reach out to us for appointments,
              inquiries, or any assistance you need.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8 lg:flex-row">
            {/* Contact info cards */}
            <div className="flex flex-col gap-4 lg:w-1/3">
              {contactInfo.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6 shadow-sm lg:p-8">
              <h2
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send us a Message
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Full Name</Label>
                    <Input
                      {...register("name")}
                      placeholder="Your name"
                      className="mt-1.5 bg-background text-foreground"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-foreground">Email</Label>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="Your email"
                      className="mt-1.5 bg-background text-foreground"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Phone</Label>
                    <Input
                      {...register("phone")}
                      placeholder="Your phone"
                      className="mt-1.5 bg-background text-foreground"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-foreground">Subject</Label>
                    <Input
                      {...register("subject")}
                      placeholder="Subject"
                      className="mt-1.5 bg-background text-foreground"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label className="text-foreground">Message</Label>
                  <Textarea
                    {...register("message")}
                    placeholder="Your message..."
                    rows={5}
                    className="mt-1.5 bg-background text-foreground"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="gap-2 bg-primary text-primary-foreground"
                  size="lg"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
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
