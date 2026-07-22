







import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, AmbulanceIcon, MessageCircleIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import { SERVICES, CLINIC } from '../data/site';

const CONTACTS = [
{ icon: MapPinIcon, label: 'Visit Us', value: CLINIC.address },
{ icon: PhoneIcon, label: 'Call Us', value: CLINIC.phone },
{ icon: MailIcon, label: 'Email Us', value: CLINIC.email },
{ icon: ClockIcon, label: 'Working Hours', value: CLINIC.hours }];


export function Contact() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out, drop by, or book online — whatever suits you." crumb="Contact" />

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="h-full rounded-card border border-slate-100 bg-white p-6 shadow-glass">
                  <span className="grid h-12 w-12 place-items-center rounded-btn bg-brand-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-brand-dark">{c.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{c.value}</p>
                </div>
              </Reveal>);

          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Book Online" title="Request an appointment" />
            <div className="mt-6 rounded-card bg-white p-6 shadow-glass sm:p-8">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-card shadow-glass">
              <iframe
                title="Clinic location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.80%2C18.92%2C72.86%2C18.96&layer=mapnik"
                className="h-72 w-full"
                loading="lazy" />
              
            </div>

            <div className="rounded-card bg-brand-dark p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-btn bg-red-500">
                  <AmbulanceIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold">24/7 Eye Emergency</h3>
                  <a href={`tel:${CLINIC.emergency}`} className="text-brand-secondary">{CLINIC.emergency}</a>
                </div>
              </div>
            </div>

            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-card bg-brand-secondary py-4 font-btn font-semibold text-white shadow-float">
              
              <MessageCircleIcon className="h-5 w-5" /> Chat with us on WhatsApp
            </a>

            <div className="rounded-card bg-brand-section p-6">
              <h3 className="font-display font-bold text-brand-dark">Departments</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) =>
                <span key={s.slug} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-primary">
                    {s.title}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

}