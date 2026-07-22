import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, GraduationCapIcon } from 'lucide-react';
import type { Doctor } from '../../data/site';
import { img } from '../../data/images';
import { useAppointment } from '../../context/AppointmentContext';

// Fixed: added loading="lazy" + decoding="async" + dimensions on image.
// memo: prevents re-render when parent appointment context changes.
export const DoctorCard = memo(function DoctorCard({
  doctor,
  index = 0,
}: {
  doctor: Doctor;
  index?: number;
}) {
  const { openModal } = useAppointment();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group overflow-hidden rounded-card bg-white shadow-glass"
    >
      <div className="relative overflow-hidden">
        <Link to={`/doctors/${doctor.slug}`}>
          <img
            src={img(doctor.image)}
            alt={doctor.name}
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-primary">
          {doctor.experience}
        </span>
        <button
          onClick={() => openModal({ doctor: doctor.name })}
          className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-center gap-2 rounded-btn bg-white py-2.5 text-sm font-btn font-semibold text-brand-primary opacity-0 shadow-float transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <CalendarIcon className="h-4 w-4" /> Book Appointment
        </button>
      </div>
      <div className="p-5">
        <Link to={`/doctors/${doctor.slug}`}>
          <h3 className="font-display text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-primary">
            {doctor.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-brand-primary">{doctor.role}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
          <GraduationCapIcon className="h-3.5 w-3.5" /> {doctor.qualification}
        </p>
        <p className="mt-1 text-xs text-slate-400">Speaks: {doctor.languages.join(', ')}</p>
        <Link
          to={`/doctors/${doctor.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary"
        >
          View profile <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
});
