




import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2Icon, PhoneIcon, ActivityIcon, StethoscopeIcon, ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FAQ } from '../components/ui/FAQ';
import { Button } from '../components/ui/Button';
import { DoctorCard } from '../components/cards/DoctorCard';
import { useAppointment } from '../context/AppointmentContext';
import { SERVICES, DOCTORS, FAQS, CLINIC } from '../data/site';
import { IMAGES } from '../data/images';

export function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const { openModal } = useAppointment();
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} crumb={service.title} />

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={IMAGES.IMG_SERVICE} alt={service.title} loading="lazy" decoding="async" className="w-full rounded-img object-cover shadow-glass" />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark">Overview</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="rounded-card bg-brand-section p-6">
                <ActivityIcon className="h-7 w-7 text-brand-primary" />
                <h3 className="mt-3 font-display text-lg font-bold text-brand-dark">Symptoms</h3>
                <ul className="mt-3 space-y-2">
                  {service.symptoms.map((s) =>
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> {s}
                    </li>
                  )}
                </ul>
              </div>
              <div className="rounded-card bg-white p-6 shadow-glass">
                <StethoscopeIcon className="h-7 w-7 text-brand-primary" />
                <h3 className="mt-3 font-display text-lg font-bold text-brand-dark">Treatment & Technology</h3>
                <ul className="mt-3 space-y-2">
                  {service.treatment.map((t) =>
                  <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> {t}
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark">Frequently asked</h2>
              <div className="mt-6">
                <FAQ items={FAQS.slice(0, 4)} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-card bg-brand-primary p-6 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-btn bg-white/15">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">Book {service.title}</h3>
              <p className="mt-2 text-sm text-white/80">Speak to a specialist and plan your treatment.</p>
              <Button
                className="mt-4 w-full bg-white text-brand-primary hover:bg-brand-section"
                magnetic={false}
                onClick={() => openModal({ department: service.title })}>
                
                Book Appointment
              </Button>
            </div>
            <div className="rounded-card border border-slate-100 bg-white p-6 shadow-glass">
              <h3 className="font-display font-bold text-brand-dark">Need help?</h3>
              <a href={`tel:${CLINIC.phone}`} className="mt-3 flex items-center gap-2 font-semibold text-brand-primary">
                <PhoneIcon className="h-5 w-5" /> {CLINIC.phone}
              </a>
              <p className="mt-2 text-xs text-slate-500">{CLINIC.hours}</p>
            </div>
            <div className="rounded-card border border-slate-100 bg-white p-6 shadow-glass">
              <h3 className="font-display font-bold text-brand-dark">Other services</h3>
              <ul className="mt-3 space-y-2">
                {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) =>
                <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-primary">
                      <ArrowRightIcon className="h-3.5 w-3.5" /> {s.title}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-section/50 py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle eyebrow="Specialists" title="Doctors for this service" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((d, i) =>
            <DoctorCard key={d.slug} doctor={d} index={i} />
            )}
          </div>
        </div>
      </section>
    </>);

}