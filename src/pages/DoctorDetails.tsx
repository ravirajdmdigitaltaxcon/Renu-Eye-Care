





import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AwardIcon, GraduationCapIcon, StethoscopeIcon, LanguagesIcon, ClockIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { SectionTitle } from '../components/ui/SectionTitle';
import { DOCTORS } from '../data/site';
import { img } from '../data/images';

const SCHEDULE = [
{ day: 'Mon – Wed', time: '10:00 AM – 4:00 PM' },
{ day: 'Thu – Fri', time: '2:00 PM – 8:00 PM' },
{ day: 'Saturday', time: '10:00 AM – 2:00 PM' }];


export function DoctorDetails() {
  const { slug } = useParams();
  const doctor = DOCTORS.find((d) => d.slug === slug);
  if (!doctor) return <Navigate to="/doctors" replace />;

  return (
    <>
      <PageHero title={doctor.name} subtitle={doctor.role} crumb={doctor.name} />

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <img src={img(doctor.image)} alt={doctor.name} loading="lazy" decoding="async" className="w-full rounded-img object-cover shadow-glass" />
            <div className="mt-5 rounded-card bg-brand-section p-5">
              <h3 className="font-display font-bold text-brand-dark">Schedule</h3>
              <ul className="mt-3 space-y-2">
                {SCHEDULE.map((s) =>
                <li key={s.day} className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-brand-primary" /> {s.day}</span>
                    <span className="font-medium">{s.time}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Biography</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{doctor.bio}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoCard icon={GraduationCapIcon} label="Qualification" value={doctor.qualification} />
              <InfoCard icon={StethoscopeIcon} label="Experience" value={doctor.experience} />
              <InfoCard icon={LanguagesIcon} label="Languages" value={doctor.languages.join(', ')} />
              <InfoCard icon={AwardIcon} label="Role" value={doctor.role} />
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-dark">Awards & Recognition</h3>
                <ul className="mt-3 space-y-2">
                  {doctor.awards.map((a) =>
                  <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <AwardIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> {a}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-dark">Treatments</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.treatments.map((t) =>
                  <span key={t} className="rounded-full bg-brand-section px-3 py-1.5 text-xs font-semibold text-brand-primary">
                      {t}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-card bg-white p-6 shadow-glass sm:p-10">
          <SectionTitle align="left" eyebrow="Appointment" title={`Book with ${doctor.name}`} />
          <div className="mt-6">
            <AppointmentForm presetDoctor={doctor.name} />
          </div>
        </div>
      </section>
    </>);

}

function InfoCard({ icon: Icon, label, value }: {icon: any;label: string;value: string;}) {
  return (
    <div className="flex items-start gap-3 rounded-card border border-slate-100 bg-white p-4 shadow-glass">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-brand-section text-brand-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
        <p className="text-sm font-medium text-brand-dark">{value}</p>
      </div>
    </div>);

}