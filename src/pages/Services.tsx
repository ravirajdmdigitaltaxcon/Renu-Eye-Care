



import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Button } from '../components/ui/Button';
import { useAppointment } from '../context/AppointmentContext';
import { SERVICES } from '../data/site';

export function Services() {
  const { openModal } = useAppointment();
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Ten super-specialty departments, one standard of care — the very best."
        crumb="Services" />
      
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) =>
          <ServiceCard key={s.slug} service={s} index={i} />
          )}
        </div>

        <div className="mt-16 overflow-hidden rounded-img bg-brand-primary px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Not sure which service you need?</h2>
          <p className="mt-3 text-white/80">Book a consultation and our specialists will guide you.</p>
          <Button size="lg" className="mt-6 bg-white text-black" onClick={() => openModal()}>
            Get an Appointment
          </Button>
        </div>
      </section>
    </>);

}