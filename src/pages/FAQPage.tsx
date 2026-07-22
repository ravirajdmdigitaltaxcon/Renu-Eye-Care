




import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { FAQ } from '../components/ui/FAQ';
import { Button } from '../components/ui/Button';
import { useAppointment } from '../context/AppointmentContext';
import { FAQS } from '../data/site';

const MORE_FAQS = [
{ q: 'How long does recovery take after LASIK?', a: 'Most patients notice clearer vision within 24 hours and return to routine activities the next day.' },
{ q: 'Can children undergo eye surgery?', a: 'Yes, our paediatric specialists perform age-appropriate procedures in a child-friendly, safe environment.' },
{ q: 'Do you offer follow-up care?', a: 'Absolutely. Every procedure includes a structured follow-up schedule to ensure the best outcome.' }];


export function FAQPage() {
  const { openModal } = useAppointment();
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before your visit." crumb="FAQ" />
      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <FAQ items={[...FAQS, ...MORE_FAQS]} />
        <div className="mx-auto mt-12 max-w-2xl rounded-card bg-brand-section p-8 text-center">
          <h2 className="font-display text-xl font-bold text-brand-dark">Still have a question?</h2>
          <p className="mt-2 text-sm text-slate-500">Our care team is happy to help you personally.</p>
          <Button className="mt-5" onClick={() => openModal()}>Book a consultation</Button>
        </div>
      </section>
    </>);

}