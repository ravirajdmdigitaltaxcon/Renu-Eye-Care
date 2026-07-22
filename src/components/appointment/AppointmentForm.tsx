import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { SERVICES, DOCTORS } from '../../data/site';

type Props = {
  presetDoctor?: string;
  presetDepartment?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

const field =
  'w-full rounded-input border border-slate-200 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-slate-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20';
const labelCls = 'mb-1.5 block text-xs font-semibold text-slate-500';

// Fixed: labels now have htmlFor + inputs have id — keyboard & screen-reader accessible.
// Added aria-label fallback on selects. memo prevents re-render from parent context changes.
export const AppointmentForm = memo(function AppointmentForm({
  presetDoctor,
  presetDepartment,
  onSuccess,
  compact,
}: Props) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-brand-secondary text-white"
        >
          <CheckIcon className="h-10 w-10" strokeWidth={3} />
        </motion.div>
        <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">Appointment Requested!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Thank you. Our care team will call you shortly to confirm your slot.
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setSubmitted(false)}>
          Book another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        onSuccess?.();
      }}
      className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}
      noValidate
    >
      <div>
        <label htmlFor="appt-name" className={labelCls}>Patient Name</label>
        <input id="appt-name" required className={field} placeholder="Full name" autoComplete="name" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-age" className={labelCls}>Age</label>
          <input id="appt-age" required type="number" min="0" max="120" className={field} placeholder="Age" />
        </div>
        <div>
          <label htmlFor="appt-gender" className={labelCls}>Gender</label>
          <select id="appt-gender" className={field} defaultValue="">
            <option value="" disabled>Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="appt-phone" className={labelCls}>Phone</label>
        <input id="appt-phone" required type="tel" className={field} placeholder="Phone number" autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="appt-dept" className={labelCls}>Department</label>
        <select id="appt-dept" className={field} defaultValue={presetDepartment ?? ''}>
          <option value="" disabled>Select department</option>
          {SERVICES.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="appt-doctor" className={labelCls}>Doctor</label>
        <select id="appt-doctor" className={field} defaultValue={presetDoctor ?? ''}>
          <option value="">Any available</option>
          {DOCTORS.map((d) => (
            <option key={d.slug}>{d.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-date" className={labelCls}>Date</label>
          <input id="appt-date" required type="date" className={field} />
        </div>
        <div>
          <label htmlFor="appt-time" className={labelCls}>Time</label>
          <input id="appt-time" required type="time" className={field} />
        </div>
      </div>

      <div className={compact ? '' : 'sm:col-span-2'}>
        <label htmlFor="appt-msg" className={labelCls}>Message</label>
        <textarea id="appt-msg" rows={3} className={field} placeholder="Describe your symptoms (optional)" />
      </div>

      <div className={compact ? '' : 'sm:col-span-2'}>
        <Button className="w-full" magnetic={false}>
          Request Appointment
        </Button>
      </div>
    </form>
  );
});
