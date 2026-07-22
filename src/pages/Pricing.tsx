





import React from 'react';
import { CheckIcon, StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/ui/FAQ';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useAppointment } from '../context/AppointmentContext';
import { PRICING, FAQS } from '../data/site';

export function Pricing() {
  const { openModal } = useAppointment();
  return (
    <>
      <PageHero
        title="Transparent Pricing"
        subtitle="Clear, upfront pricing with cashless insurance support — no surprises, ever."
        crumb="Pricing" />
      

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((plan, i) =>
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative flex flex-col rounded-card p-8 ${
            plan.highlight ?
            'bg-brand-primary text-white shadow-float' :
            'border border-slate-100 bg-white text-brand-dark shadow-glass'}`
            }>
            
              {plan.highlight &&
            <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-secondary px-4 py-1 text-xs font-semibold text-white">
                  <StarIcon className="h-3 w-3 fill-white" /> Most Popular
                </span>
            }
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`mb-1 text-sm ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>{plan.per}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) =>
              <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`grid h-5 w-5 place-items-center rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-brand-section'}`}>
                      <CheckIcon className={`h-3 w-3 ${plan.highlight ? 'text-white' : 'text-brand-primary'}`} />
                    </span>
                    {f}
                  </li>
              )}
              </ul>
              <Button
              magnetic={false}
              className={`mt-8 w-full ${plan.highlight ? 'bg-white text-brand-primary hover:bg-brand-section' : ''}`}
              variant={plan.highlight ? 'primary' : 'outline'}
              onClick={() => openModal({ department: plan.name })}>
              
                Book Appointment
              </Button>
            </motion.div>
          )}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          Prices are indicative and may vary based on clinical assessment. Cashless insurance available.
        </p>
      </section>

      <section className="bg-brand-section/50 py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle eyebrow="FAQ" title="Pricing & insurance questions" />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>
    </>);

}