"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { specialities } from "@/lib/site-config"
import { CalendarDays, User, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

const appointmentSchema = z.object({
  specialty: z.string().min(1, "Please select a specialty"),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  notes: z.string().optional(),
})

type AppointmentForm = z.infer<typeof appointmentSchema>

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
]

export function AppointmentModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
  })

  const doctors = specialities.find(
    (s) => s.slug === selectedSpecialty
  )?.doctors

  const onSubmit = (data: AppointmentForm) => {
    // Store in localStorage as requested
    const appointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    )
    const newAppointment = {
      ...data,
      id: Date.now().toString(),
      status: "pending",
      createdAt: new Date().toISOString(),
    }
    appointments.push(newAppointment)
    localStorage.setItem("appointments", JSON.stringify(appointments))

    toast.success("Appointment booked successfully!", {
      description: `Your appointment has been scheduled for ${data.date} at ${data.time}.`,
    })
    reset()
    setStep(1)
    setSelectedSpecialty("")
    onOpenChange(false)
  }

  const handleClose = () => {
    reset()
    setStep(1)
    setSelectedSpecialty("")
    onOpenChange(false)
  }

  const steps = [
    { num: 1, label: "Specialty", icon: CalendarDays },
    { num: 2, label: "Schedule", icon: CalendarDays },
    { num: 3, label: "Details", icon: User },
  ]

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book an Appointment
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Schedule your visit with our specialists in 3 easy steps.
          </DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <div className="mb-4 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s.num ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    s.num
                  )}
                </div>
                <span className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-2 h-0.5 w-12 sm:w-20 ${
                    step > s.num ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Step 1: Specialty & Doctor */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div>
                <Label className="text-foreground">Select Specialty</Label>
                <Select
                  value={selectedSpecialty}
                  onValueChange={(val) => {
                    setSelectedSpecialty(val)
                    setValue("specialty", val)
                    setValue("doctor", "")
                  }}
                >
                  <SelectTrigger className="mt-1.5 bg-card text-foreground">
                    <SelectValue placeholder="Choose a specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialities.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.specialty && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.specialty.message}
                  </p>
                )}
              </div>

              {doctors && doctors.length > 0 && (
                <div>
                  <Label className="text-foreground">Select Doctor</Label>
                  <Select
                    onValueChange={(val) => setValue("doctor", val)}
                  >
                    <SelectTrigger className="mt-1.5 bg-card text-foreground">
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((d) => (
                        <SelectItem key={d.name} value={d.name}>
                          {d.name} - {d.designation}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.doctor && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.doctor.message}
                    </p>
                  )}
                </div>
              )}

              <Button
                type="button"
                onClick={() => {
                  if (selectedSpecialty && watch("doctor")) {
                    setStep(2)
                  } else {
                    toast.error("Please select specialty and doctor")
                  }
                }}
                className="bg-primary text-primary-foreground"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div>
                <Label className="text-foreground">Select Date</Label>
                <Input
                  type="date"
                  {...register("date")}
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1.5 bg-card text-foreground"
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-foreground">Select Time</Label>
                <Select onValueChange={(val) => setValue("time", val)}>
                  <SelectTrigger className="mt-1.5 bg-card text-foreground">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    if (watch("date") && watch("time")) {
                      setStep(3)
                    } else {
                      toast.error("Please select date and time")
                    }
                  }}
                  className="flex-1 bg-primary text-primary-foreground"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Patient details */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <Label className="text-foreground">Full Name</Label>
                <Input
                  {...register("name")}
                  placeholder="Enter your full name"
                  className="mt-1.5 bg-card text-foreground"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-foreground">Phone Number</Label>
                <Input
                  {...register("phone")}
                  placeholder="Enter your phone number"
                  className="mt-1.5 bg-card text-foreground"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-foreground">Email</Label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="mt-1.5 bg-card text-foreground"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-foreground">Notes (Optional)</Label>
                <Input
                  {...register("notes")}
                  placeholder="Any additional notes..."
                  className="mt-1.5 bg-card text-foreground"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
