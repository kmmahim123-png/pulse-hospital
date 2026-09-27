import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ReportSection } from "@/components/report-section"
import { DoctorsSection } from "@/components/doctors-section"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Pulse Specialised Hospital - Online Doctor Appointment & Booking",
  description: "Book appointments with expert doctors at Pulse Specialised Hospital easily online without OTP. View schedules, specializations, and patient care services.",
  keywords: ["Pulse Specialised Hospital", "online doctor appointment", "hospital booking Dhaka", "doctor schedule"],
}

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* হোমপেজের মূল হেডার বা হিরো সেকশনে এসইও অপ্টিমাইজড h1 এবং h2 ট্যাগ ব্যবহার করা হয়েছে */}
        <HeroSection />
        <ReportSection />
        <DoctorsSection />
      </main>
      <SiteFooter />
    </div>
  )
}