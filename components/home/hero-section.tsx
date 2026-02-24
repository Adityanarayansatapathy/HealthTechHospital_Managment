"use client";

import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Phone,
  Clock,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Pill,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const services = [
  {
    icon: Clock,
    label: "24/7 EMERGENCY",
    bg: "bg-[#e8722a]",
  },
  {
    icon: Stethoscope,
    label: "COMPLETE HEALTHCARE",
    bg: "bg-[#d42f5a]",
  },
  {
    icon: ScanLine,
    label: "24/7 RADIOLOGY",
    bg: "bg-[#1ba5a5]",
  },
  {
    icon: FlaskConical,
    label: "24/7 PATHOLOGY",
    bg: "bg-[#6a4fa0]",
  },
  {
    icon: Pill,
    label: "24/7 PHARMACY SERVICES",
    bg: "bg-[#9e9e9e]",
  },
];

export function HeroSection({
  onOpenAppointment,
}: {
  onOpenAppointment: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-[#1a0a3e]">
      {/* Decorative concentric arcs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-20"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="120"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="170"
            stroke="#2dd4bf"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="220"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="270"
            stroke="#e91e8c"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="290"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-14 lg:flex-row lg:items-start lg:gap-10 lg:py-16">
        {/* Left: Headline */}
        <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
          <h1
            className="text-balance text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Rare Art
            <br />
            Of Personalized
            <br />
            <span className="text-[#e91e8c]">Patient-Centered Care</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/80 lg:mx-0">
            At {siteConfig.name}, every patient is unique. We deliver tailored
            treatment plans backed by cutting-edge technology, expert
            specialists, and a commitment to excellence in healthcare.
          </p>

          {/* Mobile only CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:hidden">
            <Button
              size="lg"
              className="gap-2 bg-[#e91e8c] text-white hover:bg-[#c2185b]"
              onClick={onOpenAppointment}
            >
              <CalendarDays className="h-5 w-5" />
              Book an Appointment
            </Button>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Emergency: +91 {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Doctor illustration area + info */}
        <div className="mt-10 flex flex-1 flex-col items-center lg:mt-0">
          {/* Doctor illustration placeholder — decorative line art */}
          <div className="relative h-64 w-full max-w-md md:h-80">
            <svg
              className="h-full w-full"
              viewBox="0 0 400 320"
              fill="none"
              aria-hidden="true"
            >
              {/* Doctor 1 outline */}
              <ellipse
                cx="180"
                cy="90"
                rx="30"
                ry="35"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M160 125 C150 140, 130 200, 135 280"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M200 125 C210 140, 230 200, 225 280"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="180" cy="70" r="5" fill="#fbbf24" />
              <path
                d="M155 55 C160 35, 200 35, 205 55"
                stroke="#fbbf24"
                strokeWidth="2"
                fill="none"
              />
              {/* Stethoscope */}
              <path
                d="M175 125 C170 145, 165 155, 175 165 C185 175, 180 190, 170 195"
                stroke="#fbbf24"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="170"
                cy="200"
                r="5"
                stroke="#fbbf24"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Doctor 2 outline */}
              <ellipse
                cx="280"
                cy="100"
                rx="28"
                ry="32"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M260 132 C250 150, 240 210, 245 280"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M300 132 C310 150, 320 210, 315 280"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M255 68 C260 50, 300 50, 305 68"
                stroke="#34d399"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="280" cy="80" r="4" fill="#34d399" />
              {/* Mask */}
              <path
                d="M268 108 Q280 118 292 108"
                stroke="#34d399"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Sub label */}
          <p
            className="mt-2 text-center text-sm font-bold uppercase tracking-widest text-white/80 md:text-base"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Advanced Super Speciality Hospital
          </p>

          {/* Service badges row */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {services.map((svc) => (
              <div
                key={svc.label}
                className={`flex flex-col items-center gap-1.5 rounded-lg ${svc.bg} px-3 py-2.5 text-white shadow-lg`}
              >
                <svc.icon className="h-5 w-5" />
                <span className="text-center text-[10px] font-bold uppercase leading-tight">
                  {svc.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side buttons (desktop only) — fixed right */}
        <div className="absolute right-4 top-1/3 hidden flex-col gap-3 lg:flex">
          <a href={`tel:${siteConfig.phone}`}>
            <Button className="flex h-auto flex-col gap-0.5 rounded-full bg-[#e91e8c] px-5 py-3 text-white shadow-lg hover:bg-[#c2185b]">
              <span className="text-xs font-bold">Emergency Number</span>
              <span className="text-sm font-semibold">
                +91 {siteConfig.phone}
              </span>
            </Button>
          </a>
          <Button
            className="rounded-full bg-[#e91e8c] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#c2185b]"
            onClick={onOpenAppointment}
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
