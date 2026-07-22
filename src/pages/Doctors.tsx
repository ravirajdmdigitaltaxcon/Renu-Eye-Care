



import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { DoctorCard } from '../components/cards/DoctorCard';
import { DOCTORS } from '../data/site';

export function Doctors() {
  return (
    <>
      <PageHero
        title="Our Doctors"
        subtitle="Meet the super-specialists trusted by over 100,000 patients."
        crumb="Doctors" />
      
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((d, i) =>
          <DoctorCard key={d.slug} doctor={d} index={i} />
          )}
        </div>
      </section>
    </>);

}