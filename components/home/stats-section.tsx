"use client"

import { useCounter } from "@/hooks/use-counter"
import { stats } from "@/lib/site-config"

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string
  value: number
  suffix: string
}) {
  const { count, ref } = useCounter(value, 2500)

  return (
    <div ref={ref} className="flex flex-col items-center p-6">
      <span className="text-4xl font-extrabold text-primary-foreground md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-primary-foreground/70">
        {label}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center">
          <h2
            className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            World-class Medical Facility
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-pretty text-primary-foreground/70">
            Establishing the gold standard for comprehensive healthcare with
            cutting-edge technology and expert care.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
