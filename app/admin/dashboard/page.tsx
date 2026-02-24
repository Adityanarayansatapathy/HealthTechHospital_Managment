"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  LogOut,
  Trash2,
  Home,
  Menu,
  X,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"

interface Appointment {
  id: string
  specialty: string
  doctor: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  notes?: string
  status: string
  createdAt: string
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [adminName, setAdminName] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("appointments")

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn")
    if (!isLoggedIn) {
      router.push("/admin/login")
      return
    }
    setAdminName(localStorage.getItem("adminName") || "Admin")
    loadAppointments()
  }, [router])

  const loadAppointments = () => {
    const data = JSON.parse(localStorage.getItem("appointments") || "[]")
    setAppointments(data)
  }

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter((a) => a.id !== id)
    setAppointments(updated)
    localStorage.setItem("appointments", JSON.stringify(updated))
    toast.success("Appointment deleted")
  }

  const updateStatus = (id: string, status: string) => {
    const updated = appointments.map((a) =>
      a.id === id ? { ...a, status } : a
    )
    setAppointments(updated)
    localStorage.setItem("appointments", JSON.stringify(updated))
    toast.success(`Appointment marked as ${status}`)
  }

  const logout = () => {
    localStorage.removeItem("adminLoggedIn")
    localStorage.removeItem("adminName")
    router.push("/admin/login")
  }

  const statusColors: Record<string, string> = {
    pending:
      "bg-yellow-100 text-yellow-800 border-yellow-200",
    confirmed:
      "bg-green-100 text-green-800 border-green-200",
    cancelled:
      "bg-red-100 text-red-800 border-red-200",
  }

  const statCards = [
    {
      label: "Total Appointments",
      value: appointments.length,
      icon: CalendarDays,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Pending",
      value: appointments.filter((a) => a.status === "pending").length,
      icon: Clock,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      label: "Confirmed",
      value: appointments.filter((a) => a.status === "confirmed").length,
      icon: CheckCircle,
      color: "bg-green-100 text-green-700",
    },
    {
      label: "Cancelled",
      value: appointments.filter((a) => a.status === "cancelled").length,
      icon: XCircle,
      color: "bg-red-100 text-red-700",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-sidebar-border p-4">
          <span
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Admin Panel
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 p-4">
          <div className="flex flex-col gap-1">
            {[
              { id: "appointments", label: "Appointments", icon: CalendarDays },
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "patients", label: "Patients", icon: Users },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id)
                  setSidebarOpen(false)
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
              {adminName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-medium">{adminName}</p>
              <p className="text-xs text-sidebar-foreground/50">
                Administrator
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/" className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sidebar-foreground/70"
              >
                <Home className="mr-2 h-4 w-4" />
                Website
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-400 hover:bg-red-500/10 hover:text-red-400"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              {appointments.length} appointments
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          {/* Stats */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map(({ label, value, icon: Icon, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-4 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Appointments table */}
          <div className="rounded-2xl border border-border/50 bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border/50 p-4 lg:p-6">
              <h2
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Appointments
              </h2>
              <span className="text-sm text-muted-foreground">
                {appointments.length} total
              </span>
            </div>

            {appointments.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <CalendarDays className="mb-4 h-12 w-12 text-muted-foreground/30" />
                <p className="text-lg font-medium text-muted-foreground">
                  No appointments yet
                </p>
                <p className="mt-1 text-sm text-muted-foreground/60">
                  Appointments booked by patients will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground">{a.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {a.phone}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize text-foreground">
                          {a.specialty.replace("-", " ")}
                        </TableCell>
                        <TableCell className="text-foreground">{a.doctor}</TableCell>
                        <TableCell className="text-foreground">{a.date}</TableCell>
                        <TableCell className="text-foreground">{a.time}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`capitalize ${statusColors[a.status] || ""}`}
                          >
                            {a.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-1">
                            {a.status === "pending" && (
                              <>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 text-green-600 hover:bg-green-50 hover:text-green-700"
                                  onClick={() =>
                                    updateStatus(a.id, "confirmed")
                                  }
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                                  onClick={() =>
                                    updateStatus(a.id, "cancelled")
                                  }
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-destructive hover:bg-destructive/10"
                              onClick={() => deleteAppointment(a.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
