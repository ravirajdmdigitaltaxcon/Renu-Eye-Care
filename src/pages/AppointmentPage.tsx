import { CalendarHeartIcon } from "lucide-react";
import { AppointmentForm } from "../components/appointment/AppointmentForm";

export default function AppointmentPage() {
  return (
    <section className="min-h-screen bg-brand-section py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-card bg-white p-8 shadow-glass">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-btn bg-brand-primary text-white">
              <CalendarHeartIcon className="h-6 w-6" />
            </span>

            <div>
              <h1 className="font-display text-3xl font-bold text-brand-dark">
                Book an Appointment
              </h1>
              <p className="text-slate-500">
                Fill in the form below and our team will contact you shortly.
              </p>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}