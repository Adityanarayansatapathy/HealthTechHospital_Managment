import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { Eye, Target, Heart } from "lucide-react"

export function AboutSection() {
  const cards = [
    {
      icon: Eye,
      title: "Our Vision",
      text: "To be the best provider of healthcare services and the best environment for medical innovation in Eastern India.",
    },
    {
      icon: Target,
      title: "Our Mission",
      text: "To care, heal, teach and discover. Providing outstanding care to enhance the health of the communities we serve.",
    },
    {
      icon: Heart,
      title: "Our Values",
      text: "We strive to be the trusted leader in delivering quality healthcare through uncompromising service excellence.",
    },
  ]

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image side */}
          <div className="relative flex-1">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/hospital-building.jpg"
                alt="HealthTech Hospital building"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2
              className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Welcome to {siteConfig.name}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.name} provides the full spectrum of clinical
              healthcare for patients of all ages. Our world-class services
              include Cardiology, Neurology, Orthopedics, General Medicine and
              much more. We combine clinical care, research, and education to
              advance the understanding and practice of medicine.
            </p>

            {/* Vision, Mission, Values */}
            <div className="mt-8 flex flex-col gap-4">
              {cards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-border/50 bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
