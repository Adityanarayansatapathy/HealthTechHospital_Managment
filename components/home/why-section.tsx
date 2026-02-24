import {
  Globe,
  Sparkles,
  Users,
  HeartPulse,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Standard Services",
    desc: "World-class care with services spanning Cardiology, Neurology, Orthopedics, Oncology, Gastroenterology, and more.",
  },
  {
    icon: Sparkles,
    title: "Clean Room Standards",
    desc: "Healthy environment with efficient cleaning systems complying with international clean room ASTM F51/F24 standards.",
  },
  {
    icon: Users,
    title: "Multi-Disciplinary Approach",
    desc: "Clinical-based, patient-focused approach with international standards of care and compassion extended to every patient.",
  },
  {
    icon: HeartPulse,
    title: "Patient First Philosophy",
    desc: "World-class treatment offered with a patient-first approach for a true humane healthcare experience.",
  },
  {
    icon: Zap,
    title: "Instant Doctor Attention",
    desc: "Patient-friendly ambience offering instant doctor-staff attention with easy appointment scheduling.",
  },
]

export function WhySection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2
            className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why HealthTech Hospital
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Every day at HealthTech Hospital, physicians, nurses and staff go
            beyond the science of exceptional medicine to bring patients
            breakthroughs in the art of caring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group rounded-2xl border border-border/50 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                i === features.length - 1 && features.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
