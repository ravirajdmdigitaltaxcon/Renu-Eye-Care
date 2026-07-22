




import React from 'react';
import { PageHero } from '../components/layout/PageHero';

const SECTIONS = [
{
  h: 'Information We Collect',
  p: 'We collect personal and medical information you provide when booking appointments, including your name, contact details, age and symptoms, solely to deliver and improve your care.'
},
{
  h: 'How We Use Your Information',
  p: 'Your data is used to schedule appointments, maintain medical records, process insurance and communicate about your treatment. We never sell your information.'
},
{
  h: 'Data Security',
  p: 'We apply strict administrative, technical and physical safeguards to protect your health information, in line with applicable privacy regulations.'
},
{
  h: 'Your Rights',
  p: 'You may request access to, correction of, or deletion of your personal data at any time by contacting our care team.'
},
{
  h: 'Cookies',
  p: 'This website uses minimal cookies to improve your browsing experience and understand site usage. You can disable cookies in your browser settings.'
}];


export function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How we protect and handle your personal and medical information." crumb="Privacy" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-slate-400">Last updated: July 2026</p>
        <div className="mt-8 space-y-8">
          {SECTIONS.map((s) =>
          <div key={s.h}>
              <h2 className="font-display text-xl font-bold text-brand-dark">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{s.p}</p>
            </div>
          )}
        </div>
      </section>
    </>);

}