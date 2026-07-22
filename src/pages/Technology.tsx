



import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ButtonLink } from '../components/ui/Button';
import { ArrowRightIcon } from 'lucide-react';
import { TECHNOLOGIES } from '../data/site';
import { IMAGES } from '../data/images';

export function Technology() {
  return (
    <>
      <PageHero
        title="Our Technology"
        subtitle="Precision instruments and intelligent diagnostics that make safer, sharper outcomes possible."
        crumb="Technology" />
      
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.name} delay={i % 3 * 0.06}>
                <div className="group h-full overflow-hidden rounded-card border border-slate-100 bg-white p-6 shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-14 w-14 place-items-center rounded-btn bg-brand-primary text-white shadow-float transition-colors group-hover:bg-brand-secondary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{tech.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{tech.desc}</p>
                </div>
              </Reveal>);

          })}
        </div>

        <div className="mt-16 grid items-center gap-10 rounded-img bg-brand-section p-6 sm:p-10 lg:grid-cols-2">
          <img src={IMAGES.IMG_SERVICE} alt="Surgical technology" loading="lazy" decoding="async" className="w-full rounded-img object-cover shadow-glass" />
          <div>
            <SectionTitle align="left" eyebrow="Innovation" title="AI-assisted diagnosis, human-led care" subtitle="Our deep-learning screening tools flag risks early, while every decision stays firmly in the hands of your specialist." />
            <ButtonLink to="/services" className="mt-6">Explore services <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
          </div>
        </div>
      </section>
    </>);

}