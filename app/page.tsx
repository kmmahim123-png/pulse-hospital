import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ReportSection } from "@/components/report-section"
import { DoctorsSection } from "@/components/doctors-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ReportSection />
        <DoctorsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
