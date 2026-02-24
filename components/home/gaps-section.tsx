import { AlertTriangle, TrendingUp, Building2, Activity } from "lucide-react"

const gaps = [
  {
    icon: AlertTriangle,
    title: "Limited Access to Specialists",
    desc: "Many regions lack specialist doctors, forcing patients to travel long distances for advanced care.",
  },
  {
    icon: TrendingUp,
    title: "Rising Chronic Diseases",
    desc: "Heart disease, diabetes, and cancer rates are increasing, demanding better diagnostic and treatment facilities.",
  },
  {
    icon: Building2,
    title: "Infrastructure Deficit",
    desc: "Rural and semi-urban areas need modern hospitals equipped with advanced medical technology.",
  },
  {
    icon: Activity,
    title: "Emergency Care Gaps",
    desc: "Timely emergency response and trauma care remain critical challenges in underserved communities.",
  },
]

const demands = [
  { value: "70%", label: "Patients travel 100+ km for specialist care" },
  { value: "3x", label: "Increase in heart disease cases in the last decade" },
  { value: "85%", label: "People prefer hospitals with advanced technology" },
]

export function GapsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Healthcare Gaps */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Bridging the Gap
          </span>
          <h2
            className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Healthcare Gaps We Address
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gaps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Rising Demand */}
        <div className="mt-16 rounded-3xl bg-primary/5 p-8 lg:p-12">
          <div className="text-center">
            <h3
              className="text-2xl font-bold text-foreground md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Rising Demand
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-pretty text-muted-foreground">
              Healthcare needs are growing rapidly. HealthTech Hospital is built
              to meet these demands head-on.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {demands.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-extrabold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  {value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
