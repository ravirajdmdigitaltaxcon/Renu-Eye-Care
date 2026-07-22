




import React from 'react';
import { QuoteIcon, StarIcon, PlayIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TESTIMONIALS } from '../data/site';
import { img } from '../data/images';

const ALL = [...TESTIMONIALS, ...TESTIMONIALS.map((t) => ({ ...t, name: t.name + ' ' }))];

export function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials"
        subtitle="Thousands of patients have trusted us with their sight. Here are a few of their stories."
        crumb="Testimonials" />
      

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALL.map((t, i) =>
          <Reveal key={i} delay={i % 3 * 0.06}>
              <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-glass">
                <QuoteIcon className="h-8 w-8 text-brand-secondary" />
                <p className="mt-4 flex-1 leading-relaxed text-slate-600">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, s) =>
                <StarIcon key={s} className="h-4 w-4 fill-amber-400" />
                )}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <img src={img(t.image)} alt={t.name} loading="lazy" decoding="async" className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="font-display font-bold text-brand-dark">{t.name}</p>
                    <p className="text-sm text-brand-primary">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-brand-section/50 py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle eyebrow="Video Reviews" title="Hear it in their words" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) =>
            <div key={t.name} className="group overflow-hidden rounded-card bg-brand-dark">
                <div className="relative grid aspect-video place-items-center">
                  <img src={img(t.image)} alt={t.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-50" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-primary transition-transform group-hover:scale-110">
                    <PlayIcon className="h-6 w-6 fill-brand-primary" />
                  </span>
                </div>
                <p className="p-4 text-sm font-semibold text-white">{t.name} — {t.role}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>);

}