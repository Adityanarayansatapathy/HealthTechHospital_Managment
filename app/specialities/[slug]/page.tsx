import { notFound } from "next/navigation"
import { specialities } from "@/lib/site-config"
import { SpecialityPageClient } from "./speciality-page-client"

export function generateStaticParams() {
  return specialities.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const speciality = specialities.find((s) => s.slug === slug)
  if (!speciality) return {}
  return {
    title: `${speciality.title} | HealthTech Hospital`,
    description: speciality.description,
  }
}

export default async function SpecialityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const speciality = specialities.find((s) => s.slug === slug)
  if (!speciality) notFound()

  return <SpecialityPageClient speciality={speciality} />
}
