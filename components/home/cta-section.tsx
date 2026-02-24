"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CtaSection({
  onOpenAppointment,
}: {
  onOpenAppointment: () => void;
}) {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Connect With HealthTech Hospital
        </h2>
        <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
          Redefining care with personified affection, compassion, and empathy.
          Book your appointment today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 bg-card text-primary hover:bg-card/90"
            onClick={onOpenAppointment}
          >
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </Button>
          <a href={`tel:${siteConfig.phone}`}>
            <Button
              size="lg"
              variant="outline"
               className="gap-2 bg-card text-primary hover:bg-card/90"
            >
              <Phone className="h-5 w-5" />
              Call +91 {siteConfig.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
