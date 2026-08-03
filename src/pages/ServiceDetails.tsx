import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  CheckCircle2Icon, 
  PhoneIcon, 
  ActivityIcon, 
  StethoscopeIcon, 
  ArrowRightIcon, 
  ClockIcon,
  ChevronRightIcon
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FAQ } from '../components/ui/FAQ';
import { Button } from '../components/ui/Button';
import { DoctorCard } from '../components/cards/DoctorCard';
import { useAppointment } from '../context/AppointmentContext';
import { SERVICES, DOCTORS, CLINIC } from '../data/site';

export function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const { openModal } = useAppointment();
  
  if (!service) return <Navigate to="/services" replace />;
  
  const Icon = service.icon;

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} crumb={service.title} />

      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Premium Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Overview Section */}
            <div className="mt-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Overview</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-dark">Understanding {service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>

            {/* Symptoms & Treatment Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Symptoms Card */}
              <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                  <ActivityIcon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark">Symptoms</h3>
                <ul className="mt-4 space-y-3">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> 
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Card */}
              <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 transition-colors group-hover:bg-brand-secondary/20">
                  <StethoscopeIcon className="h-6 w-6 text-brand-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark">Treatment & Technology</h3>
                <ul className="mt-4 space-y-3">
                  {service.treatment.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" /> 
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">FAQs</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
              <div className="mt-6">
                <FAQ items={service.faqs} />
              </div>
            </div>
          </div>

          {/* Premium Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-[#0a2a29] p-8 text-white shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">Book {service.title}</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Speak directly to a specialist and plan your personalized treatment today.
                  </p>
              <Button
  className="mt-4 w-full bg-[#0d3d3c] text-white border-2  hover:bg-[#08C6C4]"
  magnetic={false}
  onClick={() => openModal({ department: service.title })}
>
  Book Appointment
</Button>
                </div>
              </div>

              {/* Help & Contact */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary/10">
                    <PhoneIcon className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-dark">Need help?</h3>
                    <a href={`tel:${CLINIC.phone}`} className="text-sm font-semibold text-brand-primary hover:underline">
                      {CLINIC.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <span>{CLINIC.hours}</span>
                </div>
              </div>

              {/* Other Services */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <h3 className="font-display text-lg font-bold text-brand-dark">Other Services</h3>
                <ul className="mt-4 space-y-1">
                  {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link 
                        to={`/services/${s.slug}`} 
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-primary"
                      >
                        <span className="font-medium">{s.title}</span>
                        <ChevronRightIcon className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle eyebrow="Our Specialists" title="Doctors for this service" />
            <p className="mt-4 text-slate-500">
              Meet our experienced team of professionals dedicated to providing the best care for your needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((d, i) => (
              <DoctorCard key={d.slug} doctor={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}