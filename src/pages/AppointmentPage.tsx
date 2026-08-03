import { CalendarHeartIcon } from "lucide-react";
import { AppointmentForm } from "../components/appointment/AppointmentForm";

export default function AppointmentPage() {
  return (
    <section className="min-h-screen bg-brand-section py-16 lg:py-24">
      {/* max-w-3xl changed to max-w-6xl for wider layout */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-glass sm:p-10 lg:p-14">
          
          {/* Premium Header Section */}
          <div className="mb-10 flex items-center gap-4 border-b border-slate-100 pb-8">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <CalendarHeartIcon className="h-7 w-7" />
            </span>

            <div>
              <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
                Book an Appointment
              </h1>
              <p className="mt-1 text-base text-slate-500">
                Fill in the form below and our team will contact you shortly.
              </p>
            </div>
          </div>

          {/* The Form Component */}
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}