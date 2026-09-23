import Image from "next/image"
import { CalendarClock, GraduationCap, Stethoscope, CalendarPlus } from "lucide-react"
import type { Doctor } from "@/lib/doctors"
import { Button } from "@/components/ui/button"

export function DoctorCard({ doctor, onBook }: { doctor: Doctor; onBook: (doctor: Doctor) => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      {/* Photo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
        <Image
          src={doctor.photo || "/placeholder.svg"}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
          <Stethoscope className="size-3.5" aria-hidden="true" />
          {doctor.specialization}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight text-foreground">{doctor.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">{doctor.nameBn}</p>
        <p className="mt-2 text-sm font-semibold text-primary">{doctor.title}</p>

        <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
          <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{doctor.qualifications}</span>
        </div>
        <p className="mt-1.5 text-xs font-medium text-muted-foreground">
          Experience: {doctor.experience}
        </p>

        {/* Visiting Schedule */}
        <div className="mt-4 rounded-xl border border-border bg-muted/50 p-3">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-foreground">
            <CalendarClock className="size-4 text-primary" aria-hidden="true" />
            Visiting Schedule
          </p>
          <ul className="space-y-1.5">
            {doctor.schedule.map((slot, i) => (
              <li key={i} className="flex items-center justify-between gap-2 text-sm">
                <span className="font-semibold text-foreground">{slot.days.join(", ")}</span>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {slot.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="mt-5 w-full rounded-full" size="lg" onClick={() => onBook(doctor)}>
          <CalendarPlus className="size-4" aria-hidden="true" />
          Book An Appointment
        </Button>
      </div>
    </article>
  )
}
