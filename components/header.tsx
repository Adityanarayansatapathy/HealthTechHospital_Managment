"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, CalendarDays, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { siteConfig, navLinks } from "@/lib/site-config"

const locations = [
  "Keonjhar Town",
  // "Barbil",
  // "Joda",
  "Champua",
  "Anandapur",
]

export function Header({
  onOpenAppointment,
}: {
  onOpenAppointment?: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top bar ─ dark navy with pink badge + locations ── */}
      <div className="bg-[#1a0a3e]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-1 px-4 py-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#e91e8c] to-[#c2185b] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            Advanced Super Specialty Hospital
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/90">
            {locations.map((loc) => (
              <span key={loc} className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#e91e8c]" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav bar ─ white with thick navy bottom border ── */}
      <div className="border-b-[3px] border-[#1a0a3e] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-0">
          {/* Logo block */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 py-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#1a0a3e]">
              <span className="text-lg font-extrabold text-[#1a0a3e]" style={{ fontFamily: "var(--font-heading)" }}>
                H+
              </span>
            </div>
            <div className="hidden sm:block">
              <p
                className="text-lg font-extrabold uppercase leading-tight tracking-tight text-[#1a0a3e]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {siteConfig.name}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1a0a3e]/60">
                Advanced Super Speciality Hospital
              </p>
            </div>
          </Link>

          {/* Desktop navigation links */}
          <nav className="hidden flex-1 items-center justify-between xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-2 py-5 text-sm font-bold text-[#1a0a3e] transition-colors hover:text-[#e91e8c]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-md bg-[#1a0a3e] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#2d1566]"
            >
              <ShieldCheck className="h-4 w-4" />
              Admin
            </Link>
          </nav>

          {/* Right-side actions (desktop) */}
          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            {/* <Button
              size="sm"
              className="hidden gap-1.5 bg-[#e91e8c] text-white hover:bg-[#c2185b] md:flex"
              onClick={onOpenAppointment}
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Button> */}
            {/* <a href={`tel:${siteConfig.phone}`} className="hidden md:block">
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 border-[#1a0a3e]/20 text-[#1a0a3e] hover:bg-[#1a0a3e]/5"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </a> */}

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="h-5 w-5 text-[#1a0a3e]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main site navigation links and actions
                </SheetDescription>
                {/* Mobile header */}
                <div className="flex items-center justify-between border-b border-[#1a0a3e]/10 bg-[#1a0a3e] p-4">
                  <span
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {siteConfig.name}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {/* Mobile nav links */}
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[#1a0a3e]/5 px-2 py-3.5 text-sm font-bold text-[#1a0a3e] transition-colors hover:text-[#e91e8c]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/admin/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 border-b border-[#1a0a3e]/5 px-2 py-3.5 text-sm font-bold text-[#1a0a3e] transition-colors hover:text-[#e91e8c]"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Admin Panel
                  </Link>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button
                      className="w-full bg-[#e91e8c] text-white hover:bg-[#c2185b]"
                      onClick={() => {
                        setOpen(false)
                        onOpenAppointment?.()
                      }}
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                    <a href={`tel:${siteConfig.phone}`}>
                      <Button
                        variant="outline"
                        className="w-full border-[#1a0a3e]/20 text-[#1a0a3e]"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
