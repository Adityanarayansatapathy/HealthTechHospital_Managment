"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginForm = z.infer<typeof loginSchema>

export default function AdminLoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginForm) => {
    setLoading(true)
    // Check localStorage for registered admin
    const admins = JSON.parse(localStorage.getItem("admins") || "[]")
    const admin = admins.find(
      (a: { email: string; password: string }) =>
        a.email === data.email && a.password === data.password
    )

    setTimeout(() => {
      if (admin) {
        localStorage.setItem("adminLoggedIn", "true")
        localStorage.setItem("adminName", admin.name)
        toast.success("Login successful!")
        router.push("/admin/dashboard")
      } else {
        toast.error("Invalid credentials. Please try again.")
      }
      setLoading(false)
    }, 800)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-foreground p-4">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Glassmorphism card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-card/10 bg-card/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1
            className="mt-4 text-2xl font-bold text-card"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-card/60">
            Sign in to manage your hospital dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <Label className="text-card/80">Email</Label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-card/40" />
              <Input
                type="email"
                placeholder="admin@healthtech.in"
                {...register("email")}
                className="border-card/20 bg-card/10 pl-10 text-card placeholder:text-card/30 focus:border-primary"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label className="text-card/80">Password</Label>
            <div className="relative mt-1.5">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-card/40" />
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="border-card/20 bg-card/10 pl-10 text-card placeholder:text-card/30 focus:border-primary"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            {loading ? "Signing in..." : "Login"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-card/60">
          {"Don't have an account? "}
          <Link
            href="/admin/register"
            className="font-semibold text-primary hover:underline"
          >
            Register
          </Link>
        </p>

        <Link
          href="/"
          className="mt-4 block text-center text-xs text-card/40 hover:text-card/60"
        >
          Back to Website
        </Link>
      </div>
    </div>
  )
}
