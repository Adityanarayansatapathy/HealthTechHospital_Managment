import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import { siteConfig, navLinks, specialities } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">H+</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Providing world-class healthcare services with compassion,
              innovation, and excellence. Your health is our priority.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Specialities
            </h3>
            <ul className="flex flex-col gap-2.5">
              {specialities.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/specialities/${s.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex gap-3 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +91 {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex gap-3 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-background/70">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                24/7 Emergency Services
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-background/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
