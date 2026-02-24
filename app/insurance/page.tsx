import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Phone,
  HelpCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance & TPA | " + "HealthTech Hospital",
  description:
    "We accept all major insurance providers and TPAs. Cashless treatment facility available.",
}

const insurancePartners = [
  "Star Health Insurance",
  "ICICI Lombard",
  "Bajaj Allianz",
  "HDFC Ergo",
  "New India Assurance",
  "National Insurance",
  "United India Insurance",
  "Oriental Insurance",
  "Religare Health Insurance",
  "Max Bupa Health Insurance",
  "Aditya Birla Health Insurance",
  "Care Health Insurance",
  "Niva Bupa",
  "Tata AIG",
  "SBI General Insurance",
  "Cholamandalam MS",
  "Iffco Tokio",
  "Royal Sundaram",
  "ManipalCigna",
  "Magma HDI",
]

const tpaPartners = [
  "Medi Assist",
  "Paramount Health Services",
  "MD India",
  "Raksha TPA",
  "Heritage Health TPA",
  "Vidal Health TPA",
  "Family Health Plan TPA",
  "FHPL",
  "Medsave Health TPA",
  "Good Health TPA",
  "Alankit Healthcare TPA",
  "United Healthcare TPA",
]

const steps = [
  {
    icon: FileText,
    title: "Carry Your Insurance Card",
    description:
      "Bring your valid health insurance card and a government-issued photo ID at the time of admission.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Authorization",
    description:
      "Our insurance desk will coordinate with your insurer/TPA for pre-authorization before treatment begins.",
  },
  {
    icon: CheckCircle2,
    title: "Cashless Settlement",
    description:
      "Once approved, you can avail cashless treatment. Only non-covered expenses need to be settled directly.",
  },
  {
    icon: HelpCircle,
    title: "Need Help?",
    description:
      "Our dedicated insurance helpdesk is available to assist you with documentation, queries, and claims.",
  },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-[#1a0a3e] px-4 py-16 text-center text-white md:py-20">
        <ShieldCheck className="mx-auto mb-4 h-14 w-14 text-[#e91e8c]" />
        <h1
          className="text-balance text-3xl font-extrabold md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Insurance & TPA Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          We accept all major insurance providers and Third-Party Administrators.
          Enjoy cashless treatment at HealthTech Hospital.
        </p>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center text-2xl font-bold text-[#1a0a3e] md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How Cashless Insurance Works
          </h2>
          <p className="mx-auto mb-12 mt-3 max-w-xl text-center text-muted-foreground">
            Getting cashless treatment at our hospital is simple. Follow these
            steps for a hassle-free experience.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Card
                key={step.title}
                className="border-l-4 border-l-[#1a0a3e] bg-card"
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a0a3e]/10">
                    <step.icon className="h-7 w-7 text-[#1a0a3e]" />
                  </div>
                  <span className="mb-1 text-xs font-bold text-[#e91e8c]">
                    Step {i + 1}
                  </span>
                  <h3
                    className="mb-2 text-base font-bold text-[#1a0a3e]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="bg-[#f0f4ff] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center text-2xl font-bold text-[#1a0a3e] md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Insurance Partners
          </h2>
          <p className="mx-auto mb-10 mt-3 max-w-xl text-center text-muted-foreground">
            We are empaneled with all major health insurance companies for
            cashless hospitalization.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {insurancePartners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-lg border border-[#1a0a3e]/10 bg-white px-4 py-4 text-center text-sm font-semibold text-[#1a0a3e] shadow-sm transition-shadow hover:shadow-md"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TPA Partners */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center text-2xl font-bold text-[#1a0a3e] md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            TPA Partners
          </h2>
          <p className="mx-auto mb-10 mt-3 max-w-xl text-center text-muted-foreground">
            We work with leading Third-Party Administrators for smooth claim
            processing.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {tpaPartners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-lg border border-[#e91e8c]/15 bg-[#e91e8c]/5 px-4 py-4 text-center text-sm font-semibold text-[#1a0a3e] transition-colors hover:bg-[#e91e8c]/10"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1a0a3e] px-4 py-14 text-center text-white">
        <h2
          className="text-xl font-bold md:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Have Questions About Insurance?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
          Our insurance helpdesk is available to assist you. Call us or visit the
          hospital with your insurance documents.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e91e8c] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c2185b]"
        >
          <Phone className="h-4 w-4" />
          Call Insurance Helpdesk
        </a>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
