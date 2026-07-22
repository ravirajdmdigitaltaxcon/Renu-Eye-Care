


import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, CheckCircle2Icon, TargetIcon, HeartHandshakeIcon, ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Counter } from '../components/ui/Counter';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { STATS } from '../data/site';
import { IMAGES } from '../data/images';

const TIMELINE = [
{ year: '2001', title: 'The beginning', text: 'Dr. Renu Mehta opens a single-room clinic with a bold vision.' },
{ year: '2008', title: 'First surgical suite', text: 'State-of-the-art phaco surgery arrives, expanding cataract care.' },
{ year: '2015', title: 'LASIK & retina wings', text: 'Blade-free refractive and vitreo-retinal services launch.' },
{ year: '2020', title: 'NABH accreditation', text: 'Recognised nationally for quality and patient safety.' },
{ year: '2026', title: 'AI-assisted diagnostics', text: 'Deep-learning screening now supports our specialists.' }];


const CERTS = ['NABH Accredited', 'ISO 9001:2015', 'Green OT Certified', 'Insurance Empanelled'];

export function About() {
  return (
    <>
      <PageHero
        title="Two decades of protecting your sight"
        subtitle="The story, the people and the values behind Renu Eye Care Centre."
        crumb="About" />
      

      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal scale>
            <img src={IMAGES.IMG_ABOUT} alt="Our hospital" loading="lazy" decoding="async" className="w-full rounded-img object-cover shadow-glass" />
          </Reveal>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Our Story"
              title="Founded on care, driven by excellence"
              subtitle="What began as a single consulting room is today one of the region's most trusted eye hospitals — but our promise has never changed: treat every patient like family." />
            
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-card bg-brand-section p-5">
                <TargetIcon className="h-6 w-6 text-brand-primary" />
                <h4 className="mt-3 font-display font-bold text-brand-dark">Mission</h4>
                <p className="mt-1 text-sm text-slate-500">Accessible, anxiety-free, world-class eye care for all.</p>
              </div>
              <div className="rounded-card bg-brand-section p-5">
                <HeartHandshakeIcon className="h-6 w-6 text-brand-primary" />
                <h4 className="mt-3 font-display font-bold text-brand-dark">Vision</h4>
                <p className="mt-1 text-sm text-slate-500">A world free of preventable and treatable blindness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary py-16">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
          {STATS.map((s) =>
          <div key={s.label} className="text-center text-white">
              <p className="text-4xl font-bold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/80">{s.label}</p>
            </div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Our Journey" title="Milestones over the years" />
        <div className="relative mx-auto mt-12 max-w-2xl pl-8">
          <span className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-brand-section" />
          {TIMELINE.map((t, i) =>
          <Reveal key={t.year} delay={i * 0.05}>
              <div className="relative mb-8">
                <span className="absolute -left-[1.65rem] top-2 h-3.5 w-3.5 rounded-full bg-brand-primary ring-4 ring-brand-section" />
                <div className="rounded-card bg-white p-5 shadow-glass">
                  <span className="text-sm font-bold text-brand-primary">{t.year}</span>
                  <h4 className="mt-1 font-display font-bold text-brand-dark">{t.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{t.text}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-brand-section/50 py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle eyebrow="Recognition" title="Certified for quality & safety" />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {CERTS.map((c, i) =>
            <Reveal key={c} delay={i * 0.06}>
                <div className="flex flex-col items-center rounded-card bg-white p-6 text-center shadow-glass">
                  <AwardIcon className="h-8 w-8 text-brand-primary" />
                  <p className="mt-3 text-sm font-semibold text-brand-dark">{c}</p>
                </div>
              </Reveal>
            )}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/doctors">Meet our doctors <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
          </div>
        </div>
      </section>
    </>);

}